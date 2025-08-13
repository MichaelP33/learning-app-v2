import React from "react";

export const articleFormatVersion = 2;

export default function SchemaDesign() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Schema design is choosing tables, keys, and constraints that fit how the system writes and reads. It makes the model clear, safe to change, and efficient for its workload.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer data bugs and rollbacks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: no orphan orders after deploy.</li><li>Plain English: guardrails stop bad states.</li></ul>
              </li>
              <li>Faster pages and reports that match reality.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: inventory counts are accurate and quick.</li><li>Plain English: correct and quick answers.</li></ul>
              </li>
              <li>Quicker features with fewer surprises.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: add a field without breaking downstream.</li><li>Plain English: easier to evolve.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;City plan.&rdquo; Streets (keys) and zoning (constraints) keep traffic flowing and buildings safe; ad‑hoc paths cause jams and accidents.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Clear ownership and invariants → safer change.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer regressions on releases.</li></ul>
                  </li>
                  <li>Right shape for OLTP vs OLAP → speed where it matters.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fast apps, fast analytics.</li></ul>
                  </li>
                  <li>Keys and constraints → better data quality and audits.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: fewer bad rows.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Cross‑partition joins get hard → plan sharding early.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: choose shard keys that match access.</li></ul>
                  </li>
                  <li>Too generic schemas slow teams → over‑abstraction.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: model real entities, not &ldquo;one mega table&rdquo;.</li></ul>
                  </li>
                  <li>Constraint changes require careful rollouts → migration overhead.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: expand→migrate→contract.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;One schema can serve OLTP and analytics.&rdquo; → Impact: slow apps or reports → Fix: separate stores via ELT.
              </li>
              <li>&ldquo;Natural keys are enough.&rdquo; → Impact: brittle joins → Fix: use surrogate keys + unique on natural.
              </li>
              <li>&ldquo;Sharding later is cheap.&rdquo; → Impact: hot shards → Fix: pick shard keys and rebalancing plans early.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Primary / Foreign Key</strong> — identity and relationships. <em>Why it matters:</em> integrity and joins.</li>
              <li><strong>Unique Constraint</strong> — no duplicates. <em>Why it matters:</em> dedupe business identifiers.</li>
              <li><strong>Check Constraint</strong> — domain rules. <em>Why it matters:</em> prevent bad states at the edge.</li>
              <li><strong>Partitioning</strong> — intra‑database split. <em>Why it matters:</em> pruning and lifecycle control.</li>
              <li><strong>Sharding</strong> — inter‑database split. <em>Why it matters:</em> capacity and hotspot isolation.</li>
              <li><strong>SCD (Type 1/2)</strong> — history handling. <em>Why it matters:</em> analytics correctness.
              </li>
              <li><strong>Star/Snowflake</strong> — warehouse shapes. <em>Why it matters:</em> fast BI queries.</li>
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
              <li>Transactional apps (orders, payments, identity) needing correctness and speed.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: preventing duplicate charges.</li></ul>
              </li>
              <li>Analytics/BI needing wide scans and conformed dimensions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: revenue by cohort is consistent across dashboards.</li></ul>
              </li>
              <li>Multi‑tenant platforms with isolation and hot‑shard risks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: large tenant doesn&rsquo;t starve others.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>3NF for OLTP, stars for BI; constraints documented → fewer bugs.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer incidents, easier audits.</li></ul>
              </li>
              <li>Shard/partition keys align with access → stable p95 at scale.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: painless growth.</li></ul>
              </li>
              <li>Contracts and ownership clear → faster independent delivery.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer cross‑team stalls.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Numbers differ by report.&rdquo; → Likely cause: mixed OLTP/BI store → What to check: ELT and star models.</li>
              <li>&ldquo;Large tenants slow everyone else.&rdquo; → Likely cause: shard choice → What to check: key skew and rebalancing.</li>
              <li>&ldquo;Adding a field breaks other teams.&rdquo; → Likely cause: unclear contracts → What to check: ownership and views.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: multi‑store patterns; lineage and contracts for many consumers.</li>
              <li><strong>Non‑Tech Enterprise</strong>: compliance first; constraints and auditability.</li>
              <li><strong>Startups</strong>: keep it simple; model reality, shard only when metrics demand.
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
              <li>Right store for the job: 3NF for apps, stars for BI.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: tidy tables for writes; wide tables for reads.</li></ul>
              </li>
              <li>Choose shard/partition keys that match access.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: put frequent neighbors together.</li></ul>
              </li>
              <li>Document constraints and ownership; evolve with expand→migrate→contract.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: safer change and fewer surprises.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Check keys, FKs, and constraints encode business rules; spot over‑generic tables.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: unique on natural keys; surrogate PKs; clear relationships.</li></ul>
              </li>
              <li>Surface cross‑partition operations; propose key changes or projections.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: shard‑aware entry points; rebalancing plan.</li></ul>
              </li>
              <li>Recommend BI views or stars for reporting consumers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Schema lints for missing PK/FK/unique/check; naming consistency.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: invalid states blocked by default.</li></ul>
              </li>
              <li>Migration cookbooks and simulators (expand→backfill→cutover) with idempotent steps.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: safer rollouts and rollbacks.</li></ul>
              </li>
              <li>Projection generators for analytics views with refresh schedules.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Hot shard</strong>: add tenant hash or move big tenants; backfill with checks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: spreads load without downtime.</li></ul>
              </li>
              <li><strong>Undeclared duplicates</strong>: add unique on natural keys; reconcile and merge.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores integrity for downstream.</li></ul>
              </li>
              <li><strong>Slow BI</strong>: materialize stars; index join keys; document refresh budget.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: fast, explainable dashboards.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We design tables and keys to fit writes vs reads, enforce rules with constraints, and evolve with safe migrations—so features stay fast, numbers stay right, and growth stays painless.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
