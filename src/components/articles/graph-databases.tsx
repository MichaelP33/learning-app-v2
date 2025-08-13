import React from "react";

export const articleFormatVersion = 2;

export default function GraphDatabases() {
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
              A graph database stores data as <strong>nodes</strong> and{" "}
              <strong>edges</strong> so
              <strong> relationships are first‑class</strong>. You query
              connections directly (friend‑of‑friend, shortest path) instead of
              stitching rows with joins.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Why users feel it
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Recommendations feel &ldquo;right&rdquo; because they flow
                through mutual connections.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>
                    Example: &ldquo;People who liked A also liked B&rdquo; via
                    shared follows or tags.
                  </li>
                  <li>
                    Plain English: the app looks at your friends&rsquo; friends
                    to find good matches.
                  </li>
                </ul>
              </li>
              <li>
                Fraud rings pop out as <strong>clusters</strong> and short
                cycles.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>
                    Example: many accounts sharing the same device or card form
                    a suspicious ring.
                  </li>
                  <li>
                    Plain English: if lots of &ldquo;dots&rdquo; connect to the
                    same things, it&rsquo;s a red flag.
                  </li>
                </ul>
              </li>
              <li>
                Org charts and permissions resolve in{" "}
                <strong>one or few hops</strong>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>
                    Example: &ldquo;manager of my manager&rdquo; is a two‑hop
                    path.
                  </li>
                  <li>
                    Plain English: the system walks the org tree the way a
                    person would.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Sticky mental model
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Subway map.&rdquo; You start at a station (node) and ride
              edges to reach a destination; <strong>transfers = hops</strong>{" "}
              and the map makes the best route obvious.
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
                    Relationship traversals are fast — so multi‑hop questions
                    stay predictable.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Translation: you can follow connections without
                        expensive joins.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Evolving schemas — so product teams can adapt models without
                    heavy migrations.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Translation: you can add new node/edge types without
                        reshaping tables.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Pattern queries (paths, triangles) — so you can find shapes,
                    not just rows.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Example: &ldquo;friends of friends who also like
                        X&rdquo; in one query.
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">
                  Limits
                </h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Cross‑partition traversals/global writes can be slower —
                    plan sharding and entry points.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Tip: start from a selective label+property index to
                        avoid fan‑out.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Hot nodes (high‑degree hubs) concentrate load — add
                    projections and cap hops.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Tip: precompute neighborhood summaries for the busiest
                        hubs.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Query planning pitfalls — broad start sets explode search;
                    use selective indexes.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Tip: verify with EXPLAIN/PROFILE to confirm a tight
                        starting set.
                      </li>
                    </ul>
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
                &ldquo;Graphs replace all SQL.&rdquo; &rarr; Impact: misuse on
                tabular analytics; Fix: use graphs for relationships, a
                warehouse for aggregates.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: use the subway for routes, not for counting
                    every receipt.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Just add edges later.&rdquo; &rarr; Impact: hot‑node
                hotspots and expensive re‑keys; Fix: model cardinality and
                sharding upfront.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: plan the map before rush hour so stations
                    don&rsquo;t overload.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;More hops = more insight.&rdquo; &rarr; Impact: noisy
                results and latency spikes; Fix: cap depth/unique paths and add
                weights.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Tip: two to three hops often balances signal and speed.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Related Glossary (terms &amp; tech)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Node / Edge / Property</strong> — basic graph building
                blocks. <em>Why it matters:</em>
                everything is a path over these primitives.
              </li>
              <li>
                <strong>Label / Relationship Type</strong> — categorize
                nodes/edges. <em>Why it matters:</em> lets planners and indexes
                narrow start sets.
              </li>
              <li>
                <strong>Cypher / Gremlin</strong> — graph query languages.{" "}
                <em>Why it matters:</em> express patterns (paths) directly.
              </li>
              <li>
                <strong>Label+Property Index</strong> — selective starting
                points. <em>Why it matters:</em> keeps traversals bounded.
              </li>
              <li>
                <strong>Traversal Depth / Uniqueness</strong> — hop limits and
                no‑repeat rules. <em>Why it matters:</em>
                prevents cycles from blowing up search.
              </li>
              <li>
                <strong>High‑Degree (Hot) Node</strong> — hubs with many edges.{" "}
                <em>Why it matters:</em> cause fan‑out and p95 spikes.
              </li>
              <li>
                <strong>Graph Projection / Materialized View</strong> —
                precomputed subgraph. <em>Why it matters:</em>
                stable latency for common reads.
              </li>
              <li>
                <strong>Shortest / Weighted Path</strong> — route by hops or
                scores. <em>Why it matters:</em> drives relevant
                recommendations.
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
                <strong>Recommendations</strong>: friend‑of‑friend and
                similar‑creator feeds.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Examples: &ldquo;Because you liked X,&rdquo; &ldquo;Users
                    like you follow Y.&rdquo;
                  </li>
                </ul>
              </li>
              <li>
                <strong>Fraud/Risk</strong>: ring detection, shared
                device/payment clusters.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Examples: chargeback clusters, synthetic identities sharing
                    anchors.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Org &amp; permissions</strong>: who can see/do what
                after reorgs and mergers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Examples: role inheritance, temporary delegations.</li>
                </ul>
              </li>
              <li>
                <strong>Supply/Routes</strong>: path finding across warehouses,
                drivers, and orders.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Examples: shortest delivery route, alternative paths during
                    outages.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              What good looks like
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Start from <strong>selective labels + indexes</strong> → stable
                p95 latency.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: fewer random timeouts and smoother launches.</li>
                </ul>
              </li>
              <li>
                Cap hops and define <strong>weights/filters</strong> → relevant
                recommendations.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: higher CTR with predictable compute cost.</li>
                </ul>
              </li>
              <li>
                Precompute <strong>projections/materialized subgraphs</strong> →
                fewer latency spikes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: dashboards load fast even during peaks.</li>
                </ul>
              </li>
              <li>
                Document <strong>shard/key strategy</strong> for cross‑partition
                paths → predictable scale.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Payoff: painless growth and fewer production surprises.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Failure signals (customer words)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                &ldquo;Recommendations are weird.&rdquo; &rarr; Traversal depth
                too high or wrong weights &rarr; Cap hops; adjust edge
                weights/filters.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Why this happens: the search went too far and pulled weak
                    connections.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Query time spikes randomly.&rdquo; &rarr; Hot hub nodes
                cause fan‑out &rarr; Add projections/materialized views; start
                from selective sets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Why this happens: too many paths explode from one busy node.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Permissions look wrong after reorg.&rdquo; &rarr;
                Stale/missing edges &rarr; Reconcile sync; rebuild affected
                subgraphs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>What to check: ingestion lag and failed edge upserts.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Industry lenses
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Enterprise Tech (Amazon/NVIDIA/Spotify)</strong>: rec
                engines, knowledge graphs; watch high‑degree hubs and{" "}
                <strong>p95 latency</strong>; push heavy reads to projections
                with freshness budgets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: weekly rebuild of &ldquo;top similar
                    creators&rdquo; projections.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Non‑Tech Enterprise (telecom/finserv/healthcare)
                </strong>
                : fraud/compliance, MDM lineages; audit edges, protect PII,
                restrict ad‑hoc cross‑partition traversals.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: pre‑approved patterns; deny wide graph walks in
                    production.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Startups (SaaS/marketplaces/consumer)</strong>: start
                with one relationship‑heavy feature; minimal ETL; measure win
                rate and p95 before expanding.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: launch &ldquo;similar items&rdquo; first; add
                    &ldquo;who to follow&rdquo; later.
                  </li>
                </ul>
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
                We start queries from <strong>selective nodes</strong> and cap
                hops so results stay fast.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: begin at the smallest set and don&rsquo;t
                    over‑explore.
                  </li>
                </ul>
              </li>
              <li>
                We flag <strong>hot‑node risk</strong> and suggest
                projections/materialized subgraphs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: pre‑bake busy routes so rush hour is smooth.
                  </li>
                </ul>
              </li>
              <li>
                We help choose <strong>graph vs SQL/warehouse</strong> so each
                job uses the right tool.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: relationships in graph; counting/aggregates
                    in SQL/warehouse.
                  </li>
                </ul>
              </li>
              <li>
                We keep recommendations{" "}
                <strong>relevant and explainable</strong> with weights/filters.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: show why items connect (shared tags,
                    follows).
                  </li>
                </ul>
              </li>
              <li>
                We catch slow patterns in CI before customers feel the spike.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Plain English: warn on risky queries during review.</li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Review workflow (AI in PRs/design)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Ask AI to <strong>EXPLAIN</strong> match patterns, verify
                selective starts, and flag variable‑length expansions that can
                explode.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Checklist: tight start set, uniqueness rules, capped depth.
                  </li>
                </ul>
              </li>
              <li>
                Propose minimal <strong>label+property indexes</strong> and{" "}
                <strong>uniqueness constraints</strong> to keep merges clean.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Checklist: no overlapping indexes; one clear merge key.
                  </li>
                </ul>
              </li>
              <li>
                Surface <strong>cross‑partition</strong> traversals early and
                recommend projections or key changes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Checklist: shard‑aware entry points; projection plan
                    documented.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Guardrails &amp; automation
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                CI checks for <strong>max hops/time</strong> and for{" "}
                <strong>bounded start sets</strong>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Benefit: keeps p95 predictable on hot paths.</li>
                </ul>
              </li>
              <li>
                A projection refresher that rebuilds hot subgraphs on a schedule
                or change events.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Benefit: fresh results without hammering primaries.</li>
                </ul>
              </li>
              <li>
                An analyzer that highlights <strong>hot nodes</strong> and
                proposes caps or precomputes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Benefit: fewer surprise spikes from hubs.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Operational playbooks
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Relevance complaints</strong>: tighten filters, adjust
                weights, cap hops; compare A/B paths.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Why it helps: raises signal‑to‑noise without extra compute.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Latency spike</strong>: identify hot hubs; start from
                more selective labels; add projections.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Why it helps: avoids fan‑out by narrowing the entry.</li>
                </ul>
              </li>
              <li>
                <strong>Reorg/merge change</strong>: backfill new edges,
                validate permissions with sampled audits.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Why it helps: ensures access rules reflect org reality.
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Talk track (20 sec)
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Graphs are our <strong>subway map</strong> for
              relationships. We start from selective stations, cap hops,
              precompute busy routes, and use the warehouse for big tables—so
              features stay fast and relevant without surprise spikes.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
