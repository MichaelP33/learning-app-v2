# Migration: Legacy → Modular Articles & Quizzes

Goal: Move from inline article renderers and JSON-embedded quizzes to modular per-article components and external quiz files, with zero regressions.

## Principles

- Non-breaking rollout: keep legacy fallbacks until each ID is migrated.
- Per-article QA: validate and test routes after each migration step.

## Steps per Article ID

1. Create per-article component
   - `src/components/articles/<articleId>.tsx` using the three-section template (Key Concepts, Business & Team Impact, Cursor Implementation)
   - Ensure no duplicate main title/description
2. Regenerate registry
   - `npm run generate:articles-registry`
   - Confirm `src/components/articles/registry.ts` includes `<articleId>`
3. Extract quiz (optional now; recommended)
   - Move inline quiz from `data/learning-content.json` to `data/quizzes/<articleId>.json`
   - Update loader (if needed) to point to file-based quiz (external preferred, inline fallback remains)
4. Validate & build
   - `npm run validate:content`
   - `npm run build`
5. QA
   - Visit `/article/<articleId>` and `/quiz/<articleId>`
   - Confirm no console warnings and content renders correctly

## Batch Strategy

- Migrate in small batches (3–5 articles), validate, then proceed.
- Use `ALL_CATEGORIES=1 npm run validate:content` during larger batches.

## Backout

- If issues appear, delete the per-article component file and regenerate registry; legacy fallback will render until fixed.
