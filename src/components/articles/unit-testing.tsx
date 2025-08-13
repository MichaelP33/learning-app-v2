import React from "react";

export const articleFormatVersion = 2;

export default function UnitTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Unit tests check one small unit in isolation with repeatable outcomes, so the same inputs always yield the same results without relying on external systems.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Features ship faster with fewer regressions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: refactors land safely because behavior is locked in.</li><li>Plain English: safety net speeds delivery.</li></ul>
              </li>
              <li>Incidents resolve quicker.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: bug is reproduced in a tiny test, not a whole environment.</li><li>Plain English: fix in minutes, not days.</li></ul>
              </li>
              <li>Documentation stays close to code.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: tests show how to call an API correctly.</li><li>Plain English: examples never go stale.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Microscope.&rdquo; You zoom in on one tiny piece so noise can&rsquo;t hide the defect.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Fast feedback loops → more iterations per day.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: higher developer throughput.</li></ul>
                  </li>
                  <li>Behavior specified at the boundary → safer refactors.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: change the engine, keep the contract.</li></ul>
                  </li>
                  <li>Pin tricky edge cases → fewer escapes to prod.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: lower change‑failure rate.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Over‑mocking couples tests to internals → brittle suites.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: assert outcomes, not calls, unless protocol is the behavior.</li></ul>
                  </li>
                  <li>Can&rsquo;t prove cross‑service wiring → use integration/contract tests too.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: keep the pyramid shape.</li></ul>
                  </li>
                  <li>Flaky time/randomness breaks determinism → inject clocks/IDs.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: seeded RNG and fake timers.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;High coverage means high quality.&rdquo; → Impact: shallow assertions → Fix: assert behavior and risks, not lines.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: numbers lie if checks are weak.</li></ul>
              </li>
              <li>&ldquo;Mock everything.&rdquo; → Impact: brittle tests bound to internals → Fix: prefer stubs/fakes; mock protocols only.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: fake repo; don&rsquo;t mock every method.</li></ul>
              </li>
              <li>&ldquo;Sleep fixes flakiness.&rdquo; → Impact: slow, flaky tests → Fix: remove time/network from the unit.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: fix the cause, not the symptom.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Stub</strong> — canned responses. <em>Why it matters:</em> control collaborators simply.</li>
              <li><strong>Fake</strong> — lightweight in‑memory impl. <em>Why it matters:</em> fast, realistic behavior.</li>
              <li><strong>Mock</strong> — verify interactions. <em>Why it matters:</em> enforce protocols.</li>
              <li><strong>Spy</strong> — record calls. <em>Why it matters:</em> observe without strict expectations.</li>
              <li><strong>Determinism</strong> — same input → same output. <em>Why it matters:</em> removes flakiness.</li>
              <li><strong>Fixture/Builder</strong> — test data helpers. <em>Why it matters:</em> readable, minimal setup.</li>
              <li><strong>Fake Clock/Seeded RNG</strong> — control time/random. <em>Why it matters:</em> repeatable tests.</li>
              <li><strong>Dependency Injection</strong> — pass collaborators. <em>Why it matters:</em> isolate the unit.</li>
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
              <li>Core domain logic (pricing, eligibility, billing).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: rounding and currency conversions.</li></ul>
              </li>
              <li>Edge‑case handling (timeouts, retries, limits).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: idempotent order creation.</li></ul>
              </li>
              <li>Algorithmic code (ranking, parsing, transforms).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: tokenizer behavior pinned by tests.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Behavior‑named tests with clear Arrange‑Act‑Assert → fast diagnosis.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: less rework and faster reviews.</li></ul>
              </li>
              <li>Deterministic tests (fake time/IDs) → no flakes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: CI stays green.</li></ul>
              </li>
              <li>Risk‑based coverage on critical modules → ROI focused.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: quality where it matters most.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Bugs keep coming back.&rdquo; → Likely cause: shallow tests → What to check: assertions on outcomes, not implementation.
              </li>
              <li>&ldquo;CI is flaky today.&rdquo; → Likely cause: real time/random in unit tests → What to check: fake clock/seeded RNG.
              </li>
              <li>&ldquo;Small change broke something far away.&rdquo; → Likely cause: over‑mocking → What to check: assert public behavior and seams.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: enforce builders/fakes; track flake rate and mean time‑to‑green.</li>
              <li><strong>Non‑Tech Enterprise</strong>: auditability; store test artifacts for regulated modules.</li>
              <li><strong>Startups</strong>: small but high‑ROI suites; protect core flows first.
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
              <li>Write behavior‑focused, deterministic tests.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: check &ldquo;what&rdquo;, not &ldquo;how&rdquo;.</li></ul>
              </li>
              <li>Use builders/fakes; inject time/IDs for repeatability.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: control the environment.</li></ul>
              </li>
              <li>Prioritize critical modules; keep suites fast.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: high signal with low cost.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Suggest tests for changed behavior and edge cases; flag over‑mocking.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: outcome assertions, fake time/IDs, minimal doubles.</li></ul>
              </li>
              <li>Propose builders/fakes for noisy fixtures; remove sleeps.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: hermetic and parallel‑safe.</li></ul>
              </li>
              <li>Highlight risk modules that require unit coverage before merge.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>CI checks for flake rate and time budgets per suite.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: protects speed and trust.</li></ul>
              </li>
              <li>Pre‑commit hooks for changed files; editor integrations with inline diagnostics.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: feedback where developers work.</li></ul>
              </li>
              <li>Templates for builders/fakes and fake clock utilities.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Flaky suite</strong>: add fake clock/seeded RNG; remove sleeps; isolate globals.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores determinism.</li></ul>
              </li>
              <li><strong>Slow CI</strong>: shard tests; prune duplicates; cache deps; enforce per‑test budgets.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: keeps loops tight.</li></ul>
              </li>
              <li><strong>Recurring regressions</strong>: codify failures as unit tests; require coverage on hot modules.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: turns incidents into guardrails.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We write small, deterministic tests that assert behavior, not internals—so refactors are safe, incidents are rare, and delivery stays fast.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
