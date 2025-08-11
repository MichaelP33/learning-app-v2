import React from "react";

export default function IntegratedDevelopmentEnvironments() {
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
              Project Models & Workspace Awareness
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Modern IDEs model your codebase as a project with indexes, build graphs, and dependency graphs (maps of modules, packages, and references) to provide deep navigation and refactoring. This project model powers reliable rename, safe delete, and cross‑language symbol search, which is critical in polyglot monorepos (single repositories housing multiple services and libraries).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Indexers continuously maintain symbol tables and references (data structures mapping identifiers to definitions) for instant navigation and refactor safety.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Build system integrations (Gradle/Maven for JVM, MSBuild for .NET) keep the IDE in sync with compiler options and generated sources.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Debugging, Profilers, and Diagnostics
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              First‑class debuggers support breakpoints, watch expressions, hot reload, and time‑travel debugging (recorded execution to step backward), while profilers sample CPU, memory, and I/O to pinpoint hotspots. Enterprise teams rely on these tools to reduce mean time to resolve by surfacing call stacks and performance signatures during incidents.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                CPU/heap profilers visualize function costs and allocation sites (where memory is requested) for targeted optimizations.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Remote debugging tunnels attach to services in Kubernetes or VMs (secure channels forwarding debug ports) for parity with production‑like environments.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Test Runners & Coverage Integration
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              IDE test tooling discovers suites, executes in watch mode, and annotates lines with pass/fail states (inline decorations that mark outcomes) to shorten feedback loops. Coverage overlays show executed branches and missed lines so reviewers immediately see risk areas.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Language‑aware runners for JUnit, NUnit, pytest, and Jest unify workflows in multi‑language stacks.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Snapshot and golden‑file testing integrate with diff viewers for rapid approvals.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Code Intelligence & Live Templates
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Modern code intelligence combines semantic completion, inlay hints, cross‑file analysis, and LSP (Language Server Protocol) signals to provide intent‑aware suggestions. Live templates expand short triggers into idiomatic scaffolds with variables and mirrors, which standardizes patterns across teams (like shared macros).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Semantic rename and safe move use symbol graphs (relationship maps of identifiers) to update usages reliably.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Live templates with parameters enforce logging, error handling, and dependency injection conventions.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt IDE‑managed project models; commit shared settings for consistency.</li>
              <li>Standardize debugger configurations for services, jobs, and CLI tools.</li>
              <li>Enable test coverage overlays and require green local runs before PRs.</li>
              <li>Publish a shared live‑template pack for common patterns and guardrails.</li>
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
              Outcomes at Enterprise Scale
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Teams see reduced cycle time and fewer escaped defects when IDE workflows are standardized (shared run configurations and templates). Cost impact is realized through less rework and faster incident triage, especially for distributed systems where debugging context is expensive to rebuild.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>20–40% faster local feedback loops via integrated test and debug.</li>
              <li>10–25% reduction in PR review time with inline coverage and hints.</li>
              <li>30–60% faster incident reproduction through shared launch configs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Adoption Patterns & Risks
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Enterprises adopt IDEs incrementally: start with project models and test runners, then layer profilers and remote debugging. Risks include plugin sprawl, inconsistent settings, and resource contention on dev laptops (limited CPU/RAM causing sluggishness during indexing).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Mitigate with org‑level settings sync, curated plugin allowlists, and performance budgets per profile.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Use remote development for large monorepos to offload indexing/build to servers.
              </li>
            </ul>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Customer Trigger Scenarios
            </h3>
            <div className="space-y-2 text-slate-700 dark:text-gray-300">
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Slow triage:</strong>{" "}
                &ldquo;Engineers spend hours reproducing bugs; we need faster localized debugging&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Inconsistent quality:</strong>{" "}
                &ldquo;Teams apply different patterns; incidents stem from missing logging and guards&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Laptop constraints:</strong>{" "}
                &ldquo;Indexing and builds freeze machines; developers can&rsquo;t run full stacks locally&rdquo;
              </div>
            </div>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define org templates for services, tests, logs, and error handling.</li>
              <li>Centralize run/debug configs and share via repo or settings sync.</li>
              <li>Adopt remote dev for heavy projects; keep laptops for edit/preview.</li>
              <li>Track IDE performance metrics and set plugin budgets per team.</li>
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
              AI‑Assisted Debug & Diagnose
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Provide step‑through plans from failing test to root cause with watch expressions, variable snapshots, and suggested breakpoints (predefined stopping points during execution). Propose profiler sessions with sampling intervals and target processes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate repro scripts, seed data, and run configs from a bug report.</li>
              <li>Suggest flamegraph captures and interpret hotspots into refactor tasks.</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Live Templates & Refactor Recipes
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Curate live templates for logging, metrics, and defensive code paths, and auto‑insert organization standards (correlation IDs, error taxonomies). Convert profiler findings into refactor scripts that sequence small, verifiable edits.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Inline hints for nullability, complexity, and allocation‑heavy loops.</li>
              <li>One‑click safe rename/move plans across languages and build graphs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create &ldquo;Debug Packs&rdquo;: launch.json variants, data seeding, and watch lists.</li>
              <li>Automate coverage gates in CI; surface deltas directly in PR comments.</li>
              <li>Offer remote dev bootstrap prompts that provision servers and tunnels.</li>
              <li>Track &ldquo;time‑to‑first‑useful‑signal&rdquo; for debugging as a core metric.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}