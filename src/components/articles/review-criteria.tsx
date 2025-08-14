import React from "react";

export const articleFormatVersion = 2;

export default function ReviewCriteria() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Review criteria are the standards reviewers apply to ensure changes are correct, secure, performant, accessible, and consistent.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer post‑merge bugs and rollbacks.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: explicit edge‑case tests.</li><li>Plain English: fewer fire drills.</li></ul></li>
              <li>Less debate, more shared standards.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: checklist maps to team conventions.</li><li>Plain English: quicker alignment.</li></ul></li>
              <li>Better accessibility and security by default.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: pre‑merge a11y/security checks + reviewer prompts.</li><li>Plain English: fewer risks ship.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Pre‑flight checklist&rdquo;: don&rsquo;t rely on memory under pressure—follow a proven list.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Shared standards → consistent outcomes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer re‑litigated debates.</li></ul></li>
                  <li>Prompted risk checks → fewer escapes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: safer merges.</li></ul></li>
                  <li>Focus on impact → less nitpicking.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster reviews.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Checklist fatigue → rubber‑stamping.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: rotate examples; keep lists short.</li></ul></li>
                  <li>One‑size‑fits‑all misses context.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: tailor by change type.</li></ul></li>
                  <li>Over‑blocking slows delivery.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: separate &ldquo;must‑fix&rdquo; from &ldquo;suggestions&rdquo;.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;All feedback should block.&rdquo; → Impact: slow merges → Fix: label must‑fix vs suggestions.</li>
              <li>&ldquo;Security is a separate review.&rdquo; → Impact: missed risks → Fix: integrate security prompts and checks.</li>
              <li>&ldquo;Performance can wait.&rdquo; → Impact: regressions → Fix: require evidence for perf‑sensitive changes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>ADR</strong> — architecture decision record. <em>Why it matters:</em> anchors decisions to policy.</li>
              <li><strong>CODEOWNERS</strong> — reviewer routing map. <em>Why it matters:</em> expert eyes on risky diffs.</li>
              <li><strong>Risk hot‑spot</strong> — area prone to defects. <em>Why it matters:</em> focus attention.</li>
              <li><strong>Change scope</strong> — intent and boundaries. <em>Why it matters:</em> limits cognitive load.</li>
              <li><strong>Must‑fix</strong> — blocking feedback. <em>Why it matters:</em> preserves velocity.</li>
              <li><strong>Suggestion</strong> — non‑blocking improvement. <em>Why it matters:</em> keeps flow.</li>
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
              <li>Risky surfaces (auth, payments, data migrations).<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: contract change prompt.</li></ul></li>
              <li>Cross‑team platforms and shared libraries.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: standards prompts reduce debate.</li></ul></li>
              <li>Accessibility and performance critical features.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: checklists and evidence snippets.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Concise checklists aligned to outcomes → faster reviews.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: less back‑and‑forth.</li></ul></li>
              <li>Evidence attached for high‑risk changes → fewer escapes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: safer merges.</li></ul></li>
              <li>Clear must‑fix vs suggestion policy → balanced velocity.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: maintain pace without risk.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Reviews take forever and argue about style.&rdquo; → Likely cause: missing formatter/criteria → What to check: template and bots.</li>
              <li>&ldquo;We missed a breaking change.&rdquo; → Likely cause: no contract prompts → What to check: checklist and tests.</li>
              <li>&ldquo;Perf regressed after merge.&rdquo; → Likely cause: no evidence required → What to check: PR template sections.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: detailed checklists; CODEOWNERS; SLAs.</li>
              <li><strong>Non‑Tech Enterprise</strong>: simple templates; clear must‑fix policy.</li>
              <li><strong>Startups</strong>: lightweight lists; focus on correctness/security first.</li>
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
              <li>Use concise, outcome‑based checklists.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: ask the right questions fast.</li></ul></li>
              <li>Separate must‑fix from suggestions.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: keep flow without risk.</li></ul></li>
              <li>Require evidence for high‑risk changes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer regressions.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate tailored prompts from the diff for security/perf/a11y/contracts.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: attach examples and links.</li></ul></li>
              <li>Flag risk hot‑spots and suggest test evidence to include.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: benchmarks, traces, screenshots.</li></ul></li>
              <li>Summarize decisions into PR notes for future maintainers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>PR templates, CODEOWNERS, and label routing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: expert eyes on the right diffs.</li></ul></li>
              <li>Policy‑as‑code to enforce must‑fix items only.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: velocity on suggestions.</li></ul></li>
              <li>Dashboards for queue health and SLA breaches.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Back‑and‑forth thrash</strong>: request evidence; convert preferences to standards; propose utilities.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: fewer repeat debates.</li></ul></li>
              <li><strong>Stale PRs</strong>: escalate via owners; time‑box reviews; split scope.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores flow.</li></ul></li>
              <li><strong>Missed breaking change</strong>: add contract prompts and checks; require test diffs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: prevents repeats.</li></ul></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We use concise, outcome‑based checklists and clear must‑fix rules, and we require evidence for risky changes—so reviews move fast while quality and safety stay high.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
