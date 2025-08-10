import React from "react";
import { MetricsCard } from "@/components/metrics-card";
import { ComparisonTable } from "@/components/comparison-table";

export default function AgileScrum() {
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
              Scrum Roles
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Product Owner (maximizes product value), Scrum Master (enables the
              team and removes impediments), and Developers (deliver the
              increment each sprint).
            </p>
          </div>
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Artifacts & Commitments
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Product Backlog ↔ Product Goal, Sprint Backlog ↔ Sprint Goal,
              Increment ↔ Definition of Done. These commitments align work with
              clear outcomes and quality bars.
            </p>
          </div>
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Events
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Sprint Planning, Daily Scrum, Sprint Review, and Sprint
              Retrospective create an inspect‑and‑adapt loop that drives
              continuous improvement.
            </p>
          </div>
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Forecasting & Velocity
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Velocity is a team‑internal forecasting tool, not a target. Use it
              to project delivery ranges, not to compare teams or set quotas.
            </p>
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
            title="Delivery Outcomes"
            metrics={[
              {
                label: "Lead Time",
                value: "Down",
                description:
                  "Shorter idea‑to‑production cycle via tight feedback loops",
                color: "green",
              },
              {
                label: "Change Failure Rate",
                value: "Down",
                description:
                  "DoD, automated testing, and small batches reduce incidents",
                color: "green",
              },
              {
                label: "Predictability",
                value: "Up",
                description:
                  "Sprint goals and empirical forecasting improve planning",
                color: "blue",
              },
              {
                label: "Stakeholder Alignment",
                value: "Up",
                description:
                  "Review demos create shared understanding and fast course‑correction",
                color: "purple",
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
                  Slow delivery:
                </strong>{" "}
                &ldquo;It takes us months to ship small changes; we need a
                faster, safer path&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">
                  Unclear priorities:
                </strong>{" "}
                &ldquo;We keep starting work without a clear goal and miss
                stakeholder expectations&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">
                  Unstable releases:
                </strong>{" "}
                &ldquo;Every release is a fire drill; we need better quality and
                predictability&rdquo;
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
              Backlog Hygiene & Refinement
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Generate user story templates with acceptance criteria, split
              oversized stories, and propose Sprint Goal candidates aligned to
              the Product Goal.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Definition of Done Automation
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Enforce DoD via CI checks (tests, coverage, lint) and PR
              templates. Provide checklists and auto‑reminders when criteria are
              missing.
            </p>
          </div>
          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Sprint Events Support
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Draft Sprint Planning outlines, Daily Scrum prompts focused on
              progress toward the Sprint Goal, Review demo scripts, and
              Retrospective improvement options.
            </p>
          </div>

          <ComparisonTable
            title="Scrum vs Waterfall (at a glance)"
            headers={["Aspect", "Scrum", "Waterfall"]}
            rows={[
              {
                aspect: "Planning",
                scrum: "Iterative sprints & adaptive backlog",
                waterfall: "Upfront BRD & design sign‑offs",
              },
              {
                aspect: "Feedback",
                scrum: "Frequent demos & retrospectives",
                waterfall: "Late (verification stage)",
              },
              {
                aspect: "Change",
                scrum: "Re‑prioritize every sprint",
                waterfall: "Formal CCB",
              },
              {
                aspect: "Quality",
                scrum: "DoD + CI automation",
                waterfall: "Documented gates",
              },
            ]}
          />
        </div>
      </section>
    </article>
  );
}
