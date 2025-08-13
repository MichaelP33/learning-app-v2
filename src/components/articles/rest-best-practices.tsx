import React from "react";

export const articleFormatVersion = 2;

export default function RestBestPractices() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">REST models your domain as resources (nouns) addressed by URLs, manipulated by standard HTTP methods, with predictable responses and errors.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer integration surprises; clients reuse patterns.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: every POST returns <code>201</code> + <code>Location</code>.</li><li>Plain English: same rules everywhere.</li></ul>
              </li>
              <li>More reliable retries and idempotency.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: <code>Idempotency-Key</code> prevents double charges.</li><li>Plain English: try again without fear.</li></ul>
              </li>
              <li>Stable pagination and filtering for big lists.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1"><li>Example: cursor feeds never skip or duplicate.</li><li>Plain English: next page always makes sense.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Well‑labeled folders.&rdquo; Consistent names and actions mean you can guess paths and behaviors without a manual.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Predictable contracts → faster integrations.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer support tickets.</li></ul>
                  </li>
                  <li>HTTP semantics (cache, auth, status) → robust behavior.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: built‑in rules save work.</li></ul>
                  </li>
                  <li>Linking and pagination → scalable navigation.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: large datasets still usable.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Over‑nested resources → awkward querying.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: use filters, not deep path gymnastics.</li></ul>
                  </li>
                  <li>Inconsistent conventions → brittle clients.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: publish an API style guide.</li></ul>
                  </li>
                  <li>Async jobs need extra patterns → 202 + status resource.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: use <code>Location</code> to a job URI.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;RPC verbs in paths are fine.&rdquo; → Impact: clients can&rsquo;t rely on methods → Fix: model nouns and use HTTP verbs.</li>
              <li>&ldquo;Offset paging is good enough.&rdquo; → Impact: duplicates/gaps → Fix: use cursor paging for live feeds.</li>
              <li>&ldquo;Errors are strings.&rdquo; → Impact: fragile parsing → Fix: RFC 7807 with stable <code>code</code>.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Resource</strong> — a noun addressable by URI. <em>Why it matters:</em> stable contract surface.</li>
              <li><strong>Idempotency</strong> — repeat without side‑effects. <em>Why it matters:</em> safe retries.</li>
              <li><strong>Cursor Pagination</strong> — opaque pointer paging. <em>Why it matters:</em> no duplicates/gaps.</li>
              <li><strong>RFC 7807</strong> (Problem Details) — standard error format. <em>Why it matters:</em> machine‑readable failures.</li>
              <li><strong>ETag/If‑Match</strong> — optimistic concurrency. <em>Why it matters:</em> conflict handling.</li>
              <li><strong>HATEOAS/Links</strong> — discoverability. <em>Why it matters:</em> decouples clients from path building.</li>
              <li><strong>Status Codes</strong> — HTTP semantics. <em>Why it matters:</em> universal behavior contracts.</li>
              <li><strong>TraceId</strong> — correlation. <em>Why it matters:</em> debuggable requests.</li>
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
              <li>Partner integrations and public APIs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: faster onboarding with predictable endpoints.</li></ul>
              </li>
              <li>Mobile and unreliable networks needing idempotency.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: payment retries avoid duplicates.</li></ul>
              </li>
              <li>Large collections and feeds (orders, events, search).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: cursor paging keeps UX smooth.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Canonical resource names and methods → fewer support cases.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster partner launches.</li></ul>
              </li>
              <li>Idempotent POST with <code>Idempotency-Key</code> → safe retries.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: reduced chargebacks.</li></ul>
              </li>
              <li>RFC 7807 errors + <code>traceId</code> → quick triage.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: lower MTTR.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Docs say one thing, API does another.&rdquo; → Likely cause: inconsistent conventions → What to check: style guide, generated SDK parity.</li>
              <li>&ldquo;We got duplicate charges on retry.&rdquo; → Likely cause: non‑idempotent POST → What to check: <code>Idempotency-Key</code> support.</li>
              <li>&ldquo;Pagination skips or repeats items.&rdquo; → Likely cause: offset paging under writes → What to check: cursor design and ordering.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: strict style guides; heavy automation from OpenAPI.</li>
              <li><strong>Non‑Tech Enterprise</strong>: governance and audit; stable error codes and SLAs.</li>
              <li><strong>Startups</strong>: start simple; add idempotency and cursor paging early to avoid debt.</li>
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
              <li>Name resources and use standard methods.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: predictable paths and verbs.</li></ul>
              </li>
              <li>Adopt cursor paging and idempotency keys.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: stable lists and safe retries.</li></ul>
              </li>
              <li>Return RFC 7807 errors with <code>traceId</code>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fast support and debugging.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Check resource naming, method semantics, and consistency.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: nouns, plural paths, no RPC verbs.</li></ul>
              </li>
              <li>Enforce pagination and error patterns in OpenAPI.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: cursor params; Problem Details schema.</li></ul>
              </li>
              <li>Flag non‑idempotent flows; add <code>Idempotency-Key</code> support.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>OpenAPI‑first scaffolding, SDKs, and docs generation.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fewer drift bugs.</li></ul>
              </li>
              <li>Middleware for idempotency, <code>Link</code> headers, and <code>traceId</code>.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: consistent behavior everywhere.</li></ul>
              </li>
              <li>Contract tests for pagination and errors.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Duplicate orders</strong>: add idempotency; surface <code>Retry-After</code> guidance.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: safe retries by default.</li></ul>
              </li>
              <li><strong>Broken pagination</strong>: migrate to cursor; add stable ordering.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: no gaps or repeats.</li></ul>
              </li>
              <li><strong>Inconsistent errors</strong>: adopt RFC 7807; map codes to guidance.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: clients automate recovery.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We name resources, use standard methods, return machine‑readable errors, and ship idempotency and cursor paging—so partners integrate faster and incidents resolve quickly.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
