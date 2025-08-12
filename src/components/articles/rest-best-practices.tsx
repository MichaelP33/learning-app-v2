import React from "react";

export default function RestBestPractices() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Resource modeling and naming</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Model the domain as resources (nouns) rather than actions (verbs). Use plural, kebab‑case paths and predictable nesting for containment, not for querying. Prefer <code>GET /users</code>, <code>GET /users/{`{userId}`}</code>, <code>GET /users/{`{userId}`}/orders</code>. Avoid RPC verbs like <code>/createUser</code>. Keep paths stable; move variability to query strings (e.g., <code>GET /orders?status=shipped&amp;sort=-createdAt</code>).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use consistent casing: kebab‑case in URIs, snake_case or camelCase in JSON, but never mix within the same API.</li>
              <li>Represent relationships with sub‑resources when the child has no global identity: <code>POST /carts/{`{id}`}/items</code>.</li>
              <li>Do not encode actions in paths. For actions, use <code>POST</code> to an action sub‑resource like <code>/payments/{`{id}`}/capture</code> if truly needed.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">HTTP methods and idempotency</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Honor method semantics: <code>GET</code> and <code>HEAD</code> are safe and idempotent; <code>PUT</code> and <code>DELETE</code> are idempotent; <code>POST</code> is not. For partial updates use <code>PATCH</code>. Idempotency matters for retries under network failure and client timeouts.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><span className="font-medium">Create with safety:</span> support <code>Idempotency-Key</code> on <code>POST</code> to prevent double‑charges or duplicate orders when clients retry.</li>
              <li><span className="font-medium">Replace vs modify:</span> <code>PUT /resource/{`{id}`}</code> replaces full state; <code>PATCH</code> applies partial changes (JSON Merge Patch or JSON Patch).</li>
              <li>Soft‑delete patterns: <code>DELETE</code> returns <code>204</code>; if recoverable, reflect via <code>status</code> field rather than alternative verbs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Pagination and filtering</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Provide predictable pagination for large collections. Offset‑based (<code>?page=3&amp;page_size=50</code>) is simple but unstable under writes; cursor‑based (<code>?cursor=abc&amp;limit=50</code>) is preferred for real‑time feeds. Always return pagination metadata.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Expose <code>Link</code> headers with <code>rel="next"</code>, <code>rel="prev"</code>, and <code>rel="self"</code>; include <code>X-Total-Count</code> when feasible.</li>
              <li>Support sorting (<code>?sort=-createdAt</code>) and server‑side filtering with safe, documented fields.</li>
              <li>Prefer stable cursors (opaque tokens) rather than exposing database offsets.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Status codes and response patterns</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use standard HTTP codes consistently. Return <code>200</code> for successful reads, <code>201 Created</code> with <code>Location</code> header for new resources, <code>204 No Content</code> for idempotent updates or deletes with no body. Use <code>202 Accepted</code> for async work with a status endpoint (<code>GET /jobs/{`{id}`}</code>).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Client errors: <code>400</code> (validation), <code>401</code> (unauthenticated), <code>403</code> (unauthorized), <code>404</code> (not found), <code>409</code> (conflict), <code>422</code> (semantic validation).</li>
              <li>Server errors: <code>500</code> generic, <code>502/503/504</code> upstream or capacity issues; never leak stack traces.</li>
              <li>For list endpoints, include stable ordering and deterministic pagination to avoid duplicates or gaps.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Error models and problem details</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Standardize errors so clients can automate handling. A practical default is RFC 7807 Problem Details (<code>application/problem+json</code>) with fields like <code>type</code>, <code>title</code>, <code>status</code>, <code>detail</code>, and <code>instance</code>. Add a stable <code>code</code> and a <code>traceId</code>/<code>correlationId</code> for support.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Return machine‑readable <code>code</code> values (e.g., <code>order_conflict</code>) rather than parsing human text.</li>
              <li>Surface per‑field validation details in <code>errors[]</code> with <code>path</code>, <code>message</code>, and <code>code</code>.</li>
              <li>Localize only messages meant for users; keep API errors in a single locale for stability.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">HATEOAS (brief and pragmatic)</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Hypermedia can improve discoverability and decouple clients from path construction. A pragmatic approach is to include a <code>links</code> object with <code>self</code>, <code>related</code>, and important actions. Example: <code>{`{"id": "123", "links": {"self": "/orders/123", "cancel": "/orders/123/cancel"}}`}</code>. Keep it consistent; do not over‑engineer.
            </p>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define canonical resource names and path patterns up front in your style guide.</li>
              <li>Adopt idempotency keys for <code>POST</code> on at‑least‑once networks and mobile clients.</li>
              <li>Prefer cursor pagination for feeds; include <code>Link</code> headers and opaque cursors.</li>
              <li>Adopt RFC 7807 for errors with <code>traceId</code> correlation across services.</li>
              <li>Use <code>202 + Location</code> for async workflows; provide a <code>GET /jobs/{`{id}`}</code> status endpoint.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reduced integration friction and support load</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Clear naming, stable pagination, and predictable errors shorten partner onboarding and reduce &ldquo;what does this mean?&rdquo; tickets. Fewer edge‑case failures appear when idempotency and retries are first‑class.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Onboarding time drops when clients can rely on standard codes (<code>201</code>, <code>409</code>, <code>422</code>) and error shapes.</li>
              <li>Idempotency eliminates duplicate orders/refunds—direct cost savings and fewer escalations.</li>
              <li>Telemetry via <code>traceId</code> makes debugging cross‑team incidents faster.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Product velocity and evolvability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Consistent conventions unlock parallel work: documentation writes itself from patterns; SDKs can be generated; backend teams add endpoints without bespoke guidance. Cursor‑friendly specs (OpenAPI) let tooling scale with you.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Automated docs and client generation reduce manual errors and review cycles.</li>
              <li>Predictable pagination and sorting let UI teams prototype without backend rewrites.</li>
              <li>Uniform errors allow shared retry/backoff and user‑messaging components.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk management and reliability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Idempotency, safe methods, and <code>202</code> async patterns reduce data corruption and race conditions. Thoughtful status codes and <code>Retry-After</code> guidance help clients degrade gracefully during incidents.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt circuit breakers and timeouts alongside idempotent operations.</li>
              <li>Communicate rate limits and pagination ceilings explicitly to avoid accidental abuse.</li>
              <li>Use <code>409</code> for write conflicts with remediation steps (<code>If-Match</code> ETags, version fields).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish an API style guide section on resources, methods, pagination, and errors.</li>
              <li>Ship OpenAPI first; generate mocks, tests, and SDKs from it.</li>
              <li>Measure support tickets per integration before/after adopting idempotency keys.</li>
              <li>Instrument <code>traceId</code> across gateway, services, and logs for end‑to‑end tracing.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">OpenAPI‑driven scaffolding</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can author and maintain an OpenAPI spec with consistent resource names, parameters, and error schemas. From that spec it can scaffold handlers, validation, and typed SDKs. It can also enforce status‑code usage in tests and lint for pagination and error shapes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate <code>GET/POST/PUT/PATCH/DELETE</code> handlers with idempotency checks and <code>Location</code> headers.</li>
              <li>Insert RFC 7807 error DTOs and shared middleware for <code>traceId</code> propagation.</li>
              <li>Scaffold pagination helpers for both offset and cursor modes with <code>Link</code> header utilities.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational guardrails</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can add middleware for ETags (<code>If-None-Match</code>, <code>If-Match</code>), request validation, and standardized logging. It can generate runbooks and &ldquo;Golden Path&rdquo; examples so new endpoints follow the same conventions by default.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Auto‑wire correlation IDs and structured logs; surface them in responses for support.</li>
              <li>Template retry/backoff guidance in error details for common transient failures.</li>
              <li>Generate consumer contract tests to catch pagination or error regressions.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to produce an API style guide and an initial OpenAPI skeleton.</li>
              <li>Adopt a shared error library exporting RFC 7807 helpers and domain error <code>code</code>s.</li>
              <li>Introduce idempotency middleware and example clients that set <code>Idempotency-Key</code>.</li>
              <li>Add pagination utilities that emit <code>Link</code> headers and consume opaque cursors.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}