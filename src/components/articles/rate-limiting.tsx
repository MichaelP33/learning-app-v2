import React from "react";

export default function RateLimiting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Algorithms and trade‑offs</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Fixed window: simple counters per interval (e.g., 100 req/min). Easy to implement, but suffers from boundary bursts at window edges.
              </li>
              <li>
                Sliding window: smooths edges by tracking the last N seconds. Better fairness, slightly more state and compute.
              </li>
              <li>
                Token bucket: tokens accumulate at a steady rate and allow bursts up to bucket size; excellent for APIs needing short spikes.
              </li>
              <li>
                Leaky bucket: enforces a constant drain rate, smoothing traffic for downstream dependencies. Good for backpressure.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Headers and response semantics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use 429 Too Many Requests when limits are exceeded; include <span className="font-medium">Retry-After</span> for when to try again.
              </li>
              <li>
                Provide <span className="font-medium">X-RateLimit-Limit</span>, <span className="font-medium">X-RateLimit-Remaining</span>, and <span className="font-medium">X-RateLimit-Reset</span> (epoch seconds) so clients can adapt behavior.
              </li>
              <li>
                Distinguish between per‑resource and global limits; document whether headers reflect the most restrictive limiter or the specific route.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Scope and fairness</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Scope limits per user, per application, per IP, and per tenant as needed. Combine scopes to prevent abuse without punishing legitimate users behind NATs.
              </li>
              <li>
                Separate sustained throughput from burst capacity. Token buckets handle brief spikes while sliding windows enforce longer‑term fairness.
              </li>
              <li>
                Consider write vs read limits separately; writes are costlier and often deserve tighter budgets.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define product tiers as limit profiles; publish exact numbers and reset semantics in docs.</li>
              <li>Emit structured 429 errors with Problem Details and include limit headers even on failure responses.</li>
              <li>Whitelist health checks and webhooks; apply stricter limits to endpoints with expensive side effects.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Abuse prevention and cost control</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Limits protect shared infrastructure and third‑party dependencies from traffic spikes, bot abuse, and misconfigured clients.
              </li>
              <li>
                Clear policies allow pricing/packaging that aligns costs with value, reducing noisy‑neighbor effects in multi‑tenant systems.
              </li>
              <li>
                Predictable throttling improves downstream stability, raising overall SLO attainment and reducing on‑call toil.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Product experience and fairness</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Transparent headers and error messages let clients implement progressive backoff instead of hard failures.</li>
              <li>Per‑user or per‑app scoping prevents a single consumer from starving others sharing the same IP or tenant.</li>
              <li>Granular limits allow premium tiers to burst more while protecting essential operations for all users.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operations and analytics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Capture limit counters and 429s per route, scope, and principal; trend week‑over‑week to detect abusive patterns.</li>
              <li>Integrate with incident response: when a dependency is degraded, lower limits dynamically to preserve core functionality.</li>
              <li>Provide self‑serve dashboards so customers can view current usage and plan upgrades before hitting walls.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a public policy page with limits, headers, and examples; link it from every 429 response via <span className="font-medium">Link</span> header.</li>
              <li>Alert on sudden spikes in 429s and on sustained &gt; 80% utilization of any limiter.</li>
              <li>Provide a temporary &ldquo;surge allowance&rdquo; process for launches and migrations, with time‑boxed exceptions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Gateway enforcement and distributed state</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Enforce limits at the edge (API gateway) with fast, consistent counters; replicate state safely using Redis/CRDTs as needed.
              </li>
              <li>
                Expose configuration as code (per route, per principal, per method) and validate via tests in CI.
              </li>
              <li>
                Emit <span className="font-medium">Retry-After</span> and <span className="font-medium">X-RateLimit-*</span> headers uniformly; ensure SDKs surface them to callers.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Idempotency, bypass lists, and backpressure</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Honor idempotency keys so safe retries do not double‑charge or duplicate work when near limits.</li>
              <li>Support allowlists for critical webhooks/health checks and dynamic limit lowering during incidents.</li>
              <li>Propagate backpressure signals to upstream callers with clear guidance for retry/backoff.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt token bucket for user‑facing APIs and sliding window for admin/reporting endpoints.</li>
              <li>Log the effective limiter scope (user/app/IP/tenant) with correlation IDs for every 429.</li>
              <li>Ship client helpers that parse limit headers and implement exponential backoff with jitter.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}