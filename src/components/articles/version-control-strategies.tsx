import React from "react";

export default function VersionControlStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Stabilization Windows and Code Freeze</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Stabilization windows (temporary limits on risky changes before release) reduce last‑minute regressions by focusing teams on fixing rather than adding features. Code freeze is a stricter form where only critical fixes are allowed (useful when external commitments or compliance deadlines require predictability). Flags let you keep deploying while &ldquo;freezing&rdquo; user‑visible changes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Freeze scope and length should be proportional to risk and system criticality.</li>
              <li>Maintain a clear exception process with on‑call approvers and rollback steps.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Release Trains</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Release trains ship on a fixed cadence regardless of feature readiness (miss the train, catch the next). This reduces negotiation overhead and aligns teams on predictable schedules (stakeholders can plan downstream activities confidently). Pair with branch protections and merge queues to keep train branches green.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use train branches like <code>release/2025.08</code> with cherry‑picks for late fixes.</li>
              <li>Freeze a few days before departure for final validation and tagging.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Changelogs and Visibility</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              High‑quality changelogs increase trust and reduce support load (non‑technical readers understand scope and impact). Generate changelogs from PR labels and conventional commits, and tie entries to ticket IDs and risk categories (breaking changes, migrations). Publish change summaries to internal channels and customer‑facing notes when relevant.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate changelog sections for features, fixes, security, and breaking changes.</li>
              <li>Link to rollout plans, feature flags, and deprecation notices for clarity.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt short stabilization windows before train cut‑offs; keep deploys flowing with flags.</li>
              <li>Create a release‑train calendar and publish it to engineering and GTM stakeholders.</li>
              <li>Automate changelogs from PR metadata and verify on tag creation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Predictability and Risk Reduction</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Stabilization windows and trains improve planning accuracy for support, marketing, and compliance (clear dates and change scopes reduce last‑minute scrambles). Changelogs improve stakeholder confidence and reduce incident volume post‑release (operational teams know what changed and where to look).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lower change failure rate and shorter MTTR due to predictable rollouts.</li>
              <li>Fewer emergency hotfixes when trains batch changes with stabilization time.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cross‑Functional Alignment</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Fixed schedules enable downstream teams to sync campaigns, training, and operational readiness (non‑engineering peers can plan confidently). Visibility reduces escalations as product managers and support have a single source of truth for change scope and dates.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish &ldquo;what shipped&rdquo; summaries mapped to customer personas and regions.</li>
              <li>Include risk labels and fallback plans to align incident response readiness.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Metrics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adherence to train schedule and exception counts during freezes.</li>
              <li>Post‑release incident rate and time‑to‑prepare release notes.</li>
              <li>Changelog completeness and consumer engagement with release communications.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define exception policy and on‑call approvers for freezes; track exceptions publicly.</li>
              <li>Use merge queues to keep train branches green and releases reproducible.</li>
              <li>Automate &ldquo;what changed&rdquo; digests and circulate to support and GTM weekly.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Orchestrated Trains and Notes</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to maintain a release‑train calendar, draft freeze announcements, and generate release notes from PR metadata (labels, scopes, and breaking‑change flags). Create dashboards that forecast train readiness and highlight risky areas based on test failures or hot‑spots of change.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate tag creation and signed artifacts with changelog verification gates.</li>
              <li>Summarize &ldquo;diff since last train&rdquo; for executives and support leaders.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy as Code</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate policies that block risky merges during freezes and require risk labels, test evidence, and rollout plans for train branches. Validate that changelog entries exist for user‑visible changes before tagging.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a train branch naming convention and merge queue policy.</li>
              <li>Adopt AI‑generated release notes and changelog checks at tag time.</li>
              <li>Publish freeze timelines and exception rationale to increase transparency.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
