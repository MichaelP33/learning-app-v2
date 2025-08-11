import React from "react";

export default function SprintPlanning() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          {/* Callout 1 */}
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sprint Goal as a north star</h3>
            <p className="text-slate-700 dark:text-gray-300">
              A Sprint Goal expresses the outcome the team intends to achieve (one outcome phrased in user value, not a task list). It anchors selection of backlog items and enables coherent trade‑offs during execution when scope shifts.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Backlog refinement &amp; Definition of Ready</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Regular refinement (aka &ldquo;grooming&rdquo;) keeps the top backlog small, clear, and estimable (acceptance criteria, dependencies, and test notes are explicit). A lightweight Definition of Ready (entry checklist) reduces planning churn.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Pair this with a Definition of Done (exit checklist for tests, docs, and review steps) so quality bars are visible and consistent across teams (a shared standard prevents last‑minute surprises).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Capacity vs. commitment and story slicing</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Estimate capacity from historical velocity and actual availability (planned PTO, meetings, on‑call interrupts). Commit below the theoretical number to preserve a small buffer (a variance absorber that protects predictability).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Slice stories to deliver thin vertical value (UI + API + data path) instead of horizontal layers (this exposes integration risks earlier and accelerates feedback loops).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Draft a one‑sentence Sprint Goal that is testable and value‑oriented.</li>
              <li>Apply a Definition of Ready before pulling items into planning.</li>
              <li>Calculate capacity from velocity × availability; commit ~80–90% of that.</li>
              <li>Favor vertical slices; split by risk, integration points, or acceptance criteria.</li>
              <li>Agree on spillover handling (carry, re‑slice, or de‑scope with clear criteria).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          {/* Callout 2 */}
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Predictability and stakeholder confidence</h3>
            <p className="text-slate-700 dark:text-gray-300">
              When goals are outcomes and stories are small, forecast ranges tighten (narrower delivery windows improve coordination for launches and dependencies). Demos tie directly to the Sprint Goal, reducing re‑planning overhead.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk reduction via DoR/DoD and slicing</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Consistent entry and exit checklists reduce hidden work (unclear acceptance criteria, missing tests) that inflates cycle time. Vertical slices surface integration issues early (database migrations, API contracts, or auth flows).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Spillover is handled deliberately: carry with re‑validated priority or re‑slice to match capacity (this prevents quiet queue growth that erodes morale and trust).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sustainable pace and team health</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Planning from availability rather than wishful targets reduces overtime spikes (context switching drops when work‑in‑progress is limited and visible). Steady delivery rhythm compounds into quality and throughput.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Retrospectives turn into targeted improvements when tied to Sprint Goal outcomes (a data‑informed loop that builds capability sprint over sprint).
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Report best/likely/worst ranges instead of single dates in updates.</li>
              <li>Track spillover rate and root causes; adjust slicing or readiness criteria.</li>
              <li>Limit concurrent work; reduce handoffs that create rework and delays.</li>
              <li>Connect demo scope directly to the Sprint Goal to validate value delivered.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          {/* Callout 3 */}
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Planning accelerators</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Generate Sprint Goal options from the Product Goal and top backlog items (a synthesis step that surfaces trade‑offs). Create acceptance‑criteria templates and &ldquo;Definition of Ready&rdquo; checklists tailored to the product area.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Capacity and commitment helpers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Calculate capacity from velocity and availability, then suggest a conservative commitment (an explicit buffer protects predictability). Flag conflicts like shared engineers, meetings, or interrupts that reduce focus time.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Auto‑draft sprint plan summaries with rationale linking items to the Sprint Goal (concise updates remain defensible under scrutiny).
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quality guardrails and spillover policy</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Enforce Definition of Done via CI signals (tests, lint, coverage thresholds) and PR templates (a visible quality bar that protects release stability). Suggest spillover handling based on effort remaining and current priorities.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Provide daily prompts that focus Daily Scrum on the Sprint Goal (risks, blockers, next slice) instead of status theater.
            </p>
          </div>

          <div className="pl-6">
            <p className="font-semibold text-slate-900 dark:text-white mb-2">In practice</p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use short templates for Sprint Goal, DoR, and DoD; keep them visible.</li>
              <li>Commit below calculated capacity; tune buffers using realized velocity.</li>
              <li>Automate PR checklists and CI gates aligned to Definition of Done.</li>
              <li>Document spillover decisions with rationale to improve planning.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}