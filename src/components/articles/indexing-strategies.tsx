import React from "react";

export const articleFormatVersion = 2;

export default function IndexingStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Indexes are lookup guides that let databases find rows fast without scanning everything. You pay extra storage and write cost for faster reads, so match index shape to query shape.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Lists and search feel snappy even with lots of data.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: product search and order lists open in milliseconds.</li><li>Plain English: a table of contents vs flipping every page.</li></ul>
              </li>
              <li>
                Fewer timeouts on busy endpoints.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: checkout history loads reliably during peaks.</li><li>Plain English: fast lanes prevent traffic jams.</li></ul>
              </li>
              <li>
                Stable performance as data grows.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: p95 holds steady from 1M to 10M rows.</li><li>Plain English: routes scale with the city.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Library card catalog.&rdquo; Put the right cards in the right drawers so you can go straight to a shelf instead of walking every aisle.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Equality and range seeks become O(log n) → faster queries.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: jump to the right page, don&rsquo;t read the book.</li></ul>
                  </li>
                  <li>Covering indexes avoid base table lookups → fewer I/Os.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: lower p95 and CPU.</li></ul>
                  </li>
                  <li>Composite order aligns multiple queries → fewer indexes overall.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: simpler maintenance.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Write amplification on INSERT/UPDATE/DELETE → slower writes.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: avoid over‑indexing hot tables.</li></ul>
                  </li>
                  <li>Wrong order or functions on columns → index not used.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: keep predicates sargable; use computed columns.</li></ul>
                  </li>
                  <li>Overlapping shapes → entropy and wasted storage.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: consolidate to canonical composites.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Add indexes everywhere.&rdquo; → Impact: slow writes and big bills → Fix: index only hot queries with evidence.</li>
              <li>&ldquo;Order doesn&rsquo;t matter in composite keys.&rdquo; → Impact: index unused → Fix: lead with most selective/equality columns.</li>
              <li>&ldquo;Functions on columns are fine.&rdquo; → Impact: scans → Fix: computed/persisted columns for sargability.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Sargability</strong> — predicates usable by indexes. <em>Why it matters:</em> enables seeks over scans.</li>
              <li><strong>Selectivity</strong> — rows filtered fraction. <em>Why it matters:</em> predicts benefit.</li>
              <li><strong>Cardinality</strong> — distinct values count. <em>Why it matters:</em> informs index choice.</li>
              <li><strong>Composite Index</strong> — multiple columns in one key. <em>Why it matters:</em> supports multi‑predicate queries.</li>
              <li><strong>Covering Index</strong> — includes all needed columns. <em>Why it matters:</em> avoids lookups.</li>
              <li><strong>Histogram/Stats</strong> — value distribution. <em>Why it matters:</em> drives optimizer estimates.</li>
              <li><strong>Fragmentation</strong> — physical page disorder. <em>Why it matters:</em> affects I/O and maintenance.</li>
              <li><strong>Filtered/Partial Index</strong> — subset coverage. <em>Why it matters:</em> lowers cost on skewed data.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Search/results pages and admin lists (sort/filter at scale).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: customers/orders/issues lists.</li></ul>
              </li>
              <li>Checkout and payments (idempotent lookups, unique constraints).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: dedupe by idempotency key.</li></ul>
              </li>
              <li>Reporting extracts (stable sort and cursor paging without gaps).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: cursor pagination on createdAt+id.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Composite orders match WHERE/JOIN/GROUP BY/ORDER BY → stable p95.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer regressions after launches.</li></ul>
              </li>
              <li>Covering indexes on top journeys only → controlled write cost.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: cost goes where users feel it.</li></ul>
              </li>
              <li>Quarterly prune of unused/redundant indexes → lower storage and entropy.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster deploys and simpler ops.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Search is slow.&rdquo; → Likely cause: no selective prefix → What to check: leading columns and sargability.</li>
              <li>&ldquo;Time spikes randomly.&rdquo; → Likely cause: plan flips or scans → What to check: stats freshness and function‑wrapped predicates.</li>
              <li>&ldquo;Exports time out.&rdquo; → Likely cause: sort without index → What to check: ORDER BY alignment and covering.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: heavy read mixes; prioritize covering indexes on analytics APIs.</li>
              <li><strong>Non‑Tech Enterprise</strong>: reporting and audit; align indexes to compliance extracts.</li>
              <li><strong>Startups</strong>: index top 3 endpoints only; keep write costs low while learning.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">TL;DR (AM-friendly)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Shape indexes to match real WHERE/JOIN/ORDER BY.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: make the card catalog match how people search.</li></ul>
              </li>
              <li>Keep predicates sargable; avoid functions on indexed columns.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: don&rsquo;t hide the label the librarian needs.</li></ul>
              </li>
              <li>Limit covering indexes to top journeys to control write cost.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: speed where it matters without bloating storage.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Extract query shapes; propose composite order and INCLUDE columns.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: equality first, ranges later; cover select list.</li></ul>
              </li>
              <li>Detect non‑sargable predicates and suggest computed/persisted columns.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: no functions on keys; collations consistent.</li></ul>
              </li>
              <li>Flag redundant/unused indexes; propose prunes with safety notes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>CI plan diff and sargability lint on changed queries.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: prevents regressions before merge.</li></ul>
              </li>
              <li>Index usage tracking and &ldquo;prune suggestions&rdquo; dashboards.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: lower costs and simpler ops.</li></ul>
              </li>
              <li>Safety calculators for write amplification when proposing covering indexes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Slow search</strong>: add selective prefix; verify with EXPLAIN and p95.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: turns scans into seeks.</li></ul>
              </li>
              <li><strong>Timeouts during peak</strong>: cover top list queries; trim unused indexes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: reduces I/O and plan risk.</li></ul>
              </li>
              <li><strong>Write slowdowns</strong>: drop overlapping indexes; defer heavy covers to analytics.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores throughput.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We shape indexes to how code actually queries, keep predicates index‑friendly, and prune entropy—so hot journeys stay fast while write costs stay predictable.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
