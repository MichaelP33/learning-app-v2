import React from "react";

export default function ArtifactManagement() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Artifact registries and repository types</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Artifact registries store build outputs for distribution and deployment: container images, language packages, binaries, and archives. Common types include Docker/OCI registries, Maven/NuGet/PyPI mirrors, and generic blob stores (optimized for immutability, replication, and access control). Enterprise setups use regional mirrors and caching to reduce latency and egress.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Separate build-time package registries from deploy-time artifact registries (different SLAs and access patterns).</li>
              <li>Use namespace conventions and ownership rules to prevent collisions and confusion.</li>
              <li>Replicate across regions with read-only mirrors to keep deploys fast and resilient.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Immutability as a foundation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Immutability means an artifact reference never changes content once published (enforced with digests and content-addressable storage). Tags may move, but deployments should reference digests to ensure the exact bits run everywhere (production requires guarantees that &ldquo;version X&rdquo; is identical across regions and rollbacks).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Promote by digest between environments; treat tags as human-friendly pointers only.</li>
              <li>Retain immutable history with retention policies tuned to cost and audit needs.</li>
              <li>Block overwrites at the registry; require re-publish for changes with new digests.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provenance and SBOMs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Provenance ties an artifact to its build inputs (source commit, builder image, dependencies, environment) and the process that produced it. SBOMs enumerate included components with versions and licenses. Together they enable traceability, vulnerability response, and compliance during audits.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Attach attestations and SBOMs as first-class registry objects linked to the artifact digest.</li>
              <li>Include toolchain digests and build args so results are reproducible and explainable.</li>
              <li>Store signatures with key rotation and verification policies at deploy time.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Promotion across environments</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Promote artifacts through dev → staging → production using separate namespaces or registries with policy gates. Promotion should copy or reference the same digest, never rebuild (rebuilds break provenance). Approvals and automated checks (tests, security scans) are recorded alongside promotions for audit trails.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use &ldquo;immutable promotion&rdquo; pipelines that only move digests that passed checks.</li>
              <li>Record who promoted, when, and from which source digest; retain evidence for audits.</li>
              <li>Allow fast rollback by promoting a prior known-good digest back to production.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt digest-based deploys; block mutable tags at production gates.</li>
              <li>Generate SBOMs and provenance on every build; attach as attestations in the registry.</li>
              <li>Create environment-specific namespaces and promote only after policy checks.</li>
              <li>Mirror registries regionally; set sensible retention and immutability policies.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security, compliance, and reliability outcomes</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Artifact discipline reduces supply chain risk and deployment variance. Measured outcomes include fewer &ldquo;it changed under us&rdquo; incidents, faster CVE response thanks to SBOM queries, and lower audit overhead due to preserved provenance. Regional mirrors cut egress costs and improve deploy SLOs.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Signed, immutable artifacts reduce tampering risk and support zero-trust deployment models.</li>
              <li>Provenance enables precise blast-radius analysis and targeted rollbacks when issues emerge.</li>
              <li>Cost control from caching/mirroring and decreased failed deploys due to drift.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer triggers and common failure modes</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li><strong>Rollback confusion:</strong> &ldquo;Prod tag didn&rsquo;t match staging&rdquo; (deploys must use digests, not mutable tags).</li>
              <li><strong>Registry outages:</strong> &ldquo;Global outage blocked deploys for hours&rdquo; (add mirrors and local caches).</li>
              <li><strong>Unverified content:</strong> &ldquo;We can&rsquo;t prove what shipped last night&rdquo; (sign and attest artifacts).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operating model and ownership</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Platform teams typically own registries, signing infrastructure, and promotion pipelines. Application teams publish through standardized workflows with policy gates (security scanning, license checks, performance tests). Clear ownership and automation reduce manual release toil and variability.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define namespaces and access rights; audit regularly.</li>
              <li>Automate promotion workflows; eliminate ad-hoc manual uploads.</li>
              <li>Publish dashboards for artifact freshness, provenance coverage, and signature verification rates.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Integrations with build and deploy systems</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Registries sit between build and runtime (CI publishes, CD deploys). Tight integrations allow policy to be enforced early (block at publish) and verified late (verify at deploy). This end-to-end chain supports high-confidence releases even under strict compliance regimes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Connect build pipelines to emit SBOMs, signatures, and attestations automatically.</li>
              <li>Configure deploy systems to verify signatures and provenance before rollout.</li>
              <li>Use digests throughout to ensure exactness; record promotion events for traceability.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Block mutable tags at prod deploy; require digest references and signature verification.</li>
              <li>Attach SBOMs and provenance to every artifact; store alongside digests in the registry.</li>
              <li>Automate promotions with policy checks and recorded approvals.</li>
              <li>Mirror registries regionally and set retention tuned to compliance and cost.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provenance, SBOM, and signing automation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can scaffold build steps that emit SBOMs, generate provenance attestations, and sign artifacts (supply chain security by default). It can also configure verification in CD so deployments fail closed when evidence is missing or invalid.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add SBOM tasks for containers and packages; upload results to the registry alongside artifacts.</li>
              <li>Generate provenance from build metadata and attach as attestations for auditability.</li>
              <li>Integrate signature verification into deploy pipelines with clear failure messages.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Promotion pipelines and environment parity</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can create promotion workflows that move digests across namespaces after policy checks. It can ensure environment parity by preventing rebuilds during promotion and by tracking where each digest currently lives (rollbacks become metadata operations, not rebuilds).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Scaffold immutable promotion jobs with approvals and evidence capture.</li>
              <li>Record promotion lineage to enable precise &ldquo;what is running where&rdquo; answers.</li>
              <li>Add rollback tasks that simply repromote a prior digest with minimal risk.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost, performance, and DX improvements</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              By analyzing registry traffic and cache hit rates, Cursor can recommend mirror placement, retention policies, and cleanup routines. It can also simplify developer workflows with templates for publish, promote, and release notes that are consistent and auditable.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Recommend regional mirrors for high-traffic zones; reduce egress and speed deploys.</li>
              <li>Tune retention to strike a balance between audit needs and storage costs.</li>
              <li>Standardize publish/promote commands; remove manual steps from releases.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to add SBOM, provenance, and signature steps to builds by default.</li>
              <li>Enable digest-based promotions and deploy-time verification in CD.</li>
              <li>Publish clear runbooks and templates for release and rollback operations.</li>
              <li>Analyze registry metrics to place mirrors and tune retention policies.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}