import React from "react";

export default function AuthenticationAuthorization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">OAuth 2.0 and OpenID Connect (OIDC)</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              OAuth 2.0 delegates authorization; OIDC layers authentication (who the user is) via ID Tokens. For web/mobile, prefer Authorization Code with PKCE; for SPAs with a backend, store tokens in secure, HTTP‑only cookies. Use the <code>Authorization: Bearer &lt;jwt&gt;</code> scheme between clients and resource servers.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Rely on the provider&rsquo;s JWKS to validate signatures; cache keys by <code>kid</code> and rotate safely.</li>
              <li>Verify <code>iss</code>, <code>aud</code>, <code>exp</code>, <code>nbf</code>, and <code>scope</code> or <code>roles</code> claims on every request.</li>
              <li>Keep ID Tokens for identity and profile; use Access Tokens for API authorization checks.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">JWT scopes, claims, and least privilege</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Design scopes that mirror actions on resources (e.g., <code>orders:read</code>, <code>orders:write</code>) rather than job titles. Encode tenant, org, and feature flags as vetted custom claims. Apply least privilege: issue the minimum scopes needed per flow.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Favor additive scopes over broad <code>admin</code>; compose multiple narrow scopes to grant access.</li>
              <li>Map routes to scopes in a single policy module; avoid duplicating checks in every handler.</li>
              <li>Re‑authorize sensitive actions (step‑up) for recent authentication requirements.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Token lifetime, rotation, and revocation</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Keep Access Tokens short‑lived (e.g., 5–15 minutes). Use Refresh Tokens to obtain new Access Tokens; rotate refresh tokens on use and revoke the chain on theft signals. Prefer server‑side sessions for browsers when possible.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Implement Refresh Token rotation (RTR) with a <code>jti</code> identifier and a rolling allowlist.</li>
              <li>Honor <code>exp</code>/<code>iat</code> and deny unacceptable clock skew; use leeway prudently.</li>
              <li>Invalidate tokens server‑side on password change, policy updates, or device revocation.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Machine‑to‑machine authorization</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              For service‑to‑service calls, use OAuth 2.0 Client Credentials with signed JWTs or mutual TLS. Scope tokens narrowly to the target resource (<code>aud</code>) and specific operations. Rotate client secrets and signing keys regularly.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prefer asymmetric keys (private/public) for issuance and verification across services.</li>
              <li>Tag tokens with environment, tenant, and privilege level; reject tokens outside expected <code>aud</code>.</li>
              <li>Rate‑limit token introspection and cache allow/deny decisions for performance.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Use Authorization Code + PKCE for user login; store tokens in HTTP‑only cookies to mitigate XSS.</li>
              <li>Centralize scope‑to‑route mapping and test it; add negative tests for privilege escalation.</li>
              <li>Keep Access Tokens short‑lived and rotate Refresh Tokens; monitor anomalous refresh patterns.</li>
              <li>Use mTLS or JWT‑based Client Credentials for internal service calls with narrow scopes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-green-500 bg-green-50/50 dark:bg-green-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Risk reduction and compliance readiness</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Robust auth reduces breach blast radius and audit findings. Least‑privilege tokens, rotation, and centralized policies create evidence for SOC 2/ISO 27001 controls and shorten incident response.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Lower mean‑time‑to‑revoke with RTR and device/session inventories.</li>
              <li>Clear separation of authentication (identity) and authorization (permissions) simplifies audits.</li>
              <li>Security posture improves when browser apps avoid localStorage for tokens.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer experience and velocity</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Consistent middleware and typed claims reduce boilerplate and regressions. Teams ship features faster when access checks are declarative and centrally tested rather than hand‑coded in each handler.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Shared policy modules prevent drift across services and reduce duplication.</li>
              <li>Scoped tokens enable safer delegation to partners without granting broad roles.</li>
              <li>Better observability from standardized auth logs: <code>sub</code>, <code>aud</code>, scopes, and decision reasons.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Customer trust and data governance</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Clear session lifetimes, account recovery, and step‑up flows improve end‑user trust. Fine‑grained scopes enable account‑level controls and feature packaging.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Offer per‑app and per‑user scope grants; show customers why a request was denied.</li>
              <li>Communicate session expiration in UI; avoid surprise logouts during long‑running work.</li>
              <li>Use privacy‑aware claims design to minimize personal data in tokens.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a scopes catalog (CRUD by resource) with examples: <code>GET /orders</code> requires <code>orders:read</code>.</li>
              <li>Automate key rotation and JWKS caching; alert on unknown <code>kid</code> or signature failures.</li>
              <li>Instrument authz decisions for forensics: token hash, decision, policy version, latency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security‑first scaffolding</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can scaffold OAuth/OIDC flows, generate middleware that validates JWTs against JWKS, enforce scope checks, and add typed <code>req.user</code> claims. It can also create test suites covering token expiry, audience mismatch, and scope denial.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate a reusable <code>requireScopes(["orders:read"])</code> guard and apply it to routes.</li>
              <li>Add JWKS caching with <code>kid</code> pinning and exponential backoff on rotation.</li>
              <li>Create refresh‑flow handlers and secure cookie settings (SameSite/HttpOnly/Secure).</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational guardrails and DX</h3>
            <p className="text-slate-700 dark:text-gray-300 mb-3">
              Cursor can wire structured auth logs, dashboards for denial reasons, and sample policies (OPA/Cedar) for complex scenarios. It can also scaffold m2m client credential issuance and rotation jobs.
            </p>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Emit structured logs with <code>sub</code>, <code>aud</code>, <code>scope</code>s, and correlation IDs.</li>
              <li>Generate policy tests that verify least‑privilege access across representative users and apps.</li>
              <li>Provide CLI scripts to rotate keys and invalidate compromised refresh tokens.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ask Cursor for a secure default auth stack with OIDC, scopes, and JWKS middleware.</li>
              <li>Attach <code>kid</code> rotation alarms; simulate key rollover in staging regularly.</li>
              <li>Add a &ldquo;permissions denied&rdquo; UX pattern and API error codes clients can render meaningfully.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}