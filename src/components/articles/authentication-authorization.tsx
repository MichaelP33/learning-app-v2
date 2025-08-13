import React from "react";

export const articleFormatVersion = 2;

export default function AuthenticationAuthorization() {
  return (
    <article className="space-y-10">
      {/* Key Concepts */}
      <section id="key-concepts" className="mb-12">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Key Concepts</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Plain-English definition</h3>
            <p className="text-slate-700 dark:text-gray-300">Authentication proves who you are; authorization decides what you can do. Modern apps use OAuth 2.0 + OIDC for users and scoped tokens for APIs.</p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Why users feel it</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reliable logins and session continuity.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: no surprise logouts during checkout.</li><li>Plain English: stay signed in safely.</li></ul>
              </li>
              <li>Clear, least‑privilege access.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: partners can read orders but not refund.</li><li>Plain English: only what&rsquo;s needed.</li></ul>
              </li>
              <li>Fast support for account recovery.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: reset flows and device revocation work smoothly.</li><li>Plain English: easy to fix access.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Sticky mental model</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;Badges and keys.&rdquo; A badge proves identity; keys open only approved doors.</p>
          </div>

          <div className="border-l-4 border-orange-500 bg-orange-50/50 dark:bg-orange-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Strengths &amp; limits (trade‑offs)</h3>
            <div className="grid gap-4">
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Strengths</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Standard protocols (OAuth/OIDC) → interoperability.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: faster integrations.</li></ul>
                  </li>
                  <li>Scoped tokens → least privilege by default.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: only the needed keys.</li></ul>
                  </li>
                  <li>Short‑lived access + refresh rotation → reduced blast radius.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: safer sessions.</li></ul>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-slate-900 dark:text-white">Limits</h4>
                <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
                  <li>Token sprawl and drift → policy confusion.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: centralize scope mapping and audits.</li></ul>
                  </li>
                  <li>Browser storage pitfalls → XSS risk.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: HTTP‑only cookies where possible.</li></ul>
                  </li>
                  <li>Key rotation and JWKS outages → auth failures.
                    <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Tip: cache by <code>kid</code> with backoff.</li></ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Common misunderstandings</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;ID Token is for API auth.&rdquo; → Impact: broken authz → Fix: use Access Token for APIs; ID Token for identity.</li>
              <li>&ldquo;Long‑lived access tokens are fine.&rdquo; → Impact: stolen token risk → Fix: short‑lived access + refresh rotation.</li>
              <li>&ldquo;Scopes = job titles.&rdquo; → Impact: over‑broad access → Fix: resource‑action scopes (e.g., <code>orders:read</code>).</li>
            </ul>
          </div>

          <div className="border-l-4 border-slate-400 bg-slate-50/50 dark:bg-slate-800/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Related Glossary (terms &amp; tech)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>OAuth 2.0</strong> — delegated authorization. <em>Why it matters:</em> standardizes access.
              </li>
              <li><strong>OIDC</strong> — authentication on top of OAuth. <em>Why it matters:</em> identity for apps.</li>
              <li><strong>JWKS</strong> — signing keys endpoint. <em>Why it matters:</em> validates JWT signatures.</li>
              <li><strong>Scopes</strong> — permissions list. <em>Why it matters:</em> encode least privilege.</li>
              <li><strong>Claims</strong> — token attributes. <em>Why it matters:</em> carry tenant, roles, flags.</li>
              <li><strong>Refresh Rotation</strong> — RTR with <code>jti</code>. <em>Why it matters:</em> revoke stolen chains.</li>
              <li><strong>mTLS</strong> — mutual TLS. <em>Why it matters:</em> secure service‑to‑service auth.</li>
              <li><strong>Audience (<code>aud</code>)</strong> — intended receiver. <em>Why it matters:</em> prevents token replay.</li>
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
              <li>User login, sessions, and account recovery.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: Auth Code + PKCE with secure cookies.</li></ul>
              </li>
              <li>Partner and internal APIs with scoped tokens.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: <code>orders:read</code> vs <code>orders:write</code>.</li></ul>
              </li>
              <li>Admin/audit features requiring step‑up auth.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Example: re‑authenticate before refunds.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What good looks like</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Short‑lived access tokens, refresh rotation, and JWKS caching → safer sessions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: reduced breach impact.</li></ul>
              </li>
              <li>Centralized scope mapping → consistent checks across services.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer privilege bugs.</li></ul>
              </li>
              <li>Structured auth logs with <code>sub</code>, <code>aud</code>, and decision → faster forensics.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: quicker incident response.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-yellow-500 bg-yellow-50/50 dark:bg-yellow-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Failure signals (customer words)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>&ldquo;Keeps logging me out.&rdquo; → Likely cause: cookie/session misconfig → What to check: SameSite/HttpOnly/Secure, clock skew.</li>
              <li>&ldquo;Partner can do too much.&rdquo; → Likely cause: role‑based broad tokens → What to check: resource‑action scopes.</li>
              <li>&ldquo;API rejects valid tokens randomly.&rdquo; → Likely cause: JWKS rotation → What to check: <code>kid</code> cache/backoff.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Industry lenses</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Enterprise Tech</strong>: OIDC providers, centralized policies, step‑up for sensitive flows.</li>
              <li><strong>Non‑Tech Enterprise</strong>: audit evidence and RBAC; PII‑aware claims.</li>
              <li><strong>Startups</strong>: start with hosted IdP and simple scopes; harden over time.</li>
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
              <li>OIDC for users; short‑lived access + refresh rotation.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: prove identity; keep keys fresh.</li></ul>
              </li>
              <li>Scopes map to resources/actions; centralize checks.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Plain English: keys fit doors, not titles.</li></ul>
              </li>
              <li>Cache JWKS by <code>kid</code>; log structured auth decisions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Payoff: fewer outages, faster debugging.</li></ul>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 bg-purple-50/50 dark:bg-purple-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Review workflow (AI in PRs/design)</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Verify token usage (Access vs ID), scopes on routes, and step‑up for sensitive actions.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: least privilege, audience, expiry.</li></ul>
              </li>
              <li>Ensure secure cookies for browsers; avoid localStorage for tokens.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Checklist: SameSite/HttpOnly/Secure set.</li></ul>
              </li>
              <li>Check JWKS caching, key rotation handling, and error paths.</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 bg-blue-50/50 dark:bg-blue-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Guardrails &amp; automation</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Scaffold OIDC/OAuth flows; generate policy middlewares.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: consistent auth across services.</li></ul>
              </li>
              <li>Policy tests for critical routes and scope denial cases.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Benefit: prevent privilege creep.</li></ul>
              </li>
              <li>Operational dashboards for token failures and step‑up rates.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Operational playbooks</h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li><strong>Frequent token invalid</strong>: check clock skew, audience, JWKS cache; roll keys safely.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: restores trust quickly.</li></ul>
              </li>
              <li><strong>Over‑broad access</strong>: tighten scopes; add resource filters; audit usage.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: least privilege by design.</li></ul>
              </li>
              <li><strong>Session churn</strong>: move to secure cookies; extend refresh; communicate expiry in UI.
                <ul className="list-disc pl-6 mt-1 text-slate-600 dark:text-gray-400"><li>Why it helps: better UX and security.</li></ul>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Talk track (20 sec)</h3>
            <p className="text-slate-700 dark:text-gray-300">&ldquo;We use OIDC for identity and scoped tokens for access, keep keys short‑lived and well‑logged, and centralize policies—so sign‑ins are reliable and permissions are safe by default.&rdquo;</p>
          </div>
        </div>
      </section>
    </article>
  );
}
