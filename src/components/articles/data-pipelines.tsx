import React from "react";

export default function DataPipelines() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Orchestration & Scheduling</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define DAGs that capture dependencies and retries; use sensors and SLAs to model upstream readiness.
              </li>
              <li>
                Prefer declarative configuration (e.g., <code>YAML</code> + <code>dbt</code>) and parameterized runs for backfills.
              </li>
              <li>
                Isolate environments (<code>dev</code>/<code>staging</code>/<code>prod</code>) with separate credentials and data sandboxes.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Retries, Idempotency, and Exactly‑once</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Make tasks <strong>idempotent</strong> by using deterministic keys (<code>event_id</code>, <code>natural keys</code>) and <code>upsert/merge</code> semantics.
              </li>
              <li>
                Use <code>checkpointing</code> and <code>watermarks</code> to resume safely; avoid side effects before commits.
              </li>
              <li>
                Treat &ldquo;exactly-once&rdquo; as a system property combining <code>at-least-once</code> delivery with idempotent sinks.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Backpressure & Flow Control</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Protect downstreams with <code>rate limits</code>, batching, and adaptive concurrency; shed load gracefully.
              </li>
              <li>
                Add <code>dead-letter queues</code> with remediation playbooks; track error shapes to prioritize fixes.
              </li>
              <li>
                Separate hot and cold paths; throttle non-critical recomputations during peak times.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Add <code>run_id</code> to every record and propagate <code>trace_id</code> across tasks; make reruns traceable.
              </li>
              <li>
                Keep configuration in source control; apply <code>code reviews</code> to DAGs and resource limits.
              </li>
              <li>
                Prefer small, composable tasks over monoliths; measure queue times and critical path duration.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Resilience, SLAs, and Cost</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Business trust hinges on on-time delivery; define SLAs and publish breach alerts with clear owner rotations.
              </li>
              <li>
                Costs concentrate around compute bursts, storage growth, and egress; tag pipelines and attribute to products.
              </li>
              <li>
                Strong pipelines reduce manual reconciliation and enable faster product launches by reusing reliable data assets.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Metadata, Lineage, and Observability</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Track column-level lineage and dataset owners; expose <code>freshness</code>, <code>row counts</code>, and <code>null ratios</code> to consumers.
              </li>
              <li>
                Embed <code>OpenTelemetry</code> in tasks; emit spans for extract, transform, and load phases; sample inputs for audits.
              </li>
              <li>
                Provide data catalogs with discoverability and contracts (&ldquo;gold&rdquo; datasets must meet usage and quality bars).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Add ownership metadata (<code>team</code>, <code>pager</code>, <code>slack</code>) at dataset creation.
              </li>
              <li>
                Budget for storage compaction and retention reviews; expire &ldquo;raw&rdquo; copies after verified promotion.
              </li>
              <li>
                Align backlog with reliability signals: top error signatures and longest critical paths get priority.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Platform Paved Paths</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Templates for common sources (e.g., <code>Postgres CDC</code>, <code>SaaS APIs</code>) with secrets via <code>Vault</code> and standardized error handling.
              </li>
              <li>
                Out-of-the-box <code>dbt</code> projects, <code>Airflow</code>/<code>Dagster</code> dags, and CI that runs tests and <code>data-diff</code> on PRs.
              </li>
              <li>
                Guardrails: resource quotas, concurrency caps, and budget alerts connected to ownership tags.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational Excellence & Runbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Provide runbooks for backfills, schema evolution, and reprocessing; automate blast-radius checks.
              </li>
              <li>
                Proactively test failure modes: inject retries, simulate partial outages, and verify idempotency.
              </li>
              <li>
                Keep a &ldquo;change calendar&rdquo; for high‑risk periods (e.g., finance close); freeze non-critical pipelines.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Add <code>canary</code> tasks and shadow pipelines before promoting changes; compare metrics.
              </li>
              <li>
                Build a dashboard with <code>freshness</code>, <code>lag</code>, <code>error_rate</code>, and <code>cost_per_run</code> by pipeline.
              </li>
              <li>
                Make datasets self‑service: docs links, lineage graph, and contact channels embedded in tables.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}