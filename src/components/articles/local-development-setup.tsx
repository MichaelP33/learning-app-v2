import React from "react";

export default function LocalDevelopmentSetup() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Runtimes and Version Managers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Manage language versions with tools like nvm/fnm (Node), pyenv (Python), asdf (multi‑runtime), and SDKMAN! (JVM). Pin versions per project so switching branches does not break local tools. Store the desired versions in repo‑tracked files (e.g., <code>.node-version</code>, <code>.python-version</code>, <code>.tool-versions</code>) so the whole team converges on the same runtime set.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automate activation with shell hooks that read version files on <code>cd</code>.</li>
              <li>Cache package managers per runtime version to reduce reinstall churn.</li>
              <li>Document upgrade steps when bumping versions to avoid surprise tool breaks.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reproducible Scripts and Task Runners</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Encode setup and common workflows in scripts so the terminal becomes the UI (consistent commands replace fragile steps readme). Use Makefiles, npm scripts, or task runners like <code>just</code> or <code>Taskfile</code> to standardize build, test, lint, and run tasks. Favor idempotent scripts (safe to run repeatedly) and clear error messages.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use <code>make bootstrap</code> or <code>npm run setup</code> to install tools, restore caches, and verify versions.</li>
              <li>Prefer explicit targets for common flows: <code>dev</code>, <code>test</code>, <code>lint</code>, <code>format</code>.</li>
              <li>Emit machine‑readable logs to integrate with local dashboards and AI helpers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Environment Tooling and Secrets</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use <code>direnv</code> or language‑specific loaders to manage environment variables per directory (automatic export/unexport as you enter/leave the repo). Never commit secrets to <code>.env</code> files; instead, template <code>.env.example</code> and source secrets from vaults or SSO‑issued tokens (short‑lived credentials that rotate automatically).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Encrypt any local overrides with tooling like sops (git‑friendly encryption with key management).</li>
              <li>Adopt secret scanners in pre‑commit to block accidental leaks before push.</li>
              <li>Separate developer data from production data (use masked or synthetic datasets locally).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">OS Caveats and Cross‑Platform Friction</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Differences in file systems and shells matter (case sensitivity, path separators, line endings). On macOS, filesystem semantics and virtualization (for containers) can make I/O appear slower than Linux (plan volume strategies accordingly). On Windows, WSL2 provides a Linux kernel for closer parity (keep projects inside the Linux filesystem to avoid path penalties).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Normalize line endings with <code>.gitattributes</code> and CI checks.</li>
              <li>Keep scripts POSIX‑friendly or provide platform‑specific shims (avoid bash‑only assumptions on Windows).</li>
              <li>Centralize binaries under <code>./bin</code> in the repo and add it to PATH in setup scripts.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Check in version files, Makefile/Taskfile, and <code>.env.example</code> with clear instructions.</li>
              <li>Use <code>direnv allow</code> on first run; keep secrets in a vault with short‑lived tokens.</li>
              <li>Test flows on macOS, Windows (WSL2), and Linux before merging changes to setup scripts.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consistency, Speed, and Risk Reduction</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Reproducible local setups compress time‑to‑first‑commit and lower support load (fewer bespoke laptop issues). Standard scripts also reduce key‑person risk (knowledge captured as code), and policy‑checked secrets prevent costly incidents (no lingering static credentials on disks).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer &ldquo;works on my machine&rdquo; conflicts speed reviews and CI triage.</li>
              <li>New team members reach productive coding hours faster when tooling is pre‑wired.</li>
              <li>Audit‑friendly flows for secrets and data access improve compliance posture.</li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Documentation and Enablement</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Scripts become living documentation (commands define truth, not wiki pages). Pair them with short READMEs and troubleshooting sections (common gotchas: PATH, permissions, missing runtimes). Managers see predictability in delivery metrics because developers spend time on features, not yak‑shaving builds.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reusable templates scale across repos, programs, and departments.</li>
              <li>Shared <code>./bin</code> conventions reduce cognitive load when switching projects.</li>
              <li>Onboarding checklists reference a single bootstrap command rather than pages of steps.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">BYOD, Security, and Compliance Considerations</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Clear local policies plus secret hygiene enable safer BYOD (bring your own device) programs and contractor work. Small changes like disabling plaintext <code>.env</code> secrets and using short‑lived tokens reduce breach likelihood (token theft expires quickly). Compliance teams gain audit trails from scripted flows.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Require disk encryption and MDM where company data is present.</li>
              <li>Provide safe test datasets and restrict production access behind approvals.</li>
              <li>Use pre‑commit scanners and CI secret detectors for layered defense.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a &ldquo;bootstrap&rdquo; script that installs managers, tools, and hooks consistently.</li>
              <li>Adopt a &ldquo;no static secrets&rdquo; stance; prefer OIDC or vault‑issued short‑lived tokens.</li>
              <li>Run cross‑platform smoke tests for the developer workflow on every PR.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Authored Bootstrap and Setup Scripts</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can assemble Makefiles/Taskfiles and cross‑platform shell scripts that install version managers, set environment variables, and validate toolchains (self‑healing scripts that guide developers). It can also generate <code>.gitattributes</code>, <code>.editorconfig</code>, and pre‑commit configs to encode conventions.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Produce OS‑specific branches when necessary (WSL2 guidance, macOS Homebrew, Linux apt/yum).</li>
              <li>Add health checks for ports, binaries, and environment variables with helpful remediation.</li>
              <li>Create local dashboards showing version parity and setup status.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy, Secrets, and Safety Nets</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can codify secret rules (deny plaintext <code>.env</code>, require vault templates, mandate short‑lived tokens) and write pre‑commit/CI checks that enforce them. It can also scaffold local data sanitization pipelines (generate masked datasets) to keep development safe and reproducible.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Draft incident runbooks for leaked secrets and automate token rotation steps.</li>
              <li>Provide &ldquo;reset local state&rdquo; scripts that clear caches and rebuild toolchains quickly.</li>
              <li>Generate troubleshooting docs tailored to each repo&rsquo;s stack and OS mix.</li>
            </ul>
          </div>

          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Bridging Local and Remote</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can keep local and containerized/remote flows aligned by generating equivalent commands for dev containers and CI (avoid drift that causes surprising failures). It can also propose performance optimizations for local stacks (database configs, file watchers, test sharding) based on profiling.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Mirror CI commands locally and export artifacts to the same directories.</li>
              <li>Offer &ldquo;open in container&rdquo; and &ldquo;open in cloud IDE&rdquo; shortcuts for symmetry.</li>
              <li>Track local task timings and recommend improvements when they regress.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a consistent <code>./bin</code> toolkit and a single bootstrap command.</li>
              <li>Enforce secret hygiene with scanners and short‑lived tokens from day one.</li>
              <li>Continuously align local tasks with CI and container workflows to prevent drift.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}