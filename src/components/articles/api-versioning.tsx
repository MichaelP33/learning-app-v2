import React from "react";

export default function ApiVersioning() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why version at all?</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Versioning lets you evolve contracts without breaking existing clients. Backward‑compatible, additive changes (new fields, new optional endpoints) do not require a major bump; breaking changes (rename, removal, behavior shifts) do. Your strategy should make compatibility rules explicit and observable in tooling.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Adopt a clear policy: additive changes in <code>v1</code> are allowed; breaking changes ship in <code>v2</code>.</li>
              <li>Define &ldquo;compatibility&rdquo; for payloads, pagination, and error codes, not just fields.</li>
              <li>Use contract tests to assert backward compatibility on CI before publishing.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">URI vs header vs content negotiation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Three common patterns exist. Choose based on platform constraints and client ergonomics, and be consistent.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li><span className="font-medium">URI versioning:</span> <code>/v1/orders</code>, <code>/v2/orders</code>. Easiest to reason about, cache‑friendly, great for public APIs. Drawback: proliferates paths and docs.</li>
              <li><span className="font-medium">Header versioning:</span> custom <code>X-API-Version: 2</code> or vendor media types via <code>Accept: application/vnd.acme.orders+json;version=2</code>. Keeps URLs stable; harder to test in browsers without tooling.</li>
              <li><span className="font-medium">Content negotiation:</span> <code>Accept: application/vnd.acme.v2+json</code>. Fine‑grained but more complex; works well when gateways or CDNs already vary on <code>Accept</code>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Compatibility, deprecation, and stability
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Define what is stable in a version and for how long. Publish deprecation rules, minimum support windows, and sunset plans. Communicate where and how clients will be notified when behavior changes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Backwards‑compatible changes: add fields (never remove), add endpoints, extend enums using tolerant readers.</li>
              <li>Breaking changes: rename or remove fields, change types, alter pagination semantics, change error <code>code</code> meanings.</li>
              <li>Stability signals: pin examples and JSON Schemas per version; do not retroactively change them.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sunset and deprecation headers</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Communicate timelines in responses. Common patterns include <code>Deprecation: true</code> when a resource is deprecated, <code>Sunset: Wed, 11 Dec 2026 23:59:59 GMT</code> to indicate end‑of‑life, and <code>Link: &lt;https://docs.example.com/migrate&gt;; rel="deprecation"</code> for guidance. Emit these for all affected endpoints and environments.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Return the same headers on <code>HEAD</code> and <code>OPTIONS</code> so clients can audit without side‑effects.</li>
              <li>Consider an <code>X-API-Warn</code> header with a short human hint while keeping the body stable.</li>
              <li>Gate headers behind flags to test communications before announcement.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pick one primary mechanism (URI or header); support it everywhere consistently.</li>
              <li>Codify a &ldquo;no breaking changes in minors&rdquo; rule; batch breaks into clear majors.</li>
              <li>Publish deprecation windows (e.g., 12 months) and add <code>Sunset</code>/<code>Deprecation</code> headers 90+ days ahead.</li>
              <li>Keep per‑version OpenAPI docs; freeze schemas once released.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Predictable change management</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Clear version lanes let product teams ship fast without breaking partners. Customer success can communicate timelines with confidence, and SDK teams know where to invest.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reduced churn: fewer emergency rollbacks due to unplanned breaking changes.</li>
              <li>Lower support volume during migrations when <code>Sunset</code> and <code>Link</code> guidance are visible in every response.</li>
              <li>Tiered support models: enterprise customers may receive extended support windows on older majors.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational cost and risk</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Multiple supported majors increase testing matrix size and infra cost. Minimize the number of concurrent majors and automate regression tests across all.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Limit concurrent majors (e.g., support <code>v1</code> and <code>v2</code>, deprecate older).</li>
              <li>Use traffic analytics to discover long‑tail clients still on old versions before enforcing sunset.</li>
              <li>Offer migration guides, diff tables, and code‑mods to reduce customer migration effort.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Documentation and discovery</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Per‑version docs eliminate ambiguity and help sales engineers demo the right flows. DX improves when examples and schemas match the version implied by the URL or headers.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pin examples to specific majors: <code>GET /v2/orders?cursor=...</code>.</li>
              <li>Generate multi‑version SDKs or adapters; mark deprecated APIs at compile‑time with annotations.</li>
              <li>Document breaking changes as a checklist: removed fields, renamed enums, pagination changes.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a &ldquo;compatibility contract&rdquo; page and link it from every spec.</li>
              <li>Emit <code>Sunset</code>/<code>Deprecation</code> headers across staging first; observe client behavior.</li>
              <li>Define a major‑release train with dates, migration kits, and reference repos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Spec management and scaffolding</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can maintain per‑version OpenAPI documents, generate server stubs and typed SDKs, and enforce compatibility rules in CI (no breaking changes in a minor). It can also produce diff reports between majors.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate <code>/v1</code> and <code>/v2</code> routers or header negotiators with shared handlers where behavior is unchanged.</li>
              <li>Create compatibility tests that run against recorded fixtures from real clients.</li>
              <li>Publish multi‑version docs sites with version switchers and migration notes.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Observability and comms automation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can instrument responses with <code>Deprecation</code>/<code>Sunset</code> headers and produce dashboards revealing who still calls deprecated endpoints. It can draft customer emails and changelogs from the diffs.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Add traffic sampling to map versions by API key or account to target outreach.</li>
              <li>Automate &ldquo;90/60/30 day&rdquo; reminders with links to migration guides.</li>
              <li>Ship example adapters to ease migration (e.g., old enum values mapped to new ones).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor to generate per‑version routers and a compatibility CI job.</li>
              <li>Emit <code>Sunset</code>/<code>Link rel="deprecation"</code> headers from a shared middleware.</li>
              <li>Provide a migration cookbook and code‑mods for high‑volume SDKs.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}