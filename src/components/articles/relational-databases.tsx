import React from "react";

export const articleFormatVersion = 2;

export default function RelationalDatabases() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Plain-English definition
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              A relational database is a <strong>rule‑bound ledger</strong> for
              your app. It stores data in tables and guarantees that multi‑step
              changes are <strong>all‑or‑nothing</strong> and{" "}
              <strong>stay correct</strong> even if servers crash.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Why users feel it
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                The order they just placed{" "}
                <strong>exists and is accurate</strong>.
              </li>
              <li>
                Account balances <strong>update right away</strong>.
              </li>
              <li>
                History is <strong>auditable</strong> (refunds, disputes,
                compliance).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Sticky mental model
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Contract at the vault.&rdquo; A transaction is like signing
              a contract in a bank vault: either <strong>every clause</strong>{" "}
              happens, or <strong>nothing</strong> changes&mdash;no partial
              updates.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Strengths &amp; limits (trade‑offs)
            </h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">
                  Strengths
                </h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Strong truthfulness across users — so shared data stays
                    consistent across features.
                  </li>
                  <li>
                    Powerful joins/queries — so product teams can answer complex
                    questions quickly.
                  </li>
                  <li>
                    Financial‑grade integrity — so money/inventory operations
                    are safe by default.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">
                  Limits
                </h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Under heavy writes or complex joins, strict rules can slow
                    things — plan indexes and query shape.
                  </li>
                  <li>
                    Giant schema changes need careful, phased rollouts — avoid
                    long locks and risky deploys.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Common misunderstandings
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                &ldquo;Replicas are instant.&rdquo; &rarr; They{" "}
                <strong>lag</strong> — Impact: users see stale data; Fix: route
                freshness‑critical reads to primary.
              </li>
              <li>
                &ldquo;More indexes = faster.&rdquo; &rarr; Helps reads but{" "}
                <strong>slows writes</strong> — Impact: slower checkouts; Fix:
                curate minimal indexes.
              </li>
              <li>
                &ldquo;Migrations are trivial.&rdquo; &rarr; Big changes can{" "}
                <strong>lock tables</strong> — Impact: app pauses; Fix: phased
                migration plan.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Related Glossary (terms &amp; tech)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>ACID</strong> — all‑or‑nothing, valid, isolated, durable
                transactions. <em>Why it matters:</em> prevents partial orders
                and double charges.
              </li>
              <li>
                <strong>Primary/Foreign Key</strong> — unique IDs and links
                across tables. <em>Why it matters:</em> keeps relationships
                sound (no orphaned rows).
              </li>
              <li>
                <strong>Index</strong> — phone book for fast lookups.{" "}
                <em>Why it matters:</em> speeds hot reads without scanning whole
                tables.
              </li>
              <li>
                <strong>Query Planner / EXPLAIN</strong> — how the DB will fetch
                data. <em>Why it matters:</em> confirms performance before
                release.
              </li>
              <li>
                <strong>Isolation Levels</strong> — who sees in‑progress work.{" "}
                <em>Why it matters:</em> balances correctness vs throughput.
              </li>
              <li>
                <strong>Read Replica</strong> — copy of the primary for reads.{" "}
                <em>Why it matters:</em> scales dashboards without harming OLTP.
              </li>
              <li>
                <strong>Materialized View</strong> — pre‑computed query result.{" "}
                <em>Why it matters:</em> fast analytics with lower primary load.
              </li>
              <li>
                <strong>Outbox &amp; Idempotency</strong> — reliable
                messaging/write safety. <em>Why it matters:</em> avoids double
                charges on retries.
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
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Where it shows up
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Checkout &amp; billing</strong>: prevents &ldquo;paid
                but no order&rdquo; or double charges.
              </li>
              <li>
                <strong>Inventory &amp; reservations</strong>: keeps counts
                accurate during flash sales.
              </li>
              <li>
                <strong>Compliance &amp; audits</strong>: produces trustworthy
                histories for regulators and finance.
              </li>
              <li>
                <strong>Reporting vs product traffic</strong>: dashboards move
                to replicas/materialized views.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              What good looks like
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Hot queries are <strong>index‑backed</strong> and written
                sargably.
              </li>
              <li>
                Dashboards/heavy reads use{" "}
                <strong>replicas/materialized views</strong> with a{" "}
                <strong>freshness SLA</strong> (e.g., &ldquo;may lag up to 2
                minutes&rdquo;).
              </li>
              <li>
                <strong>Phased, backward‑compatible migrations</strong> (add
                &rarr; backfill &rarr; switch) avoid long locks.
              </li>
              <li>
                <strong>Idempotent writes &amp; timeouts</strong> keep retries
                safe and tails predictable.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Failure signals (customer words)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                &ldquo;I saved but see old data.&rdquo; &rarr; Read from replica
                before catch‑up &rarr; Route freshness‑critical reads to
                primary.
              </li>
              <li>
                &ldquo;The site is slow during promos.&rdquo; &rarr; Missing
                indexes or pool exhaustion &rarr; Add/selective indexes;
                right‑size pool.
              </li>
              <li>
                &ldquo;The deploy locked the app.&rdquo; &rarr; Blocking
                migration &rarr; Phase changes (add &rarr; backfill &rarr;
                switch).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Industry lenses
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Enterprise Tech (Amazon/NVIDIA/Spotify)</strong>:
                Payments, subscriptions, entitlement checks; OLTP on primary,
                analytics via replicas/warehouse; watch hot partitions and
                month‑end jobs.
              </li>
              <li>
                <strong>
                  Non‑Tech Enterprise (telecom/finserv/healthcare)
                </strong>
                : Billing cycles, claims/KYC; conservative isolation, strict
                access controls, documented RPO/RTO; avoid ad‑hoc reports on
                primary.
              </li>
              <li>
                <strong>Startups (SaaS/marketplaces/consumer)</strong>: Orders,
                carts, credits; start with one primary, add replicas later;
                don&rsquo;t over‑index; aim for stable p95 latency and low
                on‑call noise.
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
          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              TL;DR (AM-friendly)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Check SQL diffs for full scans and suggest the smallest safe
                index.
              </li>
              <li>
                Draft a phased migration plan so releases don&rsquo;t lock the
                app.
              </li>
              <li>
                Translate ORM calls into clear SQL so everyone can review risk.
              </li>
              <li>
                Route must‑be‑fresh reads to primary; send dashboards to
                replicas.
              </li>
              <li>
                Flag slow queries in CI before customers feel the slowdown.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Review workflow (AI in PRs/design)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Ask the AI to <strong>EXPLAIN</strong> changed SQL and flag full
                scans; propose minimal, non‑overlapping indexes.
              </li>
              <li>
                Have it draft a <strong>phased migration plan</strong> (add
                nullable &rarr; backfill in batches &rarr; flip feature flag
                &rarr; drop old).
              </li>
              <li>
                Use AI to convert <strong>ORM magic</strong> into explicit SQL
                to verify query shape on hot paths.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Guardrails &amp; automation
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                CI check that critical queries meet a{" "}
                <strong>slow‑query budget</strong> and use indexes.
              </li>
              <li>
                A standard <strong>idempotent‑write</strong> template
                (idempotency keys + retry/backoff).
              </li>
              <li>
                A helper that routes{" "}
                <strong>freshness‑critical reads to primary</strong>; replicas
                for dashboards.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Operational playbooks
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Promo spike</strong>: verify indexes, raise pool limits
                carefully, shift heavy reads to replicas/materialized views.
              </li>
              <li>
                <strong>Dashboard surge</strong>: throttle/report lag, favor
                warehouse paths, protect OLTP.
              </li>
              <li>
                <strong>Migration wobble</strong>: pause backfill, flip flag
                back, keep old codepath live until safe.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Talk track (20 sec)
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Relational DBs are the vault for customer truth. We keep
              hot queries index‑backed, push dashboards to replicas with a
              freshness SLA, and ship schema changes in phases so rush hour
              never locks the vault.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
