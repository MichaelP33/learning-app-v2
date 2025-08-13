import React from "react";

export const articleFormatVersion = 2;

export default function RateLimiting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Rate limiting controls how much a client can call an API over time to protect systems, ensure fairness, and improve reliability.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>More stable APIs during peaks; fewer timeouts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: checkout stays responsive on drops.</li><li>Plain English: no stampedes.</li></ul>
              </li>
              <li>Clear guidance when blocked (when to retry).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: <code>429</code> with <code>Retry-After</code>.</li><li>Plain English: not a mystery failure.</li></ul>
              </li>
              <li>Fairness across tenants and apps.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: noisy neighbor cannot starve others.</li><li>Plain English: everyone gets a turn.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Tickets into a venue.&rdquo; You can enter at a steady rate and a short burst is okay if you saved tickets.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Protects dependencies and budgets → fewer outages.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: predictable SLOs and costs.</li></ul>
                  </li>
                  <li>Fairness across identities → better multi‑tenant UX.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: no one hogs the line.</li></ul>
                  </li>
                  <li>Segmentation by plan → monetization lever.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: upsell path without risk.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Over‑strict limits → broken UX and support pain.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: allow short bursts via token bucket.</li></ul>
                  </li>
                  <li>Identity mismatch (IP vs API key) → bypass or false blocks.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: limit on trusted credentials.</li></ul>
                  </li>
                  <li>Opaque errors → retry storms.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: include headers and guidance.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Offset limits users fairly.&rdquo; → Impact: bursts at boundaries → Fix: sliding window or token bucket.</li>
              <li>&ldquo;Limit everything by IP.&rdquo; → Impact: NAT/shared IP issues → Fix: prefer API key or OAuth client.</li>
              <li>&ldquo;429 is enough.&rdquo; → Impact: retry storms → Fix: include <code>Retry-After</code> and remaining headers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Token Bucket</strong> — rate + burst tokens. <em>Why it matters:</em> UX‑friendly bursts.</li>
              <li><strong>Sliding Window</strong> — rolling counters. <em>Why it matters:</em> smoother fairness.</li>
              <li><strong>Retry-After</strong> — when to try again. <em>Why it matters:</em> prevents storms.</li>
              <li><strong>X‑RateLimit‑*</strong> — limit/remaining/reset. <em>Why it matters:</em> client visibility.</li>
              <li><strong>Identity</strong> — who is limited. <em>Why it matters:</em> correct attribution.</li>
              <li><strong>Burst</strong> — short spikes allowed. <em>Why it matters:</em> better UX for clicks.</li>
              <li><strong>Plan Quotas</strong> — per‑tier limits. <em>Why it matters:</em> monetization and isolation.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Public APIs and partner integrations (fairness and cost control).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: per‑key buckets by plan.</li></ul>
              </li>
              <li>Write‑heavy endpoints (protect data integrity).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: POST/DELETE stricter than GET.</li></ul>
              </li>
              <li>Abuse vectors (credential stuffing, scraping).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: per‑IP/ASN dampening.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Consistent headers and <code>429</code> responses → self‑healing clients.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer support tickets.</li></ul>
              </li>
              <li>Segmentation by identity/plan → predictable SLOs and revenue.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: protect core customers.</li></ul>
              </li>
              <li>Dashboards for top limiters and 429s → proactive tuning.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: early fixes before churn.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We get random 429s with no guidance.&rdquo; → Likely cause: missing headers → What to check: <code>X‑RateLimit‑*</code> and <code>Retry-After</code>.</li>
              <li>&ldquo;Batch jobs starve the UI.&rdquo; → Likely cause: single bucket → What to check: separate GET/POST pools.</li>
              <li>&ldquo;Limits are unfair across tenants.&rdquo; → Likely cause: IP‑based limits → What to check: key/tenant identity.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: per‑service quotas; dashboards and autoscaling tie‑ins.</li>
              <li><strong>Non‑Tech Enterprise</strong>: policy controls and audit; explicit customer limits.</li>
              <li><strong>Startups</strong>: simple token buckets at the edge; iterate from data.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">TL;DR (AM-friendly)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add token buckets with clear headers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: fair lines with signs.</li></ul>
              </li>
              <li>Limit by trusted identity (key/tenant), not IP by default.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: count the right person.</li></ul>
              </li>
              <li>Segment write vs read; show <code>Retry-After</code>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: protects core paths without confusion.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Validate bucket identity, algorithms, and per‑route configs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: token bucket, GET/POST split, plan tiers.</li></ul>
              </li>
              <li>Check headers and error bodies include guidance and <code>traceId</code>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: <code>X‑RateLimit‑*</code>, <code>Retry-After</code>.</li></ul>
              </li>
              <li>Propose dashboards and alerts for top 429 producers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Edge/gateway middleware with Redis counters and jittered TTLs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fast and consistent.</li></ul>
              </li>
              <li>Config‑driven plan tiers with CI validation and docs generation.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: safe changes and clear comms.</li></ul>
              </li>
              <li>Client helpers for backoff/sleep until reset.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Abuse spike</strong>: tighten per‑IP/ASN temporarily; raise sampling; add CAPTCHA where appropriate.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: contain blast radius.</li></ul>
              </li>
              <li><strong>Legit customer throttled</strong>: increase plan bucket; whitelist job paths with expiry.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: preserve revenue without risk.</li></ul>
              </li>
              <li><strong>UI lag during batch jobs</strong>: separate pools; reduce batch concurrency; schedule off‑peak.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: protects UX.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We add fair queues with clear limits and guidance, segment by identity and plan, and protect writes—so platforms stay reliable and customers know exactly how to adapt.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
