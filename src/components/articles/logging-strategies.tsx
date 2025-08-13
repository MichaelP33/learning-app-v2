import React from "react";

export default function LoggingStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Structured logs as data</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Treat logs as queryable events rather than free‑form text (structured logs = key/value payloads such as JSON). This enables precise filtering, joins, and metrics in observability backends (indexes on service, route, userId, traceId). Structured context radically improves mean‑time‑to‑detect in distributed systems (applications running across multiple servers) because signals stay consistent across services.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Standard fields: <span className="font-medium">timestamp</span>, <span className="font-medium">level</span>, <span className="font-medium">service</span>, <span className="font-medium">env</span>, <span className="font-medium">traceId</span>, <span className="font-medium">spanId</span>, <span className="font-medium">requestId</span>, <span className="font-medium">userId</span>.</li>
              <li>Prefer flat keys over deeply nested objects (keeps index cardinality predictable and queries faster).</li>
              <li>Emit error objects with machine‑readable fields: <span className="font-medium">error.type</span>, <span className="font-medium">error.code</span>, <span className="font-medium">error.message</span>, <span className="font-medium">error.stack</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Log levels and signal quality</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Levels shape operator attention. Use <span className="font-medium">DEBUG</span> for deep diagnosis (local runs or feature‑flagged sampling), <span className="font-medium">INFO</span> for lifecycle events (start/stop, configuration, migrations), <span className="font-medium">WARN</span> for degraded but self‑recovering behavior, <span className="font-medium">ERROR</span> for user‑impacting failures, and <span className="font-medium">FATAL</span> for process‑terminating states. Overusing high levels creates alert fatigue; underusing them hides incidents.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pin a level policy per domain (payments vs. batch jobs) to avoid &ldquo;everything is ERROR&rdquo; anti‑pattern.</li>
              <li>Track rate by level per service and environment (dev, staging, prod) to catch regressions early.</li>
              <li>Bound <span className="font-medium">cardinality</span> (number of unique values) of labels like <span className="font-medium">userId</span> via hashing or bucketing to control index cost.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Correlation IDs and causality</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Generate a <span className="font-medium">requestId</span> at ingress and propagate it across every hop (gateways, services, workers). Add <span className="font-medium">traceId/spanId</span> when using distributed tracing (end‑to‑end flows across microservices). With correlation, you can reconstruct narratives across systems (from web edge to database write) and attribute latency or failures to specific segments.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>On unhandled exceptions, log the active <span className="font-medium">requestId</span> and <span className="font-medium">traceId</span> to enable one‑click pivots in dashboards.</li>
              <li>Include <span className="font-medium">parentId</span> when enqueuing jobs so background workers preserve the lineage.</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-600 bg-rose-50/50 dark:bg-rose-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">PII redaction and compliance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Logs must never leak sensitive data (PII: personally identifiable information). Implement allowlists for safe fields and automatic redaction for risky keys (email, phone, address, tokens). Align storage with data residency requirements (region‑specific storage for compliance such as GDPR and HIPAA).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Apply server‑side redaction in a single logging utility, not at call sites (reduces drift and missed cases).</li>
              <li>Mask dynamic values with reversible tokens only when absolutely necessary and with strict RBAC (role‑based access control).</li>
              <li>Scrub secrets in stacks (authorization headers, cookies) before emission.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sampling, retention, and cost</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Control write amplification (how much data you emit) with sampling strategies. Sample <span className="font-medium">by level</span> (keep 100% of ERROR, 1–5% of DEBUG in prod), <span className="font-medium">by route</span> (hot endpoints at higher rates), and <span className="font-medium">by feature flag</span> during rollouts. Configure tiered retention (short for verbose logs, longer for security/audit trails) to balance cost and forensics needs.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Backpressure protection: drop DEBUG first, then INFO, never drop ERROR/FATAL under pressure.</li>
              <li>For bursty incidents, implement adaptive sampling that increases retention during anomaly windows.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a single logger API with structured fields and built‑in redaction, correlation, and sampling toggles.</li>
              <li>Define &ldquo;level budgets&rdquo; per service so ERROR/WARN rates are monitored like SLOs (service level objectives).</li>
              <li>Ship a &ldquo;logging contract&rdquo; doc that enumerates required fields and example events for each domain.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Faster incident resolution</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              With correlation IDs and structured payloads, responders jump from an alert to relevant events in seconds (linkable dashboards that pivot on traceId or requestId). Clear levels reduce noise so on‑call engineers focus on true impact, reducing MTTR (mean time to restore) and customer churn risk.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Post‑incident review quality rises because evidence is searchable and complete.</li>
              <li>Support teams can self‑serve investigations by searching by userId or orderId.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost control and governance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Sampling and retention tiers curb runaway spend while preserving critical diagnostics (security and audit trails). Centralized redaction prevents accidental policy violations and reduces compliance burden (audits, regulator requests, right‑to‑be‑forgotten workflows).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Finance can forecast log spend via level/route budgets tied to traffic assumptions.</li>
              <li>Legal and privacy teams gain confidence that logging aligns to policies by default.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Team effectiveness</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A shared logging contract unifies how teams speak about failures (consistent taxonomy for errors, causes, and impact). New hires get productive faster because observability primitives look the same across services (reduced cognitive load and fewer &ldquo;where do I find that&rdquo; questions).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Cross‑functional debugging improves when logs, traces, and metrics share IDs and labels.</li>
              <li>Risky launches are de‑risked by temporarily increasing sampling and level verbosity for the affected surfaces.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create dashboards per service that chart rate by level and top error signatures with links to traces.</li>
              <li>Define privacy test cases that assert redaction on representative payloads (emails, tokens, addresses).</li>
              <li>Report quarterly on log volume vs. spend with recommended sampling adjustments.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Typed logger and middleware</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a single logger utility that injects requestId, traceId, userId, and environment by default.</li>
              <li>Provide HTTP/GraphQL/queue middlewares that start correlation and attach IDs to context automatically.</li>
              <li>Expose helpers for <span className="font-medium">safeFields</span> and <span className="font-medium">redact</span> to prevent accidental leaks at compile time (TypeScript types for sensitive keys).</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sampling controls and runtime flags</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add runtime flags to increase DEBUG for a target userId, cohort, or feature flag during investigations.</li>
              <li>Implement dynamic sampling policies per route, statusCode, and error.type to keep costs predictable.</li>
              <li>Include circuit breakers that cap per‑second log writes to protect the pipeline during thundering herds (traffic spikes).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pre‑production CI assert: no PII fields in logs for snapshot test fixtures and integration scenarios.</li>
              <li>Run &ldquo;canary&rdquo; environments with elevated sampling during risky launches, auto‑reverting after stability windows.</li>
              <li>Emit log schemas alongside code so dashboards and alerts stay in sync with versioned changes.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a base schema in a shared package; lint for required fields and prohibited keys.</li>
              <li>Bundle a one‑click &ldquo;investigate user&rdquo; query that pivots across logs, traces, and errors with the same IDs.</li>
              <li>Provide per‑service budgets and dashboards so teams own their logging costs and quality.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
