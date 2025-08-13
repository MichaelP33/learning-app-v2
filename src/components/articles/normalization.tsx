import React from "react";

export const articleFormatVersion = 2;

export default function Normalization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Plain-English definition
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              Normalization organizes data so each fact lives in exactly one place with stable keys and explicit references. It removes duplication that causes update bugs while keeping writes predictable.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Why users feel it
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Fewer contradictory numbers across pages.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>Example: order totals match in checkout, receipts, and dashboards.</li>
                  <li>Plain English: one source of truth prevents &ldquo;two different truths&rdquo;.</li>
                </ul>
              </li>
              <li>
                Faster writes and safer edits under load.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>Example: updating a customer address changes one row, not many copies.</li>
                  <li>Plain English: fix it once and it&rsquo;s fixed everywhere.</li>
                </ul>
              </li>
              <li>
                Clearer relationships and fewer weird edge cases.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400 space-y-1">
                  <li>Example: products connect to categories through a simple link table.</li>
                  <li>Plain English: tidy shelves make things easy to find and change.</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Sticky mental model
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;Filing cabinet.&rdquo; Each folder (table) holds one kind of document (entity). If two folders contain the same paper, someone will forget to update one. Normalization keeps one official copy and adds pointers.
            </p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Strengths &amp; limits (trade‑offs)
            </h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Removes update/insert/delete anomalies → fewer production bugs.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: no more fixing the same fact in three places.</li></ul>
                  </li>
                  <li>
                    Predictable writes and smaller rows → better OLTP performance.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: lower p95 on hot write paths.</li></ul>
                  </li>
                  <li>
                    Clear ownership and keys → easier evolution and audits.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: everyone knows which table is the boss.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>
                    Read paths can need many joins → slower analytics and reports.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: serve analytics from a denormalized warehouse.</li></ul>
                  </li>
                  <li>
                    Over‑normalization fragments aggregates → awkward queries.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: precompute materialized views for hot reads.</li></ul>
                  </li>
                  <li>
                    Strict constraints raise migration overhead → plan change steps.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: use expand→migrate→contract with backfills.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Common misunderstandings
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                &ldquo;3NF makes queries fast.&rdquo; → Impact: slow reports due to many joins → Fix: normalize for correctness; denormalize/report in a warehouse.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: tidy storage; separate shelves for reporting.</li></ul>
              </li>
              <li>
                &ldquo;We can denormalize later with no cost.&rdquo; → Impact: drift and complex sync → Fix: plan CDC/materialized views up front.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: duplication needs a janitor job.</li></ul>
              </li>
              <li>
                &ldquo;Surrogate keys replace natural keys.&rdquo; → Impact: duplicate entities → Fix: keep unique constraints on business identifiers.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: still tag real‑world IDs as unique.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Related Glossary (terms &amp; tech)
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>1NF / 2NF / 3NF</strong> — normalization steps. <em>Why it matters:</em> eliminate repeating groups and dependent facts.</li>
              <li><strong>Functional Dependency</strong> — attribute depends on key. <em>Why it matters:</em> proves 2NF/3NF.
              </li>
              <li><strong>Update/Insert/Delete Anomaly</strong> — duplicate‑driven bugs. <em>Why it matters:</em> signals poor design.
              </li>
              <li><strong>Surrogate Key</strong> — stable generated id. <em>Why it matters:</em> simplifies joins and migrations.
              </li>
              <li><strong>Natural Key</strong> — business identifier. <em>Why it matters:</em> enforce uniqueness and dedupe.
              </li>
              <li><strong>Denormalization</strong> — intentional duplication. <em>Why it matters:</em> speed reads with sync cost.
              </li>
              <li><strong>Materialized View</strong> — precomputed result. <em>Why it matters:</em> fast analytics from normalized source.
              </li>
              <li><strong>CDC (Change Data Capture)</strong> — stream changes. <em>Why it matters:</em> keeps downstream copies fresh.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business &amp; Team Impact
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Checkout totals, taxes, discounts (single source of truth).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: no price mismatches between cart and invoice.</li></ul>
              </li>
              <li>
                Customer profiles and permissions (no partial duplicates).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: merging accounts without losing history.</li></ul>
              </li>
              <li>
                Product catalogs and references (stable keys across services).
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: same SKU across search, PDP, and fulfillment.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Clear entity boundaries and keys → fewer defects.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: lower change‑failure rate.</li></ul>
              </li>
              <li>
                3NF for OLTP, denormalized stars for BI → fast both ways.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: snappy apps and trustworthy dashboards.</li></ul>
              </li>
              <li>
                CDC or jobs to sync derived copies → no silent drift.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer &ldquo;why does report disagree?&rdquo; escalations.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Numbers don&rsquo;t match across pages.&rdquo; → Likely cause: duplicated facts → What to check: update anomalies and missing unique constraints.</li>
              <li>&ldquo;Editing one thing breaks another.&rdquo; → Likely cause: transitive dependency → What to check: 3NF violations and foreign key design.</li>
              <li>&ldquo;Reports don&rsquo;t add up.&rdquo; → Likely cause: stale denormalized copies → What to check: CDC lag and view refresh jobs.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: strict keys and CDC to many downstream systems; audit every denormalized sink.</li>
              <li><strong>Non‑Tech Enterprise</strong>: compliance and MDM; prioritize dedupe and lineage for PII.
              </li>
              <li><strong>Startups</strong>: start normalized, denormalize only proven hotspots with metrics.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Cursor Implementation
        </h2>
        <div className="space-y-6">
          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">TL;DR (AM-friendly)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Keep one truth per fact; add pointers for relationships.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: one folder, many bookmarks.</li></ul>
              </li>
              <li>Use 3NF for apps; denormalized views for reports.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: tidy storage, fast read copies.</li></ul>
              </li>
              <li>Automate sync (CDC/views) so copies don&rsquo;t drift.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: scheduled refresh keeps reports honest.</li></ul>
              </li>
              <li>Review migrations in steps with backfills and rollbacks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: change the plane one bolt at a time.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Explain dependency chains; flag 2NF/3NF violations and duplicated attributes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: one fact, one table; foreign keys for relationships.</li></ul>
              </li>
              <li>Propose unique constraints and surrogate keys; suggest CDC or views for read shapes.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: merge keys clear; downstream copies documented.</li></ul>
              </li>
              <li>Simulate join costs vs materialized views for target reports (evidence‑based choice).</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>CI lint for multi‑valued columns, missing FKs, and duplicated fields across tables.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: catches anomalies before prod.</li></ul>
              </li>
              <li>Migration generator with expand→backfill→cutover recipes and idempotent steps.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: safer releases and rollbacks.</li></ul>
              </li>
              <li>View/refresh scheduler and drift detector for denormalized sinks.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Contradictory numbers</strong>: reconcile sources; add uniqueness and fix duplication at origin.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: stops drift at the source, not in ETL.</li></ul>
              </li>
              <li><strong>Slow reports</strong>: create materialized views; schedule refresh; index join keys.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: shifts cost off hot paths.</li></ul>
              </li>
              <li><strong>Hot migration</strong>: shadow tables + dual‑write; backfill in chunks; verify with sampling.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: safe change with rollback lines.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">
              &ldquo;We keep one truth per fact with clear keys, serve apps from 3NF, feed reports from views, and automate sync and migrations—so numbers match, writes stay fast, and change is safe.&rdquo;
            </p>
          </div>
        </div>
      </section>
    </article>
  );
}
