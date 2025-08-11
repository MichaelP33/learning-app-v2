import React from "react";

export default function FeatureFlags() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Flag Types</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Release flags gate incomplete work safely (hide WIP while merging early to main for continuous integration).
              </li>
              <li>
                Ops flags toggle operational behavior (e.g., reduce cache TTLs during incident response without redeploy).
              </li>
              <li>
                Experiment flags power A/B tests and multivariate trials (randomized targeting to measure causal impact rigorously).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common Pitfall</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Avoid duplicating business logic in flag conditions (complex rules drift from code paths and hide bugs).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lifecycle: Creation → Cleanup</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define intent at creation (&ldquo;release&rdquo;, &ldquo;ops&rdquo;, or &ldquo;experiment&rdquo;) with owner and expiry date (avoid orphaned toggles lingering).
              </li>
              <li>
                Track rollout progress and metrics (guard success with pre‑agreed thresholds to avoid subjective debates).
              </li>
              <li>
                Remove dead flags promptly; stale flags become &ldquo;flag debt&rdquo; (latent complexity that increases outage risk).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Targeting, Rollouts, and Kill Switches</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Start with internal/staff exposure, then ramp by percentage, cohort, or geography (minimize blast radius while learning).
              </li>
              <li>
                Keep an instant kill switch path (synchronous control plane or cached rules with short TTLs under failure).
              </li>
              <li>
                Log evaluations with user/context keys for auditability (later investigations need &ldquo;who saw what&rdquo; evidence).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require an owner and &ldquo;remove by&rdquo; date for every new flag.</li>
              <li>Ship behind flags; roll out gradually with pre‑agreed success metrics.</li>
              <li>Enable global kill switches for high‑risk surfaces (payments, auth, data writes).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Speed with Safety</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Flags decouple deploy from release (marketing dates no longer drive risky late‑night deploys).
              </li>
              <li>
                Reduced incident costs via targeted disablement (turn off only the faulty slice instead of full rollback).
              </li>
              <li>
                Better product bets through measured rollouts (evidence‑based greenlights instead of intuition‑only approvals).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Managing Flag Debt</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Excess flags add branching logic (complexity increases cognitive load and test matrix size).
              </li>
              <li>
                Treat flag cleanup like code debt paydown; schedule &ldquo;flag removal sprints&rdquo; for closed experiments and launches.
              </li>
              <li>
                Add guardrails: lint for expired flags, require removal PRs when conversion exceeds a threshold.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Governance and Guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Sensitive flags (privacy, billing) need dual control and audit trails (who toggled, when, and why).
              </li>
              <li>
                Maintain change windows for large audience flips; coordinate with support to prepare comms and playbooks.
              </li>
              <li>
                Document risk levels and required approvals for flag operations (&ldquo;ops&rdquo; and &ldquo;experiment&rdquo; differ).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use a shared catalog with owners, intent, and expiry for every flag.</li>
              <li>Define rollout templates by risk tier; include pre‑flight and rollback triggers.</li>
              <li>Automate alerts for stale flags and require removal PRs after success.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Targeting SDK and Evaluation Logs</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Provide a lightweight SDK with consistent targeting rules (percentage, cohort, geo) and local overrides.
              </li>
              <li>
                Emit structured logs for every evaluation (&ldquo;flag, variant, subject, reason&rdquo;) to power audits and analytics.
              </li>
              <li>
                Cache rules with bounded TTL and fail‑open/closed strategies selectable by flag risk.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails and Kill Switches</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Add a &ldquo;global emergency off&rdquo; control for critical features (payments, auth), with paging on change.
              </li>
              <li>
                Require approvals for sensitive flag flips; record rationale and link to incident or experiment docs.
              </li>
              <li>
                Auto‑generate cleanup issues when flags pass success criteria; include code pointers and owners.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a typed SDK; standardize evaluation keys and event schemas.</li>
              <li>Instrument dashboards for exposure, conversion, and error rates per flag.</li>
              <li>Automate &ldquo;remove flag&rdquo; PRs once rollouts stabilize or experiments conclude.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}