import React from "react";

export const articleFormatVersion = 2;

export default function DocumentDatabases() {
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
              A document database stores{" "}
              <strong>self‑contained JSON‑like documents</strong> (e.g., a whole
              customer profile with settings) so an app can fetch everything it
              needs in <strong>one quick grab</strong>.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Why users feel it
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Snappy page loads</strong> for object‑centric screens
                (profiles, carts, dashboards).
              </li>
              <li>
                <strong>Fast iteration</strong>&mdash;add a field without a big
                table migration.
              </li>
              <li>
                <strong>Fewer round‑trips</strong> when related data is embedded
                together.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Sticky mental model
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Packed lunch.&rdquo; You grab one box with everything
              inside&mdash;super quick to serve, but if the recipe changes you
              must update <strong>many</strong> boxes.
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
                    Reads are fast (data is co‑located) — so pages feel snappy.
                  </li>
                  <li>
                    Schemas can evolve quickly — so teams ship features faster.
                  </li>
                  <li>
                    Horizontal scale is straightforward — so throughput grows
                    with demand.
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">
                  Limits
                </h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Often <strong>duplicate</strong> data for speed
                    (denormalization) — needs repair jobs to stay correct.
                  </li>
                  <li>
                    Writes/repairs are more complex; poor shard keys cause
                    scatter‑gather — pick keys that match filters.
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
                &ldquo;Schemaless means structure doesn&rsquo;t matter.&rdquo;
                &rarr; False — Impact: data drift; Fix: validators/conventions.
              </li>
              <li>
                &ldquo;Any shard key is fine.&rdquo; &rarr; False — Impact:
                fan‑out queries; Fix: key on dominant filter (e.g., user_id).
              </li>
              <li>
                &ldquo;Indexes are free.&rdquo; &rarr; False — Impact: slower
                writes; Fix: curate to real predicates; prune unused.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Related Glossary (terms &amp; tech)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Document / Collection</strong>: a JSON‑like record; a
                grouping of documents (e.g., users).
              </li>
              <li>
                <strong>JSON / BSON</strong>: text vs binary encodings; BSON
                adds extra types (MongoDB).
              </li>
              <li>
                <strong>Schema Validation</strong>: optional rules that keep
                documents clean and predictable.
              </li>
              <li>
                <strong>Denormalization</strong>: duplicate fields to make reads
                fast; requires repair jobs.
              </li>
              <li>
                <strong>Aggregation Pipeline</strong>: server‑side stages to
                reshape/aggregate documents.
              </li>
              <li>
                <strong>Secondary Index</strong>: extra phone books for lookups
                beyond the primary key.
              </li>
              <li>
                <strong>TTL / Partial Index</strong>: expire old docs
                automatically; index a subset only.
              </li>
              <li>
                <strong>Shard / Shard Key</strong>: split data across machines;
                key must match filters.
              </li>
              <li>
                <strong>Replica Set</strong>: primary + secondaries for
                reads/failover; secondaries may lag.
              </li>
              <li>
                <strong>Eventual / Causal Consistency</strong>: staleness vs
                read‑after‑write per session.
              </li>
              <li>
                <strong>Change Streams</strong>: DB change subscriptions to keep
                caches/projections in sync.
              </li>
              <li>
                <strong>Materialized Projection</strong>: pre‑built summary
                document for constant‑time reads.
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
                <strong>Profiles &amp; settings</strong>: load everything for a
                page in a single read.
              </li>
              <li>
                <strong>Activity feeds / content hubs</strong>: pre‑combined
                objects for fast display.
              </li>
              <li>
                <strong>Feature iteration</strong>: add fields quickly across
                fast‑moving product teams.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              What good looks like
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Model documents to match <strong>dominant read paths</strong>;
                keep sizes within limits.
              </li>
              <li>
                Route <strong>must‑be‑fresh</strong> reads to primaries;
                dashboards to secondaries.
              </li>
              <li>
                Maintain <strong>repair jobs</strong> or{" "}
                <strong>on‑read migrations</strong> for denormalized fields.
              </li>
              <li>
                Curate <strong>secondary indexes</strong> to real predicates;
                prune unused ones.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Failure signals (customer words)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                &ldquo;The page is randomly slow.&rdquo; &rarr; Scatter‑gather
                from a poor shard key &rarr; Choose a key aligned to dominant
                filters.
              </li>
              <li>
                &ldquo;Totals are occasionally wrong.&rdquo; &rarr; Denormalized
                fields drifted &rarr; Run repair job; add provenance and rebuild
                path.
              </li>
              <li>
                &ldquo;Writes feel sluggish now.&rdquo; &rarr; Too
                many/overlapping indexes &rarr; Prune unused indexes; cap index
                count.
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
                profiles, playlists, preferences; shard by <code>user_id</code>;
                primary (or causal) reads for recency‑critical UIs; watch
                oversize docs and fan‑out queries.
              </li>
              <li>
                <strong>
                  Non‑Tech Enterprise (telecom/finserv/healthcare)
                </strong>
                : Customer 360, cases/claims; validators for critical fields,
                PHI/PII controls, change streams to warehouse; enforce retention
                via TTL.
              </li>
              <li>
                <strong>Startups (SaaS/marketplaces/consumer)</strong>:
                dashboards, notifications; move fast with flexible docs, add
                constraints later; track p95 latency and{" "}
                <strong>cost per 1k reads/writes</strong>.
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
                Simulate query shape and warn if a change will fan‑out across
                shards.
              </li>
              <li>
                Suggest shard keys and partial/TTL indexes tied to real filters.
              </li>
              <li>
                Generate change‑stream consumers that are idempotent and
                resilient.
              </li>
              <li>
                Keep documents within size limits and propose on‑read
                migrations.
              </li>
              <li>
                Flag write slowdowns caused by too many or overlapping indexes.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Review workflow (AI in PRs/design)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Ask AI to <strong>simulate query shapes</strong> and flag when a
                proposed query would <strong>fan‑out</strong> across shards.
              </li>
              <li>
                Check <strong>document size budgets</strong> and suggest{" "}
                <strong>partial/TTL indexes</strong> tied to real queries.
              </li>
              <li>
                Generate <strong>change‑stream consumers</strong> to keep
                downstream caches/projections up‑to‑date and idempotent.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Guardrails &amp; automation
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Collection checklist</strong>: max doc size, shard‑key
                rationale, primary‑read rules, index cap.
              </li>
              <li>
                <strong>On‑read migration helper</strong>: transparently
                upgrades old docs to the new shape.
              </li>
              <li>
                <strong>Repair job template</strong>: resumable, with
                backpressure, to fix denormalized fields.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Operational playbooks
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Latency spike</strong>: verify shard‑key selectivity;
                add precomputed projections; cap query time.
              </li>
              <li>
                <strong>Wrong totals</strong>: run repair job; add
                provenance/last‑rebuilt stamps; tighten validators.
              </li>
              <li>
                <strong>Write slowdown</strong>: prune/merge indexes; batch
                reindexing in maintenance windows.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Talk track (20 sec)
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Document stores are <strong>packed lunches</strong>
              &mdash;perfect for fast page loads and quick iteration. We shape
              docs for the hottest reads, send fresh‑must‑be reads to the
              primary, and keep denormalized fields healthy with validators,
              repair jobs, and change streams.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
