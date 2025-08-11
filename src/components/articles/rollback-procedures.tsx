import React from "react";

export default function RollbackProcedures() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Reversible Deployments</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Design rollouts to be safely undone (forward‑only DB changes and idempotent operations reduce irreversible states).
              </li>
              <li>
                Keep artifacts immutable and versioned; pin infra dependencies so rollback reproduces the prior state faithfully.
              </li>
              <li>
                Practice rollbacks in staging regularly (rehearsal reveals missing scripts and hidden coupling before it hurts customers).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Blue/Green and Canary</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Blue/Green keeps two environments; switch traffic atomically (DNS or load balancer flip) for instant rollback.
              </li>
              <li>
                Canary releases shift a small percentage first (1–5%) to detect regressions early with minimal blast radius.
              </li>
              <li>
                Both amplify observability needs (you must see errors, latency, and saturation quickly to trigger rollback).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Database Change Strategies</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Prefer forward‑only migrations (additive schema changes) with toggled reads/writes; avoid destructive changes under load.
              </li>
              <li>
                Use dual‑write/dual‑read patterns temporarily (write to old and new tables) to migrate safely (short‑lived to limit cost).
              </li>
              <li>
                Capture backfill and reconciliation steps; ensure rollback returns both code and data access to a coherent version.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship behind flags; use canaries first, then expand if signals stay green.</li>
              <li>Keep a tested rollback script per service and per migration batch.</li>
              <li>Version assets, infra, and migrations; pin everything for determinism.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business & Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk, Cost, and Customer Trust</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Faster reversals shrink incident duration (minutes instead of hours) and reduce revenue risk during peak traffic.
              </li>
              <li>
                Well‑rehearsed playbooks lower stress and cognitive load (teams respond more calmly under pressure).
              </li>
              <li>
                Transparent post‑incident changelogs and RCAs rebuild trust (customers value clear, timely explanations).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Automated Rollback Triggers</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Define SLO‑linked thresholds (error rate, p95 latency) that auto‑flip traffic back when breached.
              </li>
              <li>
                Implement multi‑signal confirmation to avoid flapping (combine metrics, logs, and synthetic checks before triggering).
              </li>
              <li>
                Notify stakeholders on trigger: who approved, what version, why reverted (&ldquo;single source of truth&rdquo; for audits).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Blast Radius Thinking</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Limit simultaneous risk by staggering rollouts (region by region) and isolating experiments from core flows.
              </li>
              <li>
                Use dark launches (serve responses but hide UI) to validate backend performance before exposing users.
              </li>
              <li>
                Keep a &ldquo;traffic shed&rdquo; plan to reduce load quickly while diagnosing (rate limits or feature disables).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Tie rollback triggers to SLOs; pause expansion when error budgets dip.</li>
              <li>Publish a one‑page &ldquo;How to rollback&rdquo; per service with owners and commands.</li>
              <li>Rehearse quarterly; log time‑to‑detect and time‑to‑restore as KPIs.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Playbooks, Checklists, and Tooling</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Generate per‑service rollback runbooks with exact commands (reduce improvisation during incidents).
              </li>
              <li>
                Scaffold canary policies and health checks; auto‑wire alerts to on‑call and stakeholder channels.
              </li>
              <li>
                Provide a &ldquo;one‑click revert&rdquo; UI for safe flips when preconditions pass (version availability, migrations state).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Database Migration Guardrails</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Enforce forward‑only changes by default; require explicit review for destructive operations.
              </li>
              <li>
                Provide dual‑write templates with metrics and automatic teardown jobs after stabilization (avoid long‑term cost).
              </li>
              <li>
                Validate backfill scripts against production‑like data (catch timeouts and hot partitions early).
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship canary and blue/green templates; make rollbacks first‑class operations.</li>
              <li>Treat rollback rehearsal as a release quality gate in staging.</li>
              <li>Automate runbook creation and audit logs for every traffic flip and revert.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
