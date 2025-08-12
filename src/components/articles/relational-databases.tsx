import React from "react";

export default function RelationalDatabases() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">ACID transactions and durability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Relational databases guarantee atomicity, consistency, isolation, and durability across multi‑statement operations. Atomicity means a set of changes either all commit or none do (preventing partial writes that corrupt business state). Consistency enforces invariants via constraints so data never violates schema rules. Isolation controls how concurrent transactions observe one another through isolation levels. Durability ensures committed data survives crashes through write‑ahead logs and checkpointing (crash‑recovery relies on redo/undo logs and fsync policies).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Practical workloads lean on these properties to coordinate money movement, inventory reservations, or idempotent workflow steps (customer operations frequently span multiple rows and tables). A good mental model is &ldquo;a transaction is a contract&rdquo; between the application and the database: either the contract completes fully or it is rolled back cleanly with no side effects (this framing reduces complex failure handling across services).
            </p>
            <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Isolation is a spectrum. Read committed prevents dirty reads, repeatable read prevents non‑repeatable reads, and serializable prevents phantoms (choose the weakest level that preserves correctness to minimize contention under load).
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Normalization basics and data integrity</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Normalization decomposes tables to eliminate redundancy and update anomalies. First normal form requires atomic values; second and third normal forms remove partial and transitive dependencies (teams often target 3NF for OLTP while tolerating selective denormalization for read performance). Normalized schemas reduce ambiguity and improve correctness when many writers collaborate (shared databases with dozens of services demand predictable constraints and keys).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Denormalization is a deliberate optimization that duplicates derived fields to accelerate common reads (for example, caching order totals on the order header to avoid aggregate scans under high traffic). It should be documented with provenance so it can be recomputed when upstream fields change (having a regeneration job protects against drift after unusual incident paths or manual fixes).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Default to transactions for any operation that touches multiple rows or tables.</li>
              <li>Use explicit foreign keys, unique constraints, and check constraints to encode rules.</li>
              <li>Normalize to 3NF first; add selective denormalization only for measured hot paths.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Typical workloads and scalability posture</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Relational systems excel at high‑fidelity OLTP: many small, consistent writes and point reads with strict ordering (most product transactions are under tens of milliseconds when indexed appropriately). They also power reporting through read replicas and materialized views, but deep analytical scans belong in warehouses where columnar formats shine (separating OLTP from OLAP reduces lock contention and operational risk during month‑end spikes).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Teams plan capacity around connection pooling, replica lag, and burst workload envelopes (unexpected traffic surges during campaigns frequently hit connection limits first). Align SLOs with realistic isolation levels: many organizations run at read committed or repeatable read for throughput, escalating to serializable only within narrow critical sections (this approach preserves business guarantees without sacrificing latency under peak demand).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consistency models and cross‑service coordination</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Within a single database, ACID provides strong consistency; across services, consistency becomes a design decision. Read replicas offer scale‑out reads but introduce replica lag (eventual consistency appears as stale reads when traffic hits replicas immediately after writes). Cross‑service workflows commonly use outbox patterns and idempotent consumers so messages reflect committed state (this pattern avoids &ldquo;double spend&rdquo; during retries and failovers).
            </p>
            <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Business stakeholders care about end‑to‑end correctness. Make consistency guarantees explicit in product docs and SLAs (for example, &ldquo;account balances are immediately consistent; analytics dashboards may lag by two minutes&rdquo; for clarity during incidents and audits).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Run OLTP on primary; offload heavy reads to replicas or materialized views.</li>
              <li>Publish explicit SLAs for freshness on replicas and analytics surfaces.</li>
              <li>Use outbox + consumer idempotency for cross‑service consistency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Joins, indexes, and query design</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Start with selective indexes that match the leftmost columns of your most common predicates, then cover joins with composite keys where appropriate (join order and filtering selectivity drive plans more than raw table size). Prefer simple, sargable predicates to enable index use and avoid functions on indexed columns (wrapping columns forces scans even when a suitable index exists).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              For joins, aim to join on stable identifiers, not text fields (surrogate keys keep joins lean and avoid collation surprises). Use explain plans to confirm cardinality estimates and join strategies before shipping changes (small data in dev often hides expensive plans that surface only at production scale). Keep a baseline of slow query logs to detect regressions proactively.
            </p>
            <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Index anti‑patterns include over‑indexing, overlapping prefixes, and unused bloat. Consolidate redundant indexes and monitor write amplification (excessive indexes increase CPU and WAL volume during hot write spikes, eroding SLOs unexpectedly).
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational patterns and safety rails</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use migrations that are backward‑compatible and chunk large data changes into batches (online schema changes or phased rollouts minimize lock time and replication lag). Enforce connection pooling at the app layer and cap long‑running transactions to avoid vacuum starvation (timeouts and statement time limits preserve cluster health during incident conditions).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Bake retry logic with idempotency keys into write paths so transient failures do not duplicate effects (payment and fulfillment workflows benefit from deterministic replays during partial outages). Capture query plans and row counts in observability to contextualize latency spikes (knowing whether scans or sorts appeared explains sudden tail latency under traffic bursts).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Design sargable predicates; verify with explain plans in CI for hot queries.</li>
              <li>Batch migrations and use feature flags to decouple schema from deploys.</li>
              <li>Instrument slow query logs and set statement timeouts aligned to SLOs.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
