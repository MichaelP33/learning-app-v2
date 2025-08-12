import React from "react";

export default function EndToEndTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-fuchsia-500 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Representative workflows</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              End‑to‑end (E2E) tests exercise realistic user journeys across the full stack (UI → API → DB → external services). Focus on the handful of flows that represent revenue or risk (checkout, sign‑in, data export) rather than trying to cover every permutation (combinatorial explosion).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use test IDs for selectors (data‑test attributes) to avoid brittle CSS/XPath coupling.</li>
              <li>Control data setup through APIs or fixtures (create predictable states before navigation).</li>
              <li>Record video/trace on failure to accelerate diagnosis (dev‑friendly artifacts).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Flakiness mitigation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              UI tests are prone to timing issues (async rendering, network latency). Prefer explicit waits on conditions (element visible, network idle) rather than sleeps. Make tests idempotent (safe to rerun) and independent (no hidden ordering). Instrument retries judiciously while driving root‑cause fixes (race conditions, missing await).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Wait for semantics, not time (visible, enabled, contains text) using framework APIs.</li>
              <li>Stabilize network with request interception and fixtures for third‑party calls.</li>
              <li>Use unique test users/data per run to prevent cross‑test interference.</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Environment parity</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Keep staging close to production (versions, feature flags, data shape) to make E2E results meaningful. Control variability: seed deterministic data, freeze time where possible, and isolate external dependencies via mock servers (contract‑verified) to protect stability while preserving realistic behavior.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use production‑like builds (minification, feature toggles) in E2E pipelines.</li>
              <li>Pin browser versions and driver images to eliminate drift.</li>
              <li>Run tests against ephemeral, per‑PR environments (preview deployments) when feasible.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pyramid balance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              E2E tests are expensive (slow, flake‑prone, environment heavy). Keep only a small set of high‑value flows and delegate most behavior to unit and integration tests. Use the pyramid as a budget: many fast unit tests, fewer integration, and a thin E2E layer that proves wiring and UX integration.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Review each E2E test annually: still providing unique coverage? Replace with lower layer?</li>
              <li>Tag tests (smoke, regression, experimental) and schedule appropriately.</li>
              <li>Track flake rate and mean time to repair as first‑class quality metrics.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use Playwright or Cypress with <code>data-testid</code> selectors and explicit waits.</li>
              <li>Generate stable test users via API and clean up at the end of runs.</li>
              <li>Capture traces, screenshots, and console logs automatically on failure.</li>
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
              <li>Confidence in revenue‑critical flows (checkout, onboarding, subscriptions).</li>
              <li>Reduced regression risk during refactors (proves wiring across services and UI).</li>
              <li>Faster incident reproduction using scripted flows and artifacts (video/trace).</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Costs and limits</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              E2E suites can become bottlenecks if oversized (hours to run, brittle selectors). Budget the suite and prune regularly. Move behavior checks down‑stack when possible (API contracts, unit logic). Resist the urge to test &ldquo;everything through the UI&rdquo;—it is the slowest and least stable layer for most logic.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Keep smoke tests under ~5 minutes per PR; full regression nightly/weekly.</li>
              <li>Quarantine flaky tests and fix root causes before re‑enabling (no permanent quarantine).</li>
              <li>Use dashboards to visualize flake hot‑spots and time spent waiting on E2E.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Anti‑patterns</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Relying on CSS selectors or text that frequently changes (brittle locators).</li>
              <li>Global shared accounts or data (couples tests; non‑hermetic runs).</li>
              <li>Blind retries that hide real race conditions (masking flakiness rather than fixing it).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define a &ldquo;top 10&quot; list of flows and keep E2E coverage limited to those.</li>
              <li>Backfill gaps with integration tests that run faster and more reliably.</li>
              <li>Use feature flags to freeze UI for critical flows during large refactors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-sky-500 bg-sky-50/50 dark:bg-sky-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Playwright/Cypress foundations</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt <code>data-testid</code> selectors and role‑based queries (accessibility aligned).</li>
              <li>Use project profiles for browsers/devices and pin versions for stability.</li>
              <li>Emit traces, screenshots, and console logs for every failure by default.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Seeding and isolation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Prepare data via API shortcuts or direct DB helpers (behind a protected test‑only endpoint). Make tests independent: unique emails, order IDs, and isolated tenants. Clean up with teardown hooks or run against disposable preview environments.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add a test‑only auth path for instant login (bypass UI where not under test).</li>
              <li>Reset feature flags and experiments per run to avoid drift.</li>
              <li>Tag tests and run smoke on PRs; run full suites on a schedule.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Mitigating flakiness in CI</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Stagger parallel workers to reduce shared resource contention (CPU/network).</li>
              <li>Retry only known flaky steps and cap retries; report flake rates transparently.</li>
              <li>Fail fast on environment health checks; don&rsquo;t waste runs when dependencies are down.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a thin E2E suite that exercises login, primary CRUD, and checkout/payment.</li>
              <li>Automate artifact upload (traces/videos) to your CI for easy triage.</li>
              <li>Review E2E coverage quarterly and push logic down to integration/unit where feasible.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}