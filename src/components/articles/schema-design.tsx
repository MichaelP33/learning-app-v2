import React from "react";

export default function SchemaDesign() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          {/* Callout: Fit for purpose */}
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Design schemas to fit workload purpose</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Different workloads demand different shapes: OLTP favors normalized, narrow rows and strict constraints; OLAP favors denormalized, wide tables optimized for scans and aggregates (star and snowflake patterns). Mixing goals in one schema creates compromises that satisfy neither well.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">OLTP vs OLAP patterns</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              In OLTP, aim for 3NF, compact indexes, and lean rows with foreign keys to maintain integrity (frequent, small transactions). In OLAP, model facts and conformed dimensions with surrogate keys, slowly changing dimensions, and precomputed aggregates where beneficial (queries scan columns and join fewer tables).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Separate operational stores from analytics warehouses via ELT/ETL; let each evolve independently with their own performance targets and governance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Partitioning and sharding</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <strong>Partitioning</strong> splits a table within a database based on a key (time, tenant, region) to enable pruning, parallelism, and data lifecycle policies. <strong>Sharding</strong> distributes data across databases or nodes to increase capacity and isolate hotspots (comes with cross‑shard complexity for joins and transactions).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Choose keys that align with access patterns to avoid imbalanced shards (consider hot tenants and seasonal spikes). Plan for rebalancing and backfills as a first‑class capability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Constraints, naming, and conventions</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use primary keys, foreign keys, unique constraints, and check constraints to encode business rules in the database (defense‑in‑depth with application validation). Adopting consistent naming (singular tables, snake_case columns, and suffixes like _id, _at) improves readability and reduces onboarding time.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Document invariants beside the schema (not just in code) so teams can reason about safety when evolving tables under load.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define a schema style guide with examples and lints enforced in CI.</li>
              <li>Prefer surrogate keys for stability; add unique constraints for natural identifiers.</li>
              <li>Partition by time for event data; align retention and archival with partitions.</li>
              <li>Label cross‑shard operations; keep counts and budgets to prevent accidental fan‑out.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          {/* Callout: Cost of change */}
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Design for evolution, not just day one</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Most costs show up during change: backfills, reindexing, and rollout risk. Schemas that encode clear ownership and constraints make change safer (teams can move faster when invariants are explicit and testable).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Team boundaries and data contracts</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Stable keys and clear foreign relationships reduce coordination across services (interfaces become predictable). Views and versioned tables let producers evolve without breaking consumers (consumer‑driven contracts for data).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Denormalization across domains without contracts creates tight coupling; a small attribute change can cascade across jobs and caches (plan for sync and drift detection).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reliability and compliance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Constraints act as guardrails that prevent invalid states (e.g., orphaned rows, negative balances). Naming and documentation support audits and lineage (who owns what, where it flows), essential for regulated industries and privacy requirements.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Cost transparency improves when storage, indexes, and retention have explicit rationale (finance can map capacity to value streams).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt RFCs for schema changes over a threshold (size, risk, or blast radius).</li>
              <li>Track drift between contracts and physical schema; alert when divergences appear.</li>
              <li>Precompute denormalized views for analytics rather than duplicating source attributes.</li>
              <li>Instrument migrations (rows processed per second, error counts, replica lag).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          {/* Callout: Migration safety */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Schema evolution playbooks</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Generate stepwise migrations for additive changes (backfill, dual‑write, cutover, clean‑up) and strategies for breaking changes (shadow tables, expand‑contract, or feature‑flagged fallbacks). Include test harnesses for idempotency and partial retries.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Partitioning and sharding helpers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Recommend partition keys that match access patterns, demonstrate pruning benefits, and estimate storage per partition. For sharding, suggest key choices, cross‑shard query alternatives, and rebalancing procedures (with safety windows and backpressure controls).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Provide runbooks for hot‑shard mitigation and tenant moves (with minimal downtime and correctness guarantees).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Constraint and naming lints</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Enforce presence of primary keys, foreign keys on reference columns, unique constraints for business identifiers, and checks for domain rules. Lint names for clarity and consistency (suffixes, tense, and case) to reduce cognitive load across teams.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Auto‑generate documentation pages and ERDs from the schema so onboarding is fast and reviews are grounded in shared visuals.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Run &ldquo;schema diff&rdquo; in CI and attach risk notes to pull requests.</li>
              <li>Stage large backfills with checkpoints; verify with sampling and reconciliation jobs.</li>
              <li>Keep a &ldquo;breaking changes&rdquo; checklist with rollback paths and data recovery steps.</li>
              <li>Publish a catalog of table ownership and contracts with lineage links.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}