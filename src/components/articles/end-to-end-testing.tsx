import React from "react";

export const articleFormatVersion = 2;

export default function EndToEndTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">E2E tests exercise realistic user journeys across the full stack (UI → API → DB → external) to prove critical flows work in production‑like conditions.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Revenue‑critical flows keep working after changes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: login→checkout passes on every deploy.</li><li>Plain English: the happy path stays happy.</li></ul>
              </li>
              <li>Regressions are caught with clear artifacts (video/trace).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: failing step points to the exact screen.</li><li>Plain English: show me where it broke.</li></ul>
              </li>
              <li>Confidence to refactor UI/services without fear.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: smoke suite green in PR gates.</li><li>Plain English: a last line of defense.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Scripted dress rehearsal.&rdquo; The entire show runs on a near‑real stage with cameras rolling for proof.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Proves user‑visible journeys end‑to‑end → fewer production surprises.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: protects revenue flows.</li></ul>
                  </li>
                  <li>Artifacts (video/trace) accelerate fixes → clearer ownership.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: see it, fix it.</li></ul>
                  </li>
                  <li>Cross‑system confidence during major refactors → safer delivery.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer hotfixes.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Slow and flake‑prone without discipline.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: limit to top flows; use explicit waits.</li></ul>
                  </li>
                  <li>Expensive to maintain selectors and seeds.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: data‑test selectors and API seeding.</li></ul>
                  </li>
                  <li>Not a substitute for unit/integration depth.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: keep the pyramid balance.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Test everything through the UI.&rdquo; → Impact: slow/fragile suites → Fix: test logic lower; reserve UI for journeys.
              </li>
              <li>&ldquo;Sleep to stabilize.&rdquo; → Impact: flakes/timeouts → Fix: wait for semantics (visible, enabled, network idle).</li>
              <li>&ldquo;Global accounts are fine.&rdquo; → Impact: cross‑test coupling → Fix: unique data per run and teardown.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>data‑testid</strong> — stable selectors. <em>Why it matters:</em> robust locators.
              </li>
              <li><strong>Explicit Waits</strong> — wait for conditions. <em>Why it matters:</em> fewer flakes.
              </li>
              <li><strong>Trace/Video Artifacts</strong> — failure evidence. <em>Why it matters:</em> faster triage.
              </li>
              <li><strong>Preview Environments</strong> — ephemeral deploys. <em>Why it matters:</em> production‑like runs.
              </li>
              <li><strong>Mock Server</strong> — isolate externals. <em>Why it matters:</em> stable tests.
              </li>
              <li><strong>Seeding APIs</strong> — fast data setup. <em>Why it matters:</em> independent tests.
              </li>
              <li><strong>Flake Rate</strong> — instability metric. <em>Why it matters:</em> quality gate.
              </li>
              <li><strong>Smoke vs Regression Suites</strong> — scope tiers. <em>Why it matters:</em> right runtime.
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
              <li>Checkout, onboarding, subscription change, data export flows.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: purchase and refund journeys.</li></ul>
              </li>
              <li>Critical admin workflows (permissions, billing adjustments).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: role change propagates correctly.</li></ul>
              </li>
              <li>Incident reproduction scripts for fast rollback decisions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: replay of failing scenario.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Thin, stable smoke suite on PRs; larger regressions nightly.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: speed and safety.</li></ul>
              </li>
              <li>Explicit waits and test‑only auth/data paths → fewer flakes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: green pipelines, lower toil.</li></ul>
              </li>
              <li>Traces/videos auto‑uploaded on failure → fast triage.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: minutes to fix, not hours.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Login or checkout breaks after deploy.&rdquo; → Likely cause: missing E2E for that path → What to check: smoke suite coverage.
              </li>
              <li>&ldquo;E2E is always red/flaky.&rdquo; → Likely cause: sleeps/shared data → What to check: explicit waits/unique seeds.
              </li>
              <li>&ldquo;We can&rsquo;t reproduce the incident.&rdquo; → Likely cause: no script/artifacts → What to check: traces/videos and scripts.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: multi‑browser/device matrices; artifact retention policies.</li>
              <li><strong>Non‑Tech Enterprise</strong>: GLBA/SOX flows tested; evidence retention for audits.</li>
              <li><strong>Startups</strong>: 8–12 critical scripts; keep runtime &lt; 5 min on PRs.
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
              <li>Cover only top journeys; keep PR smoke &lt; 5 minutes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: small, powerful suite.</li></ul>
              </li>
              <li>Use stable selectors, explicit waits, and test‑only auth/data.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: make tests robust and fast.</li></ul>
              </li>
              <li>Upload traces/videos on failure automatically.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster fixes.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Check data‑test selectors, explicit waits, and unique data per run.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: no sleeps, no shared accounts.</li></ul>
              </li>
              <li>Ensure script coverage for login/checkout/subscriptions and critical admin flows.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: smoke tags on PRs; full regressions nightly.</li></ul>
              </li>
              <li>Require artifacts upload and link in CI for failures.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Project profiles for browsers/devices with pinned versions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: reproducible runs.</li></ul>
              </li>
              <li>Seeding APIs and cleanup hooks; test‑only login path.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: independence between tests.</li></ul>
              </li>
              <li>CI artifact upload and flake dashboards.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Flaky suite</strong>: replace sleeps with waits; pin versions; unique data per test.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: robustness and speed.</li></ul>
              </li>
              <li><strong>Long runtime</strong>: split smoke/regression; parallelize; cache browsers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: protects PR velocity.</li></ul>
              </li>
              <li><strong>Undiagnosed failures</strong>: mandate artifact upload and auto‑attach to tickets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: faster triage/ownership.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We keep a thin, high‑value E2E suite with stable selectors, explicit waits, and artifacts on failure—so revenue flows stay safe without slowing the team.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
