import React from "react";

export const articleFormatVersion = 2;

export default function StaticAnalysis() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Static analysis inspects code without running it to find bugs, security issues, and style problems. Use it as a risk signal, tuned to your stack.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer production bugs and security findings escape to customers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: SQL injection caught in PR.</li><li>Plain English: safer changes.</li></ul>
              </li>
              <li>Faster reviews with less nitpicking.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: lint fixes style so humans focus on logic.</li><li>Plain English: fewer distractions.</li></ul>
              </li>
              <li>More uniform code helps onboarding and refactors.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: consistent imports, complexity budgets.</li><li>Plain English: code looks familiar.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Lint as spell‑check; SAST as x‑ray.&rdquo; One catches typos and style; the other finds deeper risks.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Shifts detection left → cheaper fixes.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer incidents.</li></ul>
                  </li>
                  <li>Automatable and consistent → less human toil.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: bots catch the boring stuff.</li></ul>
                  </li>
                  <li>Org‑wide policy‑as‑code → standards at scale.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer debates per PR.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>False positives waste time if untuned.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: tune for frameworks; stage rollouts.</li></ul>
                  </li>
                  <li>Slow deep scans can impair PR flow.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: run heavy SAST nightly.</li></ul>
                  </li>
                  <li>Ignoring baselines demotivates teams.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: gate only new/touched code.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Turn on every rule.&rdquo; → Impact: alert fatigue → Fix: curate; start with high‑signal rules.</li>
              <li>&ldquo;Block on all findings.&rdquo; → Impact: stalled delivery → Fix: severity tiers and staged hardening.
              </li>
              <li>&ldquo;One size fits all.&rdquo; → Impact: noise → Fix: stack‑specific configs and suppressions with expiry.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Linting</strong> — style/consistency rules. <em>Why it matters:</em> readable, uniform code.</li>
              <li><strong>SAST</strong> — security analysis. <em>Why it matters:</em> early risk detection.</li>
              <li><strong>Policy‑as‑Code</strong> — rules in repo. <em>Why it matters:</em> auditable standards.</li>
              <li><strong>SARIF</strong> — unified findings format. <em>Why it matters:</em> central dashboards.</li>
              <li><strong>Baseline</strong> — accepted current state. <em>Why it matters:</em> fair adoption.
              </li>
              <li><strong>Severity Tiers</strong> — block/warn/log. <em>Why it matters:</em> focus on what matters.
              </li>
              <li><strong>Autofix</strong> — automatic remediation. <em>Why it matters:</em> lowers toil.</li>
              <li><strong>Suppressions</strong> — time‑boxed ignores. <em>Why it matters:</em> exceptions with control.</li>
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
              <li>PR checks (lint/typecheck) and nightly SAST jobs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: critical rules block; others warn.</li></ul>
              </li>
              <li>Security and platform governance (policy‑as‑code).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: secret detection and dependency audits.</li></ul>
              </li>
              <li>Incident follow‑ups (add rules from learnings).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: ban fragile patterns seen in outages.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Baseline once, then ratchet on new/touched code → fair adoption.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: momentum without noise.</li></ul>
              </li>
              <li>Severity tiers with staged hardening → focus on real risk.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer false blocks.</li></ul>
              </li>
              <li>Editor autofix + CI annotations → fast remediation.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: seconds to fix.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;PRs are blocked for style nits.&rdquo; → Likely cause: over‑strict rules → What to check: severity tiers and autofix.
              </li>
              <li>&ldquo;Too many false alarms.&rdquo; → Likely cause: untuned SAST → What to check: stack‑specific configs and baselines.
              </li>
              <li>&ldquo;We ignore the tool now.&rdquo; → Likely cause: alert fatigue → What to check: rule pruning and staged hardening.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: SARIF aggregation; policy repos; org dashboards.</li>
              <li><strong>Non‑Tech Enterprise</strong>: compliance mapping and waivers with expiry.</li>
              <li><strong>Startups</strong>: editor lint+autofix; minimal CI; grow SAST later.
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
              <li>Baseline now; ratchet on changed code only.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: no pile‑on; only forward.</li></ul>
              </li>
              <li>Separate editor/CI policies; block only on high risk.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: fast in dev; strict in CI for real issues.</li></ul>
              </li>
              <li>Autofix and good docs make the right thing easy.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fast adoption.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Propose rule set changes with trial periods and opt‑ins; measure signal/noise.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: severity tiers, suppressions with expiry.</li></ul>
              </li>
              <li>Annotate findings inline with links to fixes and examples.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: copy‑pasteable fixes.</li></ul>
              </li>
              <li>Track &ldquo;time to green&rdquo; and flake findings; tune before hardening.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Unified SARIF ingestion; dashboards by repo/service/team.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: one view of quality.</li></ul>
              </li>
              <li>Pre‑commit hooks for low‑cost lint; SAST nightly with blocks only on critical.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: speed and safety together.</li></ul>
              </li>
              <li>Policy‑as‑code repos with shared templates and exceptions management.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Alert fatigue</strong>: prune rules; add tiers and suppressions with expiry; stage hardening.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores trust and focus.</li></ul>
              </li>
              <li><strong>Developer pushback</strong>: add autofix and fix‑it sprints; tune for frameworks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: easier adoption.</li></ul>
              </li>
              <li><strong>Compliance ask</strong>: export SARIF/metrics; map rules to controls; track waivers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: audit‑ready evidence.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We tune static checks to our stack, baseline now and ratchet later, and block only on real risk—so quality rises without slowing delivery.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
