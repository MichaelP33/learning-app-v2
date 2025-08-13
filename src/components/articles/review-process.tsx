import React from "react";

export default function ReviewProcess() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          {/* Callout 3 (uses callout budget) */}
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Pull Request Templates
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A good template reduces back‑and‑forth by prompting for intent, risk areas, test plan, rollout/rollback, and screenshots. It creates consistent reviewer context and helps triage routing.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Sections: Summary, Motivation, Scope, Risk Hot‑spots, Test Evidence, Rollout/Backout.</li>
              <li>Auto‑links: related issues, ADRs, runbooks, and design docs.</li>
              <li>Checklists: security, accessibility, performance, data changes.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              SLAs &amp; Review Flow
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Teams benefit from explicit SLAs: time to first response, time to approval after changes requested, and expectations during on‑call. SLAs prevent starvation and reduce cycle time variability.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>First response within the working day; handoffs across time zones acknowledged.</li>
              <li>Changes requested should include rationale and precise remediation steps or references.</li>
              <li>Escalation path when deadlines are at risk (reviewer backups, codeowners fallback).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Non‑blocking vs Blocking Feedback
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Label comments as &ldquo;must‑fix&rdquo; when correctness, security, safety, or policy is affected; otherwise mark suggestions. This preserves momentum and keeps ownership clear.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Provide alternatives with code sketches where helpful.</li>
              <li>Bundle preference‑level suggestions into a single comment to reduce noise.</li>
              <li>Defer debates to standards or ADR updates rather than blocking merges repeatedly.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Adopt a single PR template across repos; tailor via labeled sections, not different files.</li>
              <li>Publish SLAs and dashboards; alert when PRs breach thresholds or go stale.</li>
              <li>Use labels for &ldquo;must‑fix&rdquo; and &ldquo;suggestion&rdquo; to make status obvious.</li>
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
              Ownership &amp; CODEOWNERS
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Clear ownership accelerates reviews and improves accountability. CODEOWNERS files route changes to domain experts and ensure critical paths always get experienced eyes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Map critical folders and contracts to specific teams; keep file current with org changes.</li>
              <li>Use &ldquo;required reviewers&rdquo; only for high‑risk domains to avoid bottlenecks.</li>
              <li>Provide backup owners to keep SLAs intact during vacations or incidents.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Conflict Resolution
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Technical disagreements should resolve through data and references. Bring logs, benchmarks, or user impact measurements. If unresolved, escalate to agreed tie‑breakers (architect on call, standards council) and capture the decision.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Prefer &ldquo;experiment then decide&rdquo; over extended threads when cost is small.</li>
              <li>Move heated debates to synchronous calls with a timebox and concrete next steps.</li>
              <li>Record outcomes to shrink future decision time and reduce repeated debates.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Keep CODEOWNERS small and precise; avoid &ldquo;/*&rdquo; patterns that create noise.</li>
              <li>Set reviewer rotation for fairness and load balancing; protect focus time.</li>
              <li>Track &ldquo;PRs waiting on author&rdquo; vs &ldquo;waiting on reviewer&rdquo; to find true bottlenecks.</li>
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
              Automation &amp; Routing
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Auto‑label PRs by risk domain and changed areas; route to owners; surface &ldquo;must‑fix&rdquo; policies inline. Provide suggested summaries and change impact analysis to reduce reviewer onboarding time.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Generate checklists driven by file types (migrations, controllers, UI components).
              </li>
              <li>Post CI status with actionable failure triage; link to playbooks or fix PRs.</li>
              <li>Offer &ldquo;apply suggestion&rdquo; code edits for low‑risk refactors to reduce back‑and‑forth.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Transparent SLAs &amp; Dashboards
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Provide a dashboard of aging PRs, queue health, and SLA breaches. Nudge reviewers and authors with gentle reminders and ownership summaries.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Daily digest to owners of stale PRs and risk‑labeled items.</li>
              <li>Time‑to‑merge tracked by area to detect persistent bottlenecks.</li>
              <li>Heatmaps of code areas with repeated conflicts; propose standard updates or utilities.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Start with a lightweight template; iterate based on common gaps seen in reviews.</li>
              <li>Use labels and CODEOWNERS to keep blocking feedback focused and rare.</li>
              <li>Escalate via a clear path; record decisions and link to ADRs when policies shift.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
