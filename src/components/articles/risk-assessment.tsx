import React from "react";

export default function RiskAssessment() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Likelihood × impact matrix</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Classify risks by probability and consequence (a visual 2D matrix makes trade‑offs tangible). High‑impact/low‑likelihood items often need contingency plans; high‑likelihood/medium‑impact items benefit from mitigations that shrink probability.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Calibrate with real data (incident history, lead‑time spikes, failed rollouts) to avoid opinion‑driven ratings that drift over time.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Leading indicators and triggers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Monitor precursors (sustained queue depth, PR latency, error‑budget burn) that signal rising risk before incidents. Define clear triggers for action (e.g., &ldquo;p95 latency exceeds X for Y days&rdquo;).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              This shifts teams from reactive firefighting to proactive risk control (mitigation tasks are cheaper earlier, when context is fresh and blast radius is small).
            </p>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Mitigation vs. contingency</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Mitigation reduces likelihood or impact (rate limits, circuit breakers), while contingency prepares for occurrence (rollback plans, runbooks, and &ldquo;break‑glass&rdquo; access). Both belong on the plan with owners and &ldquo;ready by&rdquo; dates.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Track residual risk after mitigation; if still above tolerance, strengthen contingencies or de‑scope.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Maintain a living risk log with ratings, owners, and next review date.</li>
              <li>Define leading indicators and triggers; wire alerts to dashboards.</li>
              <li>Pair mitigations with contingencies; identify &ldquo;ready by&rdquo; dates.</li>
              <li>Re‑rate risks after changes to reflect residual risk realistically.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fewer surprises and safer delivery</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              By translating uncertainty into explicit risks with owners, plans converge more reliably (launches anchor on credible ranges instead of optimistic dates). Leadership sees trade‑offs and accepts informed scope choices.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Risk burndown charts make progress visible (risk exposure trending down over sprints) and highlight when new risks appear.
            </p>
          </div>

          <div className="border-l-4 border-sky-500 bg-sky-50/50 dark:bg-sky-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Decision velocity via logs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Decision logs capture context, options, and chosen guardrails (immutable notes that reduce re‑litigation in future debates). When new data arrives, teams revise rather than restart arguments.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              This increases trust across functions (product, eng, and ops share a common memory of why choices were made under constraints).
            </p>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Resilience as a habit</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Teams that practice risk scans during planning and reviews build reflexes: chaos injects less variance, and escalations become calmer (clear owners and runbooks). The culture shifts from blame to learning.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              This creates a virtuous cycle with on‑call quality and customer satisfaction.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Present risk burndown alongside velocity during reviews.</li>
              <li>Publish decision logs and link to PRs, runbooks, and dashboards.</li>
              <li>Escalate when residual risk exceeds tolerance; propose scope changes.</li>
              <li>Retire risks explicitly when indicators stay green for a defined period.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk catalog and scoring</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Draft a risk catalog with suggested likelihood/impact scores based on repo signals (churn, flaky tests, dependency updates). Highlight leading indicators and propose alert thresholds.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Recommend mitigations (rate limits, timeouts, feature flags) with owners and &ldquo;ready by&rdquo; dates; compute residual risk post‑mitigation.
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Runbooks, contingencies, and drills</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate rollback checklists and &ldquo;break‑glass&rdquo; procedures; suggest drill cadences for critical scenarios (simulate rate‑limit triggers, dependency outages).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Produce decision log templates that capture context and alternatives so future changes remain aligned with constraints.
            </p>
          </div>

          <div className="border-l-4 border-fuchsia-500 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Dashboards and burndown</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Surface risk burndown and indicator trends in a compact dashboard (pair with velocity and defect rate). Flag when indicators exceed thresholds and open suggested tasks automatically.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Nudge owners to re‑score after key merges or incidents to keep the catalog current.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a simple 5×5 matrix; define tolerance bands per product area.</li>
              <li>Wire leading indicators to alerts; review weekly in planning.</li>
              <li>Keep mitigation and contingency pairs for every high risk.</li>
              <li>Track risk burndown each sprint; celebrate retired risks.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
