import React from "react";

export default function VersionControlStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Trunk‑based vs GitFlow</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Trunk‑based favors tiny, frequent merges to main with feature flags (keeps integration pain low when teams scale beyond 8–10 engineers).
              </li>
              <li>
                GitFlow relies on long‑lived branches (branches that live for weeks) and coordinated merges into develop/release; higher ceremony fits regulated contexts (audit trails and change boards).
              </li>
              <li>
                Choose based on lead time, compliance needs, and coupling (tight coupling makes long‑lived branches drift dangerously).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Release Branches and Code Freeze</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Release branches stabilize a cut of main for hardening (final fixes, docs, and sign‑off before shipping).
              </li>
              <li>
                Code freeze pauses risky changes (changes that might destabilize) while allowing targeted fixes; keep freezes short to avoid backlog buildup.
              </li>
              <li>
                Maintain a clear merge policy: backport fixes to the release branch and forward‑merge to main to prevent regressions (avoid &ldquo;lost fix&rdquo; incidents).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Tagging, SemVer, and History Hygiene</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Tags mark immutable release points; use SemVer (&ldquo;MAJOR.MINOR.PATCH&rdquo;) so impact is legible to stakeholders.
              </li>
              <li>
                Keep commit history understandable: prefer merge commits when preserving context, rebase to clean noise (&ldquo;fix typo&rdquo; clutter) in local branches.
              </li>
              <li>
                Generate changelogs from commits or PR titles (automated summaries reduce manual error and improve change visibility for customers).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pick trunk‑based by default; add release branches only for stabilization windows.</li>
              <li>Adopt SemVer tags and automate changelog generation from PR titles.</li>
              <li>Use rebase locally; merge to main to preserve integration context.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Lead Time, Quality, and Risk</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Short‑lived branches reduce merge conflicts (conflicts grow quadratically with time) and surface issues earlier.
              </li>
              <li>
                GitFlow slows delivery but adds predictability for quarterly releases (helpful when multiple audit gates exist).
              </li>
              <li>
                Release branches enable &ldquo;stabilization without stoppage&rdquo;: customer fixes ship while new work continues behind flags.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Merge vs Rebase Trade‑offs</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Merge preserves context across teams (&ldquo;who integrated what, when&rdquo;), aiding audits and incident forensics.
              </li>
              <li>
                Rebase keeps history linear (easier to read during bisect), but rewriting shared history can break collaborators.
              </li>
              <li>
                Standardize: rebase on private branches; merge to shared branches to avoid surprises during release crunch.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Change Visibility and Changelogs</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Customer‑facing changelogs build trust (customers plan around breaking changes if signaled clearly).
              </li>
              <li>
                Internal release notes speed support and sales (fast answers to &ldquo;what changed&rdquo; reduce handoffs).
              </li>
              <li>
                Wire changelog generation into CI so every release branch/tag produces a crisp summary automatically.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Measure PR size, cycle time, and merge conflict rate as leading indicators.</li>
              <li>Adopt PR templates that encode SemVer impact and rollout/rollback notes.</li>
              <li>Automate changelog release notes and include upgrade guidance for breaking changes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy‑as‑Code Branching Guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Enforce branch protections (status checks, review requirements) aligned to risk tiers (payment code vs docs).
              </li>
              <li>
                Auto‑label PRs with SemVer intent (&ldquo;major&rdquo;, &ldquo;minor&rdquo;, &ldquo;patch&rdquo;) and require extra eyes for majors.
              </li>
              <li>
                Generate release branch checklists: version bump, migrations plan, rollback steps, and comms owners.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automation: Tags, Notes, and Visibility</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Template PR titles for changelog parsing (standard verbs minimize ambiguity for automation).
              </li>
              <li>
                On merge to main or release, auto‑create a tag and draft release notes with owner review.
              </li>
              <li>
                Publish internal &ldquo;what changed&rdquo; digests to Slack/email (summaries save managers 30–60 minutes weekly).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt trunk‑based with flags; reserve GitFlow for regulated programs.</li>
              <li>Automate tag creation and SemVer validation on release branches.</li>
              <li>Continuously publish changelog snippets to customer‑facing docs and support playbooks.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}