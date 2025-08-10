# Learning App V2

## Getting Started

Development server (port 3001):

```bash
npm run dev -- --port 3001
```

Build:

```bash
npm run build
```

Content validation:

```bash
npm run validate:content
# Validate all categories
ALL_CATEGORIES=1 npm run validate:content
```

## Articles & Quizzes (Process Overview)

- Articles: Add metadata in `data/learning-content.json`; content is rendered by `ArticleContentWrapper` via a registry mapping.
- Quizzes: Inline in JSON today; planned migration to `data/quizzes/<articleId>.json`.
- Validation checks renderer coverage, basic quiz structure, and quote escaping.

## Dev Tips

- Clear caches if vendor chunks go missing:

```bash
rm -rf .next .turbo .vercel/output && npm run dev -- --port 3001
```
