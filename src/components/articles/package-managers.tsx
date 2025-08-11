import React from "react";

export default function PackageManagers() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lockfiles and reproducible installs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Lockfiles pin exact transitive versions to make installs deterministic across machines (avoids &ldquo;works on my machine&rdquo; due to floating ranges). In Node, npm/yarn/pnpm lockfiles store the full dependency graph with resolved versions and integrity hashes; in Python, tools like pip-tools/Poetry produce a lock that freezes the environment; in Java, Maven/Gradle use dependency resolution with reproducible builds via checksum and repository rules.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Commit lockfiles to source to align CI, local, and production installs.</li>
              <li>Regenerate locks only during explicit update workflows (prevent accidental drifts).</li>
              <li>Use platform-native &ldquo;frozen&rdquo; install commands to enforce lock usage (e.g., <code>npm ci</code>, <code>pip-sync</code>).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Semantic versioning and ranges</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              SemVer communicates compatibility intent: MAJOR.MINOR.PATCH where breaking changes increment MAJOR (teams often use caret <code>^</code> or tilde <code>~</code> ranges to accept safe updates automatically). In enterprise contexts, prefer exact pins in lockfiles with controlled update cadences, while manifests specify intent ranges for dependency bots to propose upgrades.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use ranges in manifests to signal policy, but rely on locks for installs.</li>
              <li>Automate PRs for patch/minor updates with tests; schedule major updates with migration guides.</li>
              <li>Record breaking-change exceptions in a central policy registry (documented waivers).</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Integrity and signature checks</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Package managers verify content using checksums and, increasingly, signatures (defend against tampering and dependency confusion). Integrity fields in lockfiles detect mismatches, while sigstores and GPG/PKI-based signing provide publisher assurance (supply chain security demands artifact provenance, not just names and versions).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Enable signature verification for internal registries; require signed releases for critical packages.</li>
              <li>Pin by digest where supported (container images and some package types support immutable references).</li>
              <li>Fail closed on integrity mismatches in CI; surface clear remediation steps to developers.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Workspaces and monorepos</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Workspaces install multiple packages in a single repo with shared lockfile and hoisted or isolated node_modules (reduces duplication and speeds local development). In Node, yarn/pnpm workspaces can link internal packages symlink-style (fast iteration), while build systems ensure correct dependency boundaries (avoid accidental cross-package imports).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use a single top-level lock for consistent resolution across packages.</li>
              <li>Prefer isolated node_modules per package when debugging resolution issues (trade absolute speed for clarity).</li>
              <li>Publish internal packages via local registry proxies or workspace versioning flows to mimic production behavior.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Commit and freeze lockfiles; run &ldquo;frozen&rdquo; install commands in CI.</li>
              <li>Automate minor/patch bumps weekly; schedule majors quarterly with dry runs.</li>
              <li>Enable integrity and signature verification; block unsigned packages for sensitive surfaces.</li>
              <li>Adopt workspaces for shared code; validate boundaries with lint rules and build graphs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational predictability and cost control</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Reproducible installs cut incident rates from &ldquo;surprise upgrades&rdquo; that sneak in during deploys. Enterprises report meaningful reductions in &ldquo;environment parity&rdquo; incidents and faster mean-time-to-restore when lockfiles are enforced end-to-end. Registry mirroring and caching also reduce egress and speed CI.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Install times drop by 20–50% via local mirrors and deterministic caches.</li>
              <li>Incident classes tied to &ldquo;floating versions&rdquo; disappear as locks become mandatory.</li>
              <li>Compliance reporting improves with central visibility into resolved versions across repos.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer triggers and anti-patterns</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li><strong>Supply chain alerts:</strong> &ldquo;We found a malicious package and need to block it everywhere&rdquo; (require allowlists and signatures).</li>
              <li><strong>Flaky builds:</strong> &ldquo;Random dependency versions appear on Mondays&rdquo; (CI must use frozen installs).</li>
              <li><strong>Monorepo pain:</strong> &ldquo;Node modules conflicts force weekly clean installs&rdquo; (consider isolated installs or strict workspace boundaries).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Adoption patterns and governance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Central platform ownership of registries and policy pays off (curation, mirrors, and policy enforcement at publish/install time). Product teams focus on code while policies enforce integrity and license constraints automatically (developer velocity with safety nets).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Run a private registry proxy with caching, SSO, and audit logs.</li>
              <li>Define policy as code: allowed scopes, disallowed licenses, signature requirements.</li>
              <li>Use dependency dashboards for visibility, including age of last update and known vulnerabilities.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk management and compliance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Integrity and signature enforcement, combined with curated mirrors, reduce exposure to registry outages and attacks (dependency confusion or typosquatting). Clear provenance for packages speeds incident response (knowing exactly which builds consumed which versions).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Block unknown namespaces; enforce namespace ownership for internal packages.</li>
              <li>Attach SBOMs to builds so security teams can query impact instantly.</li>
              <li>Quarantine risky versions and automatically open PRs to remediate across repos.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require frozen installs in CI; fail on lockfile drift.</li>
              <li>Run a private proxy with mirroring; enable signature verification.</li>
              <li>Automate weekly dependency updates with tests and staged rollouts.</li>
              <li>Adopt workspaces; lint for cross-package import violations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy scaffolding and lockfile hygiene</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can generate dependency policies and CI steps to enforce them (frozen installs, signature checks, license gates). It can also maintain lockfile hygiene by opening PRs that consolidate duplicates and remove unused entries (reducing install size and conflicts).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Scaffold <code>npm ci</code>/<code>pip-sync</code> workflows with cacheable directories and integrity verification.</li>
              <li>Add lockfile drift checks to PRs; auto-fix with deterministic resolvers.</li>
              <li>Generate dependency update schedules aligned to risk tiers (security vs routine bumps).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Workspace orchestration and developer experience</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can configure workspaces and build graphs that respect package boundaries (speed with correctness). It can set up task runners to only rebuild affected packages, map watch modes, and materialize local links for rapid iteration without breaking production publish flows.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate workspace manifests and lint rules that prevent cross-boundary imports.</li>
              <li>Configure caching across packages and CI agents for consistent speedups.</li>
              <li>Recommend when to isolate node_modules to debug subtle resolution issues.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security automation and incident response</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              With access to SBOMs and advisories, Cursor can open targeted PRs to remediate issues across many repos. It can propose version caps, namespace blocks, and backports to reduce risk while keeping developer velocity intact.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate advisory ingestion and create batched remediation PRs with tests.</li>
              <li>Insert signature verification and provenance checks into install/publish flows.</li>
              <li>Add dashboards for dependency age and criticality so teams prioritize updates intelligently.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to scaffold frozen install workflows with caching and integrity checks.</li>
              <li>Adopt policy-as-code for licenses and signatures; enforce in CI and registries.</li>
              <li>Enable scheduled dependency updates with safe rollout plans and auto-merge on green.</li>
              <li>Use workspaces to consolidate repos; validate boundaries with graph-aware builds.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
