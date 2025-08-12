import React from "react";

export default function CodeQualityGates() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-600 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Thresholds & Signals
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Quality gates are automated checks that convert quality signals into decisions (pass, warn, fail). Signals include tests (coverage, mutation score), static analysis (lint, SAST), performance budgets (p95 latency), and operational checks (bundle size, accessibility). Thresholds must be context‑aware: what is acceptable for a prototype may be unacceptable for a payment service.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Gate on deltas for PRs (changed files) and on full scans nightly for the main branch.</li>
              <li>Use severity tiers to map findings to outcomes (block critical, warn high, log medium).
              </li>
              <li>Prefer explicit budgets over vague &ldquo;be fast&rdquo; or &ldquo;write tests&rdquo; guidance.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-600 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Risk‑based Exceptions
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Exceptions are safety valves, not back doors. Use short‑lived waivers with explicit owners, rationale, and expiry. Replace blanket &ldquo;skip&rdquo; flags with narrowly scoped suppressions (path, rule, time‑bound). Record compensating controls (manual testing, feature flags) and track exceptions on dashboards to avoid invisible erosion.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Document who, why, and until when (no permanent waivers).
              </li>
              <li>Auto‑notify on approaching expiry; require justification to renew.
              </li>
              <li>Audit trails link exceptions to commits, incidents, and risk registers.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Progressive Hardening
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Gates should evolve with maturity. Start with guidance (warnings), then soft gates (non‑blocking checks visible in PRs), then hard gates for critical signals. Tie hardening to evidence (incident learnings, repeated regressions) and communicate rollouts with clear migration paths (tooling support, examples).
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a roadmap for thresholds by domain (e.g., security first, then performance).
              </li>
              <li>Run &ldquo;fix‑it&rdquo; sprints to pay down debt before flipping hard gates.
              </li>
              <li>Measure friction (time to green) and tune rules to maintain flow.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Define &ldquo;quality budgets&rdquo; per repo (coverage delta, p95 latency, lint error count).
              </li>
              <li>Adopt &ldquo;ratchet only&rdquo; for deltas: PRs cannot reduce existing quality baselines.
              </li>
              <li>Track exception count and age as leading indicators of quality drift.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Business & Team Impact
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes & Alignment
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Quality gates create a shared definition of &ldquo;ready to ship&rdquo; across engineering, product, and security. They compress feedback loops (issues surface in PRs) and reduce surprises in production. The risk is over‑gating: blocking low‑risk changes for cosmetic issues. Balance by scoping gates to changed files and mapping severity to outcomes.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Fewer rollbacks and hotfixes; higher change success rate.
              </li>
              <li>Predictable delivery (less churn in QA/UAT) with clearer acceptance criteria.
              </li>
              <li>Auditable trail of checks for compliance without manual sign‑offs.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Operating Model & Ownership
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Teams own signals for their repos; platform curates common gates; security defines org‑wide policies. Product agrees on risk thresholds (e.g., accessibility budgets, performance SLOs) and participates in exception reviews. Changes to gates follow an RFC process with trial periods and opt‑in phases to build confidence.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Establish a change advisory for gate updates (representatives from key teams).
              </li>
              <li>Expose &ldquo;time to green&rdquo; and flakiness metrics; fix tools before raising bars.
              </li>
              <li>Tie hardening to real incidents (learning‑driven policy, not dogma).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Start with soft gates (warnings) and flip to hard gates after 2&ndash;3 stable iterations.
              </li>
              <li>Scope gates to changed code; run full scans nightly on the default branch.
              </li>
              <li>Expire exceptions automatically; require a remediation plan for renewals.
              </li>
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
          <div className="border-l-4 border-cyan-600 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Enforcement vs. Guidance
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Implement gates as code and execute in CI. For non‑critical categories (style), prefer guidance (warnings, autofix). For critical categories (security, data integrity), enforce hard failures with clear remediation guidance. Provide developers with inline annotations, links to docs, and one‑click autofixes where possible.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Map checks to status labels (pass/warn/fail) that PRs can understand at a glance.
              </li>
              <li>Use SARIF outputs to aggregate results across tools and repositories.
              </li>
              <li>Gate on deltas for PRs; evaluate full thresholds on scheduled pipelines.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Practical Mechanics
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-2">
              Adopt a &ldquo;quality profile&rdquo; per repo (JSON/YAML) that defines thresholds and exceptions. Use reusable CI templates to standardize across teams while allowing overrides for context (libraries vs. services). Integrate notifications into team channels and require exception justification as part of PR templates.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Expose dashboards for budgets (coverage delta, p95s, lint errors) by repo/service.
              </li>
              <li>Persist historical trends to guide hardening decisions (ratchet up with evidence).
              </li>
              <li>Make &ldquo;time to green&rdquo; a tracked metric to ensure gates help, not hinder, delivery.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship a starter profile and iterate with teams (opt‑in &rarr; default &rarr; mandatory).
              </li>
              <li>Use &ldquo;exception budgets&rdquo; per team to prevent waiver sprawl.
              </li>
              <li>Calibrate budgets quarterly based on incidents and performance data.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
