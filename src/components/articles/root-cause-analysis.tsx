import React from "react";

export default function RootCauseAnalysis() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">5 Whys and causal chains</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              The 5 Whys technique explores contributing factors by repeatedly asking why until process or systemic causes emerge (beyond the proximal trigger). This prevents &ldquo;fix the symptom&rdquo; responses and surfaces missing controls, weak tests, or design gaps.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Stop when actions shift from specific code to organizational or process changes (policy or tooling).</li>
              <li>Document evidence for each step to avoid hindsight bias and &ldquo;storytelling&rdquo; that omits facts.</li>
              <li>Distinguish necessary from sufficient causes; list conditions that made the failure possible.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Incident timelines and evidence</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A precise timeline anchors RCA. Capture when detection occurred, who was paged, mitigation steps, and when impact ended. Link logs, traces, and dashboards with shared IDs (traceId, requestId) so anyone can verify the sequence (auditability).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Mark &ldquo;unknowns&rdquo; explicitly; unanswered questions become follow‑up tasks.</li>
              <li>Include customer impact metrics (error rate, failed checkouts) to keep focus on outcomes.</li>
              <li>Attach screenshots or exported graphs so the timeline is self‑contained.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Blameless postmortems</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Blamelessness shifts focus from who to what and why. People respond to incentives and constraints; systems drift toward local optimizations. Write postmortems that analyze guardrails, alerts, tests, and design choices rather than personal mistakes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use neutral language and avoid naming individuals in conclusions or titles.</li>
              <li>Describe detection gaps and recovery frictions (paging, runbooks, tooling) that prolonged impact.</li>
              <li>Share broadly to spread learning and prevent silent repeats across teams.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Corrective and preventive actions (CAPA)</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              CAPA turns analysis into change. Corrective actions remove current defects; preventive actions reduce probability or impact of recurrence. Tie actions to owners and deadlines, and verify effectiveness with explicit acceptance criteria.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Map actions across layers: code, tests, config, release process, on‑call, and product safeguards.</li>
              <li>Prioritize by risk using impact × likelihood; avoid sprawling backlogs without clear value.</li>
              <li>Close the loop by measuring &ldquo;would this have caught the incident&rdquo; after actions land.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Time‑box initial RCA to gather facts; schedule a deeper review when data is complete.</li>
              <li>Use a shared template with sections for timeline, hypotheses, evidence, and CAPA.</li>
              <li>Assign an independent facilitator to keep discussion constructive and bias‑aware.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Trust, transparency, and learning</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              High‑quality RCAs demonstrate accountability without blame, improving stakeholder trust. Transparent timelines and clear CAPA build confidence with customers and leadership.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publishing postmortems encourages a learning culture and reduces repeated failures.</li>
              <li>Engineering morale improves when incidents are treated as system problems to solve together.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Delivery velocity and risk</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              CAPA that simplifies releases, strengthens tests, or improves rollback paths reduces fear of change. Teams ship more confidently and recover faster when things go wrong.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Change failure rate drops as systemic causes are removed rather than patched locally.</li>
              <li>On‑call burnout declines when detection and mitigation steps are simplified.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Regulatory and contractual alignment</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Many standards require post‑incident reviews and evidence of remediation. Consistent RCA artifacts streamline audits and customer security reviews (SOC 2, ISO 27001, HIPAA).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Link RCAs to SLAs and contracts to demonstrate diligence after incidents.</li>
              <li>Use CAPA status dashboards to report progress externally when necessary.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Schedule RCA readouts with cross‑functional audiences (support, product, SRE, security).</li>
              <li>Track &ldquo;time to implement CAPA&rdquo; as a quality metric and remove blockers proactively.</li>
              <li>Create a searchable library of postmortems tagged by system, cause, and impact.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Templates, tooling, and evidence capture</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Provide an RCA template with sections for 5 Whys, timeline, evidence links, and CAPA tracking.</li>
              <li>Automate artifact collection: export logs, traces, dashboards, and attach to the incident record.</li>
              <li>Embed checklists for blameless language and bias countermeasures (avoid hindsight and outcome bias).</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ownership and verification</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Track CAPA in the same system as code (issues linked to PRs) with clear owners and dates.</li>
              <li>Define acceptance tests or monitors that would have prevented or shortened the incident.</li>
              <li>Revisit actions at 30/60/90 days to verify sustained effectiveness.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational rhythm</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Run monthly &ldquo;learning reviews&rdquo; to share cross‑team insights and detect systemic themes.</li>
              <li>Rotate facilitators to grow organizational capability and reduce single‑threaded dependencies.</li>
              <li>Integrate RCA outcomes into roadmap planning and reliability budgets.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a &ldquo;no blame&rdquo; statement at the top of the template and require facilitator sign‑off.</li>
              <li>Auto‑link incidents, RCAs, CAPA, and related PRs for end‑to‑end traceability.</li>
              <li>Measure &ldquo;repeat category rate&rdquo; to see if systemic fixes are working.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}