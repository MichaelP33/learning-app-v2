import React from "react";

export default function CloudIDEs() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Latency and Interactive Performance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Cloud IDEs run the workspace on remote servers and stream UI interactions over the network (editor actions, terminal I/O, file operations). The user experience hinges on round‑trip latency and prebuilds (building the environment ahead of time). With fast paths (regional proximity and CDN acceleration), editing feels local; with long paths, typing and navigation lag.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Measure end‑to‑end latency budgets for edit, save, test, and debug cycles.</li>
              <li>Use prebuilds to avoid cold dependency restores and toolchain installs.</li>
              <li>Prefer server‑side search and indexing to keep code intelligence responsive.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Workspace Isolation and Security</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Workspaces are isolated compute sandboxes (ephemeral containers or VMs per developer) with strict tenancy boundaries. Security posture depends on IAM, network segmentation, and restricted host access (no direct SSH into shared hosts). Secrets should be injected as short‑lived tokens (OIDC‑backed) and never stored in plaintext.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Disable privileged containers by default; require approvals for elevated capabilities.</li>
              <li>Allowlist egress to internal systems and SaaS; deny by default for unknown hosts.</li>
              <li>Audit trails must cover workspace create/destroy, secret access, and network flows.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ephemeral Environments and Prebuilds</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Ephemeral workspaces start clean for every task (no lingering local state), reducing flakiness and drift. Prebuilds package dependencies and indexes so new instances start warm. Policies can enforce auto‑shutdown to control cost and data exposure (idle timeouts reclaim resources and close sessions).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Cache package managers and language servers in shared layers to minimize start time.</li>
              <li>Pre‑index large repos server‑side to keep code navigation snappy.</li>
              <li>Rotate base images for security patches; rebuild prebuilds on change.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy Controls and Secrets Handling</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Enterprises need guardrails: workspace templates, extension allowlists, resource quotas, and secret‑mount policies. Secrets should come from central stores via short‑lived credentials (no long‑lived API keys). Logging must avoid secret capture (structured logs with redaction rules and zero‑retention buffers for sensitive paths).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use identity‑aware proxies and just‑in‑time access for production data.</li>
              <li>Bind policies to repositories and branches (tighter rules on main than on forks).</li>
              <li>Continuously scan workspaces for leaked secrets and revoke tokens immediately.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pick regions close to dev teams and enable prebuilds for large repos.</li>
              <li>Mandate short‑lived OIDC tokens; eliminate static credentials from workspaces.</li>
              <li>Define workspace templates with locked extensions and default resources.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Secure Access and Device Strategy</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Cloud IDEs reduce data on endpoints (source and credentials stay server‑side), enabling BYOD and contractor access with lower risk (less local data exfiltration surface). Incident response improves because sessions are killable centrally and logs are centralized (forensics are simpler and faster).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lower compliance burden on laptops (disk encryption and MDM still required but fewer local secrets).</li>
              <li>Rapid offboarding: disable identity access and the environment disappears immediately.</li>
              <li>Safer collaboration with external vendors via isolated, ephemeral workspaces.</li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Productivity Trade‑offs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              When latency is low and prebuilds are warm, engineer experience is comparable to local IDEs (fast search, quick tests, snappy terminals). When latency spikes, frustration grows (typing delay and intermittent disconnects). Organizations succeed by measuring and optimizing latency budgets and failing gracefully with clear offline fallbacks.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Track prebuild hit rates, workspace cold‑start times, and interactive latency as KPIs.</li>
              <li>Route teams to nearest regions and mirror package registries to reduce transit latency.</li>
              <li>Offer &ldquo;local escape hatches&rdquo; for outages so work can continue offline.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost and Capacity Management</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Ephemeral workspaces minimize idle waste (auto‑shutdown when idle) and align spend with usage (pay for active sessions). Prebuilds cost money but repay with productivity if hit rates are high (most new sessions start warm). Capacity planning focuses on peak concurrency and burst buffers rather than 24/7 allocations.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Set idle timeouts by repo risk and typical flow (shorter for high‑risk codebases).</li>
              <li>Use bin‑packing and autoscaling to keep utilization high without throttling developers.</li>
              <li>Publish cost transparency dashboards tied to team usage and prebuild effectiveness.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Standardize on workspace templates per language and security tier.</li>
              <li>Measure latency budgets continuously and adjust regions or caching accordingly.</li>
              <li>Enable audit‑grade logging and zero‑retention paths for sensitive events.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Authored Workspace Templates</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can generate workspace templates from repo signals (language, frameworks, ports, databases) and organization policy (allowed extensions, resource limits). It can also write prebuild scripts that install dependencies, run tests, and build indexes so new workspaces are ready immediately.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Infer secrets required and request short‑lived tokens via OIDC flows.</li>
              <li>Create troubleshooting guides for common issues (DNS, permissions, missing mounts).</li>
              <li>Recommend region placement and caching knobs for latency‑sensitive repos.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy‑as‑Code Enforcement</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Encode organizational standards as code: deny dangerous extensions, restrict egress, require non‑root users, enforce secret sources, and cap resources. AI can produce lint rules and tests that validate workspace definitions in CI (prevent drift before it reaches developers).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Auto‑remediate PRs by suggesting compliant configuration changes.</li>
              <li>Continuously scan running workspaces for leaked secrets and policy violations.</li>
              <li>Surface cost anomalies (long‑running idle workspaces, oversized instances) for action.</li>
            </ul>
          </div>

          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer Workflows and Data Safety</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can author secure flows for accessing test datasets (masked or synthetic copies) and guide engineers through safe debugging in higher‑tier environments (identity‑aware proxies, short‑lived credentials). It can also detect long‑running terminals and offer to shut down idle sessions automatically.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Provide &ldquo;open this branch in a workspace&rdquo; links in CI and PRs.</li>
              <li>Generate ephemeral preview environments per PR with consistent policies.</li>
              <li>Explain cost impacts of instance sizes and suggest right‑sizing in context.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish policy bundles for workspace templates and enforce in CI.</li>
              <li>Keep prebuilds warm; monitor hit rates and rebuild on dependency updates.</li>
              <li>Use OIDC‑issued short‑lived tokens; ban static keys from workspaces.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
