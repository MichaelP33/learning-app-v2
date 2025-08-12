import React from "react";

export default function ApiVersioning() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where to carry the version</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                URI versioning (<span className="font-medium">/v1/orders</span>) is explicit, cache‑friendly, and easy to route. It is best when you expect major, breaking changes that evolve slowly.
              </li>
              <li>
                Header versioning (e.g., <span className="font-medium">Accept: application/vnd.example.v2+json</span>) keeps URLs stable and supports content negotiation. It is ideal for gradual, additive evolution and fine‑grained control.
              </li>
              <li>
                Media type/content negotiation (custom vendor types) allows multiple representations of the same resource (<span className="font-medium">application/vnd.example.order+json;version=3</span>) but increases tooling complexity.
              </li>
              <li>
                Choose one primary strategy and document it. Dual modes (URI + header) create confusion and double the testing surface.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Backward compatibility as a contract</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Treat minor changes as additive only: add fields (never remove), widen enums (never narrow), and default new behavior to off. A client written yesterday should continue to work tomorrow.
              </li>
              <li>
                Breaking changes (removing fields, changing types, altering semantics) require a new major version. Provide a migration path and parallel support window.
              </li>
              <li>
                Version per domain when necessary. Not every resource needs to move together; decouple lifecycles to avoid unnecessary major bumps.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Deprecation headers and timelines</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use <span className="font-medium">Deprecation</span> and <span className="font-medium">Sunset</span> headers to announce timelines (e.g., <span className="font-medium">Sunset: Wed, 31 Dec 2025 23:59:59 GMT</span>) and link to a migration guide via <span className="font-medium">Link: &lt;https://docs.example.com/migrate&gt;; rel=&ldquo;deprecation&rdquo;</span>.
              </li>
              <li>
                Respect customer upgrade cycles. Provide sufficient overlap (commonly 6–12 months for external APIs) and proactive notifications.
              </li>
              <li>
                Expose usage per version in analytics so account teams can reach out with concrete impact and dates.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pick URI or header versioning as the default; document examples and error messages for mismatched or missing versions.</li>
              <li>Define what counts as &ldquo;backward compatible&rdquo; in your contribution guide; automate the checks in CI.</li>
              <li>Publish a deprecation policy with typical timelines, communication channels, and a sample migration checklist.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Breaking‑change economics</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Every breaking change imposes integration cost on consumers (engineering time, validation, rollout). Unplanned major versions erode trust and slow adoption.
              </li>
              <li>
                Supporting multiple versions increases operational overhead: more code paths, more on‑call surface, more documentation to keep in sync.
              </li>
              <li>
                Clear versioning strategy enables commercial packaging (tiers, partner contracts) and predictable roadmaps.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Release management & support matrix</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define support windows per major version and state them publicly (e.g., security fixes only after 12 months). Remove ambiguity to reduce escalations.
              </li>
              <li>
                Maintain a version usage dashboard and set deprecation thresholds (e.g., when &lt; 5% of traffic remains on v1, schedule sunset).
              </li>
              <li>
                Provide migration toolkits (linters, codemods, example diffs) to compress consumer effort and shorten upgrade timelines.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ecosystem & developer experience</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Stable versioning simplifies SDK maintenance and sample apps, decreasing onboarding time for partners.
              </li>
              <li>
                Consistent deprecation signals prevent &ldquo;silent breakage&rdquo; and allow proactive communication from customer success teams.
              </li>
              <li>
                Clear rules encourage internal teams to ship confidently without fear of accidental breaking changes.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Create a &ldquo;compatibility grid&rdquo; that lists versions, support state, and key dates; publish it in the portal.</li>
              <li>Send automated deprecation emails/webhooks based on actual usage; include per‑client sample requests to test.</li>
              <li>Establish a &ldquo;no breaking changes in minor versions&rdquo; policy and enforce via schema diff checks.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automation: diffing and policy guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Generate an OpenAPI schema on every PR and run a compatibility diff against the last released version; block if breaking without a major bump.
              </li>
              <li>
                Lint for version location (URI vs header), required deprecation headers, and presence of migration links in docs.
              </li>
              <li>
                Validate that response shapes for older versions remain stable; run contract tests against a canary environment.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Routing, discovery, and telemetry</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Route by version at the gateway; attach version labels to traces and logs for per‑version SLOs.</li>
              <li>Publish versioned SDKs and samples; keep docs synchronized through CI to prevent drift.</li>
              <li>Expose per‑client version usage so success teams can target high‑impact migrations first.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Pick one: <span className="font-medium">/vN</span> in the path or vendor media types in headers; avoid dual strategies.</li>
              <li>Publish a template deprecation notice and set standard windows (e.g., 9 months) unless contractually extended.</li>
              <li>Automate schema compat checks and label PRs with <span className="font-medium">minor</span> or <span className="font-medium">major</span> based on diff results.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}