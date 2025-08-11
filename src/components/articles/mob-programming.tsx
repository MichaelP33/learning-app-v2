import React from "react";

export default function MobProgramming() {
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
              Whole‑team Collaboration
            </h3>
            <p className="text-slate-700 dark:text-gray-300">
              The team works together at one keyboard with explicit roles and
              timeboxes (short, fixed time intervals to keep focus and cadence),
              which synchronizes attention and decision‑making.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Roles & Cadence
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Driver at the keyboard, Facilitator manages flow.</li>
              <li>
                Navigator(s) guide approach and architectural choices (keeping a
                few steps ahead so the group does not stall).
              </li>
              <li>Rotate roles on a fixed timer to keep engagement high.</li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              When Mobs Pay Off
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Architecture definition and cross‑cutting decisions.</li>
              <li>
                Gnarly bugs with unclear root cause (multiple perspectives find
                signals faster).
              </li>
              <li>Onboarding to new domains or major platform shifts.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Time‑box discussions; park unresolved items and move on.</li>
              <li>
                Limit WIP (work in progress) to one shared goal during a mob
                session.
              </li>
              <li>Capture decisions in-line to reduce later re‑hashing.</li>
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
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Faster convergence on complex decisions.</li>
              <li>Wider knowledge spread and shared mental models.</li>
              <li>Reduced rework due to early, collective validation.</li>
            </ul>
          </div>
          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Risks & Mitigations
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Meeting smell: define agenda, outcomes, and timeboxes; break out
                to pairs for implementation.
              </li>
              <li>
                Social loafing: rotate roles and keep contributions visible.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use a visible timer; rotate roles even when mid‑task to avoid
                stalls.
              </li>
              <li>
                End with a quick retro: keep/change/try next to improve the next
                session.
              </li>
              <li>
                Assign follow‑ups explicitly to avoid diffusion of
                responsibility.
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
              Session Enablement
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Generate mob agendas, roles, and rotation timers.</li>
              <li>
                Rapid prototyping prompts; capture decisions and follow‑ups.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Artifacts & Handoffs
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Summarize key decisions into ADRs and issue descriptions.</li>
              <li>Rotate prompts across team members to sustain engagement.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Seed the session with a prompt containing goals, risks, and
                constraints.
              </li>
              <li>
                Ask for rapid prototypes to compare approaches before
                committing.
              </li>
              <li>
                Export a session summary with decisions and next steps to the
                tracker.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
