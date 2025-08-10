#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { spawnSync } from "child_process";

const root =
  "/Users/michaelpotteiger/software development learnign app/learning-app-v2";
const dataPath = path.join(root, "data/learning-content.json");
const articlesDir = path.join(root, "src/components/articles");

function parseArgs() {
  const args = process.argv.slice(2);
  const params = {};
  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--topic") params.topicId = args[++i];
    else if (a === "--id") params.articleId = args[++i];
    else if (a === "--name") params.name = args[++i];
    else if (a === "--no-inline-quiz") params.noInlineQuiz = true;
  }
  if (!params.topicId || !params.articleId || !params.name) {
    console.error(
      'Usage: npm run scaffold:article -- --topic <topicId> --id <articleId> --name "Title" [--no-inline-quiz]'
    );
    process.exit(1);
  }
  return params;
}

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function writeJson(p, obj) {
  fs.writeFileSync(p, JSON.stringify(obj, null, 2) + "\n");
}

function ensureDir(p) {
  if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function upsertArticle({ topicId, articleId, name, inlineQuiz }) {
  const json = readJson(dataPath);
  let foundTopic = null;
  for (const cat of json.categories) {
    for (const topic of cat.topics) {
      if (topic.id === topicId) {
        foundTopic = topic;
        break;
      }
    }
    if (foundTopic) break;
  }
  if (!foundTopic) {
    console.error(`Topic not found: ${topicId}`);
    process.exit(1);
  }

  const existing = foundTopic.articles.find((a) => a.id === articleId);
  if (existing) {
    console.log(`Article already exists in topic: ${articleId}`);
  } else {
    const base = {
      id: articleId,
      name,
      learningStatus: "Not started",
      priorityStatus: "Low",
      description: `${name} overview and key concepts`,
      topics: ["Key Concepts", "Business Impact", "Implementation"],
    };
    if (inlineQuiz) base.quiz = inlineQuiz;
    foundTopic.articles.push(base);
    writeJson(dataPath, json);
    console.log(`Added article metadata to ${dataPath}`);
  }
}

function createArticleFile({ articleId, name }) {
  ensureDir(articlesDir);
  const target = path.join(articlesDir, `${articleId}.tsx`);
  if (fs.existsSync(target)) {
    console.log(`Article component already exists: ${target}`);
    return;
  }
  const content = `import React from "react";

export default function ${toComponentName(articleId)}() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Core ideas</h3>
            <p className="text-slate-700 dark:text-gray-300">${name} fundamentals.</p>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
      </section>
    </article>
  );
}
`;
  fs.writeFileSync(target, content);
  console.log(`Created article component: ${target}`);
}

function toComponentName(id) {
  return id
    .replace(/(^|[-_])(\w)/g, (_, __, c) => c.toUpperCase())
    .replace(/[^A-Za-z0-9]/g, "");
}

function makeInlineQuiz(articleId, name) {
  const questions = [];
  const mcCorrect = [0, 1, 2, 3, 1, 2, 3, 0];
  for (let i = 1; i <= 8; i++) {
    questions.push({
      id: i,
      type: "multiple-choice",
      points: 2,
      question: `${name}: multiple-choice question ${i}`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: mcCorrect[i - 1],
    });
  }
  questions.push(
    {
      id: 9,
      type: "freeform",
      points: 4,
      question: `${name}: freeform question 1`,
      sampleStrongResponse: "Sample strong response.",
    },
    {
      id: 10,
      type: "freeform",
      points: 4,
      question: `${name}: freeform question 2`,
      sampleStrongResponse: "Sample strong response.",
    }
  );
  return {
    title: `${name} Knowledge Quiz`,
    totalQuestions: 10,
    totalPoints: 24,
    questions,
  };
}

function regenerateRegistry() {
  const res = spawnSync(
    "node",
    [path.join(root, "scripts/generate-article-registry.mjs")],
    { stdio: "inherit" }
  );
  if (res.status !== 0) {
    console.warn("Warning: failed to regenerate article registry");
  }
}

function main() {
  const { topicId, articleId, name, noInlineQuiz } = parseArgs();
  const inlineQuiz = noInlineQuiz ? undefined : makeInlineQuiz(articleId, name);
  upsertArticle({ topicId, articleId, name, inlineQuiz });
  createArticleFile({ articleId, name });
  regenerateRegistry();
  console.log(
    "Scaffold complete. Next steps:\n- Open the new article component and fill in content.\n- Adjust quiz text and ensure quotes are escaped.\n- Run npm run validate:content and npm run build."
  );
}

main();
