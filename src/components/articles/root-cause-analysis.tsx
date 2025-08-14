import React from "react";

export const articleFormatVersion = 2;

export default function RootCauseAnalysis() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Root Cause Analysis (RCA) is a structured way to uncover the real reasons incidents happen and to define actions that prevent repeats.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Incidents keep recurring with slightly different shapes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: same queue stalls with different payloads.</li><li>Plain English: we&rsquo;re treating symptoms.</li></ul></li>
              <li>Postmortems feel like blame or speculation.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: conclusions without evidence links.</li><li>Plain English: hard to trust or learn from.</li></ul></li>
              <li>Actions are logged but not verified.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: CAPA tickets close without impact checks.</li><li>Plain English: we don&rsquo;t know if it worked.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Domino chain&rdquo;: find the first unstable piece and the conditions that made it fall, not just the last tile that toppled.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Evidence‑based learning → fewer repeats.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: reliability compounds.</li></ul></li>
                  <li>Systemic fixes over local patches.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: durable improvements.</li></ul></li>
                  <li>Shared language reduces finger‑pointing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: better collaboration.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Time pressure can rush analysis.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: time‑box triage vs deep dive.</li></ul></li>
                  <li>Biases distort conclusions.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: use templates and neutral language.</li></ul></li>
                  <li>Actions without verification drift.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: add &ldquo;would this have caught it&rdquo; checks.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;RCA is about who messed up.&rdquo; → Impact: silence and fear → Fix: blameless framing and facilitation.</li>
              <li>&ldquo;We just need a timeline.&rdquo; → Impact: shallow fixes → Fix: causal chains and condition listing.</li>
              <li>&ldquo;CAPA is a checkbox.&rdquo; → Impact: no improvement → Fix: ownership and effectiveness review.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>5 Whys</strong> — iterative questioning. <em>Why it matters:</em> reveals deeper causes.</li>
              <li><strong>Causal chain</strong> — linked events/conditions. <em>Why it matters:</em> avoids symptom fixes.</li>
              <li><strong>Blamelessness</strong> — focus on systems. <em>Why it matters:</em> preserves learning culture.</li>
              <li><strong>CAPA</strong> — corrective/preventive actions. <em>Why it matters:</em> turns insight into change.</li>
              <li><strong>Acceptance criteria</strong> — success test. <em>Why it matters:</em> verifies action effectiveness.</li>
              <li><strong>Bias countermeasures</strong> — prompts and reviews. <em>Why it matters:</em> reduces hindsight/outcome bias.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Customer incidents with unclear ownership.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: multi‑team outages.</li></ul></li>
              <li>Repeat issues after seemingly &ldquo;fixed&rdquo; releases.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: same failure class returns.</li></ul></li>
              <li>Audit and customer trust requirements for post‑incident transparency.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: SOC 2 evidence packs.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Templates and evidence links in every RCA.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: trust and repeatability.</li></ul></li>
              <li>CAPA tracked with acceptance criteria and follow‑ups.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: durable improvement.</li></ul></li>
              <li>Regular learning reviews across teams.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer cross‑team repeats.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;The same outage keeps happening.&rdquo; → Likely cause: symptom fixes only → What to check: causal chain depth and CAPA.</li>
              <li>&ldquo;Postmortem blames a person.&rdquo; → Likely cause: culture/format gap → What to check: blameless template and facilitation.</li>
              <li>&ldquo;We never verify actions.&rdquo; → Likely cause: missing criteria → What to check: acceptance tests/monitors.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: formal RCAs; CAPA tracked in change systems.</li>
              <li><strong>Non‑Tech Enterprise</strong>: simple templates; focus on customer comms and credibility.</li>
              <li><strong>Startups</strong>: lightweight RCAs; prioritize high‑impact systemic fixes.</li>
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
              <li>Use a blameless, evidence‑first template.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: facts over opinions.</li></ul></li>
              <li>Track CAPA with owners and verification.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fixes that stick.</li></ul></li>
              <li>Share learnings across teams regularly.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: org‑wide improvements.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Assist in assembling timelines and evidence from logs/traces.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: who/when/what/impact collected.</li></ul></li>
              <li>Suggest neutral phrasing and bias checks in drafts.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: no blame, causes vs symptoms.</li></ul></li>
              <li>Validate CAPA clarity and verification steps.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Templates for RCA, comms, and CAPA checklists.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: consistent quality.</li></ul></li>
              <li>CI tasks to auto‑collect artifacts and link issues/PRs/incidents.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: no missing evidence.</li></ul></li>
              <li>Dashboards for repeat categories and CAPA aging.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Major incident</strong>: time‑box initial RCA; schedule deep dive; assign facilitator.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: speed without losing depth.</li></ul></li>
              <li><strong>Repeat category</strong>: escalate to program‑level CAPA; add verification monitors.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: systemic fix.</li></ul></li>
              <li><strong>Audit request</strong>: export evidence pack; link RCAs and actions; share status.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: credibility and compliance.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We practice blameless, evidence‑first RCAs, track actions with verification, and share learnings—so incidents actually teach us and reliability improves every quarter.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
