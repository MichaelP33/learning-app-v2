import React from "react";

export default function ChangeManagement() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Approvals vs Guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Approvals review changes before execution (useful for novel, high‑risk work but slow for routine changes).
              </li>
              <li>
                Guardrails are automated checks that block unsafe changes (&ldquo;policy‑as‑code&rdquo; reduces subjective gatekeeping).
              </li>
              <li>
                Mature orgs shift approvals to guardrails where evidence is automatable (tests, SLOs, blast‑radius).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk Assessment and Change Windows</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Assess impact, likelihood, and detectability (consider customer segments and seasonality, like holiday traffic spikes).
              </li>
              <li>
                Use change windows to concentrate staffing and communications (planned periods when risk appetite is higher).
              </li>
              <li>
                Keep emergency windows with clear criteria; avoid blanket freezes that stall learning for weeks (large backlogs create brittle releases).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Communication Plans and Audit Trails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Pre‑announce large changes to customers and internal teams (support, sales) with timelines and mitigations.
              </li>
              <li>
                Maintain audit trails: who approved, what changed, when, and why (&ldquo;paper trail&rdquo; simplifies compliance audits).
              </li>
              <li>
                Link change records to incidents and RCAs to build institutional memory (prevents repeat failures).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Replace low‑risk approvals with automated guardrails and post‑deployment checks.</li>
              <li>Schedule change windows aligned to staffing and business cadence.</li>
              <li>Publish concise comms and keep audit logs linked to artifacts and PRs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Throughput, Safety, and Trust</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Guardrails increase safe throughput (more frequent, smaller changes reduce batch risk substantially).
              </li>
              <li>
                Approvals provide confidence for high‑impact risks (payment flows, data retention) when supported by evidence.
              </li>
              <li>
                Transparent comms reduce surprise outages and escalations; stakeholders know what to expect and when.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">CAB: What It Is and When to Avoid</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                A Change Advisory Board (CAB) reviews changes for risk (common in ITIL) and coordinates cross‑team impacts.
              </li>
              <li>
                Use CABs for complex, multi‑system changes; avoid for routine, reversible work where guardrails suffice.
              </li>
              <li>
                When CABs exist, time‑box reviews and pre‑define evidence required (tests, rollbacks, comms plan).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Auditability by Default</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Collect approvals, evidence, and outcomes in one system (single source for regulators and leadership).
              </li>
              <li>
                Tie change records to monitoring outcomes (did SLOs hold?) and support tickets.
              </li>
              <li>
                Use templates so every record answers &ldquo;what changed, why, how did we validate, how do we revert&rdquo;.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Codify risk tiers; map guardrails and approval paths to each tier.</li>
              <li>Run blameless reviews of change failures and adjust guardrails, not just add approvals.</li>
              <li>Centralize change records with links to PRs, flags, deploys, incidents, and RCAs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Change Catalog and Guardrail Engine</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Provide a catalog where changes are proposed, risk‑scored, and tracked end‑to‑end (request → outcome).
              </li>
              <li>
                Encode guardrails: test coverage, migration checks, rollout plans, on‑call ack, and rollback steps.
              </li>
              <li>
                Auto‑assign approvers by domain; collapse to self‑approval when risk is low and guardrails pass.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Communication and Audit Integrations</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Generate comms templates for customers and internal teams (&ldquo;what changes, when, how to get help&rdquo;).
              </li>
              <li>
                Sync change records to monitoring; annotate dashboards during rollout windows to speed triage.
              </li>
              <li>
                Keep immutable logs for flips, approvals, and outcomes; exportable for audits on demand.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use a single change system; avoid scattered spreadsheets and wikis.</li>
              <li>Automate low‑risk approvals; keep human review for novel or irreversible changes.</li>
              <li>Close the loop with outcomes and RCAs to evolve risk models over time.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
