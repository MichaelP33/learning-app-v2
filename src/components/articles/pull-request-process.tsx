import React from "react";

export default function PullRequestProcess() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">PR Templates and Checklists</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              PR templates standardize what information reviewers receive (risk, scope, test evidence, and rollout plan). Checklists reduce omissions and create consistent expectations across teams, improving signal‑to‑noise for reviewers and speeding up approvals (reviewers spend less time chasing basics).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Include test plan, screenshots/logs, migration steps, and rollback plan.</li>
              <li>Call out breaking changes and data migrations explicitly with a &ldquo;risk&rdquo; label.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk Labeling and Review SLAs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Risk labels route work to the right reviewers and set response expectations (high‑risk changes get faster, deeper reviews by domain owners). Service‑level agreements for review times keep flow steady and reduce context switches (e.g., &ldquo;respond in 24 hours for medium risk&rdquo;).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define Low/Medium/High risk criteria with examples and required approvals per level.</li>
              <li>Escalate stalled high‑risk PRs via merge queues or on‑call rotation.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Blocking vs Non‑Blocking Reviews</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use &ldquo;blocking&rdquo; comments for correctness and safety issues; use non‑blocking suggestions for style or follow‑ups (clear semantics prevent deadlocks). Pair this with minimum approval rules and required checks in CI to keep mainline green without stalling minor improvements.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require at least one blocking approval for risky areas; allow suggestion‑only feedback for low risk.</li>
              <li>Encourage follow‑up issues for non‑critical refactors to maintain flow.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add a PR template with checklists for tests, docs, and rollout/rollback.</li>
              <li>Define risk labels and map each to required approvers and SLA.</li>
              <li>Adopt merge queues for high‑risk repos to serialize deployment‑sensitive changes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quality, Throughput, and Reliability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Consistent PR processes reduce rework, shrink cycle time, and lower incident volume (early detection via peer review and CI). Clear checklists improve test coverage and documentation updates, improving maintainability (future developers understand why changes were made).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Higher merge success rates and fewer Friday hotfixes.</li>
              <li>Better onboarding because rationale and context are recorded in PRs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Stakeholder Confidence</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Risk labels and SLAs provide predictability to product and operations (they know when changes ship and how they are vetted). Non‑blocking guidance encourages continuous improvement without blocking customer value (style nits do not delay releases).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Release notes pull directly from PR titles and labels (less manual editing and fewer errors).</li>
              <li>Auditable review trail supports compliance reviews and external audits.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Metrics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Average time to first review and to merge by risk level.</li>
              <li>Rework rate (% of PRs reopened or reverted) and post‑merge incident rates.</li>
              <li>Template adherence rate (checklist completion) per repository.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Calibrate SLAs: low risk 48h, medium 24h, high 8h with on‑call reviewer rotation.</li>
              <li>Make &ldquo;blocking&rdquo; a review type in the template; clarify examples.</li>
              <li>Automate release note generation from PR metadata on tag creation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Powered Templates and Reviews</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate PR templates tailored to repository risk profiles and produce AI summaries of diffs for quick triage (saves reviewer time by highlighting possible regressions and breaking changes). Suggest test cases and checklists based on changed files (mapping code areas to known risks).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Auto‑classify PRs by risk and assign reviewers via CODEOWNERS + heuristics.</li>
              <li>Detect missing docs or migrations and comment with actionable tasks.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy Checks and Merge Gates</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Create Actions that enforce SLAs, block merges without risk labels, and verify that &ldquo;blocking&rdquo; comments are resolved. Provide suggested commit messages following conventional commits so changelog automation stays consistent.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Gate merges on green CI, coverage deltas, and security scans.</li>
              <li>Require screenshots for UI changes and migration plans for schema updates.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Knowledge Transfer</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Summarize review discussions and decision rationales for future readers (PRs become living design docs). Link related incidents and postmortems for visibility (context helps prevent repeat issues).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt AI summaries and risk detection for all PRs over a size threshold.</li>
              <li>Enforce policy checks for labels, tests, and documentation updates.</li>
              <li>Store PR templates in <code>.github/PULL_REQUEST_TEMPLATE.md</code> and keep them versioned.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}