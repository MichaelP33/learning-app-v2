import React from "react";

export default function CapacityPlanning() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Velocity and availability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Start with historical velocity as a directional input (past throughput, not a quota). Adjust for actual availability: PTO, holidays, meetings, on‑call, and interrupts that reduce focus time.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Translate availability into an effective capacity number and use ranges rather than points (communicate best/likely/worst to reflect reality and reduce date thrash).
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Buffers and utilization myths</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Target near‑full utilization looks efficient but degrades flow (queues grow, cycle time balloons). A small buffer absorbs variance and protects predictability (Little&rsquo;s Law intuition applied to team throughput).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Buffers are not &ldquo;unused time&rdquo; but risk absorbers that keep delivery stable under uncertainty (changing requirements, dependencies, or defects).
            </p>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Forecast ranges and scenario planning</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Build ranges from velocity distributions and availability adjustments (simple percentiles often suffice). Explore scenarios: team size changes, interrupt levels, or scope shifts to see sensitivity.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Scenario planning informs commitments and staffing discussions (trade‑offs are explicit when outcomes shift under different assumptions).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use historical velocity as a guide; never as a target.</li>
              <li>Compute effective capacity from availability; publish assumptions.</li>
              <li>Include a small buffer (e.g., 10–20%) to protect predictability.</li>
              <li>Show forecast ranges and &ldquo;what‑if&rdquo; scenarios in planning decks.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Predictable delivery and credible commitments</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Leaders value ranges with clear assumptions over single‑point dates (they survive reality). Teams that show sensitivity to availability and interrupts gain trust and negotiate scope changes earlier.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Buffers prevent schedule thrash that ripples across dependencies (marketing, sales, and ops plan with more confidence when variance is contained).
            </p>
          </div>

          <div className="border-l-4 border-sky-500 bg-sky-50/50 dark:bg-sky-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sustainable pace and quality</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Capacity planning that respects availability reduces context switching and overtime (quality rises when engineers can finish slices end‑to‑end). Defect leakage drops as queues shrink and handoffs decline.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Forecast ranges reduce pressure to cut corners near deadlines (definition of done remains intact under stress).
            </p>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Better staffing and portfolio choices</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Scenario analysis informs hiring or sequencing decisions (see delivery impact of +1 engineer vs. scope reduction). Portfolio conversations become concrete with shared, quantified assumptions.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              This transparency cuts &ldquo;date theater&rdquo; and aligns incentives across product, eng, and leadership.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a simple capacity sheet per sprint with availability details.</li>
              <li>Track forecast error; tune buffers and slicing accordingly.</li>
              <li>Review scenario deltas when negotiating scope or staffing.</li>
              <li>Highlight interrupts explicitly (on‑call, incidents) to protect focus time.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Capacity calculators and ranges</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate effective capacity from velocity history and availability inputs; present best/likely/worst ranges. Flag utilization risks when commitments exceed safe thresholds.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Suggest conservative commitments that maintain buffers and highlight scope trade‑offs aligned to the Sprint Goal.
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scenario planning helpers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Model &ldquo;what‑ifs&rdquo; (team size, interrupts, scope changes) and show delivery deltas. Provide quick charts for planning decks to make trade‑offs obvious to stakeholders.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Integrate with calendars and incident data to keep availability and interrupt assumptions current.
            </p>
          </div>

          <div className="border-l-4 border-fuchsia-500 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails and visibility</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Provide warnings when buffers erode or WIP expands beyond limits; nudge teams to de‑scope or re‑slice. Auto‑generate sprint summaries with assumptions and forecast errors.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Keep a lightweight decision log per sprint so forecast adjustments and scope calls are transparent.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use range‑based forecasts; avoid single‑point commitments.</li>
              <li>Enforce WIP limits and protect buffers explicitly.</li>
              <li>Update scenarios when availability or interrupts change.</li>
              <li>Share concise charts linking capacity to Sprint Goal outcomes.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}