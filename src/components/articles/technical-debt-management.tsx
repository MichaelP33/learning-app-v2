import React from "react";

export default function TechnicalDebtManagement() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Debt taxonomy and &ldquo;interest&rdquo;</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Technical debt spans design, defect, documentation, and decision debt (shortcuts or omissions that accelerate today but tax tomorrow). The &ldquo;interest&rdquo; is recurring cost: slower changes, regressions, and operational toil.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Name debt explicitly and log it with context (why it exists, risk area, and cost signals like time lost per week). Quantifying interest enables rational trade‑offs instead of hand‑waving debates.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Prioritization models</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use a simple matrix or scoring model: impact × frequency × reversibility (pairs well with a &ldquo;risk of delay&rdquo; factor). Tie debt items to incidents, cycle time, or revenue moments to surface true business value.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Visualize &ldquo;interest per sprint&rdquo; to compare backlog items with features (recurring hours saved vs. one‑time gains makes trade‑offs legible to non‑engineers).
            </p>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Refactor cadence and guardrails</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Establish a cadence (e.g., refactor budget each sprint or periodic &ldquo;stability sprints&rdquo;) and guardrails: tests first, small batches, observable outcomes. Avoid &ldquo;big bang&rdquo; rewrites unless strategically justified.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Guardrails include migration playbooks, deprecation timelines, and compatibility shims (these reduce delivery risk while debt is burned down incrementally).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Tag debt with category, owner, &ldquo;interest&rdquo; estimate, and affected domains.</li>
              <li>Score debt alongside features; show recurring hours saved vs. one‑time value.</li>
              <li>Reserve a stable refactor budget; track outcomes in cycle time and incidents.</li>
              <li>Prefer safe refactors with tests, feature flags, and incremental rollout plans.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-rose-500 bg-rose-50/50 dark:bg-rose-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Faster delivery and fewer incidents</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Systematically paying down debt reduces mean time to change (less time wrestling with brittle code paths) and lowers incident frequency (fewer hidden couplings and side‑effects in fragile areas).
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Product benefits from clearer roadmaps when refactor budgets are visible (stakeholders stop fearing &ldquo;engineering black holes&rdquo; because work is scoped, tracked, and reported).
            </p>
          </div>

          <div className="border-l-4 border-sky-500 bg-sky-50/50 dark:bg-sky-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Hiring, morale, and retention</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Working in healthy codebases improves developer experience (less context switching, clearer ownership) and aids retention. New hires onboard faster when docs and tests are part of the cadence.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Debt transparency avoids blame culture; decisions are recorded with context so the team can evolve them when constraints change.
            </p>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost clarity for non‑engineers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Framing debt as recurring cost (interest) translates engineering pain to business impact. Leaders can compare &ldquo;hours returned per sprint&rdquo; to feature value and make portfolio decisions.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              This makes refactors part of the plan rather than surprise delays (a calmer path to predictable roadmaps and healthier releases).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a debt register; link items to incidents, SLAs, and cycle times.</li>
              <li>Adopt a simple scoring model (impact × frequency × reversibility).</li>
              <li>Allocate a fixed refactor budget; report &ldquo;interest saved&rdquo; in hours.</li>
              <li>Use feature flags and progressive delivery to derisk refactors.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Debt identification and scoring</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Auto‑suggest debt candidates from code smells (duplication, complex conditionals) and hotspots (files with high churn and incidents). Draft impact/frequency estimates and a &ldquo;risk of delay&rdquo; note for review.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Propose &ldquo;interest&rdquo; in hours per sprint based on historical delay factors (PR latency, test flakiness, or on‑call toil), making trade‑offs clearer.
            </p>
          </div>

          <div className="border-l-4 border-teal-500 bg-teal-50/50 dark:bg-teal-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Refactor playbooks and cadence</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate refactor checklists (tests first, slice plan, rollout, rollback), and suggest a cadence aligned to delivery goals (e.g., 10–20% of capacity). Track outcomes like cycle time and defect rate.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Draft deprecation notices and migration guides (docs debt) so change is smoother for adjacent teams and partners.
            </p>
          </div>

          <div className="border-l-4 border-fuchsia-500 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails and review policies</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Enforce guardrails through linters, coverage thresholds, and architecture checks (preventing re‑introduction of known debts). Convert &ldquo;lessons learned&rdquo; to policy‑as‑code.
            </p>
            <p className="text-slate-700 dark:text-gray-300">
              Suggest decision log entries that capture context and constraints (so future teams understand why a debt was taken or how it was retired).
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create &amp; maintain a debt register with owners and review cycles.</li>
              <li>Start with safe refactors in hotspots; measure &ldquo;interest saved&rdquo; monthly.</li>
              <li>Bake guardrails into CI and coding standards to prevent regressions.</li>
              <li>Capture decisions in lightweight logs to preserve context.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}