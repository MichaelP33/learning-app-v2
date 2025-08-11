import React from "react";

export default function LeanStartup() {
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
              Build-Measure-Learn loop
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Reduce uncertainty with rapid experiments. Ship a Minimum Viable
              Product, measure real behavior, and learn whether to persevere or
              pivot.
            </p>
          </div>
          <div className="border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              MVP and riskiest assumptions
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Start with the riskiest assumption tests, not the biggest
                feature set.
              </li>
              <li>
                Use concierge, landing pages, or prototypes to validate demand.
              </li>
              <li>Measure actionable metrics, not vanity metrics.</li>
            </ul>
          </div>
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Innovation accounting
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define a baseline, tune the engine via experiments, and decide
                to pivot or persevere.
              </li>
              <li>
                Time-boxed learning milestones replace speculative long-range
                plans.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business & Team Impact
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Capital efficiency
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Avoid overbuilding by validating demand early.</li>
              <li>Shorten time-to-learning; reduce cost of delay.</li>
            </ul>
          </div>
          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Team ways of working
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Hypothesis-driven roadmaps and experiment backlogs.</li>
              <li>
                Cross-functional squads spanning product, design, and
                engineering.
              </li>
              <li>
                Clear kill criteria reduce sunk-cost bias and speed pivots.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Discovery to delivery
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Lean discovery rituals: problem interviews, solutions sketches,
                quick prototypes.
              </li>
              <li>
                Feature flags and staged rollouts to test behavior safely.
              </li>
              <li>
                North-star and counter metrics guard against local
                optimizations.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Experiment system
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Templates for hypotheses, telemetry, and success criteria.
              </li>
              <li>
                Automated analytics events with privacy-by-default controls.
              </li>
              <li>Weekly learning reviews to decide persevere vs. pivot.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
