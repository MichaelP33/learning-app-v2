import React from "react";

export default function AutomatedChecks() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
          Key Concepts
        </h2>
        <div className="space-y-6">
          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Linters, Formatters, and Static Analysis
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>
                <strong>Linters</strong>: enforce code conventions and detect common bugs (unused vars, shadowed names, unsafe patterns). Keep rulesets aligned with team standards and CI.
              </li>
              <li>
                <strong>Formatters</strong>: eliminate style noise; run pre‑commit to minimize diff churn and reviewer fatigue.
              </li>
              <li>
                <strong>Static analyzers</strong>: type checkers, dependency auditors, and dead‑code scanners reduce review load by catching low‑level issues early.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Test Suites &amp; Coverage
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              A layered test pyramid (unit, integration, contract, e2e) provides fast feedback and strong signal. Contract tests across services stabilize releases by validating request/response schemas and error semantics.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Prioritize tests for critical paths: authentication, billing, data migrations, and caching layers.</li>
              <li>Use mutation testing sparingly to detect weak assertions in high‑risk modules.</li>
              <li>Track coverage qualitatively: ensure essential scenarios are exercised, not just lines.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              SAST/DAST &amp; Dependency Health
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Security scanners (SAST/DAST) and SBOM/dependency checks surface known vulnerabilities and insecure patterns. Integrate with policy gates for high‑severity findings and provide remediation guidance.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Fail on critical findings; auto‑open issues with references and upgrade paths.</li>
              <li>Continuously monitor for newly disclosed CVEs; pin and audit transitive dependencies.</li>
              <li>Scan container images and IaC templates for misconfigurations (open ports, wide roles).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Run lint/format on pre‑commit; run type checks and unit tests on push.</li>
              <li>Gate merges on contract tests and high‑severity security findings.</li>
              <li>Keep rule configurations versioned and documented to reduce false positives.</li>
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
              Faster, More Reliable Reviews
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Automated checks remove low‑level noise from human reviews, letting reviewers focus on correctness, design, and risk. This reduces cycle time and improves merge confidence.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Lower rework rates as basic defects are caught before review.</li>
              <li>Higher change success rate (fewer rollbacks) through consistent gates.</li>
              <li>Onboarding speed increases when tooling teaches standards via failures and fixes.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Policy‑as‑Code Guardrails
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Encode organizational standards as checks: performance budgets, accessibility rules, secret detection, and dependency policies. Turn recurring review comments into enforceable, explainable automation.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Make exceptions explicit and time‑boxed with approvals and context.</li>
              <li>Publish policy docs; link failure messages to remediation guides.</li>
              <li>Measure false‑positive rates and tune rules to maintain developer trust.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Centralize rule configs; PRs to change policy must include rationale and impact.</li>
              <li>Alert on aging failures; route to owners automatically using labels and CODEOWNERS.</li>
              <li>Invest in pre‑commit hooks to shift feedback left and shorten loops.</li>
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
              Failure Triage &amp; Routing
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              When checks fail, developers need clear signal and next steps. Group failures, dedupe flakiness, and route to the right owner with context. Provide &ldquo;why it matters&rdquo; and &ldquo;how to fix&rdquo; inline.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Collapse duplicate errors; highlight first‑order cause (e.g., type error causing many test failures).</li>
              <li>Attach links to failing tests, logs, traces, and relevant code areas.</li>
              <li>Offer one‑click fix PRs for known issues (formatter, import ordering, dependency pin).</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Developer Experience
            </h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Integrate checks with the editor for immediate feedback; surface CI output in context; and provide commands to reproduce locally. Lower the cost of doing the right thing.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Show failing rule descriptions with example diffs and suggested code edits.</li>
              <li>Cache dependencies and test artifacts to keep feedback loops fast.</li>
              <li>Allow temporary, auditable waivers for exceptional cases with expiration.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-2">
              <li>Adopt a standard CI layout: lint, typecheck, unit, integration/contract, e2e, security.</li>
              <li>Tag failures with owners; notify via chat with roll‑up summaries instead of spam.</li>
              <li>Track mean time to green and flake rates; prioritize stability work accordingly.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
