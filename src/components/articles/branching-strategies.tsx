import React from "react";

export default function BranchingStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Long‑Lived Branches: Trade‑offs
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Long‑lived branches accumulate divergence from <code>main</code>,
              making integration painful (merge conflicts compound over time as
              files evolve across teams). They provide isolation for risky work
              and large refactors, but increase the probability of &ldquo;big
              bang&rdquo; merges that destabilize downstream environments
              (particularly staging and pre‑prod where change windows are
              tight).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer short‑lived feature branches measured in days, not weeks.
              </li>
              <li>
                Rebase frequently to keep diffs small and integration
                predictable.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Feature Flags vs Branching
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Feature flags let incomplete code live safely in <code>main</code>{" "}
              while disabled (decoupling deploy from release for safer
              iteration). This reduces branch lifetime and keeps integration
              continuous, but adds operational complexity via flag management
              and kill‑switch hygiene (flag retirement schedules and
              configuration audits prevent flag sprawl).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use flags for UI toggles and gradual rollouts; keep
                secret/permissioned features server‑side.
              </li>
              <li>
                Archive flags after full rollout; stale flags increase cognitive
                load and risk.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Integration Cadence and Conflict Risk
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Frequent integration reduces conflict size and complexity (smaller
              diffs are easier to review and revert). Infrequent integration
              increases the chance of overlapping edits and logical conflicts
              (business rules change underneath long‑running work). Adopt a
              &ldquo;sync early, sync often&rdquo; norm with pre‑merge CI checks
              to preserve a green mainline.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Pull from <code>main</code> daily and rebase to keep history
                linear before opening PRs.
              </li>
              <li>
                Run test suites locally before pushing to reduce noisy CI churn
                (saves shared compute and time).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Reserve long‑lived branches for risky migrations with explicit
                exit criteria and owners.
              </li>
              <li>
                Use feature flags to keep branches short and integration
                continuous.
              </li>
              <li>
                Set team norms for daily sync and small PRs (target &lt; 300
                lines changed).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business &amp; Team Impact
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes and Cost Curves
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Short‑lived branches with high integration cadence reduce rework
              and review load (context fits into a single mental model for
              reviewers). Long‑lived branches increase risk of production
              regressions and incident MTTR because conflicts surface late (late
              discovery increases coordination cost across multiple teams and
              releases).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Smaller PRs correlate with faster cycle times and higher merge
                success rates.
              </li>
              <li>
                Flag‑driven rollout reduces the need for emergency hotfix
                branches.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Team Topology and Ownership
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Branching strategy interacts with team boundaries (service
              ownership and domain alignment reduce cross‑team conflicts). Clear
              ownership of critical directories lowers the frequency of
              overlapping edits (CODEOWNERS and path‑based reviews route changes
              to the right experts).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define ownership per folder/module; make reviews required for
                protected paths.
              </li>
              <li>
                Use merge queues to serialize risky changes to shared
                foundations (schema or API layers).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Metrics
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Average branch lifetime and variance across teams.</li>
              <li>Conflict rate per PR and time spent resolving conflicts.</li>
              <li>
                Change failure rate after merges to <code>main</code>.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Set a branch lifetime SLO (e.g., &lt; 5 days) and alert when
                exceeded.
              </li>
              <li>
                Adopt flags for risky changes; require dark launch before full
                enablement.
              </li>
              <li>
                Measure conflict hot‑spots and refactor ownership to reduce
                cross‑team overlap.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              AI‑Guided Branching
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to propose branching strategies per repository type
              (libraries vs apps) and regulatory needs (high‑risk domains may
              prefer release branches). Generate branch naming schemes and
              pre‑commit checklists to standardize practice across teams.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Scaffold merge queue policies and simulation of queue depth
                during peak load.
              </li>
              <li>
                Recommend flag vs branch approaches given the scope and
                dependency surface of a change.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Automation Hooks
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate CI workflows that enforce branch lifetime SLOs, required
              rebases, and test coverage thresholds (policy‑as‑code ensures
              consistent gates). Provide PR body templates with risk labels and
              rollout plans to reduce reviewer back‑and‑forth.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Auto‑request reviewers via CODEOWNERS + recent commit history
                for faster routing.
              </li>
              <li>
                Block merges when conflict staleness exceeds a threshold (e.g.,
                &gt; 48 hours unresolved).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Knowledge Capture
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Summarize conflict resolutions and record causes (API shape
              changes, schema moves) so future PRs anticipate impacts (capturing
              institutional memory reduces repeat mistakes).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Adopt AI‑generated PR templates with risk labels and test plans.
              </li>
              <li>
                Enable merge queues on shared repos; serialize migrations and
                schema changes.
              </li>
              <li>
                Automate branch cleanup after merge to keep repositories tidy.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
