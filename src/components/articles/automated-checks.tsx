import React from "react";

export const articleFormatVersion = 2;

export default function AutomatedChecks() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Automated checks are pre‑merge bots and pipelines that enforce standards and catch defects so humans focus on design, correctness, and risk.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Faster reviews with fewer nitpicks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: format/lint run before human review.</li><li>Plain English: bots handle the basics.</li></ul>
              </li>
              <li>
                Safer releases by catching regressions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: contract tests block breaking API changes.</li><li>Plain English: prevent surprises in prod.</li></ul>
              </li>
              <li>
                Clear &ldquo;why blocked&rdquo; messages with next steps.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: SARIF links to exact line and fix.</li><li>Plain English: know what to do now.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Safety rails on a bridge&rdquo;: they don&rsquo;t slow you down, they keep you from falling.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Consistent quality gates → fewer escapes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: lower incident rate.</li></ul></li>
                  <li>Shift‑left feedback → faster loops.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: developers fix issues while context is fresh.</li></ul></li>
                  <li>Explainable failures → easy adoption.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: less frustration, more trust.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Over‑broad rules → false positives.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: tune by path and severity; allow time‑boxed waivers.</li></ul></li>
                  <li>Slow pipelines → developer drag.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: cache and parallelize; run heavy checks nightly.</li></ul></li>
                  <li>Policy sprawl → confusion.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: centralize configs; document exceptions.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Bots replace reviewers.&rdquo; → Impact: missed design issues → Fix: bots handle basics; humans review design/risk.</li>
              <li>&ldquo;All checks must run on every change.&rdquo; → Impact: slow CI → Fix: target checks by changed paths/risk.</li>
              <li>&ldquo;Fail fast means block everything.&rdquo; → Impact: stalled delivery → Fix: non‑critical items as suggestions/digests.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Linter</strong> — static code rule checker. <em>Why it matters:</em> catches common defects quickly.</li>
              <li><strong>Formatter</strong> — consistent code style. <em>Why it matters:</em> removes noise from diffs.</li>
              <li><strong>SAST/DAST</strong> — security analysis. <em>Why it matters:</em> finds vulnerabilities early.</li>
              <li><strong>Contract tests</strong> — API/schema compatibility. <em>Why it matters:</em> prevent breaking changes.</li>
              <li><strong>Diff coverage</strong> — tests on changed lines. <em>Why it matters:</em> focuses effort where needed.</li>
              <li><strong>SARIF</strong> — results format. <em>Why it matters:</em> enables precise annotations in PRs.</li>
              <li><strong>Policy‑as‑code</strong> — rules in code. <em>Why it matters:</em> consistent, reviewable guardrails.</li>
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
              <li>PR pipelines in mono‑ and multi‑repo setups.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: path‑based checks in monorepos.</li></ul></li>
              <li>Security/compliance programs with explicit gates.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: secret scanning and SBOM checks.</li></ul></li>
              <li>High‑risk surfaces (auth, payments, migrations).<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: contract tests required before merge.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fast, deterministic checks → high trust.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer retries and escalations.</li></ul></li>
              <li>Clear &ldquo;must‑fix&rdquo; vs &ldquo;suggestion&rdquo; labeling.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: velocity and quality together.</li></ul></li>
              <li>Exceptions are time‑boxed with approvals and owners.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: no silent policy drift.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;CI takes forever and flakes.&rdquo; → Likely cause: unscoped checks/flaky tests → What to check: path targeting, retry and quarantine.</li>
              <li>&ldquo;We keep debating nits.&rdquo; → Likely cause: missing formatter/linter → What to check: pre‑commit and CI bots.</li>
              <li>&ldquo;Security surprises us post‑merge.&rdquo; → Likely cause: missing gates → What to check: SAST/DAST + policy‑as‑code.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: strong gates, SARIF reporting, exception workflows.</li>
              <li><strong>Non‑Tech Enterprise</strong>: turnkey presets, low noise, simple dashboards.</li>
              <li><strong>Startups</strong>: focus on formatter/linter/tests first; add security gates later.</li>
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
              <li>Run the right checks for the right changes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: don&rsquo;t scan the world for a typo.</li></ul></li>
              <li>Make failures explain themselves with fixes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: devs unblock quickly.</li></ul></li>
              <li>Keep pipelines fast and flaky‑free.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: happier engineers, faster merges.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Infer checks from diff (paths, frameworks) and post a contextual checklist.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: security/perf/a11y/contracts as applicable.</li></ul></li>
              <li>Annotate failures inline with SARIF and suggest code edits.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: link to docs/runbooks.</li></ul></li>
              <li>Detect flakes and auto‑retry/quarantine with owner notification.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Central config repo with versioned rules and templates.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: consistency and auditability.</li></ul></li>
              <li>Branch protections tied to &ldquo;must‑fix&rdquo; checks only.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: velocity on suggestions.</li></ul></li>
              <li>Cache layers and parallelization to keep CI under target SLAs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>CI slowdown</strong>: profile critical path; add caches; move heavy checks to nightly.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores fast loops.</li></ul></li>
              <li><strong>Flaky tests</strong>: quarantine and notify owner; require stabilization PR.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: keeps trust in CI.</li></ul></li>
              <li><strong>Policy confusion</strong>: publish rule catalog; add examples; link failures to guides.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: fewer debates.</li></ul></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We let bots handle the basics, run the right checks for each change, and keep CI fast—so reviews focus on design and risk, and merges stay safe and quick.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
