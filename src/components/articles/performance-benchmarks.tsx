import React from "react";

export default function PerformanceBenchmarks() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-600 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Latency, Throughput, and Tail
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Benchmarking clarifies how fast and how much the system can handle. Latency measures per‑request time (p50/p95/p99), throughput measures work per unit time (req/s, jobs/s), and saturation indicates how close resources are to limits (CPU, memory, I/O). Optimize for tail latency (p95&ndash;p99) because user experience and cascading failures are dominated by slow outliers (e.g., head‑of‑line blocking). Averages hide pain.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Track distributions, not just means (histograms, percentiles).</li>
              <li>Record resource counters alongside latencies (correlate hotspots).
              </li>
              <li>Define SLOs that match reality (end‑to‑end latency, not just service time).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Harnesses & Environment Control
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Benchmarks are experiments; control variables or results mislead. Fix dataset size, request mix, and run duration. Pin versions (kernel, runtime) and isolate noisy neighbors (dedicated nodes or &ldquo;performance&rdquo; machine classes). Warm caches consistently (or explicitly cold‑start) and document workload shape (burst vs. steady‑state). Repeatability beats one‑off &ldquo;lab wins&rdquo; that disappear in production.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use reproducible harnesses (scripts as code, seeded randomness).
              </li>
              <li>Capture environment fingerprints (CPU model, clock scaling, NUMA) in reports.
              </li>
              <li>Separate microbenchmarks (function level) from macro (end‑to‑end) runs.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Regression Detection
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              The goal is to detect meaningful slowdowns quickly and confidently. Use guardrails that account for noise (confidence intervals, control charts) and alert on sustained deviations, not single spikes. Evaluate improvements under the same conditions where you measured baselines (same workload, same concurrency). Benchmark review should be part of PRs for performance‑sensitive code.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Compare percentiles with error bars (non‑parametric tests are robust to outliers).
              </li>
              <li>Use synthetic canaries in staging to catch regressions before production.
              </li>
              <li>Track capacity headroom (throughput at target p95) as a planning metric.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define &ldquo;performance budgets&rdquo; (max p95 latency, min throughput) per endpoint/job.
              </li>
              <li>Publish harness scripts and datasets; require PRs to cite baseline vs. treatment.
              </li>
              <li>Store results with metadata (commit hash, env fingerprint) for comparisons.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business & Team Impact
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes & Trade‑offs
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Consistent benchmarking prevents silent capacity erosion (e.g., each release adds 2% p95 latency) and avoids firefighting by giving teams early signals. The cost is time and environment control; balance with risk by focusing on customer‑visible paths first (checkout, ingestion) and automating the rest.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Improved SLO attainment (fewer p99 breaches) and predictable scaling costs.
              </li>
              <li>Shorter feedback cycles for performance work (evidence‑based decisions).
              </li>
              <li>Better cross‑team negotiation via shared budgets (frontend/backends agree on split).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Measurement Culture
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Make performance everyone&rsquo;s job. Product participates by protecting time for benchmarks on performance‑sensitive initiatives; platform provides harnesses; teams publish budgets and justify exceptions. Incidents that cite &ldquo;slow&rdquo; without data become opportunities to add measurements (and baselines) so future debates use numbers, not opinions.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a shared glossary (latency, throughput, saturation, warm vs. cold) to avoid confusion.
              </li>
              <li>Use dashboards with distributions (heatmaps) rather than single averages.
              </li>
              <li>Tie roadmap items to budgets (e.g., &ldquo;feature X must stay &le; 300ms p95&rdquo;).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prioritize endpoints by traffic and revenue impact (ranked list for attention).
              </li>
              <li>Hold &ldquo;perf office hours&rdquo; to teach reading flame graphs and percentiles.
              </li>
              <li>Budget time in each epic to update baselines and rerun harnesses.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Automation & CI Gating
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Automate benchmark runs in CI for microbenchmarks (per PR) and schedule macro runs nightly or on demand. Use stable runners (pinned hardware class) and compare against baselines with tolerance windows (account for noise). Report budgets as status checks, linking charts directly in PRs for review.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Emit machine‑readable outputs (JSON) and visual summaries (sparklines in PR comments).
              </li>
              <li>Fail PRs when budgets are exceeded persistently (e.g., 3 consecutive runs).
              </li>
              <li>Store artifacts with commit hashes to enable bisecting regressions.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Practical Patterns
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Prefer end‑to‑end synthetic tests for user flows (checkout, search) and microbenchmarks for hot functions (serialization, parsing). Control concurrency levels (open‑loop vs. closed‑loop) and record retry behavior to avoid hiding back‑pressure. Track warm vs. cold start performance separately and document caching assumptions explicitly.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pair flame graphs with percentiles to pinpoint wins that matter to users.
              </li>
              <li>Isolate external dependencies (record/replay) to stabilize measurements.
              </li>
              <li>Use feature flags to compare treatment vs. control in production safely.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Set per‑endpoint budgets (e.g., &le;250ms p95 at 500 rps on staging hardware).
              </li>
              <li>Track capacity at SLO (throughput at target p95) for planning and cost control.
              </li>
              <li>Automate regression alerts to Slack with links to diffs and dashboards.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
