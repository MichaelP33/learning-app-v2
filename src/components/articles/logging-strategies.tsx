import React from "react";

export const articleFormatVersion = 2;

export default function LoggingStrategies() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">
              Logging strategy is how you consistently capture, structure, and manage events so teams can quickly find, trust, and act on signals across systems.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Fast incident triage from one place.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: pivot logs by <code>traceId</code> to see the full request path.</li>
                  <li>Plain English: one breadcrumb trail, not ten tabs.</li>
                </ul>
              </li>
              <li>
                Fewer false alarms and better alerts.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: <code>WARN</code> vs <code>ERROR</code> policy avoids paging on noise.</li>
                  <li>Plain English: only get pinged when it matters.</li>
                </ul>
              </li>
              <li>
                Predictable costs for observability.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: sampling and retention tiers per route and level.</li>
                  <li>Plain English: keep the signal, cut the bill.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Flight recorder&rdquo; for your app: consistent, searchable events that reconstruct any journey.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Structured logs → faster MTTR and better trend analysis.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>Payoff: shorter incidents and clearer reports.</li>
                    </ul>
                  </li>
                  <li>
                    Correlation IDs → end‑to‑end visibility across services.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>Payoff: no lost handoffs between teams.</li>
                    </ul>
                  </li>
                  <li>
                    Sampling tiers → cost predictability.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>Payoff: sustainable observability spend.</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Over‑logging → storage and alert fatigue.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>Tip: cap DEBUG in prod and focus on hotspots.</li>
                    </ul>
                  </li>
                  <li>
                    Unredacted fields → compliance risk.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>Tip: centralize redaction in one utility.</li>
                    </ul>
                  </li>
                  <li>
                    High‑cardinality labels → slow queries.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                      <li>Tip: hash or bucket user identifiers.</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Log everything at ERROR.&rdquo; → Impact: pager fatigue → Fix: level policy and burn‑rate paging.</li>
              <li>&ldquo;Free‑text logs are fine.&rdquo; → Impact: slow search → Fix: structured JSON with a shared schema.</li>
              <li>&ldquo;Sampling loses all detail.&rdquo; → Impact: fear of trimming → Fix: keep 100% of ERROR, sample DEBUG.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Structured logging</strong> — JSON key/values. <em>Why it matters:</em> enables precise filtering and joins.</li>
              <li><strong>Correlation IDs</strong> — requestId/traceId/spanId. <em>Why it matters:</em> links signals across services.</li>
              <li><strong>Cardinality</strong> — unique value count. <em>Why it matters:</em> drives index size and query cost.</li>
              <li><strong>Sampling</strong> — keep some events. <em>Why it matters:</em> balances cost and visibility.</li>
              <li><strong>Retention tiers</strong> — storage windows. <em>Why it matters:</em> preserve audit vs debug data appropriately.</li>
              <li><strong>PII redaction</strong> — protect sensitive fields. <em>Why it matters:</em> reduces legal/compliance risk.</li>
              <li><strong>Log schema</strong> — shared field contract. <em>Why it matters:</em> consistency across teams/tools.</li>
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
              <li>
                Incident response and on‑call.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: jump from alert to correlated events by <code>traceId</code>.</li>
                </ul>
              </li>
              <li>
                Compliance reviews and audits.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: prove PII redaction with sample queries and tests.</li>
                </ul>
              </li>
              <li>
                Cost governance for observability.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Example: sampling/retention dashboards tied to traffic.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                One shared schema and logger across repos → consistent dashboards.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: faster debugging and onboarding.</li>
                </ul>
              </li>
              <li>
                Level and sampling policies with tests → predictable spend.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: no end‑of‑month surprises.</li>
                </ul>
              </li>
              <li>
                Correlation everywhere → logs, traces, errors link seamlessly.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: one narrative from alert to fix.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;We can&rsquo;t trace a user&rsquo;s journey.&rdquo; → Likely cause: missing correlation → What to check: request/trace ID propagation.</li>
              <li>&ldquo;Our logs cost exploded.&rdquo; → Likely cause: verbose DEBUG in prod → What to check: sampling/retention policies.</li>
              <li>&ldquo;Privacy flagged our logs.&rdquo; → Likely cause: PII in payloads → What to check: centralized redaction and tests.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: strict schemas, SIEM integration, and fine‑grained retention tiers.</li>
              <li><strong>Non‑Tech Enterprise</strong>: turnkey dashboards, clear policies; heavy compliance emphasis.</li>
              <li><strong>Startups</strong>: start structured early; simple schema and cost guardrails first.</li>
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
              <li>
                Use one structured logger with a shared schema.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Plain English: same fields everywhere.</li>
                </ul>
              </li>
              <li>
                Propagate correlation IDs across services by default.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Plain English: connect all the dots.</li>
                </ul>
              </li>
              <li>
                Enforce level, sampling, and retention policies.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400">
                  <li>Payoff: clear signal, controlled spend.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Diff log schemas and examples in PRs; flag added PII and high‑cardinality fields.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: required fields, level policy, redaction.</li></ul>
              </li>
              <li>
                Simulate sampling/retention impacts from the diff.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: cost delta, ERROR kept 100%.</li></ul>
              </li>
              <li>Generate dashboards/queries updates for changed fields.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Central logging utility with typed <code>safeFields</code> and <code>redact</code> helpers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: prevent leaks by design.</li></ul>
              </li>
              <li>
                CI checks for PII, level misuse, and missing correlation headers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fewer regressions.</li></ul>
              </li>
              <li>
                Runtime flags to temporarily raise verbosity for a cohort.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: targeted diagnostics.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <strong>Incident spike</strong>: raise sampling for affected routes; add temporary DEBUG.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: rich context without runaway cost.</li></ul>
              </li>
              <li>
                <strong>Compliance audit</strong>: export redaction proofs and schema docs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: quick, credible evidence.</li></ul>
              </li>
              <li>
                <strong>Cost overrun</strong>: identify hot fields/labels; lower verbosity; hash IDs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores budget without losing signal.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We treat logs as structured data with correlation everywhere, enforce level and sampling policies, and automate redaction—so incidents resolve faster, audits pass cleanly, and costs stay predictable.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
