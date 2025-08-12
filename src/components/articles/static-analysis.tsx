import React from "react";

export default function StaticAnalysis() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Categories of Static Analysis
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Static analysis inspects code without executing it. Tools span three overlapping categories: bug finders (null dereferences, race conditions, unused variables), security analysis (SAST for injection, deserialization, secrets), and style/consistency (linting rules that keep code readable and uniform). Treat findings as risk signals, not absolute truths; false positives happen, especially on dynamic patterns (metaprogramming, reflection).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Bug & correctness: potential defects and undefined behavior.</li>
              <li>Security (SAST): taint analysis, data‑flow tracking, dependency CVEs.</li>
              <li>Style & maintainability: naming, complexity, dead code, imports.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              SAST vs. Linting
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Linting emphasizes consistency and maintainability (naming, imports, complexity budgets). SAST emphasizes security risks via data‑flow and taint analysis across files, sinks, and sources. Lint rules run fast in editors and CI (milliseconds), while SAST runs deeper in CI or nightly (minutes). Use both: linting to keep the garden tidy daily, SAST to find buried landmines across modules.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Editor feedback loop: instant for linting (ESLint), delayed for SAST (pipeline).</li>
              <li>Scope: file/module for linting; repository/service for SAST (interprocedural).
              </li>
              <li>Ownership: teams own rule sets; security curates SAST policies at org level.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Baselines & Debt Control
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              The fastest way to stall adoption is to dump thousands of legacy findings onto teams. Establish a baseline (accepted current state) and gate only on new or touched code. Track the baseline separately (triage and gradually reduce). Create severity tiers (blocker, major, minor) and map to actions (block, warn, log). This turns a mountain of alerts into a steady improvement backlog.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Snapshot baseline once; do not grow it (ratchet only on new code).
              </li>
              <li>Assign owners for top risks (e.g., injection, secrets, hardcoded tokens).
              </li>
              <li>Publish an SLA for fix time by severity (e.g., critical in 7 days, high in 30).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt &ldquo;no new debt&rdquo;: new files must meet lint/SAST policies; touched files cannot regress.
              </li>
              <li>Tune rules in context (frameworks, languages, build systems) to reduce noise.
              </li>
              <li>Prefer autofixable rules for daily hygiene; reserve heavy checks for CI/nightly.
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
              Outcomes & Risk Reduction
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Static analysis reduces escaped defects (production bugs) and security exposure by catching issues earlier (pre‑merge CI). It amplifies team velocity by keeping code uniform, enabling easier reviews and refactors. The trade‑off is alert fatigue and potential false positives; governance aligns enforcement with risk so teams remain productive.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lower incident rate and mean time to detection (MTTD) for risky patterns.
              </li>
              <li>Faster onboarding via predictable conventions and automated fixes.
              </li>
              <li>Compliance evidence (audit logs of rule passes/failures) without manual checklists.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Integration & Ownership
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Embed rules where developers work (editor, pre‑commit, CI) and publish a change management process for rule updates (RFCs, trial periods, staged rollout). Teams own remediation; security/platform own policy and tooling. Tie rule changes to incident learnings (e.g., add a SAST rule after a post‑mortem) and to deprecation schedules (retire noisy rules).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create rule review SLAs and a channel for suppressions with justification.
              </li>
              <li>Measure signal:noise (true positive rate) and tune until actionability is high.
              </li>
              <li>Expose per‑team scorecards (new issues/week, time‑to‑fix by severity).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with linting as guardrails (editor+CI), then layer SAST for deep risks.
              </li>
              <li>Run heavy scans nightly on default branch; block PRs only on critical findings.
              </li>
              <li>Use baselines to make legacy debt manageable while preventing new debt.
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
              CI Policy‑as‑Code
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Define rule sets in version control (policy‑as‑code) and apply with consistent pipelines. Use path‑based configs (mono‑repos), matrix jobs by language, and status checks that map severity to outcomes (block/warn). Provide PR annotations that link straight to code and docs so developers can fix in seconds, not meetings.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Separate &ldquo;editor rules&rdquo; (fast, autofix) from &ldquo;CI rules&rdquo; (heavier, risk‑based).
              </li>
              <li>Allow temporary suppressions with expiry and owner (tracked in code).
              </li>
              <li>Emit SARIF for centralized dashboards (merge SAST + lint findings).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Developer Experience
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              The shortest path to adoption is instant feedback (editor integration) and high‑quality docs (examples, rationale, fixes). Offer code actions for common violations and a &ldquo;rule directory&rdquo; with runnable snippets. Pair rule changes with examples and migration scripts when needed (e.g., import sorting).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a pre‑commit hook that lints only staged files (fast, focused).
              </li>
              <li>Provide remediation guides for top 20 rules (copy‑paste fixes).
              </li>
              <li>Gate only on critical security issues at first; expand once signal is high.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt staged rollouts (warn &rarr; soft gate &rarr; hard gate) tied to incident learnings.
              </li>
              <li>Publish dashboards and weekly digests (new issues, mean time‑to‑fix, top offenders).
              </li>
              <li>Curate rule sets per stack (framework‑specific false positive controls).
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}