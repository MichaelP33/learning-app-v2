import React from "react";

export default function RateLimiting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why rate limit?</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Rate limiting protects shared infrastructure, improves fairness, and constrains abusive or accidental traffic. It should be predictable and visible to clients so they can adapt behavior without guessing.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define identities to limit against: per‑user, per‑API key, per‑app, per‑IP, or per‑tenant.</li>
              <li>Separate read vs write limits; batch write‑heavy operations with async processing.</li>
              <li>Return <code>429 Too Many Requests</code> with clear recovery headers.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Algorithms: fixed, sliding, log, token‑bucket</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Choose an algorithm matching your traffic shape and fairness guarantees. Implementations usually rely on Redis or in‑memory counters at the edge.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li><span className="font-medium">Fixed window:</span> simple counters per interval (e.g., 100 req/min). Can burst at window boundaries.</li>
              <li><span className="font-medium">Sliding window:</span> smooths boundary effects using rolling time windows; fairer under bursts.</li>
              <li><span className="font-medium">Log‑based:</span> stores timestamps per request; accurate but heavier on storage/CPU.</li>
              <li><span className="font-medium">Token bucket / leaky bucket:</span> allows bursts by accumulating tokens (rate) and a bucket (burst). Great UX for short spikes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Headers and client guidance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Communicate limits and recovery with headers. Common practice: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, and <code>X-RateLimit-Reset</code> (epoch seconds). On 429, include <code>Retry-After</code> (seconds or HTTP date).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Expose per‑resource or per‑method limits if they differ (e.g., stricter on <code>POST</code>).</li>
              <li>Document burst semantics so clients know whether short spikes are allowed.</li>
              <li>Provide a self‑service endpoint (<code>GET /rate-limit</code>) returning the caller&rsquo;s current limits.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scopes and segmentation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Apply different limits per user, app, tenant, or plan. Consider tighter limits on anonymous IPs, looser on authenticated partners, and special pools for internal services. Tie rate limit identity to the credential you trust most (API key, OAuth client, or signed user ID), not just IP.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Expose plan‑based limits in billing; let customers purchase higher quotas.</li>
              <li>Use separate buckets for <code>GET</code> vs <code>POST</code> to protect writes.</li>
              <li>Apply per‑tenant fairness in multi‑tenant systems to prevent &ldquo;noisy neighbor&rdquo; issues.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with token bucket limits at the edge; store counters in Redis with TTLs.</li>
              <li>Return <code>429</code> + <code>Retry-After</code>; include <code>X-RateLimit-*</code> for visibility.</li>
              <li>Segment by API key or OAuth client; treat IP as a secondary signal.</li>
              <li>Document per‑endpoint limits and burst behavior in OpenAPI descriptions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Cost control and reliability</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Limits protect upstream dependencies (databases, third‑party APIs) from overload and control cloud cost spikes. They also create predictable SLOs by smoothing traffic bursts and isolating abusive actors.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Protect write paths to prevent data corruption during traffic storms.</li>
              <li>Tiered plans let you monetize higher limits while keeping baseline fairness.</li>
              <li>429 policies should be part of incident runbooks; clients must know how to back off.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer experience and fairness</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Transparent headers and consistent enforcement reduce confusion. Clients can implement token bucket compatible backoff (sleep until <code>X-RateLimit-Reset</code>) instead of retry storms.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Return human‑friendly error details with a stable <code>code</code> like <code>rate_limit_exceeded</code>.</li>
              <li>Offer higher burst buckets for latency‑sensitive UI flows and lower steady‑state rates for batch jobs.</li>
              <li>Provide a sandbox with generous limits for development and certification.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security and abuse mitigation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Rate limits complement authN/Z and fraud detection. Per‑IP or per‑ASN limits can dampen credential stuffing and scraping; per‑account limits prevent &ldquo;friendly fire&rdquo; from misconfigured clients.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Combine with anomaly detection (sudden spike alerts) and captchas where appropriate.</li>
              <li>Use &ldquo;penalty boxes&rdquo;: progressively stricter limits for repeated violators.</li>
              <li>Whitelist health checks and webhooks separately to avoid cascading failures.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a limits table per plan and endpoint; include <code>Retry-After</code> semantics.</li>
              <li>Add dashboards for top limiters by identity and most frequent 429s.</li>
              <li>Test backoff behavior with chaos exercises that force 429s on staging.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Edge and gateway enforcement</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can generate NGINX/Envoy policies or application middleware implementing token bucket or sliding window counters backed by Redis. It can also add standardized headers and structured logs for observability.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Scaffold a <code>rateLimit(identity, bucket)</code> middleware and attach per‑route configs.</li>
              <li>Emit <code>X-RateLimit-*</code> and <code>Retry-After</code> consistently from a shared helper.</li>
              <li>Provide sample client backoff utilities that sleep until <code>X-RateLimit-Reset</code>.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Segmentation and analytics</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can keep limits in config or a control plane (by plan, tenant, endpoint) and ship dashboards tracking near‑limit callers. It can suggest per‑tier defaults and generate tests to prevent accidental changes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a config schema for plans and buckets; validate on CI.</li>
              <li>Generate usage reports and alerts for &ldquo;top 429 producers&rdquo; per identity.</li>
              <li>Automate exceptions/whitelists with expirations for incident mitigation.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to scaffold edge policies and app middlewares with shared helpers.</li>
              <li>Adopt a plan config file; generate docs and tests from it.</li>
              <li>Provide example client backoff code and SDK hooks for <code>429</code> handling.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}