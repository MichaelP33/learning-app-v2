import React from "react";

export const articleFormatVersion = 2;

export default function CodeCoverage() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Coverage measures how much code ran during tests (lines, branches, functions). It is a signal to find gaps, not a guarantee of quality.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer production defects when hot paths are tested.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: checkout code has high branch coverage.</li><li>Plain English: most used parts are protected.</li></ul>
              </li>
              <li>Faster refactors because evidence is visible in PRs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: diff coverage shows new logic is tested.</li><li>Plain English: changes come with proof.</li></ul>
              </li>
              <li>Clearer onboarding via executable examples.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: tests teach API usage.</li><li>Plain English: learn by running.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Flashlight, not finish line.&rdquo; It shows dark corners but doesn&rsquo;t mean the room is clean.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Highlights risky untested areas → better prioritization.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer escapes on hot paths.</li></ul>
                  </li>
                  <li>Objective, automatable signal in CI → consistent reviews.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: the bot checks, not opinions.</li></ul>
                  </li>
                  <li>Combines with mutation testing → stronger quality.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: assertions actually catch bugs.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>High % can hide weak assertions.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: assert outcomes and edge branches.</li></ul>
                  </li>
                  <li>Global gates can stall delivery unfairly.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: gate deltas; use risk tiers.</li></ul>
                  </li>
                  <li>Noise from generated/legacy files.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: exclude with rationale.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;100% coverage = quality.&rdquo; → Impact: performative tests → Fix: target risk areas, not vanity numbers.</li>
              <li>&ldquo;Only line coverage matters.&rdquo; → Impact: missed branches → Fix: track line + branch + function.
              </li>
              <li>&ldquo;Break builds on day one.&rdquo; → Impact: blocked teams → Fix: baseline now; ratchet on deltas.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Line/Branch/Function Coverage</strong> — execution signals. <em>Why it matters:</em> reveal blind spots.
              </li>
              <li><strong>Diff Coverage</strong> — PR delta only. <em>Why it matters:</em> fair gating during migration.</li>
              <li><strong>Mutation Testing</strong> — introduce small changes. <em>Why it matters:</em> catches weak assertions.</li>
              <li><strong>Risk Tiers</strong> — domain criticality. <em>Why it matters:</em> focus investment.</li>
              <li><strong>Exclusions Policy</strong> — generated/legacy. <em>Why it matters:</em> reduce noise.
              </li>
              <li><strong>CI Status Checks</strong> — automated gates. <em>Why it matters:</em> enforce standards.
              </li>
              <li><strong>Baselines/Ratchets</strong> — non‑regression. <em>Why it matters:</em> improve steadily.
              </li>
              <li><strong>Hot Paths</strong> — user‑felt code. <em>Why it matters:</em> optimize impact.
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
              <li>Risky domains (auth, payments, PII, migrations).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: strict branch coverage on billing logic.</li></ul>
              </li>
              <li>PR reviews needing quick evidence.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: CI shows diff coverage and mutation score.</li></ul>
              </li>
              <li>Quarterly quality initiatives and audits.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: dashboards by module.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ratchet‑only diff gates on PRs; full scans nightly with trends.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: steady improvement without blocking.</li></ul>
              </li>
              <li>Risk tiers with stricter targets on hot paths and critical modules.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: ROI where it matters.</li></ul>
              </li>
              <li>Mutation testing on key packages; measure killed mutants.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: stronger assertions.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We keep breaking the same area.&rdquo; → Likely cause: shallow tests → What to check: branch coverage + mutation score.
              </li>
              <li>&ldquo;PRs are blocked by unrelated gaps.&rdquo; → Likely cause: global gate → What to check: diff coverage config.
              </li>
              <li>&ldquo;Noise from generated files.&rdquo; → Likely cause: poor exclusions → What to check: policy with rationale.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: SARIF aggregation; per‑team scorecards.</li>
              <li><strong>Non‑Tech Enterprise</strong>: compliance metrics and waivers with expiry.</li>
              <li><strong>Startups</strong>: simple diff gates; add mutation later on hot spots.
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
              <li>Gate PRs on diff coverage; publish nightly trends.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: don&rsquo;t regress, improve steadily.</li></ul>
              </li>
              <li>Track line+branch+function together; add mutation on hot paths.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: measure what matters.</li></ul>
              </li>
              <li>Exclude generated/legacy with rationale to cut noise.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: trust in the signals.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Annotate PRs with diff coverage and untested branches; suggest focused tests.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: high‑impact branches first.</li></ul>
              </li>
              <li>Recommend exclusions for generated code with justification.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: policy‑backed exceptions.</li></ul>
              </li>
              <li>Flag shallow tests where mutation would survive.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>CI status checks for diff coverage (e.g., ≥ 80%) and no drop vs baseline.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fair gates during migration.</li></ul>
              </li>
              <li>Nightly full reports by module/service with sparklines and trends.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: planning and visibility.</li></ul>
              </li>
              <li>Optional mutation testing jobs on high‑risk packages.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Coverage drop</strong>: add tests on changed files; update baselines after verification.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores trust quickly.</li></ul>
              </li>
              <li><strong>High noise</strong>: exclude generated/legacy with policy; focus on risk tiers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: signal over noise.</li></ul>
              </li>
              <li><strong>Escapes despite green</strong>: add mutation tests on the module; strengthen assertions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: raises bar where needed.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We gate on diff coverage and track trends, focus on branches and hot paths, and use mutation where it counts—so tests prevent real bugs without blocking delivery.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
