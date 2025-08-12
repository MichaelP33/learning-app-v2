import React from "react";

export default function RealTimeVsBatchProcessing() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Streaming Semantics & Ordering</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Delivery guarantees</strong>: <code>at-most-once</code>, <code>at-least-once</code>, and <code>exactly-once</code> (often &ldquo;effectively-once&rdquo; with idempotency) define failure behavior.
              </li>
              <li>
                <strong>Ordering</strong> is rarely global; rely on partitioned order (e.g., by <code>user_id</code>) and design for reordering, duplicates, and late events.
              </li>
              <li>
                <strong>Event time vs processing time</strong>: use watermarks to bound lateness and avoid unbounded state growth.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Windowing, Replay, and Compaction</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Windowing strategies: <code>tumbling</code>, <code>sliding</code>, and <code>session</code> windows trade accuracy and latency; choose by business SLOs (e.g., p95 latency).
              </li>
              <li>
                <strong>Replay</strong> enables backfills and bug fixes; capture <code>DLQs</code> and keep retention long enough for reprocessing.
              </li>
              <li>
                <strong>Compaction</strong> (e.g., Kafka log compaction) keeps the latest value per key to limit storage while preserving a reconstructable state.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Batch Windows and Latency</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Batch jobs process data in fixed windows (e.g., hourly), providing stable cost and simpler correctness proofs compared to continuous streams.
              </li>
              <li>
                Downstream consumers often tolerate <code>T+1</code> freshness for analytics; real-time is reserved for alerting, personalization, or financial risk.
              </li>
              <li>
                Hybrid patterns: micro-batches bridge extremes, providing near-real-time results without full streaming complexity.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define a business SLO first (e.g., &ldquo;alerts within 30s&rdquo;, &ldquo;dashboard within 15m&rdquo;) before choosing streaming vs batch.
              </li>
              <li>
                Prefer partition keys that match access patterns (<code>tenant_id</code>, <code>device_id</code>); validate skew and add <code>compaction</code>.
              </li>
              <li>
                Treat schemas as contracts; evolve with <code>backward compatibility</code> and schema registry.
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
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Costs, Risk, and Value Timing</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Streaming introduces operational overhead (24/7 pipelines, on-call). Use it when real-time value is clear (fraud detection, incident alerting).
              </li>
              <li>
                Batch reduces cognitive load and cost variability; its suitable for finance closes, periodic KPIs, and compliance reports.
              </li>
              <li>
                Value timing: &ldquo;sooner is better&rdquo; isnt free; quantify business impact to justify the stream.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Org Readiness & Skills</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Streaming requires expertise in <code>stateful operators</code>, <code>watermarks</code>, and <code>backpressure</code>; batch leans on SQL and schedulers.
              </li>
              <li>
                Provide paved paths for both: templates for <code>Flink</code>/<code>Spark Structured Streaming</code> and for batch orchestration.
              </li>
              <li>
                Define SLAs for consumers: expected freshness, limits under reprocessing, and behavior during incidents.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use cost budgets and autoscaling policies; alert on lag metrics (<code>consumer_lag</code>, <code>p99_latency</code>).
              </li>
              <li>
                Keep a replay story: retention, checkpoints, and deterministic code; version operators in source control.
              </li>
              <li>
                Document business fallbacks (e.g., degrade to last-good snapshot when streams are impaired).
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
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reference Patterns</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Streaming: source &rarr; broker (<code>Kafka</code>/<code>Kinesis</code>) &rarr; processors (<code>Flink</code>) &rarr; sinks (<code>delta lake</code>, <code>Elasticsearch</code>, <code>feature store</code>).
              </li>
              <li>
                Batch: extractors &rarr; object storage (<code>S3</code>/<code>GCS</code>) &rarr; warehouse ELT (<code>dbt</code>) with <code>incremental models</code>.
              </li>
              <li>
                Hybrid: micro-batch using <code>Spark</code> or <code>materialized views</code> for rolling freshness on key datasets.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reliability, State, and Backpressure</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Make writes idempotent (<code>merge</code>/<code>upsert</code> with <code>event_id</code>); encode <code>exactly-once</code> via transactional sinks.
              </li>
              <li>
                Use checkpoints and <code>savepoints</code>; expose lag, watermark delay, and error rates in dashboards.
              </li>
              <li>
                Implement backpressure strategies: rate-limit sources, scale consumers, or buffer with bounded queues.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Keep <code>schemas</code> in a registry; evolve with compatibility modes and canary consumers.
              </li>
              <li>
                Separate compute pools for hot paths vs batch backfills; tag costs by pipeline.
              </li>
              <li>
                Treat pipelines as code: code review, tests with recorded fixtures, and load tests for peak days.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}