import React from "react";

export default function AuthenticationAuthorization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">OAuth2/OIDC foundations</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                OAuth2 handles delegated authorization; OpenID Connect layers standardized identity on top (ID Token). Use Authorization Code with PKCE for browser/mobile clients; avoid implicit flow.
              </li>
              <li>
                Machine‑to‑machine uses Client Credentials (no user context). Keep scopes narrow and time‑boxed; prefer short‑lived access tokens.
              </li>
              <li>
                Treat the IDP as the source of truth for login, MFA, and session policies; your API enforces scopes/claims at the resource boundary.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">JWT scopes, claims, and audience</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Scopes express what a client may do (e.g., <span className="font-medium">orders:read</span>, <span className="font-medium">orders:write</span>); claims express who/what the subject is and context (tenant, roles, groups).
              </li>
              <li>
                Validate <span className="font-medium">aud</span>, <span className="font-medium">iss</span>, <span className="font-medium">exp</span>, <span className="font-medium">nbf</span>, and signature for every request; cache JWKs with rotation.
              </li>
              <li>
                Do not store secrets or PII in JWTs; tokens are bearer credentials and may traverse untrusted networks or logs. Keep payload minimal and non‑sensitive.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Token lifetime, refresh, and rotation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Short access token lifetimes (5–15 minutes) limit blast radius; use refresh tokens with rotation and reuse detection to mitigate theft.
              </li>
              <li>
                For mobile/web, pair refresh tokens with sender‑constrained mechanisms (e.g., PKCE, same‑site cookies) and device binding where supported.
              </li>
              <li>
                Revoke on anomaly: failed token introspection, unusual geo/device, or compromised credentials. Propagate revocation promptly through caches.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Least privilege and service‑to‑service</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Apply least privilege by default: minimal scopes, deny‑by‑default policies, and time‑limited access. Prefer ABAC/RBAC evaluated at the API boundary.
              </li>
              <li>
                For service calls, use Client Credentials with distinct audiences per API; consider mTLS for high‑risk paths and confidential networks.
              </li>
              <li>
                Partition tenants at the token level (tenant claim) and the datastore level (row‑level filters, schema separation) to prevent cross‑tenant access.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Prefer Authorization Code + PKCE for user agents; use Client Credentials for non‑interactive jobs and backends.</li>
              <li>Design scopes as product capabilities (read/write) aligned to resources; avoid role names embedded in scopes.</li>
              <li>Set access tokens short‑lived and rotate refresh tokens; implement reuse detection and revoke on suspicious activity.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Business & Team Impact */}
      <section id="business-team-impact">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Business &amp; Team Impact</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Security posture vs user experience</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Strong defaults (MFA, short token TTLs) reduce breach likelihood and incident costs, but too much friction hurts conversion; tune per risk tier.
              </li>
              <li>
                Centralized auth reduces compliance burden (SOC 2, ISO 27001) and audit scope by consolidating controls.
              </li>
              <li>
                Clear error messages and retry guidance lower support volume for login and permission issues.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational resilience and blast radius</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Short‑lived tokens reduce the window of compromise; scoped tokens limit what can be done if one leaks.
              </li>
              <li>
                Tenant‑aware claims make it straightforward to isolate incidents and target remediations quickly.
              </li>
              <li>
                Fine‑grained authorization enables tiered products and granular access analytics for pricing/packaging.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Ecosystem trust and integrations</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Standards‑based flows (OIDC) reduce partner integration time and let you leverage existing libraries and expertise.</li>
              <li>Consistent scope naming and permission pages reduce misconfiguration and escalations.</li>
              <li>Central key rotation and token revocation policies make auditors comfortable and customers confident.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Publish a scope catalog with human‑readable descriptions and examples of least‑privilege tokens for common tasks.</li>
              <li>Expose per‑tenant auth metrics (failed logins, MFA challenges, token reuse) and alert on anomalies.</li>
              <li>Document break‑glass procedures and emergency revocation; practice them like fire drills.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Cursor Implementation */}
      <section id="cursor-implementation">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Cursor Implementation</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-cyan-500 bg-cyan-50/50 dark:bg-cyan-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Keys, rotation, and enforcement hooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Automate JWKS fetching and cache invalidation; rotate signing keys on a schedule and during incidents.
              </li>
              <li>
                Provide middleware for scope checks, tenant isolation, and audience validation; ensure consistent 401 vs 403 semantics.
              </li>
              <li>
                Offer secure storage for client secrets and rotate them with notifications and grace periods.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Developer experience and testing</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Ship local auth emulators and token minting utilities for rapid prototyping without touching production IdPs.</li>
              <li>Generate test users, tenants, and tokens in fixtures; validate permission boundaries in integration tests.</li>
              <li>Emit structured auth errors with correlation IDs and clear remediation text.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">In practice</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Default to Authorization Code + PKCE for interactive apps; enforce Client Credentials for service calls.</li>
              <li>Keep access tokens short and rotate refresh tokens on every use; implement reuse detection.</li>
              <li>Log denied scopes and missing claims at INFO with safe context for troubleshooting, never token contents.</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}