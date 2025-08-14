import React from "react";

export const articleFormatVersion = 2;

export default function ReviewProcess() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">The review process is how teams move changes from proposal to merge with the right context, the right reviewers, and clear decisions.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Faster time‑to‑first‑review with clear templates.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: PRs include intent, risk, evidence.</li><li>Plain English: reviewers get the story quickly.</li></ul></li>
              <li>Less back‑and‑forth when feedback is labeled.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: must‑fix vs suggestion labels.</li><li>Plain English: know what to change now vs later.</li></ul></li>
              <li>Predictable throughput with SLAs and dashboards.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: stale PR nudges and owner rollups.</li><li>Plain English: nothing falls through the cracks.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Air traffic control&rdquo;: intake, routing, sequencing, and clearances keep the runway safe and busy.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Templates reduce context thrash → faster reviews.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer delays.</li></ul></li>
                  <li>SLAs and routing improve flow → fewer stale PRs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: predictable delivery.</li></ul></li>
                  <li>Non‑blocking feedback preserves velocity.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: momentum without risk.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Heavy templates can be ignored.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: keep concise; auto‑fill where possible.</li></ul></li>
                  <li>Strict reviewers can over‑block.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: clarify must‑fix vs suggestions.</li></ul></li>
                  <li>Ownership drift breaks routing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: maintain CODEOWNERS.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;All comments block.&rdquo; → Impact: stalled PRs → Fix: label must‑fix vs suggestions.</li>
              <li>&ldquo;Routing is automatic forever.&rdquo; → Impact: mis‑reviews → Fix: maintain owners and backups.</li>
              <li>&ldquo;No time for templates.&rdquo; → Impact: reviewer confusion → Fix: short, pre‑filled forms.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>PR template</strong> — context prompt. <em>Why it matters:</em> speeds onboarding.</li>
              <li><strong>CODEOWNERS</strong> — routing file. <em>Why it matters:</em> gets experts in the loop.</li>
              <li><strong>SLA</strong> — service level agreement. <em>Why it matters:</em> predictable throughput.</li>
              <li><strong>Must‑fix</strong> — blocking feedback. <em>Why it matters:</em> safety without slowdown.</li>
              <li><strong>Suggestion</strong> — non‑blocking. <em>Why it matters:</em> maintain pace.</li>
              <li><strong>Queue health</strong> — PR flow metrics. <em>Why it matters:</em> reveals bottlenecks early.</li>
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
              <li>Large programs with cross‑team dependencies.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: dashboard shows queue health.</li></ul></li>
              <li>High‑risk areas needing expert reviewers.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: CODEOWNERS routes to security.</li></ul></li>
              <li>Distributed teams across time zones.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: SLAs and nudges keep flow.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Concise templates with auto‑links → less context thrash.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster approvals.</li></ul></li>
              <li>Must‑fix vs suggestion norms → fewer stalemates.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: momentum with safety.</li></ul></li>
              <li>Owner dashboards and nudges → predictable throughput.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: no forgotten PRs.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;PRs sit for days without a response.&rdquo; → Likely cause: missing SLAs/dashboards → What to check: owner nudges.</li>
              <li>&ldquo;The wrong people review my PRs.&rdquo; → Likely cause: stale CODEOWNERS → What to check: owner map updates.</li>
              <li>&ldquo;Reviews devolve into style debates.&rdquo; → Likely cause: missing template/criteria → What to check: checklists and formatters.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: dashboards, SLAs, strong routing.</li>
              <li><strong>Non‑Tech Enterprise</strong>: simple templates, minimal blocking.</li>
              <li><strong>Startups</strong>: lightweight process, focus on correctness and speed.</li>
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
              <li>Short templates; clear labels; owner routing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: right info, right eyes.</li></ul></li>
              <li>Dashboards and nudges keep flow moving.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: no stale PRs.</li></ul></li>
              <li>Block only must‑fix items.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: speed with safety.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pre‑fill templates from diff context; propose risk hot‑spots and evidence asks.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: screenshots, traces, benchmarks.</li></ul></li>
              <li>Auto‑label domains and route to CODEOWNERS/backups.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: security, a11y, DB.</li></ul></li>
              <li>Summarize threads and decisions into notes for future maintainers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Branch protections on must‑fix checks; suggestions non‑blocking.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: flow preserved.</li></ul></li>
              <li>Queue dashboards and SLA alerts; daily stale digests.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: visibility and accountability.</li></ul></li>
              <li>Template generator per repo with shared sections to avoid drift.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Queue backlog</strong>: re‑balance owners; split PRs; raise nudges.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores throughput.</li></ul></li>
              <li><strong>Review churn</strong>: enforce must‑fix labeling; propose ADRs; bundle suggestions.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: reduces thrash.</li></ul></li>
              <li><strong>Ownership drift</strong>: audit CODEOWNERS monthly; add backups and coverage alerts.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: correct routing.</li></ul></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We streamline reviews with short templates, clear labels, and owner routing—and we track flow with dashboards—so changes land faster without sacrificing safety.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
