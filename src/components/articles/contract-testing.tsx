import React from "react";

export default function ContractTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consumer‑driven contracts (CDC)</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              In CDC, each consumer describes the API interactions it depends on (requests, responses, edge cases). Those expectations become executable contracts that the provider must satisfy. Contracts live close to the consumer (source of truth) and are published to a broker (shared registry) for providers to verify.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Scope contracts to business capabilities (cohesive use cases), not single endpoints.</li>
              <li>Include negative cases (validation errors, 404/409) to prevent silent drift.</li>
              <li>Version contracts just like code (semantic versioning for breaking vs non‑breaking).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Provider verification</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Providers run verification tests that replay all relevant consumer contracts against their implementation. Verification ensures backward compatibility (existing consumers keep working) and catches accidental changes (renamed fields, altered status codes) before deployment.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Run verification in CI on every provider PR (fast feedback on compatibility).</li>
              <li>Pin provider to the latest verified contract set before allowing merges.</li>
              <li>Surface mismatches with clear diffs (schema, example payloads) for quick fixes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Versioning and compatibility</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use semantic versions for contracts (MAJOR.MINOR.PATCH). A MAJOR bump signals a breaking change (remove fields, change types); MINOR adds non‑breaking fields; PATCH fixes examples or clarifies descriptions. Support multiple versions concurrently during migration windows (graceful deprecation).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Communicate deprecation timelines in the broker (visibility for consumers).</li>
              <li>Prefer additive changes (backward compatible) and feature‑flag behavior changes.</li>
              <li>Use default values and tolerant readers (ignore unknown fields) to ease rollouts.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Transport‑agnostic contracts</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Contracts apply to HTTP and evented systems alike. For events, capture topics, schemas, and ordering/duplication semantics (at‑least‑once delivery means consumers must be idempotent—processing the same message multiple times safely). For HTTP, capture methods, status codes, and error shapes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use schema registries (Avro/JSON Schema) for strongly typed events.</li>
              <li>Document idempotency keys and retry behavior explicitly at the contract level.</li>
              <li>Cover pagination, filtering, and sorting semantics where applicable.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with one consumer→provider pair and grow coverage incrementally.</li>
              <li>Publish contracts automatically from consumer CI after review.</li>
              <li>Fail provider PRs when verification breaks against any supported contract version.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Outcomes</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Independent deployability of services (reduced coordination overhead).</li>
              <li>Fewer integration fire‑drills late in release cycles (earlier, automated detection).</li>
              <li>Clearer ownership of API change management (visibility of impact across consumers).</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Trade‑offs</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Contracts require stewardship (versioning discipline, broker maintenance) and cultural adoption (teams respond to verification failures quickly). They do not replace other tests—use alongside unit, integration, and E2E for layered protection (defense in depth).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Initial setup time (tooling, pipelines) pays back through reduced outage risk.</li>
              <li>Requires cross‑team agreements on naming, error shapes, and deprecation windows.</li>
              <li>Visibility is essential—dashboards showing contract coverage and failures help.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Anti‑patterns</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Treating contracts as documentation only (must be executable and verified in CI).</li>
              <li>Publishing contracts from providers (breaks CDC premise—consumers define needs).</li>
              <li>Letting &ldquo;unknown consumer&rdquo; failures pile up without triage (stale contracts).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a broker (e.g., Pact Broker) early and automate publication/verification.</li>
              <li>Define deprecation SLAs (e.g., 90 days) and communicate via the broker UI.</li>
              <li>Use consumer tags (prod/alpha) to filter which contracts block provider merges.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">CDC workflow in CI</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Consumers: generate and publish contracts during PRs (tag with branch/commit).</li>
              <li>Providers: on PR, pull latest consumer contracts and run verification before tests.</li>
              <li>Block merges if verification fails against any supported consumer version.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Versioning and compatibility playbook</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Provide a simple rubric for API changes: additive fields → MINOR; renames/removals → MAJOR with deprecation window; description/example fixes → PATCH. Cursor can generate change logs and broker notes automatically from PR labels.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate SDK stubs and schema diffs per contract change for developers.</li>
              <li>Alert subscribers (consumers) when a new MAJOR is published with migration notes.</li>
              <li>Run synthetic compatibility tests for common client libraries.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Event contracts</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Capture ordering guarantees and duplication semantics in schema (at‑least‑once).</li>
              <li>Provide idempotent consumer examples and verification hooks.</li>
              <li>Store exemplar payloads and golden traces to validate downstream parsing.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with HTTP contracts for 1–2 high‑traffic endpoints, then extend to events.</li>
              <li>Make verification required status checks in CI for providers.</li>
              <li>Track time‑to‑compatibility (from consumer publish to provider verification) as a KPI.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}