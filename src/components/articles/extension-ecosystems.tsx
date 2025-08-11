import React from "react";

export default function ExtensionEcosystems() {
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
              Security & Trust Model
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Extensions execute code with access to files, environment variables, and network (privileges vary by platform), so enterprises require explicit trust frameworks. Vet publishers, pin versions, review permissions, and isolate secrets to minimize blast radius.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Treat extension manifests as contracts: capabilities, permissions, and update channels.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Prefer sandboxed execution and signed distributions where available.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Performance Impacts & Limits
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Every extension adds CPU, memory, and I/O overhead (background processes, watchers, and parsers). Establish per‑workspace budgets and measure cold start, warm start, and idle CPU to prevent slow drift from &ldquo;just one more plugin&rdquo;.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Disable unused providers and reduce duplication (e.g., multiple formatters).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Use remote workspaces for heavy language servers and indexers.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Organization Allowlists & Governance
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Central allowlists provide a curated set of approved extensions with pinned versions and update policies. Governance includes intake reviews, security scans, license checks, and periodic renewals (time‑boxed approvals).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Maintain SBOMs for critical extensions and monitor CVEs for vendors.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Provide &ldquo;soft blocks&rdquo; with rationale and alternatives for rejected requests.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Telemetry & Privacy
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Extensions often collect telemetry for diagnostics. Enterprises must define privacy defaults, opt‑out mechanisms, and data retention policies that meet compliance (clear lines on what leaves devices).
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Route telemetry through proxies where required; redact identifiers.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Document data flows and provide auditors with policy mappings.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish an org allowlist and remove deprecated extensions automatically.</li>
              <li>Set performance budgets and alert on regressions after updates.</li>
              <li>Require signed publishers and pin to vetted versions by default.</li>
              <li>Ship privacy defaults and visible toggles at workspace creation.</li>
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
              Benefit vs Risk Balance
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Extensions unlock productivity and language support fast, but unmanaged ecosystems create reliability, security, and performance risks. A curated marketplace approach delivers gains without losing control.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>10–20% productivity improvements in common workflows.</li>
              <li>Reduced incident frequency by removing conflicting providers.</li>
              <li>Audit readiness through documented telemetry and licenses.</li>
            </ul>
          </div>

          <div className="bg-white/90 dark:bg-gray-800/90 rounded-xl p-6 border border-slate-200/50 dark:border-gray-700/50">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
              Customer Quotes
            </h3>
            <div className="space-y-2 text-slate-700 dark:text-gray-300">
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Security reviews:</strong>{" "}
                &ldquo;We can&rsquo;t approve random marketplace plugins; we need a trusted set&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Performance:</strong>{" "}
                &ldquo;After installing a few &lsquo;must‑have&rsquo; extensions, the editor slowed to a crawl&rdquo;
              </div>
              <div>
                <strong className="text-slate-700 dark:text-gray-300">Governance:</strong>{" "}
                &ldquo;Teams keep adding overlapping tools; we need clear allowlists&rdquo;
              </div>
            </div>
          </div>

          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Governance Operating Model
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Create a cross‑functional board (security, platform, legal) to evaluate extensions and publish decisions with alternatives. Use periodic renewals, performance dashboards, and exception processes with time‑boxed approvals.
            </p>
            <ul className="space-y-2 text-slate-700 dark:text-gray-300 pl-4">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Track extension‑attributed incidents and revert to last known good sets.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 flex-shrink-0"></span>
                Provide &ldquo;zero extension&rdquo; profiles for debugging performance issues.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Designate owners for the allowlist and publish review SLAs.</li>
              <li>Automate scans for permissions drift and unexpected network calls.</li>
              <li>Create performance dashboards per extension and per workspace.</li>
              <li>Document telemetry defaults and provide easy opt‑out toggles.</li>
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
              Policy‑Aware Scaffolds
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate workspace profiles that include approved extensions, pinned versions, and telemetry defaults. Provide remediation prompts when users attempt to install non‑approved plugins, with context on alternatives.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create &ldquo;secure base&rdquo; templates with preconfigured permissions.</li>
              <li>Offer rollback plans to last known good profiles after incidents.</li>
            </ul>
          </div>

          <div className="border-l-4 border-indigo-600 bg-indigo-50/50 dark:bg-indigo-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Performance & Telemetry Advisors
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Recommend disabling redundant providers, measure startup/indexing timing, and surface telemetry data paths for audit. Provide &ldquo;what changed&rdquo; diffs after extension updates that correlate to performance spikes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Propose &ldquo;safe mode&rdquo; runs to isolate problematic extensions.</li>
              <li>Alert on new permissions requested in updates with review checklists.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a one‑click &ldquo;org‑approved&rdquo; profile switcher in the editor.</li>
              <li>Automate CVE watchlists for publishers on the allowlist.</li>
              <li>Integrate policy checks in CI for devcontainer and workspace files.</li>
              <li>Provide audit export of extension sets and telemetry policies.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
