import React from "react";

export default function CodeEditorsVsIDEs() {
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
              Startup/Footprint vs Capability
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Lightweight editors prioritize fast startup and minimal memory use (quick open for small tasks), while IDEs invest resources in indexing, project graphs, and refactoring engines for deep code understanding. The trade‑off surfaces as &ldquo;snappy launch&rdquo; versus &ldquo;rich capability&rdquo; in large codebases.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Editors excel at quick edits, notes, and log reviews; IDEs shine for structured refactors and complex debugging.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                In enterprise monorepos, indexing cost is amortized by safer navigation and automated refactors.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Plugin Ecosystems & Extensibility
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Editors and IDEs expose extension APIs, but depth differs: lightweight editors emphasize UI commands and LSP (standardized language features), while IDE platforms add project model, build system, and debugger extension points. Org curation prevents plugin drift and duplicated functionality.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Prefer fewer, well‑maintained extensions with security reviews.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Treat language servers as versioned dependencies aligned with CI.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Remote Development & Cloud Workspaces
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Remote workspaces offload heavy tasks to servers (indexing, builds, container orchestration) and stream the UI locally. This improves laptop responsiveness and standardizes environments across teams (consistent toolchains and secrets handling).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Ephemeral dev environments support preview branches and clean states.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Policy integration can enforce org allowlists for extensions.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Resource Trade‑offs & Profiles
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              IDEs ship multiple feature sets that can be toggled via performance profiles (configurable feature bundles) to reduce memory and CPU draw. Editors remain lean but may require many extensions for parity, each adding overhead and potential conflicts.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Measure startup time, indexing duration, and idle CPU as ongoing SLOs.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Prefer remote dev when local hardware limits impact flow.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define org personas: quick‑edit profile vs deep‑refactor profile.</li>
              <li>Benchmark with scripted open/build/test flows and publish results.</li>
              <li>Centralize extension sets; prune quarterly with telemetry reviews.</li>
              <li>Adopt remote workspaces for large repos and heavy toolchains.</li>
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
              Decision Drivers & ROI
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Editors minimize resource usage and suit quick tasks; IDEs increase capability and reduce cognitive load for complex changes (by surfacing structure automatically). ROI appears when refactor safety, debugging speed, and test visibility offset heavier footprint.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>5–15% developer time reclaimed from safer refactors and nav.</li>
              <li>10–30% fewer escaped defects via debugger + coverage discipline.</li>
              <li>Lower onboarding time with consistent remote workspaces.</li>
            </ul>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Customer Quotes
            </h3>
            <div className="space-y-2 text-slate-700 dark:text-gray-300">
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Performance pains:</strong>{" "}
                &ldquo;Indexing pegs CPUs; we can&rsquo;t run the full stack locally without freezes&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Fragmented tooling:</strong>{" "}
                &ldquo;Our teams installed dozens of extensions; behavior diverged across squads&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Security:</strong>{" "}
                &ldquo;We need an org allowlist and clear telemetry rules to pass audits&rdquo;
              </div>
            </div>
          </div>

          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Selection Guidance
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Many enterprises standardize on a dual‑tool approach: an editor for quick work and an IDE for heavy lifting. Remote development narrows the gap by making heavy projects feel light on local machines.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Publish a &ldquo;when to use which&rdquo; rubric that references repository size, language, and task type.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Provide pre‑built profiles and cloud workspace templates per team.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Baseline performance SLOs: cold start, warm start, and open‑project.</li>
              <li>Curate extension allowlists and auto‑remove risky or redundant ones.</li>
              <li>Adopt remote dev for CPU‑heavy languages and large dependency graphs.</li>
              <li>Train teams on IDE refactors to prevent regex‑based edits for APIs.</li>
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
              Decision Support & Profiles
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Provide prompts that evaluate repo size, languages, and tasks, then recommend an editor vs IDE profile. Generate workspace configs, extensions, and remote templates automatically.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Produce a side‑by‑side capability matrix per team&rsquo;s stack.</li>
              <li>Offer &ldquo;switch context&rdquo; commands that open the same repo in either tool.</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Automated Guardrails
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Enforce extension allowlists, pin language server versions, and apply telemetry/privacy defaults at workspace creation (preconfigured policies for compliance).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create org templates with signed extensions and vetted publishers.</li>
              <li>Sync settings across devices; flag deviations with non‑blocking warnings.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a CLI that toggles editor/IDE profiles for the current repo.</li>
              <li>Generate remote dev containers with prewarmed indexes and caches.</li>
              <li>Automate performance baselines and publish diffs to dashboards.</li>
              <li>Map common tasks to one‑click commands (run test, attach, profile).</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}