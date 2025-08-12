import React from "react";

export default function DocumentDatabases() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Flexible schema and document modeling
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Document databases store hierarchical data as self‑contained
              documents, commonly JSON or BSON. The schema is validated at write
              time by application code or optional validators, not enforced
              across collections by foreign keys (teams enjoy rapid iteration
              when fields evolve quickly between releases). Embedded
              subdocuments keep related data together to optimize locality for
              common read paths (fetching a profile with settings avoids
              cross‑table joins and round‑trips).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Model documents to reflect read patterns first, then handle write
              amplification deliberately (combining customer profile,
              preferences, and derived aggregates can lift read performance an
              order of magnitude on hot pages). Keep document sizes within
              recommended limits to prevent chunk splits or unbounded growth
              (storing large blobs elsewhere reduces memory pressure and page
              faults during scans).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Denormalization and consistency implications
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Denormalization is the norm: a field may be duplicated across many
              documents so reads avoid fan‑out. That shifts complexity to write
              paths, where updates must touch multiple documents (background
              repair jobs and change streams help converge state after partial
              failures or retries). Multi‑document transactions exist but often
              trade latency for simplicity; many teams prefer idempotent updates
              and compensations to keep hot paths lean.
            </p>
            <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Treat denormalized fields as caches of truth maintained
                elsewhere. Track provenance and define rebuild procedures (a
                nightly backfill or on‑write recalculation) so documents remain
                correct after incident workarounds or schema shifts over time.
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Start with read‑optimized shapes; document size budgets and
                versioning strategy.
              </li>
              <li>
                Use validators for critical invariants; keep optional fields
                backward‑compatible.
              </li>
              <li>
                Maintain repair jobs for denormalized fields to recover after
                edge failures.
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
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Throughput vs consistency trade‑offs
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Document stores scale horizontally through sharding and replica
              sets, prioritizing write throughput and low operational friction
              (teams launch features faster when the data model changes weekly).
              Reads from secondaries are often eventually consistent; write
              routing must respect shard keys to avoid scatter‑gather queries
              that degrade latency (access patterns should be stable and well
              understood ahead of traffic events).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              When customer experience requires fresh reads, route those
              requests to primaries or enforce causal consistency per session
              (UX surfaces like carts and payments typically prefer primary
              reads to avoid confusion after quick updates). For less sensitive
              dashboards, secondaries reduce load and cost substantially
              (non‑critical analytics can tolerate minute‑level staleness
              without harming outcomes).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Secondary indexes and query patterns
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Secondary indexes accelerate equality and range lookups but must
              be curated to avoid write amplification. Avoid unbounded wildcard
              indexes; instead tailor indexes to the predicates used in
              production queries (review logs to confirm shape and selectivity).
              Compute‑heavy filters should leverage pre‑materialized fields or
              aggregates instead of scanning entire collections on demand under
              load.
            </p>
            <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: TTL indexes and partial indexes control growth and
                cost. Expire ephemeral data automatically and restrict indexes
                to frequently queried subsets (cardinality and filter ratios
                determine whether an index helps or hurts during peaks).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Choose shard keys aligned to dominant access paths; avoid
                scatter‑gather.
              </li>
              <li>
                Send freshness‑sensitive reads to primaries; use secondaries for
                dashboards.
              </li>
              <li>
                Curate secondary indexes; measure write amplification and prune
                unused ones.
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
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Aggregation pipelines and computed views
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use aggregation pipelines to precompute metrics and reshape
              documents for specific screens (pushing compute to the database
              simplifies API code and speeds hot endpoints). Materialize
              frequently needed aggregates on write or via scheduled jobs so
              reads remain constant‑time (customer homepages benefit from
              pre‑joined &ldquo;summary&rdquo; documents that load in a single
              request during peaks).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Keep pipelines readable by splitting stages and adding comments in
              code alongside test fixtures (data‑driven tests with fixture
              documents catch pipeline regressions early). Version documents
              with a schemaVersion field and migrate lazily on read to avoid
              long blocking jobs (progressive migration keeps uptime high during
              large refactors and index changes).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Operational guardrails and observability
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Enforce per‑operation timeouts, payload size caps, and circuit
              breakers for hot collections (these controls prevent runaway scans
              and protect primaries during traffic spikes). Emit metrics by
              collection, operation, and shard to pinpoint hotspots rapidly
              (dashboards for p95 latency, queue depth, and replication lag
              shorten incident time to resolve when patterns change suddenly).
            </p>
            <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Change streams enable reactive updates to downstream
                caches or projections. Use idempotent consumers and backpressure
                to avoid event storms (replay strategies protect consistency
                after outages or maintenance windows).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Materialize aggregates for hot endpoints; avoid runtime scans
                under peak load.
              </li>
              <li>
                Version documents and migrate lazily; keep backfill jobs
                resumable.
              </li>
              <li>
                Set timeouts and size caps; surface replication lag and error
                rates per shard.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
