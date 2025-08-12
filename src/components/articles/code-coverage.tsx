import React from "react";

export default function CodeCoverage() {
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
              Coverage Types
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Coverage measures indicate how much of the codebase is executed by tests. Three foundational perspectives work together: line coverage (did each statement run?), branch coverage (did each decision path run?), and function coverage (were functions/methods invoked?). Each metric reveals different blind spots: high line coverage with low branch coverage can hide untested conditionals (e.g., error branches that never execute in tests), while high function coverage can still miss internal paths (e.g., early returns). Treat them as complementary rather than interchangeable.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Line coverage: quick, broad signal (fast feedback in CI) but shallow.
              </li>
              <li>
                Branch coverage: exercises true/false outcomes for decisions (ifs/switches/guards).
              </li>
              <li>
                Function coverage: ensures entry points are tested (APIs, helpers), not just incidental execution.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Mutation Testing
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Mutation testing flips the question from &ldquo;how much code ran?&rdquo; to &ldquo;would tests fail if the code were subtly wrong?&rdquo; A mutation engine introduces small changes (e.g., invert a conditional, replace an operator, remove a call). If tests still pass, a mutant &ldquo;survives&rdquo; and indicates weak assertions or missing scenarios. Mutation score (killed vs. total mutants) often correlates better with defect detection than raw coverage.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Focus on critical modules first (auth, billing, concurrency hot paths).</li>
              <li>Use targeted operators to control runtime (e.g., only boolean negation to start).</li>
              <li>Pair with branch coverage to expose silent paths (e.g., error handling branches).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Pitfalls & Thresholds
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Gaming the metric is a classic failure mode: trivial tests that execute lines without asserting behavior, or mocks that bypass real logic. Thresholds should be guardrails, not goals. Start with pragmatic baselines (e.g., 80% line, 60&ndash;70% branch for services, tighter for libraries) and raise them selectively. Gate only what you can enforce fairly (e.g., &ldquo;changed lines must not reduce project baseline&rdquo;) and reserve hard blocks for high‑risk areas.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Test quality beats test quantity (assert on outcomes and risks, not just execution).
              </li>
              <li>Prefer diff coverage (PR delta) over global gates for incremental adoption.
              </li>
              <li>Exclude generated and legacy-proven files explicitly (document rationale in repo).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Establish a &ldquo;baseline now, improve later&rdquo; policy (publish current metrics, enforce on PR deltas).
              </li>
              <li>
                Track line, branch, and function coverage together (single dashboard in CI).
              </li>
              <li>
                Add mutation testing for safety‑critical modules (gradual rollout with time‑boxed budgets).
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
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes & Trade‑offs
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Mature coverage practices shift failure discovery left (from production to CI) and accelerate refactoring by providing safety nets. However, over‑strict gates can stall delivery (e.g., small changes blocked by global shortfalls) and incentivize shallow tests. The business objective is risk‑adjusted speed: use coverage to prioritize, not paralyze.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Faster incident recovery (confident hotfixes) and lower change failure rate (DORA metric).
              </li>
              <li>
                Clearer onboarding through executable examples (tests as living documentation).
              </li>
              <li>
                Forecastable delivery when PRs include evidence (coverage deltas, mutation score).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Ownership & Accountability
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Teams own their thresholds and waivers. Changes that reduce coverage must include rationale (risk context, compensating controls) and a remediation plan. Product accepts time investment for tests on high‑impact features (e.g., data integrity, money movement). Leadership tracks trendlines (coverage by domain, mutation score in critical paths) rather than fixating on a single number.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use time‑boxed exceptions with expiry and explicit owners (no indefinite waivers).
              </li>
              <li>Publish dashboards to make gaps visible (by repo, service, and module).
              </li>
              <li>Connect incidents back to test gaps (post‑mortems update thresholds or add tests).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt &ldquo;ratchet only&rdquo; deltas: PRs cannot reduce coverage below baseline for touched files.
              </li>
              <li>Define risk tiers (e.g., payments, auth, PII) with stricter targets and mutation testing.
              </li>
              <li>Track ROI: compare change failure rate and MTTR before/after coverage initiatives.
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
          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              CI Integration & Reporting
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Automate collection and gating in CI (per‑job, per‑package) and publish unified reports. Use diff coverage for PRs (changed lines/functions) and nightly jobs for full project metrics. Tag reports by context (service name, risk tier) to enable risk‑based decisions.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Enforce on PRs with status checks (e.g., &ldquo;delta line &ge; 80%&rdquo; and &ldquo;no drop vs baseline&rdquo;).</li>
              <li>Store historical metrics for trends (coverage by module, mutation score trajectory).
              </li>
              <li>Annotate files excluded by policy with rationale (generated code, migrations, vendor libs).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Developer Workflow
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Make the right action the easy action: fast local runs (watch mode), pre‑commit hooks for touched files, and inline coverage overlays in editors. Provide examples for common patterns (async errors, edge branches, retries) so tests model realistic behavior (e.g., flaky network).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add a &ldquo;test evidence&rdquo; checklist to PR templates (risk areas, scenarios, data cases).
              </li>
              <li>Generate snapshots of diff coverage in CI comments (linking to lines/branches).
              </li>
              <li>Schedule mutation tests overnight or on demand for hot spots (budgeted runtime).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with line coverage gates on changed code (fast to compute, high leverage).
              </li>
              <li>Introduce branch coverage on critical packages (guards, error paths, feature flags).
              </li>
              <li>Roll out mutation testing to high‑risk domains after stabilizing basic gates.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
