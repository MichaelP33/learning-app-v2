import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve repo root relative to this script's location
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const dataPath = path.join(root, "data/learning-content.json");
const registryPath = path.join(root, "src/components/articles/registry.ts");
const wrapperPath = path.join(
  root,
  "src/components/article-content-wrapper.tsx"
);
const articlesDir = path.join(root, "src/components/articles");

const json = JSON.parse(fs.readFileSync(dataPath, "utf8"));
// If ALL_CATEGORIES env var is set, validate all categories. Otherwise, focus on two legacy categories.
const validateAll = process.env.ALL_CATEGORIES === "1";
const categoriesToCheck = validateAll
  ? new Set(json.categories.map((c) => c.id))
  : new Set(["programming-fundamentals", "software-architecture-design"]);

// Extract article IDs from JSON for the selected categories
const articleIds = [];
for (const cat of json.categories) {
  if (!categoriesToCheck.has(cat.id)) continue;
  for (const topic of cat.topics) {
    for (const a of topic.articles) {
      articleIds.push(a.id);
    }
  }
}

// Extract authored component ids from filesystem (excluding registry.ts)
const fileIds = fs
  .readdirSync(articlesDir)
  .filter((f) => f.endsWith(".tsx") && f !== "registry.ts")
  .map((f) => path.basename(f, ".tsx"));

// Extract registry keys from the dynamic registry file
const registryContent = fs.readFileSync(registryPath, "utf8");
const dynamicKeys = Array.from(
  registryContent.matchAll(/"([^"]+)"\s*:\s*\(\)\s*=>\s*import\(/g)
).map((m) => m[1]);

// Extract legacy keys from the wrapper's articleRenderers map
const wrapperContent = fs.readFileSync(wrapperPath, "utf8");
const mapMatch = wrapperContent.match(
  /const\s+articleRenderers[\s\S]*?=\s*\{([\s\S]*?)\};/
);
const legacyKeys = mapMatch
  ? Array.from(mapMatch[1].matchAll(/(?:"([^"]+)"|([A-Za-z0-9_-]+))\s*:/g))
      .map((m) => m[1] || m[2])
      .filter(Boolean)
  : [];

const registryKeys = Array.from(new Set([...dynamicKeys, ...legacyKeys]));

// Coverage checks (authored components must be in JSON and in registry)
const authoredMissingInJson = fileIds.filter((id) => !articleIds.includes(id));
const authoredMissingInRegistry = fileIds.filter(
  (id) => !registryKeys.includes(id)
);

// Basic quiz checks (points and structure)
function validateQuiz(a) {
  if (!a.quiz) return { ok: true };
  const q = a.quiz;
  const questions = Array.isArray(q.questions) ? q.questions : [];
  const totalPoints = questions.reduce((s, qq) => s + (qq.points || 0), 0);
  const expectedPoints = q.totalPoints ?? totalPoints;
  const okPoints = totalPoints === expectedPoints;

  // Structure: 10 questions with 8 MC + 2 freeform (short/long/freeform allowed for the 2)
  const totalQuestions = q.totalQuestions ?? questions.length;
  const mc = questions.filter((qq) => qq.type === "multiple-choice");
  const text = questions.filter((qq) => qq.type !== "multiple-choice");
  const okCounts =
    totalQuestions === questions.length && mc.length === 8 && text.length === 2;

  // Correct answer distribution: avoid all answers being the same index
  const mcAnswers = mc
    .map((qq) => qq.correctAnswer)
    .filter((v) => typeof v === "number");
  const distinctPositions = new Set(mcAnswers);
  const okDistribution = distinctPositions.size >= 2; // at least 2 distinct positions used

  return {
    ok: okPoints && okCounts && okDistribution,
    details: {
      totalPoints,
      expectedPoints,
      totalQuestions,
      mcCount: mc.length,
      textCount: text.length,
      distinctPositions: [...distinctPositions],
    },
    title: q.title,
    okPoints,
    okCounts,
    okDistribution,
  };
}

// Heuristic quote escaping check for text likely rendered in JSX
function hasUnescapedQuotes(str) {
  if (typeof str !== "string") return false;
  // allow &ldquo; &rdquo; &rsquo; but flag raw ' and "
  return /(^|[^&])"|(^|[^&])'/.test(str);
}

const unescaped = [];
const quizErrors = [];
for (const cat of json.categories) {
  if (!categoriesToCheck.has(cat.id)) continue;
  for (const topic of cat.topics) {
    for (const a of topic.articles) {
      if (hasUnescapedQuotes(a.description))
        unescaped.push({ id: a.id, field: "description" });
      if (a.quiz) {
        for (const qq of a.quiz.questions) {
          if (hasUnescapedQuotes(qq.question))
            unescaped.push({ id: a.id, field: `q${qq.id}.question` });
          if (qq.options) {
            qq.options.forEach((opt, i) => {
              if (hasUnescapedQuotes(opt))
                unescaped.push({ id: a.id, field: `q${qq.id}.options[${i}]` });
            });
          }
        }
      }
      const quizCheck = validateQuiz(a);
      if (!quizCheck.ok) {
        quizErrors.push({
          id: a.id,
          title: quizCheck.title,
          details: quizCheck.details,
          okPoints: quizCheck.okPoints,
          okCounts: quizCheck.okCounts,
          okDistribution: quizCheck.okDistribution,
        });
      }
    }
  }
}

if (authoredMissingInJson.length)
  console.error(
    "Authored article files missing JSON entries:",
    authoredMissingInJson
  );
if (authoredMissingInRegistry.length)
  console.error(
    "Authored article files missing registry mappings:",
    authoredMissingInRegistry
  );
if (unescaped.length)
  console.warn(
    "Unescaped quotes detected (escape with &ldquo; &rdquo; &rsquo;):",
    unescaped
  );
if (quizErrors.length)
  console.warn("Quiz structural issues detected:", quizErrors);

// v2 template validation for files that opt in via exported articleFormatVersion = 2
function validateV2Template(filePath) {
  const src = fs.readFileSync(filePath, "utf8");
  const optedIn = /export\s+const\s+articleFormatVersion\s*=\s*2\s*;/.test(src);
  if (!optedIn) return { ok: true };

  const requiredSections = [
    { id: "key-concepts", title: "Key Concepts" },
    { id: "business-team-impact", title: "Business & Team Impact" },
    { id: "cursor-implementation", title: "Cursor Implementation" },
  ];

  const errors = [];
  // Flatten whitespace for resilient matching across newlines/indentation
  const srcFlat = src.replace(/\s+/g, " ");
  for (const { id, title } of requiredSections) {
    const hasId = new RegExp(`<section\\s+id=\\"${id}\\"`).test(srcFlat);
    const titlePattern = title.replace(/&/g, "(?:&|&amp;)");
    const hasH2 = new RegExp(
      `<h2[^>]*>\\s*${titlePattern}\\s*<\\/h2>`,
      "i"
    ).test(srcFlat);
    if (!hasId || !hasH2) {
      errors.push(`Missing section ${id} with h2 title \"${title}\"`);
    }
  }

  // Basic glossary presence check: look for "Related Glossary" header when opted in
  const hasGlossaryHeader =
    /Related Glossary \(terms \&amp; tech\)/.test(srcFlat) ||
    /Related Glossary \(terms &amp; tech\)/.test(srcFlat);
  if (!hasGlossaryHeader) {
    errors.push(
      "Key Concepts should include a 'Related Glossary (terms &amp; tech)' subsection"
    );
  }

  // Glossary size: 6–8 items and each with 'Why it matters:'
  const glossaryBlockMatch = srcFlat.match(
    /Related Glossary \(terms (?:&|&amp;) tech\)\)<[^>]*>\s*<ul[\s\S]*?<\/ul>/i
  );
  if (glossaryBlockMatch) {
    const items = (glossaryBlockMatch[0].match(/<li>/g) || []).length;
    if (items < 6 || items > 8) {
      errors.push(`Glossary should include 6–8 items, found ${items}`);
    }
    const whyCount = (glossaryBlockMatch[0].match(/Why it matters:/gi) || [])
      .length;
    if (whyCount < Math.min(items, 6)) {
      errors.push("Each glossary item should include 'Why it matters:'");
    }
  }

  // Talk track presence check
  const hasTalkTrack = /Talk track \(20 sec\)/.test(srcFlat);
  if (!hasTalkTrack) {
    errors.push(
      "Cursor Implementation should include a 'Talk track (20 sec)' subsection"
    );
  }

  // Customer words mapping: require at least 2 lines with "→ or &rarr;"
  const hasCustomerMapping =
    /Failure signals \(customer words\)[\s\S]*?(?:&rdquo;|&ldquo;)\s*[^<]*?(?:→|&rarr;)\s*[^<]*?(?:→|&rarr;)/i.test(
      srcFlat
    );
  if (!hasCustomerMapping) {
    errors.push(
      "Failure signals should map Quote → Likely cause → What to check (at least 2 items)"
    );
  }

  return { ok: errors.length === 0, errors };
}

const v2Errors = [];
for (const id of fileIds) {
  const filePath = path.join(articlesDir, `${id}.tsx`);
  const check = validateV2Template(filePath);
  if (!check.ok) {
    v2Errors.push({ id, errors: check.errors });
  }
}

if (v2Errors.length) {
  console.error("V2 template validation errors:", v2Errors);
}

if (authoredMissingInJson.length || authoredMissingInRegistry.length)
  process.exit(1);
console.log(
  `Renderer coverage OK for authored components. Content checks completed for categories: ${[
    ...categoriesToCheck,
  ].join(", ")}`
);
