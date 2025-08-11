import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Resolve repo root relative to this script's location
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const dataPath = path.join(root, "data/learning-content.json");
const wrapperPath = path.join(root, "src/components/article-content-wrapper.tsx");
const dynamicRegistryPath = path.join(root, "src/components/articles/registry.ts");

const json = JSON.parse(fs.readFileSync(dataPath, "utf8"));
// If ALL_CATEGORIES env var is set, validate all categories. Otherwise, focus on two legacy categories.
const validateAll = process.env.ALL_CATEGORIES === "1";
const categoriesToCheck = validateAll
  ? new Set(json.categories.map((c) => c.id))
  : new Set(["programming-fundamentals", "software-architecture-design"]);

// Extract article IDs from JSON for selected categories
const articleIds = [];
for (const cat of json.categories) {
  if (!categoriesToCheck.has(cat.id)) continue;
  for (const topic of cat.topics) {
    for (const a of topic.articles) {
      articleIds.push(a.id);
    }
  }
}

// Extract registry keys from legacy wrapper map (if present)
let wrapperKeys = [];
try {
  const wrapper = fs.readFileSync(wrapperPath, "utf8");
  const mapMatch = wrapper.match(/const\s+articleRenderers[\s\S]*?=\s*\{([\s\S]*?)\};/);
  if (mapMatch) {
    const mapBody = mapMatch[1];
    wrapperKeys = Array.from(mapBody.matchAll(/(?:"([^\"]+)"|([A-Za-z0-9_-]+))\s*:/g))
      .map((m) => m[1] || m[2])
      .filter(Boolean);
  }
} catch (_) {}

// Extract registry keys from dynamic registry file
let dynamicKeys = [];
try {
  const dyn = fs.readFileSync(dynamicRegistryPath, "utf8");
  dynamicKeys = Array.from(dyn.matchAll(/"([^\"]+)"\s*:\s*\(\)\s*=>\s*import\(/g))
    .map((m) => m[1])
    .filter(Boolean);
} catch (_) {}

const combinedKeys = new Set([...(wrapperKeys || []), ...(dynamicKeys || [])]);

// Coverage checks (prefer dynamic registry as source of truth; legacy map is fallback)
const jsonNotCoveredByCombined = articleIds.filter((id) => !combinedKeys.has(id));
const extraRegistryKeysNotInJson = [...combinedKeys].filter((k) => !articleIds.includes(k));

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
  const okCounts = totalQuestions === questions.length && mc.length === 8 && text.length === 2;

  // Correct answer distribution: avoid all answers being the same index
  const mcAnswers = mc.map((qq) => qq.correctAnswer).filter((v) => typeof v === "number");
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
      if (hasUnescapedQuotes(a.description)) unescaped.push({ id: a.id, field: "description" });
      if (a.quiz) {
        for (const qq of a.quiz.questions) {
          if (hasUnescapedQuotes(qq.question)) unescaped.push({ id: a.id, field: `q${qq.id}.question` });
          if (qq.options) {
            qq.options.forEach((opt, i) => {
              if (hasUnescapedQuotes(opt)) unescaped.push({ id: a.id, field: `q${qq.id}.options[${i}]` });
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

if (extraRegistryKeysNotInJson.length) console.error("Registry keys not in data:", extraRegistryKeysNotInJson);
if (jsonNotCoveredByCombined.length)
  console.warn(
    "Articles present in data without a custom renderer (using default is OK):",
    jsonNotCoveredByCombined
  );
if (unescaped.length)
  console.warn(
    "Unescaped quotes detected (escape with &ldquo; &rdquo; &rsquo;):",
    unescaped
  );
if (quizErrors.length) console.warn("Quiz structural issues detected:", quizErrors);

if (extraRegistryKeysNotInJson.length) process.exit(1);
console.log(
  `Renderer coverage OK. Content checks completed for categories: ${[...categoriesToCheck].join(", ")}`
);
