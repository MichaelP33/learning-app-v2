import React from "react";

export default function BuildAutomation() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Incremental builds and build graphs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Modern build systems compute only the work that changed by tracking inputs → outputs across a directed acyclic graph (the build graph). Nodes represent targets and edges represent dependencies (build steps that must complete first). With file hashing and content-addressable keys (comparing the actual bytes, not timestamps), incremental builds avoid re-running steps whose inputs are identical, cutting feedback loops from minutes to seconds in large repos.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Change detection comes from hashing source, configuration, and tool versions (treating tools as inputs prevents hidden drift).</li>
              <li>Graph pruning skips unaffected targets (a few changed leaf nodes should not trigger a monorepo-wide rebuild).</li>
              <li>Remote cache hits return compiled artifacts immediately (no local work when cache is warm).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Caching strategies: local, remote, and reproducible keys</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Effective caching requires stable inputs and deterministic rules (same inputs must produce the same outputs). Local caches accelerate developer loops, while remote caches share results across CI agents and teams (critical when multiple pipelines run similar targets). Cache keys should include source digests, env &amp; toolchain identifiers, and flags (e.g., optimization levels) to avoid collisions.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Content-addressable storage (hash = key) simplifies invalidation and enables cross-machine reuse.</li>
              <li>Action-level cache vs artifact-level cache (store both execution results and final binaries for maximal reuse).</li>
              <li>Warm the cache in CI using prior successful pipelines (promote cache entries between branches with provenance).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Parallelization and saturation of available cores</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A well-structured build graph unlocks parallelism: independent nodes run concurrently up to CPU and I/O limits (parallelism reveals mis-modeled dependencies). Bottlenecks often come from serialized steps like single-threaded minifiers, test suites without sharding, or global locks (package installation that touches a shared folder). Distribute work across shards and prefer tools that scale with cores.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use graph-aware schedulers to keep queues full (no idle cores while work exists).</li>
              <li>Shard tests by historical runtime (fastest overall time with even shard durations).</li>
              <li>Pin I/O heavy tasks to separate pools to protect CPU-bound stages (avoid head-of-line blocking).</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Hermetic builds and environment determinism</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Hermetic builds isolate execution from the host machine (containerized toolchains, pinned compilers, controlled environment variables) so that results depend only on declared inputs (ensuring reproducibility across laptops and CI). This reduces &ldquo;works on my machine&rdquo; failure modes and enables reliable cache reuse because external state does not leak in.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use containers or Nix-like stores to materialize exact tool versions (immutable toolchains, no ambient PATH surprises).</li>
              <li>Disallow network access during compilation unless declared (fetches must be modeled as inputs for correctness).</li>
              <li>Make build flags explicit in targets (debug vs release should not share cache keys).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">CI orchestration and pipeline composition</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              CI should orchestrate graph execution rather than shell scripts that call tools sequentially (treat the pipeline as a DAG with explicit dependencies). Stages like compile, test, package, and publish should be modeled as cacheable steps with promotion gates (moving artifacts forward only when quality bars pass). This aligns developer, CI, and release workflows around the same model.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Trigger only affected pipelines on PRs (path filters paired with graph pruning for monorepos).</li>
              <li>Use matrix builds to fan out shards across OS/arch (parallelize cross-platform validation efficiently).</li>
              <li>Promote artifacts to registries with provenance once tests pass (publish only from trusted, reproducible builds).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a graph-based build tool; hash all inputs including tool versions and flags.</li>
              <li>Enable remote cache for CI and developer laptops; block network in compile steps.</li>
              <li>Shard tests by historical duration; model package fetches as explicit inputs.</li>
              <li>Containerize toolchains for hermeticity; use matrix builds for OS/arch.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Measured outcomes at enterprise scale</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Organizations see step-change improvements when incremental builds and remote caching land (compounded by parallelization across large fleets). Typical outcomes include 30–70% reduction in CI minutes, 2–5x faster developer feedback loops, and more predictable release windows. The economics matter: reclaimed time converts directly to feature velocity and lower cloud spend.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Single PR validation falling from ~45 minutes to ~10–15 with warm caches and sharded tests.</li>
              <li>Infrastructure savings when eviction policies prefer hot targets (cache hit rates &gt;80% on busy repos).</li>
              <li>Quality gains from making flaky, order-dependent steps hermetic (stability increases when non-determinism is removed).</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer trigger scenarios</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li><strong>CI cost spikes:</strong> &ldquo;Our cloud bills doubled but traffic only increased 20%&rdquo; (pipeline time dominates spend; caching and parallelism reduce minutes).</li>
              <li><strong>Slow merges:</strong> &ldquo;Engineers wait 40 minutes for tests, so we batch risky changes&rdquo; (long queues create bigger blast radius when failures occur).</li>
              <li><strong>Environment drift:</strong> &ldquo;Works locally, fails in CI with different tool versions&rdquo; (hermetic builds remove this class of issues).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Adoption patterns and org design</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              High-leverage teams centralize build engineering as a platform capability (dedicated group owning toolchains, caching, test sharding, and release automation). Product teams consume simple targets and pipelines (like internal &ldquo;build as a service&rdquo;) while shared policies enforce hermeticity and provenance. This division improves consistency and lowers cognitive load for feature teams.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Platform teams maintain cache servers and artifact registries with SSO and audit trails.</li>
              <li>Golden pipelines codify quality gates (lint, unit, integration, SBOM, signing) with minimal per-repo customization.</li>
              <li>Scorecards highlight repository readiness: incremental build coverage, cache hit rate, test flake index.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk reduction and compliance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Hermetic builds plus signed artifacts simplify audits (supply chain frameworks require provenance and tamper evidence). When pipelines are reproducible, incident investigations move faster because inputs are fully captured (source digest, toolchain image, environment variables, and dependencies). Promotion rules then ensure only vetted artifacts reach production environments.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reproducible build manifests attached to artifacts (who built, when, with what inputs).</li>
              <li>SBOM generation during build provides continuous visibility into dependencies (security teams rely on this for patching).</li>
              <li>Signed containers and packages with policy enforcement at deploy time (reject unknown or mutable tags).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Form a small platform team to own builds, caches, and release orchestration.</li>
              <li>Publish a single &ldquo;golden pipeline&rdquo; template; measure and publish cache hit rates.</li>
              <li>Attach SBOM and provenance to every artifact; enforce signed artifact promotion.</li>
              <li>Track developer wait time as a KPI; prioritize work that removes idle time.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI-assisted graph modeling and hermeticity</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can infer build targets and dependencies from repository structure (mapping directories to graph nodes) and propose action inputs for deterministic caching. It can scaffold containerized toolchains, generate lockfiles for tool versions, and embed sandbox rules (no network, declared fetches only) so developers start from a compliant baseline.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate Bazel/Nx/Turborepo configs with cache keys based on file digests and flags.</li>
              <li>Create CI matrices and shard strategies aligned to historical runtime data.</li>
              <li>Suggest hermetic boundaries for steps that currently rely on ambient state (close cache gaps).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pipeline optimization and cost control</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              With access to build logs and timings (structured as traces), Cursor can recommend concurrency levels, shard counts, and cache pre-warming tactics to minimize tail latency in CI (focus on p95 time, not just average). It can also flag steps that break reproducibility or pollute caches, preventing subtle performance regressions.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Propose per-repo &ldquo;fast path&rdquo; validation that runs only impacted targets for PRs.</li>
              <li>Detect cache key mismatches and advise which inputs are missing from hashing.</li>
              <li>Surface &ldquo;time thieves&rdquo; like serialized packaging or global locks for targeted refactors.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security and provenance automation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can wire SBOM generation, signature steps, and provenance attestation directly into build targets (supply chain checks become first-class). It can ensure artifacts promoted to staging/production are immutably referenced and policy-compliant, reducing manual toil for platform and security teams.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Insert SBOM and signing tasks at package and container build stages with fail-closed policies.</li>
              <li>Generate provenance metadata (builder image, git SHA, inputs) and attach it to artifacts.</li>
              <li>Enforce &ldquo;promotion by digest&rdquo; across environments; block mutable tags.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to scaffold a graph-based build config with remote cache enabled.</li>
              <li>Provide CI timing data and let it propose shard counts and parallelism caps.</li>
              <li>Adopt signed, reproducible builds with automatic SBOM and provenance emission.</li>
              <li>Track p95 PR validation time as a success metric after changes land.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}