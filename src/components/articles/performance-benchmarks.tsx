import React from "react";

export const articleFormatVersion = 2;

export default function PerformanceBenchmarks() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Benchmarking measures how fast and how much work a system can do under controlled conditions. Track latency distributions (p50/p95/p99), throughput, and saturation to spot bottlenecks.</p>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Faster pages and fewer p95 spikes at peak.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: checkout stays &le; 300ms p95 on launch day.</li><li>Plain English: no surprise slowdowns.</li></ul>
              </li>
              <li>Stable capacity planning and lower costs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: right-size instances based on throughput-at-SLO.</li><li>Plain English: don&rsquo;t overpay.</li></ul>
              </li>
              <li>Predictable releases with performance budgets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: PR fails if p95 breaches budget.</li><li>Plain English: guardrails for speed.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-600 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Wind tunnel.&rdquo; Control variables to see how the system behaves under load before flying in production.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Early detection of performance regressions → safer launches.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer pagers at release.</li></ul>
                  </li>
                  <li>Evidence‑based tuning and capacity planning → lower cost.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: reduce spend without risk.</li></ul>
                  </li>
                  <li>Clear budgets for teams → shared accountability.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: everyone knows the speed limit.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Microbench illusions if harness differs from prod.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: pin environment and workload shape.</li></ul>
                  </li>
                  <li>Averages hide pain; tails matter most to users.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: track p95/p99 and rows/bytes moved.</li></ul>
                  </li>
                  <li>Noise in measurements without repetition/controls.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: compare with error bars/tolerances.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Average latency is fine.&rdquo; → Impact: users still feel spikes → Fix: budget on p95/p99.
              </li>
              <li>&ldquo;One run proves a win.&rdquo; → Impact: noise‑driven decisions → Fix: repeat with confidence intervals.
              </li>
              <li>&ldquo;Prod will match the lab.&rdquo; → Impact: surprises → Fix: pin env; use preview env and production canaries.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Latency (p50/p95/p99)</strong> — time to respond. <em>Why it matters:</em> users feel tails.
              </li>
              <li><strong>Throughput</strong> — work per second. <em>Why it matters:</em> capacity planning.
              </li>
              <li><strong>Saturation</strong> — resource pressure. <em>Why it matters:</em> headroom and throttling.
              </li>
              <li><strong>Open‑loop vs Closed‑loop</strong> — request model. <em>Why it matters:</em> reveals back‑pressure.
              </li>
              <li><strong>Warm vs Cold</strong> — cache/initialization state. <em>Why it matters:</em> realistic results.
              </li>
              <li><strong>Performance Budget</strong> — target latency/throughput. <em>Why it matters:</em> gating changes.
              </li>
              <li><strong>Harness</strong> — scripts/env config. <em>Why it matters:</em> reproducibility.
              </li>
              <li><strong>Confidence Interval</strong> — range for true value. <em>Why it matters:</em> separates noise from signal.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Checkout/search APIs and dashboards with strict SLOs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: p95 budgets on top endpoints.</li></ul>
              </li>
              <li>Ingestion/background jobs needing throughput headroom.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: nightly imports within window.</li></ul>
              </li>
              <li>Cost reviews and capacity planning for peak seasons.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: plan Black Friday capacity.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Performance budgets per endpoint/job and CI gates on regressions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: no silent erosion.</li></ul>
              </li>
              <li>Pinned runners/env and repeatable harness with datasets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: believable numbers.</li></ul>
              </li>
              <li>Reports compare distributions with tolerances and error bars.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer false alarms.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Average is fine but users complain.&rdquo; → Likely cause: tail spikes → What to check: p95/p99 and resource waits.</li>
              <li>&ldquo;Benchmarks don&rsquo;t match prod.&rdquo; → Likely cause: env drift → What to check: pinned runners and workload shape.</li>
              <li>&ldquo;Perf keeps slipping each release.&rdquo; → Likely cause: no budgets → What to check: add gates on rows/bytes/latency.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-600 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: flame graphs + percentiles; CI perf gates for hot paths.</li>
              <li><strong>Non‑Tech Enterprise</strong>: capacity dashboards for quarters; cost guardrails.</li>
              <li><strong>Startups</strong>: budget top endpoints; run microbenchmarks in PR, macro nightly.</li>
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
              <li>Set budgets on p95 and throughput; gate PRs on meaningful deltas.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: protect user speed.</li></ul>
              </li>
              <li>Use pinned runners and reproducible harnesses with datasets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: same lab, same test.</li></ul>
              </li>
              <li>Compare distributions with tolerances; track capacity at SLO.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer false alarms and better planning.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-600 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require budgets on hot endpoints; surface expected wins and risk.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: p95/p99, throughput, CPU/allocs.</li></ul>
              </li>
              <li>Request harness details (dataset, concurrency, warm/cold) and pinning.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: reproducible conditions.</li></ul>
              </li>
              <li>Attach charts with error bars; block on sustained regressions, not single spikes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>CI steps for microbenchmarks on PR; macro suites nightly on pinned runners.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fast dev loop; realistic coverage.</li></ul>
              </li>
              <li>Artifacts: JSON metrics + charts; status checks with sparkline diffs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: evidence in PR.</li></ul>
              </li>
              <li>Capacity at SLO tracked per service; alerts on erosion over time.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Tail spike</strong>: identify heavy operators via profiles; reduce rows/bytes; cache; batch writes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: cuts p95.</li></ul>
              </li>
              <li><strong>Capacity shortfall</strong>: tune concurrency; add nodes; shed load with fair limits.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: keeps SLOs green.</li></ul>
              </li>
              <li><strong>Budget breach in PR</strong>: request harness re‑run and profiling; optimize or rollback feature.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: protects user experience.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We set p95 and throughput budgets, run reproducible benchmarks, and gate regressions—so apps stay fast at peak while costs stay under control.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
