import React from "react";

export default function DevopsPhilosophy() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Mindset over tooling
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              DevOps is a socio-technical approach that optimizes the path from
              idea to customer value. Culture, collaboration, and fast feedback
              loops are primary; tools amplify them.
            </p>
          </div>
          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              CALMS
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                <span className="font-medium">Culture</span>: trust, ownership,
                blameless learning.
              </li>
              <li>
                <span className="font-medium">Automation</span>: CI/CD,
                repeatable environments, guardrails.
              </li>
              <li>
                <span className="font-medium">Lean</span>: reduce batch size,
                limit WIP, flow efficiency.
              </li>
              <li>
                <span className="font-medium">Measurement</span>: DORA metrics,
                SLOs, business outcomes.
              </li>
              <li>
                <span className="font-medium">Sharing</span>: internal
                platforms, runbooks, postmortems.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Core practices
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Trunk-based development with short-lived branches.</li>
              <li>
                Continuous Integration: fast, deterministic, and visible builds.
              </li>
              <li>
                Continuous Delivery: automated, low-risk releases; progressive
                delivery where needed.
              </li>
              <li>Infrastructure as Code and immutable artifacts.</li>
              <li>
                Observability: logs, metrics, traces, and user-experience
                telemetry.
              </li>
              <li>
                Blameless incident response and postmortems; error budgets for
                release risk.
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
              Outcome improvements
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Higher deployment frequency and shorter lead time for changes.
              </li>
              <li>
                Lower change-failure rate and faster MTTR via better rollback
                and observability.
              </li>
              <li>
                Reduced cost of delay and tighter alignment to customer value.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Ways of working
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Cross-functional, product-aligned teams with clear ownership.
              </li>
              <li>
                Platform teams providing paved roads and self-service golden
                paths.
              </li>
              <li>
                Compliance and security as code: policy-as-code, automated
                checks.
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
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Delivery pipeline
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Standard CI with type checks, unit tests, and accessibility
                linting.
              </li>
              <li>
                CD with preview environments per change and automated canary
                deploys.
              </li>
              <li>Feature flags for safe launches and quick rollback.</li>
            </ul>
          </div>
          <div className="border-l-4 border-fuchsia-500 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Reliability & operations
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                SLOs and error budgets guiding release pace and hardening work.
              </li>
              <li>
                Unified telemetry dashboards and alerts tuned to user impact.
              </li>
              <li>
                Runbooks, on-call rotation, and blameless postmortems for
                incidents.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Developer experience
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Paved-road templates for services, jobs, and frontends.</li>
              <li>
                Self-serve environments and golden paths reduce handoffs and
                queue time.
              </li>
              <li>
                Documentation-as-code and internal demos for knowledge sharing.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
