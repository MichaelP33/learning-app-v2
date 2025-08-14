import React from "react";

export const articleFormatVersion = 2;

export default function DebuggingTools() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Debugging tools help you see what code is doing (state, time, causality) so you can find the precise source of a problem and fix it confidently.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Incidents resolve faster when hot paths are visible.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: p95 CPU samples point to a single slow function.</li><li>Plain English: find the slow bit quickly.</li></ul>
              </li>
              <li>
                Confidence increases when behavior is reproducible.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: remote attach + traces recreate a customer issue.</li><li>Plain English: we can see what they saw.</li></ul>
              </li>
              <li>
                Less thrash during handoffs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: golden traces/flamegraphs become shared evidence.</li><li>Plain English: fewer blind guesses.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;MRI, stethoscope, and EKG&rdquo;: profilers, logs, and traces provide different but complementary views of a living system.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Profilers reveal hot paths → targeted optimizations.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: big wins without rewrites.</li></ul></li>
                  <li>Interactive debuggers expose state → logic clarity.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer &ldquo;mystery bugs&rdquo;.</li></ul></li>
                  <li>Traces show causality → end‑to‑end understanding.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fix the real bottleneck.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Debugger pause can mask races.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: prefer tracepoints and logs for concurrency.</li></ul></li>
                  <li>Profiles mislead in synthetic tests.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: validate with real traffic.</li></ul></li>
                  <li>Tracing without naming standards is noisy.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: enforce service/operation naming.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We can just SSH and printf.&rdquo; → Impact: risky prod changes → Fix: remote attach with read‑only policies.</li>
              <li>&ldquo;CPU at 100% means compute is the bottleneck.&rdquo; → Impact: wrong fix → Fix: compare wall vs CPU time; check I/O.</li>
              <li>&ldquo;One tool is enough.&rdquo; → Impact: blind spots → Fix: combine logs, traces, and profiles.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Sampling profiler</strong> — periodic stacks. <em>Why it matters:</em> safe in prod; low overhead.</li>
              <li><strong>Flamegraph</strong> — stacked CPU time view. <em>Why it matters:</em> spot hotspots quickly.</li>
              <li><strong>Trace/span</strong> — units of causality. <em>Why it matters:</em> link services end‑to‑end.</li>
              <li><strong>Heap snapshot</strong> — memory graph. <em>Why it matters:</em> find leaks and retainers.</li>
              <li><strong>Remote attach</strong> — debug running process. <em>Why it matters:</em> reproduce real issues.</li>
              <li><strong>Golden trace</strong> — canonical flow. <em>Why it matters:</em> baseline for regressions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Performance regressions after releases.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: compare flamegraphs before/after.</li></ul></li>
              <li>Customer‑specific bugs that are hard to reproduce.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: traces + remote attach on a replica.</li></ul></li>
              <li>Intermittent failures and timeouts in distributed flows.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: follow span timelines to the slow hop.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Standard debug presets for each service/runtime.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: no setup thrash under pressure.</li></ul></li>
              <li>Golden traces and profiles checked into docs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: baseline and teaching tools.</li></ul></li>
              <li>Remote attach is audited, safe, and quick to start.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: real‑world fixes with low risk.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We can&rsquo;t reproduce it.&rdquo; → Likely cause: missing traces/snapshots → What to check: debug presets and sampling.</li>
              <li>&ldquo;CPU is high but nothing changed.&rdquo; → Likely cause: hidden hot path → What to check: comparative flamegraphs.</li>
              <li>&ldquo;Fixes keep bouncing between teams.&rdquo; → Likely cause: no shared evidence → What to check: golden traces and naming standards.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: deep tracing, strict audits, change windows.</li>
              <li><strong>Non‑Tech Enterprise</strong>: simple presets, strong guardrails, minimal risk.</li>
              <li><strong>Startups</strong>: lightweight tooling, focus on hotspots and fast loops.</li>
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
              <li>Ship presets for attach, tracing, and profiling.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: press go, get insight.</li></ul></li>
              <li>Standardize naming and context fields.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: everything lines up.</li></ul></li>
              <li>Capture and share golden traces/profiles.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster fixes and learning.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Flag uninstrumented boundaries in diffs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: HTTP/DB/queue spans present.</li></ul></li>
              <li>Generate profile/trace before‑after comparisons for perf PRs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: wall vs CPU time, GC pressure.</li></ul></li>
              <li>Suggest safe remote‑attach configs for risky areas.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Provision read‑only remote attach with audit trails.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: safety in prod.</li></ul></li>
              <li>Template profiler scripts with safe durations.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: no accidental overload.</li></ul></li>
              <li>Auto‑link evidence (traces/profiles) to PRs and incidents.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: shared context.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Spike in timeouts</strong>: capture golden trace; compare spans to find slow hop.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: narrows root cause quickly.</li></ul></li>
              <li><strong>CPU saturation</strong>: run short sampling profile; inspect hot frames.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: targets true hotspot.</li></ul></li>
              <li><strong>Leak suspicion</strong>: take heap snapshots before/after; diff retainers.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: proves or disproves leak.</li></ul></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We ship safe, ready‑to‑use debugging presets, enforce naming and context standards, and attach evidence to PRs—so teams find the real bottleneck faster and fix issues with confidence.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
