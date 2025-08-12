import React from "react";

export default function Normalization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          {/* Callout: Normal forms ladder */}
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Normal forms as a ladder of constraints</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Think of 1NF, 2NF, and 3NF as progressively stronger rules that turn loosely structured tables into stable models (each step removes a class of update anomalies and sharpens data integrity). 1NF flattens repeating groups; 2NF eliminates partial dependency on a composite key; 3NF removes transitive dependencies so non‑key columns depend only on the key.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">1NF, 2NF, 3NF in plain language</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <strong>1NF:</strong> Every field holds a single value, not arrays or nested records (no repeating columns like phone_1, phone_2). <strong>2NF:</strong> If a table has a composite primary key, every non‑key attribute must depend on the full key, not a subset (avoid attributes that belong to only half the key). <strong>3NF:</strong> No non‑key attribute depends on another non‑key attribute (prevent facts about facts, such as storing a city&rsquo;s region alongside city when region can be derived from city).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Normalization is not a rigid checkbox exercise; it is a tool for aligning tables with business facts (entities, relationships, and attributes) so reads and writes behave predictably under change.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Anomalies: update, insert, delete</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Poorly normalized designs suffer from three common anomalies: <strong>update</strong> (same fact stored in multiple rows must be changed everywhere), <strong>insert</strong> (you cannot add a new fact without unrelated data), and <strong>delete</strong> (removing one row accidentally deletes an independent fact). These drive inconsistency, production bugs, and frustrating rework (especially in OLTP systems with many concurrent writers).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Applying 3NF typically addresses these anomalies by ensuring each fact has one authoritative home (source of truth) with stable keys and explicit references.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Denormalization trade‑offs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Denormalization intentionally duplicates data to optimize read paths (fewer joins, simpler queries). It can reduce latency for dashboards or hot APIs, but shifts the burden to consistency mechanisms: triggers, materialized views, change data capture, or application logic (choose one and keep it tested). Use denormalization where the performance benefit is measurable and the update rate is manageable.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              A pragmatic sequence: normalize to 3NF, measure, then denormalize narrowly to remove proven bottlenecks (start with derived aggregates or prejoined views rather than duplicating raw attributes).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Write table intents as sentences: &ldquo;One row represents X; columns describe Y.&rdquo;</li>
              <li>Prove 2NF/3NF with dependency statements (attribute depends on the whole key and nothing but the key).</li>
              <li>Prefer surrogate keys for stability; keep natural keys as unique constraints (immutable business identifiers).</li>
              <li>Prototype joins on realistic data volume; record p95 latency before and after normalization.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          {/* Callout: Cost of inconsistency */}
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data quality compounds into trust</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Normalized schemas reduce contradictory numbers across reports and services (fewer &ldquo;which table is correct?&rdquo; incidents), improving stakeholder confidence and auditability. This enables faster decisions and lowers the cost of change over time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">OLTP vs analytics</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              OLTP workloads prioritize fast, consistent writes and transactional integrity (row‑level operations, strict constraints). Analytics workloads value wide scans, aggregations, and convenience of prejoined shapes. A common pattern is to normalize in the source OLTP database, then transform to denormalized star schemas in the warehouse (via ELT) for BI performance.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Trying to serve both OLTP and analytics from the same schema often forces awkward compromises; decouple surfaces where possible (operational store vs serving layer).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Iteration speed and team contracts</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Clear normalization clarifies ownership boundaries (which service or table owns which fact). With stable keys, downstream consumers can evolve independently using views or versioned interfaces (reduce cross‑team coordination overhead during releases).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Conversely, denormalization without a sync plan creates hidden coupling: small upstream changes propagate to many tables and caches (a maintenance drag that slows delivery).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Storage, costs, and SLOs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Normalized data typically uses less storage and yields smaller write amplification (fewer rows touch on updates). Denormalized models can be cheaper to read but more expensive to keep consistent (extra writes, rebuilds, and invalidations), which matters for SLOs under write‑heavy workloads.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Treat the trade‑off as an economics problem: optimize for the dominant path (user‑facing reads vs operational writes) with metrics guiding the decision.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Separate OLTP and analytics stores; use change data capture for downstream modeling.</li>
              <li>Document ownership for each attribute (which system publishes the source of truth).</li>
              <li>Track incident classes caused by anomalies; prioritize schema fixes over band‑aid ETL.</li>
              <li>Budget consistency work when planning denormalization (tests, rebuild jobs, and alerts).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          {/* Callout: Assisted modeling */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Assisted modeling and safe denormalization</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Provide schema suggestions that flag partial or transitive dependencies, propose candidate keys, and outline controlled denormalization patterns (materialized views, computed columns, or CDC‑driven tables) with validation steps.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Schema linting and migrations</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Add checks that detect multi‑valued columns, nullable foreign keys without constraints, or transitive dependencies inferred from column names (e.g., city and region). Generate migration plans that split tables, extract lookup entities, and backfill safely with idempotent steps.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Surface a dry‑run report showing expected impacts: index changes, foreign key updates, and data movement volume (so rollback is planned up front).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Query review and risk flags</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Highlight join patterns that suggest hidden duplication (fan‑out reads, many‑to‑many without junction tables). Warn when denormalized fields diverge from their source (drift), and propose repair jobs (periodic reconciliation) before errors reach users.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              For OLAP pipelines, recommend star schemas with dimension conformance and slowly changing dimension handling (type 2 where history matters, type 1 where it does not).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate a &ldquo;normalization check&rdquo; CI job on pull requests affecting schema.</li>
              <li>Offer codemods that replace embedded attributes with foreign keys and lookups.</li>
              <li>Ship a cookbook of denormalization patterns with test templates and rollback steps.</li>
              <li>Track drift metrics for denormalized fields; alert when thresholds are exceeded.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}