import React from "react";

export default function QueryOptimization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          {/* Callout: Plans tell the truth */}
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Execution plans are the source of truth</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Optimizers translate SQL into physical operators based on statistics and cost models (seeks, scans, hash joins, nested loops, sorts). The plan reveals join order, access paths, and memory grants; always verify the plan rather than guessing from code shape.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Join order and predicate placement</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Join order drives cardinality at each step (small‑to‑large is usually cheaper). Push selective predicates as early as possible so later joins process fewer rows. Choose join types that match the data: nested loops for highly selective lookups, hash joins for large sets, merge joins when inputs are ordered on the join keys.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Beware accidental cross joins, implicit casts, and functions on join keys that break sargability (these force scans and explode work).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Caching and re‑execution</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Many engines cache both data pages and compiled plans. Stable, parameterized queries benefit from plan cache reuse (lower CPU). Avoid ad‑hoc SQL that changes text frequently (it fragments the cache). Use explicit caching where appropriate (application‑level, materialized views, or result‑set caching) for hot, deterministic queries.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Measure hit ratios and eviction patterns; watch for cache pollution caused by large one‑off scans that displace hot pages.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Parameter sniffing and statistics</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              <strong>Parameter sniffing</strong> occurs when a plan is compiled with one set of parameter values, then reused for different values that need a different strategy (e.g., highly selective vs broad). Solutions include recompile hints, option hints to optimize for unknown, or query patterns that guard against extremes.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Accurate <strong>statistics</strong> underpin the cost model. Keep them fresh (auto‑update or jobs), include multi‑column histograms when supported, and beware skew that misleads estimates (hot keys, seasonal distributions).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Capture the actual execution plan for slow queries; annotate with observed row counts.</li>
              <li>Rewrite predicates for sargability; test with parameter values at distribution extremes.</li>
              <li>Pin critical queries to stable shapes with parameterization and appropriate hints sparingly.</li>
              <li>Schedule stats maintenance tuned to write velocity and data churn per table.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          {/* Callout: Focus on user journeys */}
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Optimize what customers feel</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Tie query tuning to user journeys (checkout, search, dashboards) rather than microbenchmarks. Improving p95 by 200 ms on a hot path beats shaving 5 ms off an internal report that runs once a day.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost control and capacity planning</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Efficient plans lower CPU, memory grants, and I/O, letting you run more workload on the same hardware (or smaller instances). Bad plans inflate bills and push teams toward premature sharding or expensive scale‑ups.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Establish a performance budget per endpoint and track how query shapes affect it (especially during feature launches).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Safety and observability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Query changes can backfire under different data distributions or parameters. Use canary rollouts, query timeouts, and circuit breakers; monitor regressions with plan hash tracking and top queries dashboards (include both elapsed time and rows read).</p>
            <p className="text-slate-700 dark:text-gray-300">
              Post‑incident reviews should capture plan changes and statistics state so fixes are reproducible.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Baseline top 20 queries by total time; tune for biggest wins first.</li>
              <li>Alert on plan regressions via plan hash changes and row‑estimate errors.</li>
              <li>Introduce parameter guards for edge‑case values that flip join strategies.</li>
              <li>Keep a playbook for hint removal when upstream stats or indexes change.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          {/* Callout: Assisted plan reading */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plan explainers and rewrites</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Provide human‑readable summaries of execution plans, highlight the most expensive operators, and generate candidate rewrites (index suggestions, predicate changes, or join reordering) with expected impact based on statistics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Workload‑aware tuning</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use slow‑query logs and telemetry to cluster similar statements by shape (ignoring literals). Recommend parameterization and caching strategies where reuse is high, and identify one‑off scans that should bypass caches.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Help teams simulate plan behavior under different parameter distributions and table sizes (capacity planning, not just micro tests).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Statistics hygiene and guardrails</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate jobs for statistics refresh tuned to data churn, track histogram quality, and flag skewed columns needing multi‑column stats or filtered stats (where supported). Suggest removing stale hints once underlying assumptions change.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              For high‑risk queries, ship safety nets: max memory grants, timeouts, and fallback versions gated by feature flags.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate &ldquo;EXPLAIN and annotate&rdquo; in CI for changed queries.</li>
              <li>Store plan hashes and track regressions alongside deploys.</li>
              <li>Codify parameter sniffing mitigations for endpoints with skewed inputs.</li>
              <li>Educate with examples that map plan operators to readable narratives.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
