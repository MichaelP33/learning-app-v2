import React from "react";

export default function RestBestPractices() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Resource naming & hierarchies</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer noun‑based, plural resources: <span className="font-medium">/users</span>, <span className="font-medium">/orders</span>, <span className="font-medium">/reports</span>. Keep URLs stable and descriptive; avoid verbs in paths (the method already conveys intent).
              </li>
              <li>
                Use sub‑resources for containment and ownership: <span className="font-medium">/users/{"{userId}"}/sessions</span>, <span className="font-medium">/orders/{"{orderId}"}/items</span>. When a relationship is many‑to‑many, prefer link resources like <span className="font-medium">/user-roles</span> with clear fields.
              </li>
              <li>
                Encode filters and field selection via query parameters: <span className="font-medium">?status=active&amp;sort=-createdAt&amp;fields=id,name,status</span>. Reserve path segments for identity and hierarchy, not filtering.
              </li>
              <li>
                Keep identifiers opaque. Exposing internal database keys couples clients to implementation details. If necessary, use stable, non‑guessable IDs.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Idempotency & HTTP methods</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Align semantics with RFCs: GET is safe and cacheable; PUT is idempotent full replacement; PATCH is partial update; DELETE is idempotent deletion; POST is non‑idempotent create or action.
              </li>
              <li>
                For create operations that may retry (mobile, flaky networks), support idempotency keys (e.g., <span className="font-medium">Idempotency-Key</span> header) so a duplicate POST returns the original result instead of creating another resource.
              </li>
              <li>
                Treat business operations as resources when possible. Instead of POST <span className="font-medium">/orders/{"{id}"}/cancel</span>, consider a <span className="font-medium">status</span> field with PATCH semantics; actions then become state transitions with auditable history.
              </li>
              <li>
                Document side effects clearly. Idempotency means repeating the same request yields the same outcome; ensure server logic guards against duplicate charges, emails, or jobs.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pagination, status codes, and errors</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer cursor‑based pagination for large or frequently changing datasets (<span className="font-medium">?cursor=abc&amp;limit=50</span>) to avoid missing/duplicated rows that offset/limit can cause under concurrent writes. Offset/limit remains fine for small, static lists.
              </li>
              <li>
                Return helpful pagination headers: <span className="font-medium">X-Total-Count</span>, <span className="font-medium">X-Next-Cursor</span>, and stable <span className="font-medium">Link</span> headers for <span className="font-medium">rel="next"</span>/<span className="font-medium">prev</span> when appropriate.
              </li>
              <li>
                Use standard status codes consistently: 200/201 for success, 202 for async acceptance, 204 for empty success, 400/422 for validation issues, 401/403 for auth problems, 404 for missing, 409 for conflicts, 429 for throttling, 500/502/503/504 for server or dependency failures.
              </li>
              <li>
                Standardize error envelopes. RFC 7807 (Problem Details) provides <span className="font-medium">type</span>, <span className="font-medium">title</span>, <span className="font-medium">status</span>, <span className="font-medium">detail</span>, and <span className="font-medium">instance</span>; extend with <span className="font-medium">code</span>, <span className="font-medium">fields</span>, and <span className="font-medium">correlationId</span> for tracing.
              </li>
              <li>
                Briefly on HATEOAS: include navigational links when they reduce coupling (e.g., next page, allowed transitions). Keep it pragmatic—excessive hypermedia can add weight without clear consumer benefit.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a naming glossary covering resources, fields, and common filters; review new endpoints against it.</li>
              <li>Adopt idempotency keys for POSTs that can be retried; include the key in logs and responses for auditability.</li>
              <li>Pick one pagination style per collection and stick to it; document header conventions and example requests.</li>
              <li>Return structured errors with stable <span className="font-medium">code</span> values; avoid leaking internal exceptions in <span className="font-medium">detail</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reliability, support, and cost</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Predictable status codes and error models reduce ticket volume and time‑to‑resolution by making client behavior deterministic and observable.
              </li>
              <li>
                Idempotency prevents duplicate charges and state corruption, cutting incident impact and refund complexity.
              </li>
              <li>
                Consistent pagination avoids expensive full‑table scans and improves cache hit rates, lowering infrastructure spend at scale.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Consumer experience and velocity</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Stable naming and link structure reduce cognitive load for partner teams; fewer &ldquo;surprise&rdquo; breaking changes means faster integrations.
              </li>
              <li>
                Uniform error shapes let SDKs and tooling provide consistent retries, backoff, and user messaging across endpoints.
              </li>
              <li>
                Clear constraints enable caching and prefetch strategies on the client, improving p95 latency without extra backend spend.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Observability and governance</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Correlation IDs and structured error codes make it straightforward to aggregate failure patterns and pinpoint regressions.
              </li>
              <li>
                Consistent conventions enable policy‑as‑code checks in CI/CD, preventing inconsistent endpoints from shipping.
              </li>
              <li>
                Clear semantics reduce cross‑team negotiation costs, freeing leadership capacity for higher‑leverage decisions.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a change control board (lightweight) for API design changes; capture decisions in short ADRs.</li>
              <li>Instrument 4xx/5xx rate, top error codes, and retry loops per endpoint; alert on sudden distribution shifts.</li>
              <li>Include example requests/responses in partner docs; keep them executable with a public Postman/OpenAPI collection.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Contracts, validation, and guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Maintain an authoritative OpenAPI spec; generate server/SDK stubs, request/response validators, and docs from one source of truth.
              </li>
              <li>
                Add CI checks that block on undocumented endpoints, missing pagination fields, or non‑standard status codes.
              </li>
              <li>
                Generate Problem Details types and ensure all errors flow through a central handler that attaches <span className="font-medium">correlationId</span>.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Tooling & developer experience</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Scaffold endpoint templates that include idempotency key handling, pagination helpers, and unified error mappers.</li>
              <li>Auto‑generate example responses and cURL snippets in docs; verify examples during CI to avoid rot.</li>
              <li>Ship a thin client with retry/backoff defaults (429/5xx), typed errors, and pagination iterators.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Introduce an <span className="font-medium">Idempotency-Key</span> convention across create endpoints and log it at INFO.</li>
              <li>Adopt cursor pagination for feeds and activity streams; keep offset/limit only where correctness is guaranteed.</li>
              <li>Return RFC 7807 Problem Details everywhere and document stable error <span className="font-medium">code</span> values for clients.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}