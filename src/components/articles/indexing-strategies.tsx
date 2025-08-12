import React from "react";

export default function IndexingStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          {/* Callout: Right index for the job */}
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Choose the right index for the access pattern</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Indexes accelerate reads by maintaining auxiliary data structures tailored to lookups (you pay extra writes and storage for that speed). Align index type and order to how queries filter and sort; measure selectivity and cardinality to validate benefit.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">B‑tree vs hash</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <strong>B‑tree</strong> indexes support range scans, ordered traversal, and prefix lookups (great for BETWEEN, &gt;, &lt;, and ORDER BY). They are the default in many relational engines and handle mixed workloads well. <strong>Hash</strong> indexes map keys to buckets for O(1) equality checks but provide no ordering (ideal for exact matches on high‑cardinality keys, not for ranges).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Some systems automatically choose internal variants (e.g., skip lists) yet expose them as B‑trees; focus on the semantic capability required by your predicates rather than low‑level implementation details.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Composite and covering indexes</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              A <strong>composite</strong> index orders multiple columns. The leftmost prefix rule means predicates must use the leading columns to leverage the index effectively (filtering on the second column only often cannot seek). A <strong>covering</strong> index includes all columns needed to answer a query (predicates, joins, and select list) so the engine avoids lookups to the base table.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Design order from most selective to least, then align with GROUP BY and ORDER BY when possible (one index can serve multiple queries if you harmonize shapes).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Selectivity, cardinality, and sargability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <strong>Selectivity</strong> is the fraction of rows filtered by a predicate (lower fraction means higher selectivity, more benefit). <strong>Cardinality</strong> is the number of distinct values. Keep predicates <strong>sargable</strong> by avoiding functions on indexed columns and by using normalized forms (e.g., store lowercase in a computed column for case‑insensitive search rather than wrapping LOWER(column) in the predicate).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Profile queries with realistic data distributions; small dev datasets often miss edge cases (skew, hot keys, and non‑uniform histograms).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Design composite indexes to match WHERE, JOIN, GROUP BY, and ORDER BY in that order.</li>
              <li>Use INCLUDE columns to make frequently used queries covering without bloating the key.</li>
              <li>Prefer equality on leading columns; move range predicates to the rightmost position.</li>
              <li>Measure on production‑like data; verify that index seek + residual predicate beats a scan.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          {/* Callout: Maintenance costs */}
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Maintenance overhead and write amplification</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Every index must be updated on INSERT/UPDATE/DELETE (write amplification). Over‑indexing speeds a few reads but can throttle throughput on write‑heavy services, increase lock contention, and inflate storage costs (especially with wide covering indexes).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational posture and SLOs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Index design is a lever on both latency and tail behavior (p95/p99). The right covering index can turn a multi‑second scan into a millisecond seek, directly impacting user‑facing SLOs. Conversely, too many secondary indexes slow migrations, increase replication lag, and complicate failovers.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Teams should treat index changes like code: review, test, and roll out safely with observability (compare plan shapes before and after).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Governance: drift and entropy control</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Over time, ad‑hoc indexes accumulate (created to fix one query in a rush). Unused or redundant indexes create entropy. Establish review cadences: track usage, drop duplicates, and consolidate shapes (document the canonical composite orders so new queries align).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Align with product priorities: optimize for the top interactions first (checkout, search, onboarding), then work down the long tail.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Track index usage and fragmentation; set thresholds for rebuild vs reorganize.</li>
              <li>Budget write costs when proposing new covering indexes (estimate added bytes per row).</li>
              <li>Prefer fewer, well‑designed composites over many overlapping single‑column indexes.</li>
              <li>Gate index changes behind migrations with rollout metrics and safe rollback steps.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          {/* Callout: Assisted design */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Index advisors grounded in real predicates</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Generate candidate composite and covering indexes from actual workload samples, rank by expected benefit, and provide the DDL with safety notes (lock considerations, online options, and backfill impact on replicas).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sargability and rewrite hints</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Detect anti‑patterns like functions on indexed columns, leading wildcards, and mismatched collations. Propose rewrites that make predicates sargable (computed columns or persisted expressions instead of per‑row functions).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Include plan diffs to demonstrate expected improvements (seek vs scan, key lookups removed, memory grants reduced).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lifecycle: create, monitor, prune</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Ship playbooks for safe creation under load, monitoring with telemetry (logical reads, usage counts, fragmentation), and pruning heuristics that identify redundant shapes (subset and superset relationships) to reduce entropy.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              For write‑heavy tables, estimate additional write amplification and propose alternatives (caching, partial indexes, or query redesign) before adding heavy covering indexes.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate &ldquo;index diff&rdquo; PR comments with predicted plan changes and risk level.</li>
              <li>Maintain a living catalog of approved composite orders per table.</li>
              <li>Backtest candidate indexes against slow‑query logs and production histograms.</li>
              <li>Tie index metrics to user journeys so teams optimize what customers actually feel.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
