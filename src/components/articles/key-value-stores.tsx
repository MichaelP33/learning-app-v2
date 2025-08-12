import React from "react";

export default function KeyValueStores() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Simple pairs and common data structures</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Key‑value stores map opaque keys to values with constant‑time semantics for reads and writes (hot keys can still create hotspots under concurrent access). Many engines expose higher‑level primitives like hashes, sets, sorted sets, and streams built on the same foundation (these primitives enable leaderboards, counters, and fan‑out messaging without relational overhead). The simplicity yields extreme performance and predictable scaling characteristics under cache‑friendly access patterns.
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Namespacing keys prevents collisions and clarifies ownership boundaries between services (prefixes like app:env:resource:id keep keys unique across tenants). Values should be compact, versioned, and easy to recompute from systems of record when needed (treating cache state as derived eliminates painful recovery after node failures or evictions during incidents).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">TTL, expiration, and reliability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Time‑to‑live policies expire entries automatically to bound staleness and memory growth. Expiration can be sliding or absolute depending on access patterns (sliding TTLs fit session tokens; absolute TTLs fit deployment configuration that refreshes on schedule). Reliability depends on persistence settings: in‑memory caches with optional snapshots differ from durable key‑value databases with write‑ahead logs (choose based on data criticality and recovery expectations).
            </p>
            <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Do not store the only copy of critical data in a cache. Keep a system of record and rebuild keys on demand (cache regeneration jobs and fallback queries protect availability during evictions or node loss).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt consistent key namespaces; version value formats for painless migrations.</li>
              <li>Choose TTL strategies aligned to user flows; add metrics for hit/miss and staleness.</li>
              <li>Pick persistence modes based on data criticality; rehearse recovery end‑to‑end.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Partitioning, hot keys, and eventual consistency</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Horizontal partitioning spreads keys across shards by hashing or ranges. While this scales capacity, skewed traffic can still overload shards if a few keys dominate (hot keys often appear after launches or seasonal spikes). Eventual consistency shows up as replicas lagging behind primaries, so clients may read slightly stale values immediately after writes (most UX can tolerate seconds of staleness with clear messaging and idempotent retries).
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Rate limiting and fairness controls prevent noisy neighbors from starving other workloads (per‑tenant rate caps and token buckets keep caches healthy under bursty loads). For mission‑critical flows, write to the system of record first, then update the cache asynchronously (this ordering avoids data loss if a cache node fails between write and replication events).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Caching vs system of record</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              As a cache, the key‑value store accelerates reads while tolerating occasional misses and rebuilds (compute‑aside patterns fetch from the database on miss and repopulate the cache). As a system of record, it must provide durability guarantees and strong consistency for critical data (write‑through, write‑around, and read‑through policies determine when the cache and store are updated and how misses propagate during failures).
            </p>
            <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Be explicit with stakeholders about consistency guarantees. For example, &ldquo;cart items reflect in under two seconds&rdquo; sets expectations and simplifies incident communications (clarity prevents escalations when caches temporarily serve stale values during maintenance).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Detect hot keys and shard imbalances; add sharding hints or key salting.</li>
              <li>Separate cache usage from durable storage; document guarantees in runbooks.</li>
              <li>Enforce rate limits and backoff; avoid cascading failures from bursty clients.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Application patterns and invalidation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Implement compute‑aside for derived views: on cache miss, fetch from the database, compute the view, store it with a TTL, and return the result. Use write‑through when correctness demands immediate cache visibility after writes (inventory reservations commonly need synchronous updates to avoid oversells during spikes). Tie invalidation to change events so stale entries disappear promptly without full sweeps under load.
            </p>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Namespaced keys and idempotent writes allow safe retries during transient errors. Expose metrics for hit rate, key sizes, and memory fragmentation so regressions are obvious (dashboards that separate hot vs cold keys reveal skew early). Keep request timeouts short; treat the cache as an optimization, not a dependency that can stall the entire stack during incidents.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational controls and safety</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Configure eviction policies (LRU, LFU) aligned to traffic patterns and memory budgets. Enable persistence only where needed and validate recovery time objectives by rehearsal (failovers should not surprise teams with cold caches and thundering herds). Use connection pooling and circuit breakers in clients to keep saturation from cascading into upstream outages when nodes reach CPU or memory limits.
            </p>
            <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
              <p className="text-slate-700 dark:text-gray-300">
                Callout: Hot key detection and mitigation matter. Consider per‑key rate limits, sharding the key with random suffixes, or moving computation to a queue (these tactics prevent one key from dominating shard capacity during flash crowds).
              </p>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use compute‑aside for derived views; write‑through where immediate visibility is required.</li>
              <li>Attach invalidation to change events; keep TTLs realistic and observable.</li>
              <li>Rehearse failover and recovery; protect upstreams with timeouts and circuit breakers.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
