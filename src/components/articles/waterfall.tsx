import React from "react";
import { MetricsCard } from "@/components/metrics-card";
import { ComparisonTable } from "@/components/comparison-table";

export default function Waterfall() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Sequential Phases
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Requirements → Design → Implementation → Verification →
              Maintenance. Each phase completes with sign‑offs before
              progressing (stage‑gate governance emphasizing predictability and
              documentation).
            </p>
          </div>
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Documentation‑first
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                BRDs, design specs, test plans, and traceability matrices.
              </li>
              <li>Formal change control boards and variance approvals.</li>
            </ul>
          </div>
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Applicability
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Stable requirements and low tolerance for change.</li>
              <li>Regulatory contexts needing rigorous audit trails.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business & Team Impact
        </h2>
        <div className="space-y-6">
          <MetricsCard
            title="Operational Signals"
            metrics={[
              {
                label: "Requirements Volatility",
                value: "Low",
                description: "Stable scope with clear stakeholders",
                color: "green",
              },
              {
                label: "Regulatory Pressure",
                value: "High",
                description: "Auditability and sign-offs are mandatory",
                color: "purple",
              },
              {
                label: "Interface Dependencies",
                value: "High",
                description: "Multiple upstream/downstream contracts",
                color: "orange",
              },
              {
                label: "Technical Uncertainty",
                value: "Low",
                description: "Well-understood solution space",
                color: "blue",
              },
            ]}
          />
          <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Customer Trigger Scenarios
            </h3>
            <div className="space-y-2 text-slate-700 dark:text-gray-300">
              <div>
                <strong className="text-slate-700 dark:text-gray-300">
                  Compliance-driven delivery:
                </strong>{" "}
                &ldquo;We need audit-ready documentation and formal approvals at
                every milestone&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">
                  Contractual scope:
                </strong>{" "}
                &ldquo;Scope, cost, and deadlines are fixed &mdash; change needs
                formal governance&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">
                  Complex integrations:
                </strong>{" "}
                &ldquo;Many dependent teams require sequenced handoffs to avoid
                downtime&rdquo;
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              AI-assisted Documentation
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Generate BRD templates, design specs, and traceability matrices;
              enforce consistent language and acceptance criteria across
              documents.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Stage Gate Readiness
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Create checklists for each gate, validate artifact completeness,
              and prepare stakeholder review summaries.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Risk & Change Control Support
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Draft risk registers, impact assessments, and CCB memos; maintain
              consistent versioned history of decisions.
            </p>
          </div>
          <ComparisonTable
            title="Waterfall vs Agile (at a glance)"
            headers={["Aspect", "Waterfall", "Agile Scrum"]}
            rows={[
              {
                aspect: "Planning",
                waterfall: "Upfront BRD & design sign-offs",
                agile_scrum: "Iterative backlog & sprint planning",
              },
              {
                aspect: "Change",
                waterfall: "Formal CCB",
                agile_scrum: "Continuous re-prioritization",
              },
              {
                aspect: "Feedback",
                waterfall: "Late (verification)",
                agile_scrum: "Early & frequent (reviews)",
              },
              {
                aspect: "Docs",
                waterfall: "Comprehensive artifacts",
                agile_scrum: "Just-enough documentation",
              },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
