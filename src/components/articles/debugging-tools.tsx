import React from "react";

export default function DebuggingTools() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Interactive debuggers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use breakpoints, step‑in/out/over, and watches to inspect live state (locals, closures, call stacks). Debuggers excel for logic errors and edge‑case control flow, but beware observer effects in concurrent code (pausing threads can hide race conditions).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prefer conditional breakpoints to capture rare states (e.g., only on userId hash bucket or statusCode).</li>
              <li>Record &ldquo;tracepoints&rdquo; to emit diagnostics without pausing execution for low‑impact probing.</li>
              <li>For async/await and event loops, view task queues and microtasks to understand scheduling (asynchronous operations = non‑blocking code execution).</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Profilers and CPU sampling</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Profilers reveal where time is actually spent (hot paths). Prefer sampling profilers for production‑safe insights (periodic stack captures) and instrumented profilers locally when full fidelity is needed. Combine with tracing to connect spans to CPU time and I/O wait.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Track wall‑clock vs. CPU time; high wall‑clock with low CPU suggests I/O or lock contention.</li>
              <li>Look for megamorphic call sites (many shapes) in dynamic languages which degrade inline caching.</li>
              <li>Validate wins with A/B experiments and real traffic (avoid micro‑bench illusions in synthetic tests).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Heap and CPU snapshots</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Heap snapshots capture memory object graphs (retained size and references) to diagnose leaks. CPU flamegraphs visualize where execution time accumulates (stacks as &ldquo;flames&rdquo;). Take baseline and post‑change snapshots to assert improvement.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Watch allocation hotspots and long‑lived caches (objects surviving multiple GC cycles).</li>
              <li>Capture at steady state to avoid startup noise; compare across releases to catch regressions.</li>
              <li>Annotate snapshots with traceId or build SHA for reproducibility (observability = system monitoring and debugging).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Local vs. remote debugging</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Local debugging offers rapid feedback loops (dev containers, hot reload), while remote debugging attaches to running processes in staging or prod replicas (port‑forwarding, secure tunnels). Use read‑only modes and sampling in production to minimize risk.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reproduce environments with containerized dev (same OS, deps, and config to reduce &ldquo;works on my machine&rdquo; gaps).</li>
              <li>Disable break‑all in prod; rely on logs, traces, and sampling profilers to avoid pausing critical paths.</li>
              <li>Mirror prod flags and data shapes in staging to ensure faithful behavior (API design = interface specification for system communication).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Tracing basics</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Distributed tracing connects spans into a single request timeline (causality across microservices). Instrument critical boundaries (HTTP, RPC, queues, DB) and propagate context headers reliably. Use span attributes to tag userId, orderId, and feature flags for targeted analysis.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Align service names and operation names to a naming standard to keep search sane.</li>
              <li>Create &ldquo;golden traces&rdquo; that represent healthy and failing flows for regression checks.</li>
              <li>Correlate traces with logs via shared traceId and requestId for one‑click pivoting.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with a sampling profiler in staging, then validate wins with production traces.</li>
              <li>Automate conditional breakpoints or tracepoints for &ldquo;rare but critical&rdquo; states.</li>
              <li>Codify a &ldquo;debug stack&rdquo;: logger, tracer, profiler, and remote attach templates per service.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reduced downtime and cost</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Accurate diagnosis shortens incidents and avoids wasteful over‑provisioning (profiling often reveals 20–40% CPU spend on avoidable hot paths). Faster fixes protect customer trust and revenue.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Profiling‑driven optimization cuts cloud bills without risky rewrites.</li>
              <li>Trace‑first debugging prevents &ldquo;whack‑a‑mole&rdquo; by revealing the actual bottleneck.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer productivity and knowledge transfer</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A consistent toolchain and naming standard lets teams speak a shared language across services. Golden traces and annotated snapshots become living documentation for onboarding and design reviews.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Less time guessing, more time fixing; fewer context‑switches between unfamiliar tools.</li>
              <li>Shared playbooks turn senior intuition into repeatable steps (observability runbooks).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk management</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Remote debugging and production‑safe profiling reduce the temptation to &ldquo;just SSH and printf&rdquo;, improving compliance and security posture. Consistent tooling helps incident commanders coordinate responses.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Guardrails like read‑only sessions and sampling ensure minimal blast radius.</li>
              <li>Faster mean‑time‑to‑mitigate reduces customer credits and SLA penalties.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a single profiler format (flamegraph) and add it to PR templates for performance‑sensitive changes.</li>
              <li>Create &ldquo;attach recipes&rdquo; for each runtime (Node, JVM, Python) and secure tunnels for staging/prod.</li>
              <li>Track a &ldquo;debug debt&rdquo; backlog: missing traces, naming inconsistencies, and unprofiled hotspots.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Batteries‑included debug presets</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship launch configs and VS Code tasks for local attach, test debugging, and integration tests.</li>
              <li>Bundle profiler scripts (sampling, duration, output path), plus flamegraph viewers in dashboards.</li>
              <li>Provide trace instrumentation helpers for HTTP, queues, and DB with consistent attribute names.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Remote attach and safety</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Provide secure, audited remote debugging via ephemeral tunnels and read‑only modes by default.</li>
              <li>Automate symbol/source maps for release builds so stack frames resolve cleanly in production views.</li>
              <li>Gate prod attach behind feature flags and approvals; capture traceId for every remote session.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational integration</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Link snapshots and profiles to incidents and PRs; store alongside artifacts for reproducibility.</li>
              <li>Add &ldquo;profile this path&rdquo; buttons to dashboards that trigger short, safe sampling windows.</li>
              <li>Auto‑generate performance budgets from baseline profiles and fail builds that regress beyond thresholds.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Keep golden traces and flamegraphs for the top five business journeys (checkout, signup, payments).</li>
              <li>Teach &ldquo;use traces to find the bottleneck, then profile to quantify&rdquo; as the default workflow.</li>
              <li>Publish a &ldquo;remote attach checklist&rdquo; to avoid production surprises.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}