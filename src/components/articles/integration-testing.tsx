import React from "react";

export default function IntegrationTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What to integrate (and what not)</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Integration tests verify behavior across real boundaries (database, message bus, external service) but still keep scope narrow (one service&rsquo;s code path). The goal is to validate contracts and side effects (persistence, network I/O) using realistic infrastructure. Avoid treating integration tests as mini E2E (full UI flows) to preserve focus and speed.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Exercise the service boundary through public APIs (HTTP handler, use case method).</li>
              <li>Use the real database schema and migrations (schema drift catches) but isolate data per test.</li>
              <li>Mock only truly external dependencies (third‑party APIs) to keep the system under test real.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Test data strategies</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              High‑quality test data makes failures actionable. Prefer factories/builders (code‑generated fixtures) over massive JSON blobs (hard to understand). Use migrations to set up schema; seed only minimal reference data (currencies, feature flags). For behavior, arrange data per test using helpers that ensure isolation (unique keys, truncated tables).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Factories: parameterized helpers that compose defaults with overrides (clear intent).</li>
              <li>Fixtures: immutable reference seed (idempotent setup; safe to run multiple times).</li>
              <li>Builders: fluent objects that create valid aggregates (domain integrity maintained).</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Containers and orchestration</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use ephemeral containers to run real infrastructure locally and in CI (environment parity). Tools like Testcontainers spin up databases/queues with lifecycle hooks, while Docker Compose can model a minimal stack (service + db + dependencies). Clean teardown ensures no cross‑test contamination (hermetic test runs).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pin container images for reproducibility (avoid &ldquo;latest&rdquo; drift across environments).</li>
              <li>Expose health‑checks and wait strategies (block until DB ready; remove arbitrary sleeps).</li>
              <li>Run tests in parallel with isolated network/ports (namespace per worker when needed).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Contract boundaries</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Decide where the contract is enforced (HTTP schema, DB invariants, event shapes). Integration tests validate those seams with real serialization/deserialization (JSON schemas), real persistence constraints (foreign keys, unique indexes), and real error handling (timeouts, retries, idempotency—safe to retry without side effects).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prefer schema validation at the edges (OpenAPI/JSON Schema) with negative cases covered.</li>
              <li>Assert idempotency and retry semantics at integration points (network instability happens).</li>
              <li>Capture and assert observability signals (structured logs, metrics, traces) for diagnosis.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Name tests by user‑visible behavior (&ldquo;persists and publishes order&rdquo;), not tables.</li>
              <li>Reset state between tests using transactions or TRUNCATE (fast and deterministic).</li>
              <li>Prefer &ldquo;known good&rdquo; test images pinned to versions that match production.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Outcomes</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer production defects tied to integration seams (serialization, DB constraints).</li>
              <li>Faster incident resolution (observability captured in tests mirrors production signals).</li>
              <li>Confidence to upgrade infra versions (Postgres, Kafka) with safety nets in CI.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Trade‑offs and costs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Integration tests are slower than unit tests (containers, real I/O) and require infra setup. Keep the set risk‑based and representative (few critical paths). Run on CI for every PR, but optimize with sharding and caching (warm DB images). Avoid overusing integration where a unit suffices (maintain pyramid balance).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Budget runtime (e.g., &lt; 3–5 minutes per PR) and track regressions weekly.</li>
              <li>Treat flakiness rate as a defect to fix, not to mute with retries (root‑cause first).</li>
              <li>Centralize helpers for setup/teardown to reduce copy‑paste and divergence.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Anti‑patterns</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Testing through private DB tables instead of public APIs (leaky encapsulation).</li>
              <li>Global, shared test databases (non‑hermetic; order‑dependent failures).</li>
              <li>Using real third‑party APIs in CI (slow, flaky, rate‑limited, and potentially billable).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a &ldquo;minimal stack&rdquo; Compose file for local dev and CI service containers.</li>
              <li>Adopt Testcontainers (or equivalent) with wait‑for‑ready hooks and reusable networks.</li>
              <li>Snapshot API contracts (OpenAPI) and validate responses in tests automatically.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Environment parity via containers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use service containers in CI (GitHub Actions) and local Docker to match production versions (environment parity). Cursor can scaffold configuration for Postgres, Redis, and message brokers with pinned versions and health‑checks.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Provide Make/NPM scripts for <code>up</code>/<code>down</code> and <code>migrate</code> to standardize flows.</li>
              <li>Mount schema migration folders read‑only to guarantee drift is detected by tests.</li>
              <li>Seed minimal reference data through idempotent scripts (safe to rerun).</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Data builders and teardown helpers</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate typed factories for domain aggregates (builder pattern with sensible defaults).</li>
              <li>Reset DB state efficiently (transactional tests or TRUNCATE selective tables).</li>
              <li>Capture logs/metrics/traces during test runs and surface on failure for diagnosis.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reliability practices</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add timeouts and fail‑fast behavior to client libraries used by tests (don&rsquo;t hang CI).</li>
              <li>Use synthetic network faults (timeouts, 500s) to prove idempotency and retries.</li>
              <li>Shard the suite across CI workers and report flake rates with tags.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Keep a &ldquo;golden path&rdquo; integration test per critical capability (write/read, publish/consume).</li>
              <li>Fail PRs that add integration tests but skip unit coverage (pyramid discipline).</li>
              <li>Surface DB query plans on failure to spot schema or index drift quickly.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
