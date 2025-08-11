import React from "react";

export default function RepositoryOrganization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Monorepo vs Multi‑repo</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Monorepos centralize code with shared tooling and consistent visibility (one source of truth for APIs and contracts). Multi‑repo splits code by service or domain to reduce clone size and change blast radius (teams pull only what they need). Choose based on dependency coupling, release cadence, and tooling maturity (build systems and CI orchestrators must scale appropriately).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Monorepo simplifies large‑scale refactors with atomic changes across services.</li>
              <li>Multi‑repo simplifies access control and independent release cycles per service.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Submodules and Subtrees</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Submodules link external repositories at a specific commit (like pointers that require explicit updates) while subtrees vendor code into the repo history (simpler clones but larger history). Prefer subtrees for stability and fewer sharp edges unless strict separation is required (submodules demand contributor discipline and tooling awareness).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Document update cadence, ownership, and rollback steps for any vendored code.</li>
              <li>Pin submodules to tags and automate validation to avoid accidental drift.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ownership Boundaries and CODEOWNERS</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Clear ownership lowers review latency and conflict risk (reviewers with context reduce back‑and‑forth). CODEOWNERS routes changes to the right teams automatically and enables protected‑path rules (sensitive directories require approvals from specific groups).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define boundaries at stable interfaces: APIs, databases, and shared libraries.</li>
              <li>Use path‑based rules and labels to map changes to domain experts.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pick monorepo when cross‑service refactors are frequent and tooling is ready.</li>
              <li>Pick multi‑repo when access control and independent releases dominate concerns.</li>
              <li>Document CODEOWNERS, labels, and protected paths in <code>CONTRIBUTING.md</code>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scale, Security, and Compliance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Monorepos shine with uniform policies, dependency governance, and discoverability (shared linting, build rules, and CI). Multi‑repo aligns with strict access boundaries and vendor separation (legal/security needs to isolate partners or third‑party code). Both benefit from signed tags, protected branches, and audit trails (traceability matters for regulated industries).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Centralized policy in monorepos reduces configuration drift across services.</li>
              <li>Multi‑repo simplifies supply‑chain attestations per artifact.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Productivity and Cognitive Load</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Monorepos reduce &ldquo;findability&rdquo; friction (one place to look for code and docs) but increase build times without strong tooling (remote caching and incremental builds are essential). Multi‑repo reduces local overhead but increases cross‑repo coordination (versioning, release trains, and dependency update cadence must be explicit).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Measure build/test time and optimize repo layout accordingly.</li>
              <li>Adopt dependency bots with batched updates to reduce PR noise.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Metrics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Cross‑repo PR rate and coordination time per change.</li>
              <li>Build and test times, cache hit rates, and flake incidence.</li>
              <li>Ownership response times and approval latency on protected paths.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Codify ownership and protected paths using CODEOWNERS and branch protections.</li>
              <li>Set SLOs for dependency update cadence and release trains per repo.</li>
              <li>Instrument build pipelines with timing and flake tracking dashboards.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Assisted Repo Design</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to model monorepo vs multi‑repo trade‑offs for your codebase (dependency graph, change coupling, and team topology drive the decision). Generate proposed directory structures, ownership maps, and CODEOWNERS rules from history.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create PRs that scaffold new repo layouts, CI matrices, and path‑based test selection.</li>
              <li>Simulate build times and cache behavior given proposed changes to validate feasibility.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automation and Guardrails</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate CI policies for protected paths, code‑owner review enforcement, and artifact signing (supply‑chain hygiene protects downstream consumers). Provide bots that batch dependency updates, with AI summaries that highlight risk areas and remediation steps.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Auto‑label PRs by directory ownership and trigger appropriate test suites.</li>
              <li>Enforce tag signing and changelog updates on release branches and tags.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Knowledge Transfer</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Summaries of repo structure, ownership boundaries, and release trains help onboarding (new hires understand where to make changes and who to involve). Link service READMEs and runbooks directly from PR templates for discoverability.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Produce an ownership map and CODEOWNERS with AI from commit history.</li>
              <li>Adopt path‑aware CI to run only impacted tests and speed feedback loops.</li>
              <li>Use AI to draft repo split/merge plans with step‑by‑step migration checklists.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}