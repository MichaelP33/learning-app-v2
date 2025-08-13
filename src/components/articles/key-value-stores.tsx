import React from "react";

export const articleFormatVersion = 2;

export default function KeyValueStores() {
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
              A key‑value store is a <strong>dictionary for data</strong>: given
              a key, you get the value back
              <strong>fast</strong>. Many add simple data types (hashes, sets,
              streams) for common patterns like counters and leaderboards.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Why users feel it
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Pages and dashboards load <strong>instantly</strong>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>
                    Plain English: it&rsquo;s like grabbing a snack that&rsquo;s
                    already on the counter.
                  </li>
                  <li>
                    Example: homepage stats populate without waiting on a
                    database report.
                  </li>
                </ul>
              </li>
              <li>
                Feature flags and config flips are <strong>immediate</strong>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>
                    Plain English: toggle a switch and the app changes behavior
                    right away.
                  </li>
                  <li>
                    Example: roll out a banner to 10% of users in seconds.
                  </li>
                </ul>
              </li>
              <li>
                Counters/leaderboards update in <strong>real time</strong>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>
                    Plain English: every like or view bumps the number up
                    immediately.
                  </li>
                  <li>
                    Example: live viewers on a stream or daily active users.
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
              &ldquo;Locker wall.&rdquo; Each key has a locker. If you know the
              number, you open it in constant time; no need to walk the whole
              hallway.
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
                    Ultra‑low latency — so UIs feel snappy and backends stay
                    responsive.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Plain English: answers come from memory, not slow
                        storage.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Simple scale‑out — so capacity grows predictably with
                    shards.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Plain English: add more lockers to hold more items.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Cost‑predictable — so teams can budget per throughput.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Plain English: you can estimate cost per 1k operations.
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
                    Limited query shapes — so you must know the key or a small
                    set of patterns.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Plain English: you can&rsquo;t ask broad questions like
                        &ldquo;show all users in NY.&rdquo;
                      </li>
                    </ul>
                  </li>
                  <li>
                    Item‑size constraints — so large blobs belong in object
                    storage.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Tip: store big files in S3/GCS and keep just the link.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Eventual consistency modes — so reads can be stale right
                    after writes.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>
                        Plain English: sometimes the copy you read hasn&rsquo;t
                        caught up yet.
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
                &ldquo;KVS is a database replacement.&rdquo; &rarr; Impact: data
                loss on misuse; Fix: pair with a durable store/streams.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: don&rsquo;t keep the only copy in a cache.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Indexes are cheap.&rdquo; &rarr; Impact: write
                amplification; Fix: minimum viable secondary indexes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: every index means extra work on each write.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Cache can be the source of truth.&rdquo; &rarr; Impact:
                hard recovery; Fix: rebuild from system of record.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: if the cache is lost, you need a reliable
                    place to rebuild from.
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
                <strong>Key / Value</strong> — identifier to blob mapping.{" "}
                <em>Why it matters:</em> constant‑time access.
              </li>
              <li>
                <strong>TTL (Time‑to‑Live)</strong> — automatic expiry.{" "}
                <em>Why it matters:</em> bounds staleness and memory.
              </li>
              <li>
                <strong>Eviction Policy (LRU/LFU)</strong> — how full caches
                free space. <em>Why it matters:</em> keeps latency stable under
                pressure.
              </li>
              <li>
                <strong>Partition / Shard</strong> — split keys across nodes.{" "}
                <em>Why it matters:</em> scales capacity and isolates hot spots.
              </li>
              <li>
                <strong>Hot Key</strong> — key with disproportionate traffic.{" "}
                <em>Why it matters:</em> can overload a shard.
              </li>
              <li>
                <strong>Write‑through / Read‑through / Write‑around</strong> —
                cache update strategies. <em>Why it matters:</em> define
                freshness and failure behavior.
              </li>
              <li>
                <strong>Strong vs Eventual Consistency</strong> — read
                correctness levels. <em>Why it matters:</em>
                routes must‑be‑fresh reads correctly.
              </li>
              <li>
                <strong>Secondary Index / GSI</strong> — extra lookups beyond
                the primary key. <em>Why it matters:</em>
                enables limited queries at write cost.
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
                <strong>Read acceleration</strong>: caching hot pages, search
                results, and session state.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: show cart totals without hitting the primary DB.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Feature flags/config</strong>: flip behavior instantly
                across fleets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: turn on a beta feature for 5% of users.</li>
                </ul>
              </li>
              <li>
                <strong>Rate limits</strong>: per‑user/tenant buckets to protect
                dependencies.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: cap API calls to prevent overload.</li>
                </ul>
              </li>
              <li>
                <strong>Queues/streams</strong>: fan‑out messages and background
                jobs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: send notification jobs to workers quickly.</li>
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
                Keys <strong>namespaced + versioned</strong> → safe migrations
                and clear ownership.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: painless rollbacks and fewer collisions.</li>
                </ul>
              </li>
              <li>
                <strong>Compute‑aside</strong> with TTL → fresh enough and
                resilient to misses.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: faster pages at lower database load.</li>
                </ul>
              </li>
              <li>
                <strong>Must‑be‑fresh</strong> reads route to
                primary/strongly‑consistent modes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Payoff: fewer &ldquo;I saved but see old data&rdquo;
                    tickets.
                  </li>
                </ul>
              </li>
              <li>
                Minimal <strong>secondary indexes</strong> → lower write amp and
                cost.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: stable writes and predictable bills.</li>
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
                &ldquo;Occasional stale reads.&rdquo; &rarr; Eventual
                consistency replica used &rarr; Route must‑be‑fresh to
                primary/strong mode.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    What to check: read mode, replica lag, and invalidation
                    events.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Costs crept up.&rdquo; &rarr; Hot partitions or chatty
                keys &rarr; Batch writes; re‑key by access pattern.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    What to check: key distribution, write amplification, GSI
                    count.
                  </li>
                </ul>
              </li>
              <li>
                &ldquo;Spikes take down the cache.&rdquo; &rarr; Noisy
                neighbors/hot keys &rarr; Add rate limits; key salting; circuit
                breakers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    What to check: per‑key QPS, eviction storms, client
                    timeouts.
                  </li>
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
                <strong>Enterprise Tech (Amazon/NVIDIA/Spotify)</strong>: global
                caches, config, and rate limits; watch hot partitions and
                cross‑region replication lag.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: multi‑region failover runbooks with prewarm steps.
                  </li>
                </ul>
              </li>
              <li>
                <strong>
                  Non‑Tech Enterprise (telecom/finserv/healthcare)
                </strong>
                : session stores and risk controls; audit TTLs, PHI/PII
                handling, and disaster recovery drills.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: mandated retention via TTL and encrypted values.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Startups (SaaS/marketplaces/consumer)</strong>: speed up
                reads cheaply; pair cache with durable sources; measure hit
                rate, p95, and cost per 1k ops.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Example: compute‑aside for dashboards; weekly prune of cold
                    keys.
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
                We keep keys <strong>namespaced + versioned</strong> so rollouts
                are safe.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: add a folder and version so keys don&rsquo;t
                    clash.
                  </li>
                </ul>
              </li>
              <li>
                We route <strong>must‑be‑fresh</strong> reads to the right mode
                to avoid stale data.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: read from the &ldquo;source of truth&rdquo;
                    when it matters.
                  </li>
                </ul>
              </li>
              <li>
                We suggest <strong>compute‑aside + TTL</strong> to keep costs
                low and UX fast.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: pre‑make what you can and refresh on a timer.
                  </li>
                </ul>
              </li>
              <li>
                We detect <strong>hot keys/partitions</strong> and propose
                salting or batching.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: spread out the traffic when one locker is too
                    popular.
                  </li>
                </ul>
              </li>
              <li>
                We flag excessive indexes/config that amplify writes and cost.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Plain English: avoid extra to‑do lists that slow every
                    update.
                  </li>
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
                Ask AI to check <strong>key schema</strong>, TTL defaults, and
                whether must‑be‑fresh reads route to primary/strong mode.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Checklist: clear namespaces, realistic TTLs, and read modes
                    documented.
                  </li>
                </ul>
              </li>
              <li>
                Have it analyze <strong>hot keys</strong> and suggest
                salting/shard hints.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Checklist: per‑key QPS graphs; even spread across shards.
                  </li>
                </ul>
              </li>
              <li>
                Validate <strong>index/GSI</strong> additions against real
                predicates; prune unused ones.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Checklist: each index earns its keep on real queries.</li>
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
                A <strong>cache safety checklist</strong>: namespaces, TTLs,
                persistence, circuit breakers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Benefit: fewer outages and easier incident comms.</li>
                </ul>
              </li>
              <li>
                An <strong>invalidation helper</strong> tied to change events to
                avoid stale reads.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Benefit: fresh data without manual sweeps.</li>
                </ul>
              </li>
              <li>
                A <strong>hot‑key detector</strong> with rate‑limit and salting
                recommendations.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Benefit: prevents a single key from overwhelming a shard.
                  </li>
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
                <strong>Stale reads</strong>: route critical paths to
                primary/strong mode; add change‑event invalidation.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Why it helps: customers see their updates right away.</li>
                </ul>
              </li>
              <li>
                <strong>Cost spike</strong>: batch writes, compress values,
                prune indexes, re‑key by access pattern.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Why it helps: lower cloud bill without slowing the app.
                  </li>
                </ul>
              </li>
              <li>
                <strong>Thundering herd</strong>: short timeouts, backoff, and
                request coalescing; prewarm after failover.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>
                    Why it helps: avoids cascading failures when many requests
                    hit at once.
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
              &ldquo;Key‑value stores are our <strong>locker wall</strong> for
              speed. We namespace and version keys, route must‑be‑fresh reads to
              the right place, and keep caches cheap with compute‑aside and TTLs
              — so the app feels instant without risking correctness.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
