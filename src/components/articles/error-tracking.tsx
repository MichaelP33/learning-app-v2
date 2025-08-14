import React from "react";

export const articleFormatVersion = 2;

export default function ErrorTracking() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain‑English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Error tracking groups, prioritizes, and routes application errors so the right team fixes the right issue quickly with full context.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Less paging noise; more actionable alerts.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: dedupe by fingerprint; route by owner.</li><li>Plain English: only wake people for real issues.</li></ul></li>
              <li>Faster root cause with links to releases, traces, and logs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: issue shows &ldquo;introduced in release X&rdquo;.</li><li>Plain English: fix what changed.</li></ul></li>
              <li>Clear &ldquo;when to page&rdquo; policy via SLOs and burn rate.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: page only when budget is burning fast.</li><li>Plain English: fewer false alarms.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Air traffic control for exceptions&rdquo;: radar (ingest), controllers (routing), and flight logs (context) keep skies safe.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Grouping reduces noise → better focus.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer pager rotations for non‑issues.</li></ul></li>
                  <li>Release linking speeds regression fixes.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: decisive rollbacks.</li></ul></li>
                  <li>SLO burn‑rate paging aligns with impact.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: alert hygiene and trust.</li></ul></li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Poor fingerprints collapse distinct bugs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: customize per framework.</li></ul></li>
                  <li>Missing context leads to ping‑pong routing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: standardize env/service/trace/user fields.</li></ul></li>
                  <li>PII leaks create legal risk.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: centralized redaction and tests.</li></ul></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Every error should page.&rdquo; → Impact: burnout → Fix: page on SLO burn, digest the rest.</li>
              <li>&ldquo;Stack alone is enough.&rdquo; → Impact: slow triage → Fix: add release, feature flag, and user context.</li>
              <li>&ldquo;We can ignore flaky errors.&rdquo; → Impact: hidden risk → Fix: mark flaky but trend and cap noise.</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Fingerprint</strong> — grouping signature. <em>Why it matters:</em> controls noise vs insight.</li>
              <li><strong>Release health</strong> — errors by version. <em>Why it matters:</em> find regressions fast.</li>
              <li><strong>Crash‑free rate</strong> — session stability. <em>Why it matters:</em> customer‑centric KPI.</li>
              <li><strong>Burn rate</strong> — SLO consumption speed. <em>Why it matters:</em> when to page.</li>
              <li><strong>Ownership rules</strong> — routing map. <em>Why it matters:</em> sends work to the right team.</li>
              <li><strong>PII redaction</strong> — sensitive data removal. <em>Why it matters:</em> legal/compliance safety.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Where it shows up</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Mobile/web app stability and crash rates.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: releases with crash spikes auto‑flagged.</li></ul></li>
              <li>Service reliability across regions and tiers.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: cohorts localize a faulty rollout.</li></ul></li>
              <li>On‑call fatigue and incident churn.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: burn‑rate paging reduces noise.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Clear ownership for each issue type → fast routing.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer handoffs.</li></ul></li>
              <li>Release annotations on every deploy → quick regressions.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: time‑to‑rollback drops.</li></ul></li>
              <li>Digest summaries for low‑impact noise → fewer pages.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: healthier on‑call.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Our app keeps crashing.&rdquo; → Likely cause: release regression → What to check: issue spike by version.</li>
              <li>&ldquo;We&rsquo;re paged constantly.&rdquo; → Likely cause: noisy routing → What to check: SLO burn‑rate rules.</li>
              <li>&ldquo;Nobody owns this error.&rdquo; → Likely cause: missing ownership → What to check: code owner mapping.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: tight ownership, SARIF/PCI/SOX alignment, detailed dashboards.</li>
              <li><strong>Non‑Tech Enterprise</strong>: clear pager rules; low‑noise defaults; simple workflows.</li>
              <li><strong>Startups</strong>: quick setup and essential metrics; grow guardrails later.</li>
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
              <li>Standardize context and fingerprints.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: same shape for every error.</li></ul></li>
              <li>Link errors to releases, traces, and logs.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: find what changed quickly.</li></ul></li>
              <li>Page on burn‑rate; digest the rest.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: healthier on‑call.</li></ul></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Check tracker init for required context/redaction.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: service, env, userId, traceId present.</li></ul></li>
              <li>Validate burn‑rate SLO rules and owners updated with new code areas.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: owner map, escalation path.</li></ul></li>
              <li>Ensure release annotations happen in CI for deploys.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Wrapper SDK with default redaction and context.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: fewer leaks and missing fields.</li></ul></li>
              <li>Auto‑route by file path and service map; fallbacks to a triage team.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: faster assignment.</li></ul></li>
              <li>Pager rules generated from SLO templates by journey.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Regression spike</strong>: identify introducing release; link to PR; rollback or patch.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: quick impact reduction.</li></ul></li>
              <li><strong>Noise burst</strong>: tune fingerprints; throttle to digests; keep burn‑rate paging only.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores signal.</li></ul></li>
              <li><strong>Compliance review</strong>: export redaction proof and owner mappings.<ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: audit readiness.</li></ul></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We standardize error context and grouping, link issues to releases and traces, and page on user‑impact—so teams cut noise, find regressions fast, and protect customer experience.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
