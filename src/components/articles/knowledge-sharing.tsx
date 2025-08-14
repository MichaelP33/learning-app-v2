import React from "react";

export const articleFormatVersion = 2;

export default function KnowledgeSharing() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Knowledge sharing turns review conversations into reusable insights that future teams can discover and trust.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Faster onboarding with exemplars and decisions in context.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: PR notes summarize trade‑offs.</li><li>Plain English: learn from past work quickly.</li></ul></li>
              <li>Less repeated debate on common patterns.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: link to standards/ADRs in comments.</li><li>Plain English: facts beat opinions.</li></ul></li>
              <li>Clear handoffs between reviewers/authors.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: next‑step tasks generated after pairing.</li><li>Plain English: no context lost.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Breadcrumb trail&rdquo;: leave short, linkable notes others can follow later.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Captured rationale reduces future thrash.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: quicker convergence.</li></ul></li>
                  <li>Examples accelerate learning and consistency.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer errors, faster delivery.</li></ul></li>
                  <li>Searchable artifacts improve maintenance.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: easier future changes.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Too much text → nobody reads it.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: capture short bullets with links.</li></ul></li>
                  <li>Unindexed notes → knowledge lost.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: index PR notes and ADRs.</li></ul></li>
                  <li>Handoffs without tasks → stalled work.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: generate next steps automatically.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We&rsquo;ll remember later.&rdquo; → Impact: re‑litigation → Fix: capture brief notes now.</li>
              <li>&ldquo;Docs are separate from reviews.&rdquo; → Impact: drift → Fix: link ADRs and standards from PRs.</li>
              <li>&ldquo;Pairing notes are throwaway.&rdquo; → Impact: lost context → Fix: summarize and attach.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>ADR</strong> — architecture decision record. <em>Why it matters:</em> preserves reasoning.</li>
              <li><strong>Exemplar</strong> — model PR. <em>Why it matters:</em> sets expectations quickly.</li>
              <li><strong>Handoff</strong> — reviewer/author transfer. <em>Why it matters:</em> continuity of work.</li>
              <li><strong>Indexing</strong> — making notes discoverable. <em>Why it matters:</em> find history later.</li>
              <li><strong>Digest</strong> — summarized learnings. <em>Why it matters:</em> spreads knowledge.</li>
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
              <li>Onboarding, handoffs, and cross‑team work.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: weekly learning digest from PR notes.</li></ul></li>
              <li>Incident follow‑ups and architecture shifts.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: link RCAs and ADRs to related PRs.</li></ul></li>
              <li>Reusable patterns and standards emergence.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: extract utilities from PR exemplars.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Short, link‑rich notes near the code → fast discovery.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: less context hunting.</li></ul></li>
              <li>Standards and ADR links → fewer repeats debates.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: quicker consensus.</li></ul></li>
              <li>Weekly digests → shared learning culture.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: compounding knowledge.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We keep having the same debate.&rdquo; → Likely cause: missing exemplars/links → What to check: PR notes and standards.</li>
              <li>&ldquo;New hires take months to ramp.&rdquo; → Likely cause: poor capture → What to check: digests and indexing.</li>
              <li>&ldquo;Work stalls after handoffs.&rdquo; → Likely cause: no next steps → What to check: pairing summaries/tasks.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: integrates with trackers and docs; search‑first.</li>
              <li><strong>Non‑Tech Enterprise</strong>: templates and weekly digests; low friction.</li>
              <li><strong>Startups</strong>: lightweight notes; exemplars and ADR links only.</li>
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
              <li>Capture short, link‑rich notes in PRs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: future you will thank you.</li></ul></li>
              <li>Index and surface relevant history automatically.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer repeats.</li></ul></li>
              <li>Generate handoff tasks after pairing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: no dropped threads.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Suggest decision summaries and extract entities/links from the diff.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: services, endpoints, tables, ADRs.</li></ul></li>
              <li>Detect similar past PRs and surface lessons learned.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: related outcomes and follow‑ups.</li></ul></li>
              <li>Provide pairing handoff templates with next steps and owners.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Macros/templates for PR notes; ADR linkers; digest generators.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: low friction capture.</li></ul></li>
              <li>Indexing pipeline across repos; search surfaces relevant history in new PRs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: find knowledge fast.</li></ul></li>
              <li>Weekly summaries to teams to reinforce capture and share wins.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>New team onboarding</strong>: compile exemplar PRs and decisions; run a learning review.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: accelerates ramp.</li></ul></li>
              <li><strong>Recurring debate</strong>: link standards/ADRs; add an exemplar; close the loop with docs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: stops churn.</li></ul></li>
              <li><strong>Risky handoff</strong>: generate next‑step tasks; attach traces/screens; assign owners.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: preserves context.</li></ul></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We capture short, link‑rich notes in PRs, index decisions, and auto‑surface prior art—so teams onboard faster, avoid repeat debates, and keep context across handoffs.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
