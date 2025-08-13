import React from "react";

export default function ErrorTracking() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Grouping and de‑duplication</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Error trackers aggregate similar events into issues using fingerprints (stack frames, exception type, message templates). Proper grouping avoids alert storms and preserves signal. Normalize variable parts (IDs, timestamps) and include a stable &ldquo;culprit&rdquo; (top frame or route) for accurate rollups.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define custom fingerprints for noisy libraries or frameworks that otherwise collapse distinct bugs.</li>
              <li>Capture request context (headers, params, feature flags) with PII redaction to make issues actionable.</li>
              <li>Use correlation via <span className="font-medium">traceId</span> and <span className="font-medium">requestId</span> to link errors to traces and logs (observability = system monitoring and debugging).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Release health and regression detection</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Track error rate, crash‑free sessions, and p95 latency by release (build SHA). When a new version spikes an issue group, auto‑create a regression and link to the responsible PR. Feature flags should annotate events so you can separate rollout impact from code changes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create cohorts by platform, region, and tier to localize issues quickly (distributed systems = applications running across multiple servers).</li>
              <li>Use &ldquo;first seen&rdquo; and &ldquo;last seen&rdquo; to decide whether to page or schedule work.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">SLOs and error budgets</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Attach error rate SLOs (service level objectives) to customer‑visible journeys (checkout, login). Allocate an error budget per period and gate risky releases when budget is exhausted. This ties alerting to business impact rather than raw counts.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Choose a rate metric aligned to experience: crash‑free sessions, error per request, or &ldquo;bad events&rdquo; per minute.</li>
              <li>Page on SLO burn rate (fast consumption) instead of single spikes to reduce noise.</li>
              <li>Connect SLOs to on‑call rotations and change freezes to make policy visible.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Alert hygiene and routing</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Alerts should be actionable, routed to owners, and rate‑limited. Include remediation hints, links to runbooks, and dashboards. Use ownership rules (paths, services, tags) and escalation policies. Suppress duplicates during incident windows (maintenance mode) to avoid paging loops.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require an &ldquo;owner&rdquo; tag on every service; route unmapped alerts to a catch‑all team with triage duty.</li>
              <li>Throttle frequent but low‑impact errors to summary digests; keep paging for budget burn rate only.</li>
              <li>Enforce quiet hours for non‑critical alerts; send to chat channels rather than pagers.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add custom fingerprints for top three noisy exception families this quarter.</li>
              <li>Adopt release annotations in CI so each deploy updates the tracker with build metadata.</li>
              <li>Define SLOs for two critical journeys and rewire alerts to burn‑rate conditions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer experience and retention</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Grouping and routing ensure the right team fixes the right problem quickly, improving uptime and NPS. Release health ties issues to specific versions so rollbacks are decisive rather than speculative.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Crash‑free session rates provide a clear, customer‑centric KPI for mobile and web apps.</li>
              <li>Ownership and dedupe reduce &ldquo;many eyes, nobody accountable&rdquo; failure modes.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational efficiency</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Better grouping and burn‑rate alerts lower pager fatigue. Teams spend fewer cycles re‑triaging duplicate tickets and more cycles resolving root causes. Cost decreases when noise is routed to digests instead of pages.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Release annotations let engineering managers correlate spikes to specific PRs quickly.</li>
              <li>Clear SLO policies reduce debate about &ldquo;is this worth a page&rdquo; during incidents.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk and compliance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Redacted context and owner accountability reduce regulatory exposure. Audit trails of alerts, acks, and mitigations help with SOC 2 and ISO 27001 reviews (compliance frameworks for security and availability).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automatically attach incident IDs and links for end‑to‑end traceability in postmortems.</li>
              <li>Route security exceptions to a separate escalation chain and sequester PII redaction failures.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish an &ldquo;alert contract&rdquo; with required fields and owner rules; add CI linting.</li>
              <li>Archive weekly &ldquo;top regressions&rdquo; and create follow‑ups to prevent repeats.</li>
              <li>Connect tracking with ticketing so acknowledged alerts always create a traceable task.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">SDKs, context, and fingerprints</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Wrap tracker SDKs to standardize context (service, env, traceId, userId) and redaction.</li>
              <li>Provide helpers for custom fingerprints, culprit selection, and release metadata attachment.</li>
              <li>Emit links back to traces and logs using shared IDs for cross‑tool navigation.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Alert routing and burn‑rate policies</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Encode ownership in code (directory rules, service maps) and sync to the tracker.</li>
              <li>Ship SLO templates with default burn‑rate thresholds and escalation paths.</li>
              <li>Add maintenance windows and incident suppression to avoid paging loops during active response.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational practices</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Auto‑link issues to the responsible PR and assign to code owners by default.</li>
              <li>Expose dashboards for &ldquo;new issues by release&rdquo; and &ldquo;top regressions&rdquo; to drive prioritization.</li>
              <li>Run monthly hygiene reviews to retire noisy rules and stale issues.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a &ldquo;first responder&rdquo; rotation for tracker triage with clear SLAs to acknowledge and route.</li>
              <li>Instrument release stages so deploys annotate trackers automatically.</li>
              <li>Maintain &ldquo;silence policies&rdquo; that require explicit approval to suppress alerts.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
