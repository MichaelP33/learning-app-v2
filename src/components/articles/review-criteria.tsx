import React from "react";

export default function ReviewCriteria() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          {/* Callout 1 (uses callout budget) */}
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Core Review Criteria
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Correctness</strong>: Does the change do what it claims? Look for off‑by‑one errors, boundary conditions, and implicit assumptions (inputs that can be null, partial, or reordered). Verify data shapes and invariants with tests and explicit guards.
              </li>
              <li>
                <strong>Security</strong>: Validate authn/authz paths (who is the caller), input validation, output encoding, and data exposure. Watch for secrets in logs, SSRF/SQLi/XSS vectors, and unsafe defaults (public buckets, wide IAM roles).
              </li>
              <li>
                <strong>Performance</strong>: Assess algorithmic complexity and hot paths. Check N+1 queries, needless sync I/O, repeated expensive computations, and cache opportunities (request‑scoped memoization vs shared caches).
              </li>
              <li>
                <strong>Accessibility</strong>: Ensure semantic markup, focus order, color contrast, ARIA usage, and keyboard operability. Consider motion sensitivity (reduced motion) and screen reader announcements for dynamic content.
              </li>
              <li>
                <strong>Standards & Consistency</strong>: Match team conventions (naming, layering, error handling), architectural guardrails, and existing ADRs (architecture decision records). Prefer established utilities over bespoke one‑offs.
              </li>
            </ul>
          </div>

          {/* Callout 2 (uses callout budget) */}
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Risk Hot‑Spots by Change Type
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Auth/session</strong> (sign‑in, tokens, CSRF): prioritize misuse resistance and explicit scopes; favor deny‑by‑default checks.
              </li>
              <li>
                <strong>Data migrations</strong> (schema changes, backfills): require idempotency, back‑out plan, and verification queries; stage rollouts with read‑compatibility first.
              </li>
              <li>
                <strong>Concurrency</strong> (jobs, queues, locks): probe race conditions, duplicate processing, and visibility timeouts; add metrics for retries and dead‑letter counts.
              </li>
              <li>
                <strong>Cross‑service contracts</strong> (APIs, events): validate versioning, backward compatibility, and explicit error semantics (4xx vs 5xx; retry vs don&rsquo;t‑retry).
              </li>
              <li>
                <strong>Infra/config</strong> (IaC, flags): check blast radius, defaulting behavior, and least‑privilege policies (narrow IAM, scoped secrets, minimal ports).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Cognitive Load & PR Scope
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Reviews degrade as cognitive load rises (information a reviewer must juggle). Prefer focused PRs with a single intent, isolated diffs (feature vs refactor vs format), and clear test evidence. Batch size correlates with review latency and error escape rate; keeping diffs small (e.g., &lt; 400 LOC net change) typically halves first‑response time and increases review quality.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Declare intent and risk upfront (what changed, why now, where risk concentrates).</li>
              <li>Split noisy refactors (renames, formatting) from logic changes to reduce review thrash.</li>
              <li>Attach screenshots, traces, or perf samples when user experience or latency changes.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Use a standard checklist mapped to correctness, security, performance, accessibility, and standards.</li>
              <li>Call out risk hot‑spots explicitly (files, endpoints, migrations) to guide reviewer attention.</li>
              <li>Keep PRs narrowly scoped; link follow‑ups instead of widening scope mid‑review.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business &amp; Team Impact
        </h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Fewer Escapes, Safer Changes
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Strong criteria lower change failure rate (rollbacks, incident frequency) and shrink MTTR (mean time to recovery) by catching risks before deployment. Security posture improves when review checklists institutionalize threat considerations (attacker mindset) and validate data handling obligations (PII retention, encryption at rest/in transit).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Predictable delivery emerges from earlier risk surfacing and consistent standards.</li>
              <li>Legal/compliance exposure declines when sensitive flows are reviewed systematically.</li>
              <li>Operations toil decreases as observability and back‑out plans are verified pre‑merge.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Flow Efficiency vs Thoroughness
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Not every nit should block. Separate &ldquo;must‑fix&rdquo; (correctness, safety, policy) from &ldquo;suggestions&rdquo; (style, alternatives). This preserves velocity while keeping bar high. Track contention patterns (files that spark repeated debate) and promote standards or utilities to reduce recurring friction.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Escalate only on substantive risk; resolve preference gaps with references to ADRs.</li>
              <li>Use fast‑follow issues for improvements that are non‑blocking but valuable.</li>
              <li>Align on service SLOs (availability, latency) so performance comments are grounded.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Track review latency and rework rate (comment threads reopened) as leading indicators.</li>
              <li>Adopt &ldquo;ownership heatmaps&rdquo; to route high‑risk changes to domain experts quickly.</li>
              <li>Publish examples of high‑quality PRs to set shared expectations (what good looks like).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Templates &amp; Checklists
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Provide PR templates that prompt authors for intent, risk areas, test evidence, rollout/rollback, and data changes (migrations, backfills). Generate contextual checklists (security, perf, accessibility) based on changed files and frameworks to reduce cognitive load and missed steps.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Auto‑suggest tests when critical paths change (auth, billing, PII access).</li>
              <li>Pre‑populate links to relevant ADRs and service runbooks (observability, SLOs).</li>
              <li>Highlight code smells and &ldquo;might break contracts&rdquo; warnings for reviewer focus.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Reviewer Routing &amp; Evidence
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Use CODEOWNERS and labels to route to domain experts (security, accessibility, database). Encourage video or screenshot attachments for UX changes, and paste relevant logs/traces for performance modifications. Summarize diffs with risk annotations (breaking API changes, concurrency touchpoints) to speed reviewer onboarding.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Tag migrations so CI enforces backup and back‑out checks automatically.</li>
              <li>Emit a &ldquo;contract change&rdquo; section when public types or API payloads shift.</li>
              <li>Capture reviewer decisions as notes for searchability (future maintainers benefit).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Adopt a single PR template; allow team‑specific add‑ons via sections, not forks.</li>
              <li>Automate &ldquo;must‑fix&rdquo; detection where possible (policy‑as‑code guardrails).</li>
              <li>Record decisions succinctly; link to ADRs when policy or architecture is impacted.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}