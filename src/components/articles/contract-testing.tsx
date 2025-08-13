import React from "react";

export const articleFormatVersion = 2;

export default function ContractTesting() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Contract tests capture what consumers need from a provider (HTTP or events) as executable agreements, so providers can verify they won&rsquo;t break existing clients.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer last‑minute integration fire drills.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: provider PR fails fast on contract mismatch.</li><li>Plain English: catch breaks before release.</li></ul>
              </li>
              <li>Clear upgrade guidance and confidence.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: diff shows exactly what changed between majors.</li><li>Plain English: consumers know what to do.</li></ul>
              </li>
              <li>Safer multi‑team delivery with less coordination.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: CDC blocks merges that break prod users.</li><li>Plain English: autonomy without surprises.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Signed checklist.&rdquo; Consumers sign off on the list they need; providers prove they still satisfy it.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Independent deployability → fewer coordination bottlenecks.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster delivery across teams.</li></ul>
                  </li>
                  <li>Executable compatibility gates → safer changes.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: automated &ldquo;won&rsquo;t break&rdquo; checks.</li></ul>
                  </li>
                  <li>Visible deprecation paths → smoother migrations.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer escalations.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Upfront setup and broker maintenance.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: start with one consumer/provider pair.</li></ul>
                  </li>
                  <li>Doesn&rsquo;t replace unit/integration/E2E tests.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: layer defenses.</li></ul>
                  </li>
                  <li>Stale contracts cause noise.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: tag and retire unused quickly.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Providers write the contracts.&rdquo; → Impact: misses real needs → Fix: consumers author; providers verify.
              </li>
              <li>&ldquo;Contracts equal docs.&rdquo; → Impact: not enforced → Fix: executable, verified in CI.
              </li>
              <li>&ldquo;Only happy paths.&rdquo; → Impact: unnoticed breakage → Fix: include errors, 404/409, and edge cases.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>CDC (Consumer‑Driven Contracts)</strong> — consumer defines needs. <em>Why it matters:</em> aligns with usage.
              </li>
              <li><strong>Provider Verification</strong> — run contracts against provider. <em>Why it matters:</em> blocks breaking changes.
              </li>
              <li><strong>Broker</strong> — shared registry. <em>Why it matters:</em> discoverability and governance.
              </li>
              <li><strong>Semantic Versioning</strong> — MAJOR.MINOR.PATCH. <em>Why it matters:</em> change signaling.
              </li>
              <li><strong>Tolerant Reader</strong> — ignore unknown fields. <em>Why it matters:</em> additive changes are safe.
              </li>
              <li><strong>Idempotency</strong> — safe retries. <em>Why it matters:</em> robust clients.
              </li>
              <li><strong>Event Schemas</strong> — topics and payloads. <em>Why it matters:</em> consistent messaging.
              </li>
              <li><strong>Replay/Golden Payloads</strong> — sample messages. <em>Why it matters:</em> regression proof.
              </li>
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
              <li>Public/partner APIs and microservice boundaries.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: orders API used by billing and analytics.</li></ul>
              </li>
              <li>Evented systems (streams/queues) with multiple consumers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: payment events drive invoices and emails.</li></ul>
              </li>
              <li>Versioned SDKs and multi‑tenant platforms.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: v1/v2 coexistence.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Contracts include negative cases and pagination/error semantics → realistic safety.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer production slips.</li></ul>
              </li>
              <li>Verification runs on every provider PR → instant feedback.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: quicker merges and fewer rollbacks.</li></ul>
              </li>
              <li>Semver + deprecation windows → calm migrations.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: predictable customer experience.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Our client broke after your deploy.&rdquo; → Likely cause: missing verification → What to check: provider PR checks against all supported contracts.</li>
              <li>&ldquo;Docs say one thing, API did another.&rdquo; → Likely cause: docs drift → What to check: contracts vs OpenAPI alignment.</li>
              <li>&ldquo;Event consumers are crashing.&rdquo; → Likely cause: schema change → What to check: event contracts and tolerant readers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: broker governance; dashboards for verification status.</li>
              <li><strong>Non‑Tech Enterprise</strong>: change control; compatibility evidence for audits.</li>
              <li><strong>Startups</strong>: start with 1–2 key consumer contracts; grow coverage.
              </li>
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
              <li>Consumers author; providers verify on PR.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: needs come from users; suppliers prove fit.</li></ul>
              </li>
              <li>Add negative cases and pagination/errors to contracts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: test real‑world failure too.</li></ul>
              </li>
              <li>Use semver and deprecation windows for calm changes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer escalations.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate/verify contracts on consumer/provider PRs; tag by environment.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: prod‑tagged contracts must block.</li></ul>
              </li>
              <li>Create diffs for MAJOR/MINOR/PATCH and produce migration notes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: additive in minor; breaking in major with window.</li></ul>
              </li>
              <li>Validate event schemas and tolerant readers for message changes.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Broker with policy (which contracts block which providers) and adoption dashboards.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: visibility and control.</li></ul>
              </li>
              <li>SDK/schema generators per contract; CI publishes/consumes automatically.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fewer drift bugs.</li></ul>
              </li>
              <li>Webhooks/alerts for new MAJORs and verification failures.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Breaking change needed</strong>: stage a MAJOR; publish adapters; set deprecation headers/notes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: calm migrations.</li></ul>
              </li>
              <li><strong>Unknown consumer failures</strong>: audit broker; tag and retire stale contracts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: reduces noise and risk.</li></ul>
              </li>
              <li><strong>Event schema drift</strong>: add tolerant readers; publish new version; verify all consumers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: no mass breakage.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We let consumers define what they need and verify providers on every PR, including error cases and versions—so teams move faster without breaking each other.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
