import React from "react";

export default function GitWorkflows() {
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
              Trunk‑Based vs GitFlow
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Modern teams converge on two dominant patterns for organizing work: trunk‑based development and GitFlow. Trunk‑based keeps a single long‑lived mainline with very short‑lived feature branches, emphasizing continuous integration and small, reversible changes (like shipping in tiny batches to reduce blast radius). GitFlow uses multiple long‑lived branches for features, releases, and hotfixes, emphasizing structured release cadence and isolation (useful when deployment windows are infrequent or regulated).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Trunk‑Based: merge to <code>main</code> multiple times per day; feature flags decouple release from deploy.
              </li>
              <li>
                GitFlow: develop on <code>develop</code>; stabilize on <code>release/*</code>; hotfix via <code>hotfix/*</code> back‑merged to <code>main</code> and <code>develop</code>.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-900/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Release Branches and Tagging/SemVer
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Release branches create a stabilization lane for final QA and last‑minute fixes while mainline development continues (helps when multiple teams ship concurrently with different risk profiles). Tags and semantic versioning encode changelog meaning into versions: <code>MAJOR.MINOR.PATCH</code> (breaking, features, fixes). Tags should be immutable and signed for auditability in regulated environments.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use signed, annotated tags: <code>git tag -a v1.4.0 -m &ldquo;Release 1.4.0&rdquo;</code> and push with <code>--tags</code>.
              </li>
              <li>
                Automate SemVer bumps via commit messages or release PR labels (conventional commits simplify automation).
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Merge vs Rebase and CI Triggers
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Merging preserves branch history; rebasing rewrites it to a linear series (easier to read but requires discipline for shared branches). Align this decision with CI triggers and required checks (automated tests and linters that gate merges) to keep mainline green. For visibility, enable status checks on required contexts and block merges on red.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer merge commits on shared branches; rebase for personal branches before opening PRs.
              </li>
              <li>
                Trigger CI on PR open/update and on tag push to validate release artifacts (artifact integrity matters in enterprise pipelines).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Choose trunk‑based by default; adopt GitFlow only for strict release windows or compliance gates.
              </li>
              <li>
                Keep feature branches short‑lived (hours to a few days) and behind flags to avoid drift.
              </li>
              <li>
                Enforce signed, annotated tags and a SemVer policy documented in <code>CONTRIBUTING.md</code>.
              </li>
              <li>
                Define when to merge vs rebase in the PR template to avoid accidental history rewrites.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business &amp; Team Impact
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Delivery Speed and Risk
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Trunk‑based increases throughput with fewer integration conflicts (continuous integration reduces batch size and merge complexity). GitFlow reduces release risk where batch releases are required (like quarterly enterprise deployments) but increases coordination overhead. Align workflow choice to deployment frequency targets and compliance requirements.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Trunk‑based + feature flags ≈ shorter cycle times and faster rollback via toggles (a safety valve during incidents).
              </li>
              <li>
                GitFlow aids parallel stabilization of multiple versions (long‑term support) at cost of more cherry‑picks.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Compliance and Auditability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Signed tags, protected branches, and required reviews create a defensible trail (useful for SOX or ISO controls where traceability matters). Release branches plus release notes make change windows clear to stakeholders (non‑technical approvers understand timing and scope).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require code owners on sensitive paths; block direct pushes to protected branches.</li>
              <li>Automate release notes from PR labels for consistent change visibility across teams.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Metrics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lead time for changes (PR open → merge) and deployment frequency.</li>
              <li>Change failure rate and mean time to recovery (captured by incident tooling integrations).</li>
              <li>Percentage of short‑lived branches and average branch lifetime (proxy for integration health).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Protect <code>main</code>, enforce required checks, and require at least one reviewer for all merges.</li>
              <li>Use branch naming conventions that encode intent, e.g., <code>feat/</code>, <code>fix/</code>, <code>hotfix/</code>.</li>
              <li>Adopt release PRs that bump versions, update changelogs, and create signed tags.</li>
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
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑assisted Workflows</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to scaffold PR templates, branch protection policies, and release PR checklists (codifying &ldquo;how we ship&rdquo; directly in the repo). Generate conventional commit messages from diffs to drive automated SemVer and changelog updates (saves reviewer time and reduces inconsistency).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prompt AI to convert PR descriptions into release notes with risk labels and breaking‑change sections.</li>
              <li>Autogenerate CODEOWNERS suggestions from file history to improve review routing (historical ownership patterns surface who should review).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy as Code</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Encode workflow decisions as policies enforced by CI (branch naming, label requirements, and &ldquo;no red builds&rdquo; guards). AI can propose policy changes and simulate their effects across recent PRs (like running a dry‑run against the last 100 merges to estimate impact).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate GitHub Actions that block merges without semantic PR titles or risk labels.</li>
              <li>Produce dashboards showing how trunk vs GitFlow changed DORA metrics over time.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Knowledge Transfer</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to summarize branch histories and explain why merges or rebases occurred (great for onboarding new contributors who inherit context). Provide inline explanations of tagging practices and release trains in PR summaries for stakeholders.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a &ldquo;workflow‑policy&rdquo; Action that enforces labels, checks titles, and ensures green CI.</li>
              <li>Adopt AI‑generated release notes and changelog updates triggered on tag creation.</li>
              <li>Use AI to propose rebase or merge flows per branch type and explain trade‑offs in the PR.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}