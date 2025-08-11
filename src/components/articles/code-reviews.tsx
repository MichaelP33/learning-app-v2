import React from "react";

export default function CodeReviews() {
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
              Review Goals
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Defect detection and risk reduction (catch issues before they
                reach production where remediation costs escalate 10x–100x).
              </li>
              <li>
                Knowledge sharing and architectural alignment across the
                codebase (spreading context so fewer decisions live with one
                person).
              </li>
              <li>
                Coaching through constructive, specific feedback that raises the
                team&rsquo;s bar over time.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Review Styles & Scope
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Pair review (synchronous) for complex changes; async PR review
                for routine diffs (asynchronous comments on a pull request); mix
                based on risk profile.
              </li>
              <li>
                Keep batch size small to manage cognitive load (mental effort
                required to evaluate changes); prefer focused PRs with clear
                intent and checklist.
              </li>
              <li>
                Use reviewer checklists (security, accessibility, performance,
                error handling) tailored to the code area.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Feedback Norms
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer questions and rationale: &ldquo;Could we extract this to
                avoid duplication because...&rdquo;
              </li>
              <li>
                Separate must-fix issues from suggestions; link to standards and
                prior decisions for consistency.
              </li>
              <li>
                Avoid gatekeeping and nit-only reviews; focus on risk hot spots
                and maintain psychological safety.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Author checklist: risk areas, test plan, screenshots,
                rollout/rollback.
              </li>
              <li>
                Reviewer checklist: security, accessibility, errors,
                performance, data migrations.
              </li>
              <li>
                Prefer non‑blocking comments (suggestions) unless
                correctness/safety is impacted.
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
              <li>
                Fewer production defects and rollbacks; higher change success
                rate.
              </li>
              <li>
                Faster onboarding as patterns and standards are reinforced in
                reviews.
              </li>
              <li>
                Predictable cycle time through smaller batches and earlier risk
                surfacing.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Anti‑patterns to Avoid
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Rubber‑stamping large diffs without context.</li>
              <li>Blocking on preference-only comments without rationale.</li>
              <li>
                Treating reviews as gates instead of collaborative quality
                improvement.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Limit PR size (e.g., &lt; 400 LOC) to control cognitive load.
              </li>
              <li>
                Set SLAs for review latency (time from request to first
                response).
              </li>
              <li>
                Track must‑fix vs suggestions; avoid re‑litigating team
                standards in reviews.
              </li>
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
              AI‑assisted Reviews
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Generate concise diffs and summaries highlighting risky areas
                (auth, data access, concurrency).
              </li>
              <li>
                Auto‑draft reviewer checklists based on changed files and
                languages.
              </li>
              <li>
                Suggest targeted tests and refactors with links to standards.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Policy‑as‑code Guardrails
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Enforce security, accessibility, and performance budgets via
                linters and CI checks.
              </li>
              <li>
                Surface breaking changes to APIs and contracts with generated
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
                Use templates that collect intent, risk areas, and test
                evidence.
              </li>
              <li>
                Auto‑label PRs with risk domains (security, perf) to route
                reviewers.
              </li>
              <li>
                Convert blocking comments only for correctness, safety, or
                policy breaches.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
