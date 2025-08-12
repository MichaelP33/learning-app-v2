import React from "react";

export default function ApiGatewayPatterns() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Routing & Auth Offload</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Gateways perform <strong>request routing</strong> (path, host, header) and centralize <code>authn/z</code> with <code>OIDC</code>, <code>mTLS</code>, and <code>JWT</code> validation.
              </li>
              <li>
                Offloading cross‑cutting concerns (auth, <code>CORS</code>, <code>CSRF</code>) keeps services simpler and more consistent.
              </li>
              <li>
                Support canary and blue/green via header/weight routing; encode policies as declarative configs.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Throttling, Quotas, and Caching</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Shield services with <code>rate limits</code>, burst buckets, and <code>quotas</code>; return headers for remaining capacity.
              </li>
              <li>
                Add <code>edge caches</code> and per‑route TTLs; vary by <code>Authorization</code>, <code>Accept-Language</code>, and <code>tenant</code>.
              </li>
              <li>
                Apply content negotiation and <code>ETag</code>/<code>If-None-Match</code> to minimize transfer.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Transformation & Observability</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Transformations: header/URL rewrites, <code>gRPC</code>&larr;&rarr;<code>HTTP</code>, and payload mapping (e.g., <code>JSON</code> to <code>GraphQL</code> resolvers).
              </li>
              <li>
                Observability: structured logs, <code>trace_id</code> propagation, and per‑route SLIs (p95 latency, error rate).
              </li>
              <li>
                Security posture: WAF rules, bot management, and <code>IP allow/deny</code> lists as policy code.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define consumer tiers with default quotas and SLAs; include soft/hard limits and overage handling.
              </li>
              <li>
                Provide a developer portal: keys, docs, examples, and usage dashboards per app.
              </li>
              <li>
                Keep a 
                &ldquo;break-glass&rdquo; emergency policy set for incident containment (temporary blocks, stricter WAFs).
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Platform Consistency & Risk Reduction</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Centralized policies reduce duplicated effort and inconsistent security across services.
              </li>
              <li>
                Improved reliability: global circuit breakers and <code>health checks</code> guard against cascading failures.
              </li>
              <li>
                Faster partner onboarding through uniform auth and quota models; better monetization telemetry.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Team Interfaces & Ownership</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Treat the gateway as a product with clear SLOs; define change processes and guardrails for route owners.
              </li>
              <li>
                Offer self‑service configuration PRs with reviews, linters, and dry-runs; avoid ticket bottlenecks.
              </li>
              <li>
                Balance central governance with service‑team autonomy via namespaced configs and policy libraries.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Publish an API style guide, error model, and pagination rules; enforce through gateway transformations.
              </li>
              <li>
                Track &ldquo;top N&rdquo; routes by traffic, latency, and errors; focus optimizations where it matters.
              </li>
              <li>
                Add <code>synthetic checks</code> that validate auth and quotas from the edge in every region.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Architecture & Tooling</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Options: managed gateways (<code>API Gateway</code>, <code>Apigee</code>), service meshes (<code>Istio</code>, <code>Linkerd</code>), or edge proxies (<code>Envoy</code>, <code>NGINX</code>).
              </li>
              <li>
                IaC for routes, auth policies, and rate limits; peer review with automated validations and 
                &ldquo;safe rollout&rdquo; stages.
              </li>
              <li>
                Instrumentation: distributed tracing, <code>request_id</code> propagation, and route‑level dashboards.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Edge Performance & Resilience</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Apply <code>caching</code> and compression; coalesce duplicate requests with <code>request collapsing</code>.
              </li>
              <li>
                Enforce budgets per route (p95 latency, error rate). Add global and per‑tenant <code>circuit breakers</code>.
              </li>
              <li>
                Run chaos drills: block upstreams or inject failures to validate fallback and retry logic.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Create a &ldquo;route cookbook&rdquo; with common patterns (idempotent POST, long polling, webhooks) and ready configs.
              </li>
              <li>
                Version external APIs; deprecate with timelines, migration guides, and traffic dashboards.
              </li>
              <li>
                Provide per‑tenant keys and usage exports to accelerate partner integrations and billing.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}