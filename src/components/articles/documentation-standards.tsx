import React from "react";

export default function DocumentationStandards() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Docs‑as‑Code
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Versioned with source, reviewed via PRs, validated by CI (like
                code).
              </li>
              <li>
                Templates for ADRs (Architecture Decision Records), runbooks
                (operational guides), and READMEs keep quality consistent.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Information Architecture
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Clear ownership and discoverability per system or domain.</li>
              <li>
                Link code to docs: services → READMEs, APIs → OpenAPI, ops →
                runbooks.
              </li>
              <li>
                Review cadence and governance to prevent drift (docs becoming
                stale).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Standards & Ownership
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Style guides, linters, and required sections in templates.
              </li>
              <li>
                Document owners accountable for freshness SLAs (time‑to‑review
                targets).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Adopt lightweight templates first; expand only when needed.
              </li>
              <li>
                Add &ldquo;owner&rdquo; and &ldquo;last verified&rdquo; to every
                key doc.
              </li>
              <li>
                Keep links close to code to minimize drift (READMEs beside
                services).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business & Team Impact
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reduced coordination cost and handoff errors.</li>
              <li>Faster onboarding and fewer blocked incidents.</li>
              <li>Compliance readiness and auditability by default.</li>
            </ul>
          </div>
          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Metrics
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Doc freshness (time since last verified).</li>
              <li>Coverage (systems with READMEs/runbooks/ADRs).</li>
              <li>Search success and time‑to‑find critical docs.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Make docs part of the &ldquo;definition of done&rdquo; for
                changes.
              </li>
              <li>Schedule quarterly doc reviews for critical systems.</li>
              <li>Track broken links and fix with small, continuous PRs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Scaffolds & Linting
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Generate ADR, README, and runbook templates with required
                sections.
              </li>
              <li>Policy/style linting and drift detection in CI for docs.</li>
            </ul>
          </div>
          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Summaries & Linking
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Auto‑summaries for PRs and incidents with links to relevant
                docs.
              </li>
              <li>
                Keep READMEs synchronized with code changes through prompts and
                checklists.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Backfill missing runbooks for on‑call‑relevant services first.
              </li>
              <li>
                Generate ADR skeletons when architectural decisions are
                proposed.
              </li>
              <li>
                Run style linting on docs in CI to keep basics consistent.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
