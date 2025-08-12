import React from "react";

export default function KnowledgeSharing() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Review Notes as Knowledge Artifacts
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              High‑quality reviews create durable knowledge: rationale, trade‑offs, and gotchas. Capture this context where future maintainers will find it (PR notes, ADR links, code comments near decisions).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Summarize the decision: what changed, alternatives considered, why chosen.</li>
              <li>Link to performance/security results that influenced acceptance.</li>
              <li>Extract broadly useful patterns into docs or utilities after merge.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Pairing &amp; Handoffs
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use synchronous pairing for complex or risky diffs to compress feedback cycles. For handoffs, include a crisp status note: what&rsquo;s done, what&rsquo;s risky, what&rsquo;s next.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Time‑box pairing to unblock; capture outcomes back into the PR for traceability.</li>
              <li>Prefer small, incremental PRs during handoffs to keep review context fresh.</li>
              <li>Use checklists to ensure no context is lost between reviewers and authors.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Linking to Docs &amp; ADRs
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Reviews are stronger when grounded in shared references: coding standards, security baselines, and ADRs. Use links to end debates quickly and spread consistent patterns across teams.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Reference ADRs for architectural shifts; open follow‑ups to update ADRs when outcomes change.</li>
              <li>Link to runbooks and SLOs when discussing operational impact.</li>
              <li>Collect &ldquo;exemplars&rdquo; of excellent PRs as living documentation of expectations.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>End each PR with a short &ldquo;What we learned&rdquo; summary if new territory was explored.</li>
              <li>Tag patterns worth reusing; file small refactor PRs to embody them in code.</li>
              <li>Prefer links to standards over ad‑hoc arguments to reduce future re‑litigation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business &amp; Team Impact
        </h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Cultural Memory &amp; Onboarding
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Capturing learning in reviews compounds over time, shrinking onboarding and reducing incidents from repeated mistakes. It makes architectural intent legible across the org.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>New joiners learn standards by reading exemplars and the reasoning behind them.</li>
              <li>Incident themes become proactive checklists and guardrails in future reviews.</li>
              <li>Design convergence increases as patterns spread, improving maintainability.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Cross‑Team Alignment
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Linking PRs to docs and ADRs creates a common language across teams and reduces coordination cost. This minimizes conflicts and duplicated efforts in larger programs.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Shared references help resolve disagreements quickly and consistently.</li>
              <li>Reusable playbooks emerge for migrations, rollouts, and performance tuning.</li>
              <li>Leadership gains visibility into decisions, enabling better sequencing and staffing.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Maintain a &ldquo;review notes&rdquo; label to collect learnings for weekly summaries.</li>
              <li>Record decisions succinctly as PR notes and link to the ADR index.</li>
              <li>Hold periodic &ldquo;review of reviews&rdquo; to extract standards and examples.</li>
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
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Lightweight Capture &amp; Discovery
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Provide comment macros and templates for reviewers to record rationale succinctly. Index PR notes and ADR links so future changes surface relevant history automatically.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Suggest summaries with extracted entities (services, endpoints, tables) and decisions.</li>
              <li>Link to prior similar diffs and outcomes to avoid repeating debates.</li>
              <li>Export &ldquo;learning highlights&rdquo; to knowledge bases without manual copy/paste.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Pairing Integrations
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Offer session handoff notes and checklists. Generate &ldquo;next step&rdquo; tasks after pairing sessions and link to the PR for continuity.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Create one‑click summaries for handoffs (status, risks, decisions, TODOs).</li>
              <li>Attach code pointers and traces to speed the next reviewer&rsquo;s onboarding.</li>
              <li>Suggest ADR updates when architectural decisions are detected in threads.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Adopt consistent labels for knowledge capture and enable weekly digests.</li>
              <li>Automate indexing of PR decisions; surface them in future related PRs.</li>
              <li>Link reviews to ADRs and standards so decisions propagate across teams.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}