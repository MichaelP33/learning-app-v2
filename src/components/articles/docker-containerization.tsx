import React from "react";

export default function DockerContainerization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Images, Layers, and Reproducible Builds</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Docker images are immutable templates assembled from layers (each Dockerfile instruction adds a cached filesystem snapshot). Layer caching accelerates rebuilds by reusing unchanged steps, which is critical when teams iterate rapidly on application code across many services. With multi‑stage builds, you can separate build dependencies from runtime artifacts (keeping final images small and secure by excluding compilers and tooling). Buildx enables cross‑platform images (multi‑arch) so the same repository can publish for linux/amd64 and linux/arm64 without separate pipelines.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use deterministic base tags (e.g., <code>node:20.15.0-alpine</code>) over floating tags like <code>latest</code> (floating tags drift and introduce non‑reproducible builds across CI workers).
              </li>
              <li>
                Collapse layers that change frequently (package install + app copy) to maximize cache hits (cache misses inflate CI minutes and developer wait time).
              </li>
              <li>
                Generate SBOMs during build (a software bill of materials listing packages) to support compliance and CVE triage later.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Registries and Supply Chain Integrity</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Registries store and distribute images to CI and production clusters. Enterprise setups rely on private registries with RBAC, immutable tags, and automated vulnerability scanning (continuous checks that alert when a dependency gets a new CVE). Provenance attestation and image signing (cryptographic proofs of where/when images were built) prevent untrusted images from running in protected environments.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Enforce immutable tags plus content‑addressable digests (e.g., <code>myapp@sha256:...</code>) so rollbacks are precise and verifiable.
              </li>
              <li>
                Quarantine &ldquo;failing scan&rdquo; images to non‑prod and require exception workflows for temporary waivers (documented risk acceptance).
              </li>
              <li>
                Replicate registries regionally (close to clusters) to cut pull latency (cold starts become faster under autoscaling).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Isolation: Namespaces, cgroups, and Security Profiles</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Containers isolate processes using Linux namespaces and cgroups (kernel features that separate resource views and enforce quotas). Compared to VMs, containers share the host kernel, so startup is sub‑second and density is higher (more workloads per node), but security posture depends on correct profiles: seccomp, AppArmor/SELinux, and running as a non‑root user.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer distroless or minimal base images (fewer packages reduce attack surface and patch churn).
              </li>
              <li>
                Deny privileged mode by default and limit capabilities to the smallest set required (principle of least privilege for containers).
              </li>
              <li>
                Resource requests/limits must reflect realistic usage (prevent noisy‑neighbor incidents where one container starves others).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Volumes and Networking</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Volumes persist data outside the container lifecycle (ephemeral containers can be replaced without data loss). Bind mounts speed local development (hot reloads), while named volumes simplify portable dev/test datasets. Networking uses user‑defined bridges for service discovery (containers find each other by name) and overlay networks for multi‑host clusters (abstracted virtual networks across nodes).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Avoid writing to container layers at runtime (layer writes defeat caching and increase image size on commit).
              </li>
              <li>
                Externalize secrets via runtime mounts or orchestrator secrets (never bake secrets into images; scans will flag leaks).
              </li>
              <li>
                Use healthchecks to signal readiness and liveness (orchestrators rely on these to restart unhealthy containers).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-600 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Buildx and Caching that Scale</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Buildx supports distributed and multi‑arch builds with cache import/export (sharing build layers between CI jobs and developer laptops). Export caches to a registry‑backed cache or object storage to avoid cold compiles on every pipeline run. Order Dockerfile steps by volatility (package install before app copy) so most layers remain reusable.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pin base images by digest and enable daily CVE re‑scans with auto‑PRs for updates.</li>
              <li>Adopt multi‑stage builds; copy only runtime artifacts to the final stage.</li>
              <li>Publish SBOMs alongside images and sign artifacts to enable provenance policies.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Velocity, Cost Curves, and Reliability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Standardized images shrink &ldquo;works on my machine&rdquo; defects (environment drift between laptops, CI, and prod). Layer caching cuts CI minutes materially (common 25–50% reductions when heavy compiles are cached across builds). Multi‑arch images simplify fleet transitions (macOS on arm64 laptops vs x86 prod) without parallel toolchains.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Faster onboarding: new engineers pull one image and are ready within minutes (no manual toolchain assembly).</li>
              <li>Lower incident rates from base‑image patching and reproducible rollbacks (digest pinning creates exact restores).</li>
              <li>Predictable autoscaling by shrinking cold‑start times (images close to clusters reduce pull latency).</li>
            </ul>
          </div>

          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security &amp; Compliance Outcomes</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              SBOMs and signing provide auditable supply chains (who built what, from which dependencies, when). Vulnerability gates in CI shift security left (fail builds on high‑severity CVEs unless an approved waiver exists). Minimal images reduce patch volume and unneeded daemons (less software means fewer critical advisories to chase).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Meet regulatory requirements (financial and healthcare sectors require provenance and vulnerability reporting).</li>
              <li>Isolate blast radius with per‑service images and tight runtime profiles (reduce cross‑service compromise risk).</li>
              <li>Speedy incident response by reverting to a previously signed digest (no rebuild required under pressure).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Adoption Patterns in Large Orgs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Successful platforms offer golden base images (curated, patched, scanned) with opinionated defaults. Teams extend them in separate Dockerfiles (inheritance via <code>FROM</code>) while platform engineering monitors CVEs and rotates digests. Migrations start with non‑critical services, then scale to the core paths once confidence and tooling mature.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Central registries with project namespaces and enforced immutability.</li>
              <li>Automated rebuilds on base‑image changes (webhooks trigger downstream pipelines).</li>
              <li>Runtime policies applied by orchestrators (PSPs/PodSecurity or equivalent) to standardize security posture.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a &ldquo;golden base&rdquo; catalog with support SLAs and upgrade guides.</li>
              <li>Set CI budgets and track pull/build/publish timings as platform KPIs.</li>
              <li>Add change windows for base‑image rotations and provide rollback digests in release notes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">AI‑Assisted Dockerfiles and Multi‑Stage Optimization</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Use AI to draft Dockerfiles with multi‑stage patterns, correct cache ordering, and non‑root users (automated checks for COPY vs ADD, pinned versions, and healthcheck presence). Prompt for language‑specific optimizations (e.g., <code>pip install --no-cache-dir</code>, <code>npm ci</code>, Go build flags, or JVM options) and for buildx configuration that exports cache to a registry.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate <code>docker buildx bake</code> files for multi‑arch outputs with shared caches.</li>
              <li>Suggest distroless bases and verify the final stage has only runtime dependencies.</li>
              <li>Auto‑insert SBOM generation and signing steps into CI pipelines.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Policy Guardrails and Supply Chain Automation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Encode organization rules as policy‑as‑code (deny privileged containers, require non‑root, deny <code>latest</code> tags, enforce signatures). AI can generate the policy templates and unit tests that validate example Dockerfiles and CI workflows (quick feedback loops reduce review burden for platform teams).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Emit remediation suggestions when builds fail policy (pin this base, drop that capability, add healthcheck).</li>
              <li>Create digest‑pinning rollout plans and PRs across repos automatically.</li>
              <li>Alert on registry drift when an image digest changes under an existing tag.</li>
            </ul>
          </div>

          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer Experience Accelerators</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              AI can scaffold compose files for local stacks (databases, message brokers) with sane defaults and ephemeral volumes (disposable data that avoids local drift). It can also draft <code>README</code> snippets explaining how to run, debug, and profile inside containers (consistent instructions improve onboarding speed).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate <code>docker compose</code> profiles for &ldquo;dev&rdquo; vs &ldquo;ci&rdquo; vs &ldquo;prod‑like&rdquo; modes.</li>
              <li>Template healthcheck endpoints and log formats for observability alignment.</li>
              <li>Suggest local registry mirrors and network tweaks to cut pull times for large teams.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a &ldquo;golden Dockerfile&rdquo; starter with multi‑stage, non‑root, healthcheck, SBOM, and signing baked in.</li>
              <li>Add CI targets for buildx multi‑arch builds with exported caches to registry/object storage.</li>
              <li>Gate merges on policy checks (non‑root, no <code>latest</code>, signed artifact, passing scans) with auto‑fix PRs.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
