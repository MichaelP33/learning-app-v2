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

// Mark this article as using the standardized v2 template
export const articleFormatVersion = 2;

export default function ${toComponentName(articleId)}() {
  return (
    <article className="space-y-10">
      {/* 1) Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition (1–2 lines)</h3>
            <p className="text-slate-700 dark:text-gray-300">${name} in plain language: what it is and the simple promise it makes.</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>End-user effect 1 (speed, correctness, uptime).</li>
              <li>End-user effect 2 with concrete surface.</li>
              <li>End-user effect 3 tied to a workflow.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">Metaphor that makes the idea click. For example: &ldquo;your concise metaphor here&rdquo; (reuse consistently).</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade-offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Strength 1.</li>
                  <li>Strength 2.</li>
                  <li>Strength 3.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Limit 1.</li>
                  <li>Limit 2.</li>
                  <li>Limit 3.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Misunderstanding → brief correction.</li>
              <li>Misunderstanding → brief correction.</li>
              <li>Misunderstanding → brief correction.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Big rock term 1</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 2</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 3</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 4</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 5</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 6</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 7</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
              <li><strong>Big rock term 8</strong> — 1-line meaning. <em>Why it matters:</em> tie to business outcome.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2) Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Concrete product/ops moment 1.</li>
              <li>Concrete product/ops moment 2.</li>
              <li>Concrete product/ops moment 3.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Recognizable practice 1.</li>
              <li>Recognizable practice 2.</li>
              <li>Recognizable practice 3.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Customer quote&rdquo; &rarr; Likely cause &rarr; What to check.</li>
              <li>&ldquo;Customer quote&rdquo; &rarr; Likely cause &rarr; What to check.</li>
              <li>&ldquo;Customer quote&rdquo; &rarr; Likely cause &rarr; What to check.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: brief lens note.</li>
              <li><strong>Non-Tech Enterprise</strong>: brief lens note.</li>
              <li><strong>Startups</strong>: brief lens note.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3) Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <p className="text-slate-700 dark:text-gray-300">What you tell AI (plain-English prompts tied to this topic) and why that matters for users/business.</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prompt 1 and expected insight.</li>
              <li>Prompt 2 and expected insight.</li>
              <li>Prompt 3 and expected insight.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <p className="text-slate-700 dark:text-gray-300">What a good output looks like and the business benefit.</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Checklist item → business payoff.</li>
              <li>Checklist item → business payoff.</li>
              <li>Checklist item → business payoff.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Spike response steps.</li>
              <li>Incident rollback or pause steps.</li>
              <li>Heavy read/dashboards response steps.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Short, confident one-liner you can say in a meeting about ${name}.&rdquo;</p>
          </div>
        </div>
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
