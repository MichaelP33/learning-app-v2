import React from "react";

export const articleFormatVersion = 2;

export default function IntegrationTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Integration tests verify behavior across real boundaries (DB, message bus, third‑party) for one service, ensuring contracts and side‑effects work together.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer broken releases from wiring issues.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: DB constraint or serializer mismatch caught pre‑merge.</li><li>Plain English: the pipes fit before we ship.</li></ul>
              </li>
              <li>Faster incident resolution with production‑like signals.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: tests capture logs/traces/metrics for debugging.</li><li>Plain English: evidence on hand.</li></ul>
              </li>
              <li>Confidence upgrading infra (DB/broker versions).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: Testcontainers prove parity.</li><li>Plain English: safer upgrades.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Dress rehearsal.&rdquo; The show (service) runs with real props (DB, queue) before opening night.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Validates real contracts and side‑effects → fewer integration bugs.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: higher change success rate.</li></ul>
                  </li>
                  <li>Captures observability and error semantics → faster triage.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: same symptoms as prod.</li></ul>
                  </li>
                  <li>Faithful performance taste → earlier regressions found.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer p95 surprises.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Slower than unit; needs infra orchestration.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: keep sets focused and parallelizable.</li></ul>
                  </li>
                  <li>Not end‑to‑end user flow coverage.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: reserve a thin E2E layer.</li></ul>
                  </li>
                  <li>Shared state flakiness if isolation is weak.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: per‑test DB schema/transactions/truncate.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Integration means E2E.&rdquo; → Impact: slow, flaky suites → Fix: scope to one service boundary.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: test wiring, not whole company.</li></ul>
              </li>
              <li>&ldquo;Use real third‑party APIs in CI.&rdquo; → Impact: flake/cost → Fix: mock servers with contract tests.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: verify against recorded contracts.</li></ul>
              </li>
              <li>&ldquo;Sleep to wait for readiness.&rdquo; → Impact: slow/flaky → Fix: health‑checks and explicit wait‑for‑ready.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: wait for the &ldquo;ready&rdquo; light.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Testcontainers</strong> — ephemeral infra. <em>Why it matters:</em> parity with prod.
              </li>
              <li><strong>Health‑check/Readiness</strong> — wait conditions. <em>Why it matters:</em> removes sleeps.
              </li>
              <li><strong>Fixture/Factory</strong> — data setup helpers. <em>Why it matters:</em> isolation and clarity.
              </li>
              <li><strong>Contract Test</strong> — consumer/provider agreement. <em>Why it matters:</em> avoid drift.
              </li>
              <li><strong>Idempotency</strong> — safe retries. <em>Why it matters:</em> robust network behavior.
              </li>
              <li><strong>Hermetic Test</strong> — self‑contained run. <em>Why it matters:</em> parallel, reliable CI.
              </li>
              <li><strong>Seed Data</strong> — reference records. <em>Why it matters:</em> reproducibility.
              </li>
              <li><strong>Snapshotting Schemas</strong> — detect drift. <em>Why it matters:</em> stable contracts.
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
              <li>Service APIs (HTTP/GraphQL) verifying real serialization and DB writes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: POST /orders persists and emits event.</li></ul>
              </li>
              <li>Background jobs/queues ensuring idempotency and timeouts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: retry on 5xx without dupes.</li></ul>
              </li>
              <li>Version upgrades of infra (Postgres/Kafka) with pinned images.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: new minor upgrade keeps plans stable.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Per‑test isolation (transactions/truncate) → no cross‑test flake.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: stable CI, parallel runs.</li></ul>
              </li>
              <li>Pinned images and wait‑for‑ready hooks → reproducible runs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer heisenbugs.</li></ul>
              </li>
              <li>Idempotency and error semantics asserted → resilient behavior.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer production incidents.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;It passed tests but failed in staging.&rdquo; → Likely cause: mocks hid real behavior → What to check: real DB/schema and serializer.
              </li>
              <li>&ldquo;Flaky failures in CI.&rdquo; → Likely cause: shared state or sleeps → What to check: per‑test isolation and health‑checks.
              </li>
              <li>&ldquo;Upgrades keep breaking stuff.&rdquo; → Likely cause: missing parity tests → What to check: pinned versions and upgrade tests.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: deep contract coverage; golden traces/logs included in tests.</li>
              <li><strong>Non‑Tech Enterprise</strong>: change approvals tied to integration evidence.</li>
              <li><strong>Startups</strong>: minimal but high‑value suites for hot paths.
              </li>
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
              <li>Spin up real infra in tests with pinned versions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: rehearsal with real props.</li></ul>
              </li>
              <li>Isolate tests and assert idempotency/error semantics.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: safe to retry; clear errors.</li></ul>
              </li>
              <li>Capture logs/traces so failures are diagnosable.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster fixes.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Check test isolation (transactions/truncate) and readiness waits.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: no sleeps; health‑checks present.</li></ul>
              </li>
              <li>Assert idempotency, retries, and negative cases on boundaries.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: 409 conflict, 5xx retry, timeouts.</li></ul>
              </li>
              <li>Verify pinned images and parity with production settings.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Templates for Testcontainers and DB/queue helpers with wait‑for‑ready.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: reliable local+CI runs.</li></ul>
              </li>
              <li>CI sharding, artifact uploads (logs/traces), and flake tracking.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: faster, visible feedback.</li></ul>
              </li>
              <li>Schema drift checks and fixture seeding utilities.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Flaky integration</strong>: remove sleeps; add readiness checks; isolate DB per test.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: eliminates contention and timing races.</li></ul>
              </li>
              <li><strong>Slow suite</strong>: shard in CI; pin and cache images; reuse networks/volumes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: keeps runtime predictable.</li></ul>
              </li>
              <li><strong>Version upgrade risk</strong>: run canaries on new images; compare plans and error rates.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: catches regressions early.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We rehearse services with real DBs and queues in tests, wait for ready signals, and assert idempotency and errors—so launches are boring and upgrades are safe.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
