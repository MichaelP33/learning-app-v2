import React from "react";

export const articleFormatVersion = 2;

export default function ApiVersioning() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">API versioning lets you ship breaking changes without breaking existing clients by providing separate, stable contract lanes.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Predictable upgrades with clear timelines.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: customers migrate from v1 to v2 over months, not days.</li><li>Plain English: no surprise breakage.</li></ul>
              </li>
              <li>Docs and SDKs match behavior exactly.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: v2 SDK uses v2 endpoints by default.</li><li>Plain English: fewer integration bugs.</li></ul>
              </li>
              <li>Deprecation notices show up where calls happen.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: <code>Sunset</code> headers on every v1 response.</li><li>Plain English: heads‑up in context.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Lanes on a highway.&rdquo; New lanes open without closing old ones immediately; signs warn when an old lane will close.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Safe evolution of APIs → faster product delivery.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer emergency rollbacks.</li></ul>
                  </li>
                  <li>Per‑version docs and SDKs → clearer DX.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: docs always match behavior.</li></ul>
                  </li>
                  <li>Sunset signaling → orderly migrations.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: predictable roadmaps.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Too many concurrent majors → high ops cost.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: limit supported majors.</li></ul>
                  </li>
                  <li>Silent breaking changes inside a major → trust erosion.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: freeze schemas per major.</li></ul>
                  </li>
                  <li>Header vs URI confusion → cache/CDN issues.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: pick one mechanism and stick to it.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Patch within a major can break behavior.&rdquo; → Impact: client bugs → Fix: only additive within a major.</li>
              <li>&ldquo;We can deprecate silently.&rdquo; → Impact: surprise outages → Fix: <code>Deprecation</code>/<code>Sunset</code> headers + docs.</li>
              <li>&ldquo;We support every major forever.&rdquo; → Impact: test matrix explosion → Fix: policy to retire old majors.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Major/Minor/Patch</strong> — semver tiers. <em>Why it matters:</em> signals breaking vs additive.</li>
              <li><strong>URI vs Header Versioning</strong> — path or header. <em>Why it matters:</em> caching and tooling.</li>
              <li><strong>Vendor Media Types</strong> — <code>Accept: application/vnd.acme.v2+json</code>. <em>Why it matters:</em> fine‑grained content negotiation.</li>
              <li><strong>Sunset/Deprecation</strong> headers — timed retirement. <em>Why it matters:</em> visible warnings in responses.</li>
              <li><strong>Compatibility Contract</strong> — rules per major. <em>Why it matters:</em> prevents accidental breaks.</li>
              <li><strong>Per‑version OpenAPI</strong> — docs by lane. <em>Why it matters:</em> accurate SDKs and tests.</li>
              <li><strong>Version Router</strong> — dispatch by path/header. <em>Why it matters:</em> isolates behavior.</li>
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
              <li>Public APIs with long‑tail clients.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: partners on older SDKs.</li></ul>
              </li>
              <li>Mobile apps needing staged rollouts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: app store delays.</li></ul>
              </li>
              <li>Large enterprise contracts with support windows.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: extended v1 support for strategic accounts.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>One primary mechanism (URI or header) used consistently → fewer bugs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: simpler gateways/CDNs.</li></ul>
              </li>
              <li>Fixed deprecation windows and comms → predictable planning.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer escalations.</li></ul>
              </li>
              <li>Per‑version docs/tests/SDKs → low integration friction.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster migrations.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;v1 and v2 behave differently for the same call.&rdquo; → Likely cause: inconsistent policy → What to check: compatibility contract and tests.</li>
              <li>&ldquo;We didn&rsquo;t know v1 was ending.&rdquo; → Likely cause: missing headers → What to check: <code>Sunset</code>/<code>Deprecation</code> in gateways.</li>
              <li>&ldquo;Docs don&rsquo;t match responses.&rdquo; → Likely cause: mixed versions → What to check: per‑version OpenAPI and SDKs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: header/media‑type versioning behind gateways; dashboards for adoption.</li>
              <li><strong>Non‑Tech Enterprise</strong>: strict support windows; change reviews for majors.</li>
              <li><strong>Startups</strong>: URI versioning for simplicity; few concurrent majors.</li>
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
              <li>Pick one versioning mechanism and use it everywhere.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: one lane policy.</li></ul>
              </li>
              <li>Freeze schemas per major; only additive changes within a major.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: no moving goalposts.</li></ul>
              </li>
              <li>Signal deprecation with headers and dashboards.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer surprises.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Diff OpenAPI between majors; generate change logs and migration notes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: removed/renamed fields; pagination and error changes.</li></ul>
              </li>
              <li>Enforce compatibility tests on PRs for same‑major changes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: tolerant readers; additive only.</li></ul>
              </li>
              <li>Add <code>Sunset</code>/<code>Deprecation</code> headers from middleware; verify in staging.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Per‑version routers/SDKs/docs generation.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: no accidental cross‑version drift.</li></ul>
              </li>
              <li>Traffic analytics by version; adoption dashboards and alerts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: targeted outreach.</li></ul>
              </li>
              <li>Template comms for 90/60/30‑day notices with links to guides.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Breaking change needed</strong>: schedule new major; generate diffs and adapters.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: clean cut without chaos.</li></ul>
              </li>
              <li><strong>Lingering v1 traffic</strong>: identify accounts; offer migration help; set sunset date.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: organized retirement.</li></ul>
              </li>
              <li><strong>Docs drift</strong>: regenerate per‑version docs from OpenAPI; add CI check.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: trust in docs restored.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We keep one clear versioning lane, freeze behavior per major, and signal deprecations in responses—so customers upgrade smoothly and releases stay safe.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
