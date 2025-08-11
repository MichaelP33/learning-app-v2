import React from "react";

export default function DependencyManagement() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Transitive risk and blast radius</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Most risk hides in transitive dependencies (packages your direct deps pull in). A single vulnerable or deprecated library can affect dozens of services in a monorepo (amplified by shared CI/CD and container images). Treat dependency graphs as critical infrastructure and measure blast radius for each component.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Build SBOMs to map exact versions and transitive chains used by each build.</li>
              <li>Track &ldquo;dependency centrality&rdquo;: how many services import a given module (high centrality = higher risk).</li>
              <li>Prefer small, well-scoped libraries over &ldquo;kitchen sink&rdquo; frameworks to reduce attack surface.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Vulnerability remediation workflows</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Remediation blends automation and judgment: triage advisories by exploitability, reachability, and compensating controls (web ACLs, feature flags). Automate PRs for safe upgrades; for breaking updates, create migration tracks with tests and rollout plans. Document accepted risk when remediation is deferred (time-bound exceptions only).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use reachability analysis to determine if vulnerable code paths are called in your binaries.</li>
              <li>Backport patches where feasible; otherwise, pin to a safe minor and plan a major upgrade.</li>
              <li>Verify fixes with integration tests in staging and a canary release strategy.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">License policy enforcement</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Enterprises must enforce license constraints across dependencies (GPL vs permissive licenses have distribution implications). Automate detection and blocking at PR time and during publish (policy as code), with legal-approved allowlists for production. Maintain provenance and attribution to satisfy compliance and audits.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define allowed/denied license lists and enforce via CI checks and registry policies.</li>
              <li>Generate attribution reports during builds for distribution artifacts.</li>
              <li>Quarantine dependencies with ambiguous or changing licenses until reviewed.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Update cadences and technical debt</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Consistent update cadences prevent &ldquo;big bang&rdquo; upgrades that stall roadmaps. Treat dependencies like production infrastructure: patch regularly, plan majors deliberately, and avoid long-term pinning that accumulates debt. Dependency freshness correlates with faster incident response and simpler migrations.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Schedule weekly minor/patch updates via bots; reserve capacity each sprint for merges.</li>
              <li>Align major upgrades to quarterly/biannual windows with migration guides and dry runs.</li>
              <li>Track &ldquo;staleness&rdquo; KPIs (days since last update) to target the riskiest libraries.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Produce SBOMs for every build; query blast radius instantly when advisories land.</li>
              <li>Automate safe upgrades; create migration tracks with tests for breaking changes.</li>
              <li>Enforce license policy in CI and registries; maintain attribution artifacts.</li>
              <li>Budget ongoing time for updates; measure staleness and reduce long-lived pins.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Quantified outcomes and reliability gains</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Teams that institutionalize dependency management see fewer production incidents linked to library defects and faster recovery when advisories surface. Typical outcomes: 30–60% reduction in dependency-related incidents, 2–4x faster remediation SLAs, and smaller blast radii through centralized policy and visibility.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Incident postmortems shift from &ldquo;unknown transitive change&rdquo; to &ldquo;policy blocked before merge&rdquo;.</li>
              <li>Company-wide advisories resolved in days rather than weeks via automated PRs and canaries.</li>
              <li>Legal reviews accelerate with pre-approved license allowlists and attribution automation.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer triggers and common pitfalls</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li><strong>Advisory overload:</strong> &ldquo;We get 200 alerts a week and can&rsquo;t tell what matters&rdquo; (prioritize by reachability and exploitability).</li>
              <li><strong>License surprises:</strong> &ldquo;A transitive GPL lib blocks our distribution&rdquo; (enforce policies before packaging).</li>
              <li><strong>Upgrade freeze:</strong> &ldquo;Major versions pile up because we can&rsquo;t find time&rdquo; (schedule cadences and reduce per-upgrade risk).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operating model and ownership</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A central dependency program (often within a platform or security engineering group) sets policy and tooling, while product teams own remediation within SLAs. Dashboards provide shared visibility, and exception processes are time-bound with executive sponsorship (avoid permanent risk acceptance by default).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Set SLAs: e.g., critical vulns in 48–72h, high in one sprint, medium/low via scheduled cadences.</li>
              <li>Publish readiness guides for major ecosystem migrations (React, Spring, Django, Kubernetes).</li>
              <li>Integrate dependency health into quarterly business reviews to maintain momentum.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk, compliance, and audits</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Continuous SBOMs, signed artifacts, and policy enforcement simplify compliance (SOC 2, ISO 27001, industry regulations). During incidents, teams can prove what shipped (versions and provenance) and whether vulnerable paths were reachable (evidence-based decisions instead of blanket outages).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Attach SBOM, provenance, and signatures to release bundles by default.</li>
              <li>Record exception approvals with expiry; auto-open follow-up issues before deadlines.</li>
              <li>Keep audit trails for dependency changes and policy evaluations in CI.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Centralize SBOM generation; index results for fast blast-radius queries.</li>
              <li>Use bots for routine bumps; reserve human review for majors and high-severity fixes.</li>
              <li>Enforce license policy at PR and publish time; produce attribution automatically.</li>
              <li>Track staleness and set SLAs; measure remediation lead time as a core KPI.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automated remediation at scale</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can parse advisories, SBOMs, and dependency graphs to open targeted PRs (one per repo or batched by ecosystem) with tests and canary plans. It can prioritize by reachability and exposure, reducing alert noise while keeping response times tight.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create safe PRs that bump only impacted ranges; include migration notes for majors.</li>
              <li>Stage rollouts with feature flags and per-service toggles to minimize blast radius.</li>
              <li>Track remediation lead time per advisory to drive continuous improvement.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy-as-code and governance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can scaffold license and version policies as code with CI checks and registry integration. It can also maintain exception registries with expiry and auto-renewal workflows (create issues and notify owners before grace periods end).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate license allow/deny lists and enforce at PR and publish time.</li>
              <li>Add dashboards for dependency staleness and criticality to focus engineering effort.</li>
              <li>Integrate provenance and signatures into build pipelines so deploy gates can validate artifacts.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer experience and reliability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can keep developers unblocked by generating minimal, safe upgrade PRs and guiding migrations with code mods (reduce manual toil). It can also detect unused dependencies and redundant packages, shrinking attack surface and install times.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Propose codemods for common breaking changes and run them locally via tasks.</li>
              <li>Remove unused dependencies and duplicate transitive chains to reduce complexity.</li>
              <li>Highlight services with largest blast radius and prioritize their updates first.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to generate SBOM and advisory ingestion pipelines with policy checks.</li>
              <li>Adopt automated PRs with canary plans; monitor remediation lead time.</li>
              <li>Use policy-as-code for licenses and versions; manage exceptions with expiry.</li>
              <li>Continuously prune unused dependencies to shrink the attack surface.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
