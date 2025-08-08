import fs from 'fs';
import path from 'path';

const root = '/Users/michaelpotteiger/software development learnign app/learning-app-v2';
const dataPath = path.join(root, 'data/learning-content.json');
const wrapperPath = path.join(root, 'src/components/article-content-wrapper.tsx');

const json = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
const categoriesToCheck = new Set(['programming-fundamentals', 'software-architecture-design']);

// Extract article IDs from JSON for the two categories
const articleIds = [];
for (const cat of json.categories) {
  if (!categoriesToCheck.has(cat.id)) continue;
  for (const topic of cat.topics) {
    for (const a of topic.articles) {
      articleIds.push(a.id);
    }
  }
}

// Extract registry keys from TS file via a simple regex parse
const wrapper = fs.readFileSync(wrapperPath, 'utf8');
const mapMatch = wrapper.match(/const\s+articleRenderers[\s\S]*?=\s*\{([\s\S]*?)\};/);
if (!mapMatch) {
  console.error('ERROR: Could not locate articleRenderers map');
  process.exit(1);
}
const mapBody = mapMatch[1];
const registryKeys = Array.from(mapBody.matchAll(/"([^\"]+)"\s*:/g)).map(m => m[1]);

// Coverage checks
const missing = articleIds.filter(id => !registryKeys.includes(id));
const extra = registryKeys.filter(k => !articleIds.includes(k));

// Basic quiz checks (points and structure)
function validateQuiz(a) {
  if (!a.quiz) return { ok: true };
  const q = a.quiz;
  const totalPoints = (q.questions || []).reduce((s, qq) => s + (qq.points || 0), 0);
  const expected = q.totalPoints || 25;
  const okPoints = totalPoints === expected;
  return { ok: okPoints, totalPoints, expected, title: q.title };
}

// Heuristic quote escaping check for text likely rendered in JSX
function hasUnescapedQuotes(str) {
  if (typeof str !== 'string') return false;
  // allow &ldquo; &rdquo; &rsquo; but flag raw ' and "
  return /(^|[^&])"|(^|[^&])'/.test(str);
}

const unescaped = [];
for (const cat of json.categories) {
  if (!categoriesToCheck.has(cat.id)) continue;
  for (const topic of cat.topics) {
    for (const a of topic.articles) {
      if (hasUnescapedQuotes(a.description)) unescaped.push({ id: a.id, field: 'description' });
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
        console.warn(`Quiz points mismatch for ${a.id}: got ${quizCheck.totalPoints}, expected ${quizCheck.expected} (${quizCheck.title})`);
      }
    }
  }
}

if (missing.length) console.error('Missing renderer mappings:', missing);
if (extra.length) console.error('Registry keys not in data:', extra);
if (unescaped.length) console.error('Unescaped quotes detected (escape with &ldquo; &rdquo; &rsquo;):', unescaped);

if (missing.length || extra.length || unescaped.length) process.exit(1);
console.log('Renderer coverage OK and basic content checks passed for targeted categories.');


