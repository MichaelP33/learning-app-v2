import React from "react";

export default function UnitTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Isolation and determinism</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Unit tests validate a single unit of behavior in isolation (a function, class, or component) with deterministic outcomes (same input → same result). Isolation removes dependencies on external systems like databases and networks, making failures attributable to the unit under test. Deterministic tests reduce flakiness (intermittent, non‑reproducible failures) and keep feedback loops tight.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Keep observable side effects contained (no real I/O, no global state mutation without reset).</li>
              <li>Make time, randomness, and IDs injectable (dependency inversion) to guarantee repeatability.</li>
              <li>Favor pure functions (no hidden state) to simplify assertions and reduce fixture complexity.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Test doubles: mocks, stubs, fakes, spies</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Proper use of test doubles controls the behavior of collaborators. A <em>stub</em> returns canned data (pre‑arranged responses); a <em>fake</em> is a lightweight in‑memory implementation (e.g., an in‑memory repository); a <em>mock</em> verifies interactions and expectations; a <em>spy</em> records calls for later inspection. Choose doubles based on the assertion you care about (state vs interaction).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prefer stubs/fakes when validating outputs and state transitions (less brittle).</li>
              <li>Use mocks only where interaction order or exact calls are the behavior (protocol enforcement).</li>
              <li>Reset doubles between tests to avoid hidden coupling (test pollution across cases).</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">TDD basics: red → green → refactor</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Test‑Driven Development structures work into a loop: write a failing test (red), implement the minimum code to pass (green), then improve design safely (refactor). The rhythm creates small, verifiable steps (fine‑grained progress) and keeps design emergent (APIs shaped by usage). It also discourages speculative code (features not demanded by tests).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Commit after each green to preserve a working baseline (continuous integration cadence).</li>
              <li>Refactor with confidence because tests lock in behavior (contract of correctness).</li>
              <li>Favor outside‑in TDD for services (drive at boundaries), inside‑out for algorithms (drive core logic).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Fast feedback loops</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Unit suites should run in seconds, not minutes. Speed compounds developer flow (reduced context switching) and prevents deferring runs until CI. Keep tests hermetic (self‑contained), parallelizable, and memory‑light. Track median runtime per test and set budgets (e.g., &lt; 50ms typical, &lt; 200ms rare outliers).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Cache build artifacts and avoid real crypto/hash operations where not the unit under test.</li>
              <li>Replace expensive hashing/time with deterministic fakes (monotonic clock, seeded RNG).</li>
              <li>Run watchers locally (Jest/Vitest) to execute only affected tests on file change.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Name tests by behavior (&ldquo;creates invoice total with tax rounding&rdquo;), not methods.</li>
              <li>Arrange‑Act‑Assert structure and single clear assertion focus (or assert a cohesive outcome).</li>
              <li>Use data builders (factory functions) to minimize fixture noise (only specify what matters).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Outcomes and signals</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lower change failure rate (defects caught at source rather than in integration or E2E).</li>
              <li>Shorter cycle time (fast local feedback vs waiting on CI pipelines or manual QA).</li>
              <li>Improved onboarding and knowledge transfer (tests as living documentation and examples).</li>
              <li>Higher refactor throughput (safety net enables aggressive internal improvements).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Costs and trade‑offs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Investment concentrates in upfront design and test maintenance. Poorly chosen seams (where you place boundaries) inflate double usage and brittleness. Over‑mocking turns tests into implementation snapshots (coupled to private details) rather than behavior specifications (public contracts customers rely on).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prefer stable seams (domain services, repository interfaces) over low‑level internals.</li>
              <li>Audit tests for value: delete tests that duplicate coverage at higher layers (avoid redundancy).</li>
              <li>Measure flakiness and mean time to diagnose (observability for tests: logs, traces, snapshots).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Anti‑patterns to avoid</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Mocks returning mocks (interaction spaghetti) instead of designing simpler seams.</li>
              <li>Testing getters/setters or trivial data classes (no customer‑visible behavior).</li>
              <li>Sleeping to &ldquo;stabilize&rdquo; tests rather than removing time/network from the unit.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Track coverage by critical domain modules (risk‑based), not raw percentage vanity metrics.</li>
              <li>Adopt a &ldquo;test pyramid&rdquo; budget: many fast units, fewer integration, minimal E2E.</li>
              <li>Create a shared glossary for doubles (what &ldquo;mock&rdquo; vs &ldquo;stub&rdquo; means in your org).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑assisted scaffolding and safety rails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate test skeletons from function signatures and examples (property‑based where fit).</li>
              <li>Autofill builders and deterministic fakes for time, UUIDs, RNG (eliminate non‑determinism).</li>
              <li>Suggest seam refactors (extract interface, inject dependency) when doubles proliferate.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Tooling defaults and conventions</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Prefer a fast runner (Vitest/Jest) with watch mode, parallelism, and snapshot tooling. Configure test path and file naming conventions consistently (e.g., <code>*.unit.test.ts</code>). Provide helpers for data builders and reset hooks (afterEach clear timers, mocks, and global state).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Make RNG/time injectable via context or providers (frontends) or via DI/container (backends).</li>
              <li>Adopt contract‑like assertions (customer‑visible results) rather than private state peeking.</li>
              <li>Keep suites hermetic and parallel‑safe (no cross‑test shared mutable state without reset).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Signals to gate merges</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fail CI on flaky unit tests (rate &gt; 0.1% over rolling window) until root cause removed.</li>
              <li>Budget per‑PR unit runtime (e.g., &lt; 15s) and track regressions automatically.</li>
              <li>Block on missing unit coverage of changed critical files (risk‑based protection).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Introduce a fake clock utility and a seeded RNG to remove time/randomness from tests.</li>
              <li>Adopt a builder pattern for fixtures to express only the necessary fields for each case.</li>
              <li>Create a &ldquo;doubles cookbook&rdquo; with examples for stubs, fakes, spies, and mocks.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}