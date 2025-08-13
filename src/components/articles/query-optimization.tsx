import React from "react";

export const articleFormatVersion = 2;

export default function QueryOptimization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Optimization means shaping SQL and indexes so the engine does the least necessary work: seek instead of scan, join fewer rows, and reuse good plans.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Faster pages and dashboards at peak.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: analytics loads in seconds, not minutes.</li><li>Plain English: less waiting, more doing.</li></ul>
              </li>
              <li>Fewer random time spikes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: p95 stays steady after a big launch.</li><li>Plain English: fewer surprise slowdowns.</li></ul>
              </li>
              <li>Lower cloud bills for the same work.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: CPU drops after removing scans.</li><li>Plain English: less waste.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Shortest grocery route.&rdquo; Start in the right aisle and pick items in order; don&rsquo;t walk the whole store.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Lower latency and tail spikes → better UX.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: higher conversion and retention.</li></ul>
                  </li>
                  <li>Fewer resource hotspots → smoother scale.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: defer expensive hardware changes.</li></ul>
                  </li>
                  <li>Predictable plans → safer releases.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: fewer surprises on deploy day.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Over‑tuning to one dataset → brittle plans.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: test extremes and keep stats fresh.</li></ul>
                  </li>
                  <li>Hints can lock in mistakes → future regressions.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: prefer data fixes and indexes first.</li></ul>
                  </li>
                  <li>Microbench illusions → wins that don&rsquo;t matter.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: optimize top user journeys, not toy queries.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Average time improved, we&rsquo;re done.&rdquo; → Impact: p95 still bad → Fix: track tails and rows read.
              </li>
              <li>&ldquo;Add a hint to fix it.&rdquo; → Impact: brittle plans → Fix: fix stats, indexes, predicates first.
              </li>
              <li>&ldquo;Dev data is enough.&rdquo; → Impact: surprises in prod → Fix: replay real distributions.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Execution Plan</strong> — operator tree. <em>Why it matters:</em> reveals real work.</li>
              <li><strong>Cardinality Estimate</strong> — row guesses. <em>Why it matters:</em> drives join order.</li>
              <li><strong>Nested Loops / Hash / Merge Join</strong> — join types. <em>Why it matters:</em> fit data sizes/order.
              </li>
              <li><strong>Parameter Sniffing</strong> — plan compiled for one value reused for another. <em>Why it matters:</em> p95 flips.
              </li>
              <li><strong>Plan Cache</strong> — compiled plan reuse. <em>Why it matters:</em> saves CPU.
              </li>
              <li><strong>Statistics</strong> — histograms on columns. <em>Why it matters:</em> informs the cost model.</li>
              <li><strong>Rows Read</strong> — actual I/O. <em>Why it matters:</em> better than time alone for drift.
              </li>
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
              <li>Search, dashboards, and exports with large datasets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: &ldquo;orders in last 90 days&rdquo; with joins.</li></ul>
              </li>
              <li>Hot API endpoints on checkout and profile pages.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: &ldquo;my subscriptions&rdquo; loads instantly.</li></ul>
              </li>
              <li>Backoffice analytics for ops teams.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: agent queue reports hit SLOs.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Plans stable at p95 with fresh stats and selective starts → fewer incidents.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: predictable launches.</li></ul>
              </li>
              <li>Top 20 queries improved by rows‑read reduction → lower cost.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: smaller instances, same results.</li></ul>
              </li>
              <li>Guardrails in CI catch regressions → less firefighting.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: engineers ship with confidence.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Sometimes it&rsquo;s instant, sometimes it spins.&rdquo; → Likely cause: plan flips → What to check: stats and parameter sniffing.
              </li>
              <li>&ldquo;Exports crawl past a few thousand rows.&rdquo; → Likely cause: scan+sort → What to check: ORDER BY and covering.
              </li>
              <li>&ldquo;Reports time out after deploys.&rdquo; → Likely cause: stale stats or index mismatch → What to check: rows read and plan diff.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: heavy analytics; invest in stats hygiene and projections.</li>
              <li><strong>Non‑Tech Enterprise</strong>: compliance reports; precompute extracts and cache.</li>
              <li><strong>Startups</strong>: tune top endpoints; avoid hints; keep simple, evidence‑based wins.</li>
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
              <li>Start from selective sets; avoid broad scans.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: begin in the right aisle.</li></ul>
              </li>
              <li>Keep stats fresh; test extremes to prevent plan flips.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: don&rsquo;t let the map go stale.</li></ul>
              </li>
              <li>Cover hot queries and remove wasted work (rows read).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster features, lower cost.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Explain plans; verify selective start, join order, and memory grants.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: rows read low; no surprise scans.</li></ul>
              </li>
              <li>Suggest indexes/predicate rewrites and measure rows‑read deltas.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: covering where it pays; equality first.</li></ul>
              </li>
              <li>Detect parameter‑sniffing risk; propose parameterization or guard patterns.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>CI &ldquo;EXPLAIN&rdquo; annotator and plan‑hash regression alerts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: catch flips before prod.</li></ul>
              </li>
              <li>Stats freshness jobs and histogram quality monitors.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: stable estimates.</li></ul>
              </li>
              <li>Rows‑read SLOs for top endpoints.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Random spikes</strong>: refresh stats; parameter guards; compare plan hashes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: stabilizes estimates and plans.</li></ul>
              </li>
              <li><strong>Slow exports</strong>: add ORDER BY index; cover select list; paginate with cursors.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: removes sorts and large scans.</li></ul>
              </li>
              <li><strong>High CPU</strong>: remove redundant work; cache or precompute heavy joins.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: cut waste where users feel it.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We read plans, cut rows read, and keep stats fresh—so hot journeys stay fast and costs stay predictable even as data grows.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
