import React from "react";

export default function DevelopmentContainers() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What devcontainer.json Defines</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              A <code>devcontainer.json</code> declares the development environment as code (a machine‑readable recipe for tools, runtimes, and extensions). It references a Dockerfile or image, adds features (prebuilt modules like Node, Python, or databases), configures mounts, ports, and the default user. The goal is reproducibility across laptops and CI agents (consistent environments remove &ldquo;works on my machine&rdquo; friction).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Features install common stacks quickly (curated scripts with idempotent setup and predictable versions).</li>
              <li>Preconfigure editor extensions, settings, and tools (uniform developer experience across teams and devices).</li>
              <li>Set <code>remoteUser</code> to a non‑root account and configure <code>postCreateCommand</code> for bootstrapping.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reproducibility Across OSes</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Development containers insulate projects from host OS variance (file systems, case sensitivity, line endings, preinstalled tools). Teams on Windows, macOS, and Linux can share the same containerized toolchain (one definition, many hosts). This collapses setup time and reduces onboarding variability.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use named volumes for caches to keep rebuilds fast across sessions.</li>
              <li>Mount source code; keep dependencies inside the container to avoid global host drift.</li>
              <li>Ensure UID/GID mapping so container files are editable by the host user (no permission surprises).</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Onboarding Speed and Prebaked Toolchains</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Packaging compilers, CLIs, SDKs, and linters into the container eliminates multi‑hour laptop setup (manual steps that go stale within weeks). Preconfigure databases and services for local integration tests (compose‑based stacks that mirror prod‑like topologies in miniature).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Cache dependency directories between rebuilds for Node, Python, and JVM projects.</li>
              <li>Ship realistic seed data to reproduce bugs quickly (seed scripts kept in the repo).</li>
              <li>Document a single &ldquo;Open in Container&rdquo; flow for new hires and contractors.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Remote Containers vs Local</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Remote Containers (running the container on a server) offload compute from the laptop (useful for heavy builds and large monorepos). Local containers offer lower editing latency and better offline resilience (fewer network dependencies). Many enterprises adopt a hybrid approach: local by default; remote for heavyweight repos and restricted data access scenarios.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prebuild remote images to avoid cold setup delays (CI builds the container ahead of time).</li>
              <li>Use policy to decide when remote workspaces are mandatory (regulated data, network egress limits).</li>
              <li>Retain identical <code>devcontainer.json</code> across modes to keep workflows consistent.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Version the container definition with the app; update via PRs and release notes.</li>
              <li>Run unit tests inside the container to match CI environment exactly.</li>
              <li>Adopt &ldquo;one‑click&rdquo; onboarding with prebuilt images and seeded databases.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Time‑to‑First‑Commit and Support Load</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Dev containers routinely cut onboarding from days to hours (preconfigured toolchains remove guesswork and tribal knowledge). Support tickets drop as drift disappears (everyone runs the same binaries, flags, and linters). The result is faster cycles and less senior time spent debugging local setups.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>New hire ramp accelerates by 2–4x when projects ship ready‑to‑run containers.</li>
              <li>CI failures become easier to reproduce locally (identical container reduces &ldquo;it only fails in CI&rdquo;).
              </li>
              <li>Contractor onboarding becomes safe and rapid (no host‑level installs, minimal permissions required).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Governance and Standardization</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Platform teams can publish golden dev containers (approved versions, security hardening, consistent tooling) and require projects to inherit them (like base images for runtime). Audits become straightforward: the repo records the declared environment and change history (policy reviewers verify non‑root users, pinned versions, and allowed features).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lower variance in build outcomes across teams using the same stack.</li>
              <li>Clear upgrade paths when a base image changes (PRs to bump tags across repos).</li>
              <li>Better knowledge transfer: the environment definition serves as living documentation.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Remote vs Local Economics</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Remote workspaces centralize compute (costs shift to cloud bills) but improve device security (thin clients with limited local data). Local workspaces leverage existing laptops (lower run‑rate costs) but require device posture controls (disk encryption, MDM). Choose per repository: heavy monorepos and sensitive data lean remote; smaller services stay local.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Quantify latency tolerance for the team (editor responsiveness matters for daily satisfaction).</li>
              <li>Track prebuild hit rates to justify remote spend (high hits mean little wait time for engineers).</li>
              <li>Right‑size laptop specs when most compute moves server‑side (avoid over‑provisioning devices).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a catalog of golden dev containers and a migration guide.</li>
              <li>Measure onboarding lead time, CI reproduction rate, and &ldquo;environment fix&rdquo; ticket volume.</li>
              <li>Adopt a hybrid policy: local by default; remote for heavyweight repos or regulated datasets.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Generated devcontainer.json and Features</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to draft <code>devcontainer.json</code> files from repo context (language detection, tools, ports, and compose services). It can pick features, set a non‑root user, and scaffold post‑create bootstraps (install dependencies, restore caches, seed databases).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Propose consistent folder mounts and UID/GID mappings to avoid permission issues.</li>
              <li>Template debugging configurations and editor settings synced to the container.</li>
              <li>Offer variants for local vs remote runs sharing the same definition.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy and Security Guardrails</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Generate organization policies that lint dev containers: enforce non‑root users, banned capabilities, pinned feature versions, and allowed images. Secrets must never be baked into images (mount via secret stores) and network egress can be constrained by default (reduce data exfiltration risk).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Integrate with SSO and short‑lived tokens for CLIs inside containers.</li>
              <li>Add pre‑commit hooks that block accidental secret commits before pushing.</li>
              <li>Validate <code>postCreateCommand</code> idempotency to keep rebuilds fast and safe.</li>
            </ul>
          </div>

          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer Experience and Prebuilds</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can configure remote prebuilds that run tests and dependency restores ahead of time (ephemeral workspace creation becomes near‑instant). It can also write troubleshooting snippets that explain common container issues (DNS, volumes, UID) and how to fix them.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Export caches for package managers to registry‑backed stores for reuse across runs.</li>
              <li>Provide &ldquo;reset workspace&rdquo; scripts that purge volumes and re‑seed data quickly.</li>
              <li>Offer test datasets and privacy‑safe fixtures for reliable local reproduction.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Keep a golden dev container baseline and let repos extend it.</li>
              <li>Enforce non‑root users, pinned versions, and secret mounts through CI lint rules.</li>
              <li>Measure prebuild hit rate, onboarding lead time, and CI reproduction success.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
