import React from "react";

export default function DeveloperProductivityTools() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Linters & Formatters
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Linters enforce code quality rules and catch defects early (static analysis that inspects source without running it), while formatters ensure consistent style to reduce review noise. Org‑level configs eliminate &ldquo;style debates&rdquo; so reviews focus on correctness and design.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Treat rules as contracts; fail CI on violations for critical repos.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Auto‑fix on save to minimize manual cleanup and PR churn.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Code Search & Navigation
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Semantic search, cross‑repo indexing, and symbol navigators turn large codebases into queryable knowledge graphs (relations among identifiers, files, and ownership). This shortens &ldquo;time to relevant code&rdquo; and builds organizational memory.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Prefer semantic filters over regex for accuracy on large graphs.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Link search to ownership metadata for faster review routing.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Snippets & Templates
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Snippets create consistent scaffolds for repetitive tasks (like live templates but editor‑native), while repo templates codify service and library patterns. This reduces cognitive load and spreads best practices.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Parameterize logs, metrics, and error handling in every snippet.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Version snippets and templates; treat as dependencies.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Task Runners & CLI Integration
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Task runners orchestrate local workflows (build, test, lint) and expose consistent commands across repos. Deep CLI integration lets tools run inside the editor/IDE with consistent environment variables and secrets (managed, not hard‑coded).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Standardize on a minimal, auditable set of commands per language.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Provide cross‑platform scripts that hide OS differences.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt &ldquo;format on commit&rdquo; and fail CI on lint errors.</li>
              <li>Roll out semantic code search and connect to ownership data.</li>
              <li>Publish snippet packs and repo templates with version pins.</li>
              <li>Wrap local workflows in a single &ldquo;task&rdquo; CLI exposed in the IDE.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business & Team Impact
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes & Metrics
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Standardized tooling reduces variability and improves flow. Measured impacts include shorter review cycles, fewer regressions, and higher onboarding pace (new hires reach productive tasks faster due to predictable workflows).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>15–30% review time reduction through auto‑format and lint autofix.</li>
              <li>10–20% fewer post‑merge defects via consistent checks and tasks.</li>
              <li>25–40% faster onboarding by removing &ldquo;tooling puzzles&rdquo;.</li>
            </ul>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Customer Trigger Scenarios
            </h3>
            <div className="space-y-2 text-slate-700 dark:text-gray-300">
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Noisy reviews:</strong>{" "}
                &ldquo;Half our PR comments are about spacing; it slows meaningful feedback&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Inconsistent scripts:</strong>{" "}
                &ldquo;Every repo runs tests differently; onboarding takes weeks&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Knowledge gaps:</strong>{" "}
                &ldquo;Engineers can&rsquo;t find the right code quickly across repos&rdquo;
              </div>
            </div>
          </div>

          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Rollout Sequencing
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Start with formatters (low friction), then linters (gradual strictness), then snippets/templates, and finally task runners to unify commands. Each step compounds quality and speed.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Enforce via CI and pre‑commit hooks to prevent regressions.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Use telemetry to measure adoption and friction hotspots.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pin tool versions and sync via workspace settings.</li>
              <li>Ship repo templates that bake in scripts, lint, and format config.</li>
              <li>Layer lint rules from warnings to errors with clear timelines.</li>
              <li>Create a &ldquo;one command&rdquo; task runner for local workflows.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-fuchsia-600 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              AI‑Accelerated Standards
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate and enforce org configs for lint/format, propose snippet packs from existing code, and transform tribal knowledge into templates with parameters (inputs that pre‑fill identifiers and paths).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Auto‑migrate legacy repos to standard scripts and tasks.</li>
              <li>Flag drift and open PRs with autofixes for basic rules.</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Search Copilots & Code Maps
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Provide semantic search prompts that traverse ownership, services, and domains, returning code maps (summaries of modules and interactions) rather than only files. This speeds up issue triage and architectural understanding.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Answer &ldquo;where is X implemented?&rdquo; with links and call chains.</li>
              <li>Offer refactor plans that cross boundaries with safety checks.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Bootstrap repos with lint/format/snippets/tasks in one step.</li>
              <li>Embed &ldquo;fix‑it&rdquo; commands in PRs to apply autofixes locally.</li>
              <li>Surface semantic search inside the editor with keyboard shortcuts.</li>
              <li>Measure &ldquo;time‑to‑first‑useful‑search‑result&rdquo; per language.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}