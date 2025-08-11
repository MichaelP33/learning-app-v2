import React from "react";

export default function PairProgramming() {
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
              Roles & Rotation
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Driver writes code; Navigator reviews in real time (thinking
                ahead about edge cases and design to prevent rework).
              </li>
              <li>
                Rotate roles on a schedule (e.g., every 15–30 minutes) to
                balance attention and learning.
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 bg-emerald-50/50 dark:bg-emerald-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              When to Pair
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                High‑risk or complex changes (security, performance, data).
              </li>
              <li>
                Unknown problem spaces where shared exploration reduces false
                starts (fewer dead ends before a viable approach emerges).
              </li>
              <li>
                Onboarding and cross‑skilling to increase the team&rsquo;s bus
                factor (resilience to individual unavailability).
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 bg-amber-50/50 dark:bg-amber-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Remote Ergonomics
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Low‑latency tools with shared cursors (both can point/type),
                clear audio, and agreed keyboard handoffs.
              </li>
              <li>
                Video optional; prioritize clarity via prompts, checklists, and
                small commits.
              </li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Pair when risk is high or context is new; solo on small
                refactors.
              </li>
              <li>
                Set an agenda and rotation cadence; commit after each green
                test.
              </li>
              <li>
                Capture decisions as you go to prevent context loss between
                rotations.
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
          <div className="border-l-4 border-violet-500 bg-violet-50/50 dark:bg-violet-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Outcomes
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Reduced defects in complex code paths.</li>
              <li>Faster ramp‑up for new team members.</li>
              <li>Higher bus factor and fewer single points of failure.</li>
            </ul>
          </div>
          <div className="border-l-4 border-slate-500 bg-slate-50/50 dark:bg-slate-900/40 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Trade‑offs
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>Perceived cost increase for simple tasks.</li>
              <li>Diminishing returns on well‑understood, low‑risk changes.</li>
              <li>Schedule pairing during high‑value windows.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Use ping‑pong TDD (one writes tests, the other implements).
              </li>
              <li>
                Swap roles frequently to keep both partners engaged and
                learning.
              </li>
              <li>
                Time‑box spikes; turn learnings into clear tasks before
                continuing.
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
              Shared Context Prompts
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Generate pairing briefs with goals, risks, and test strategy.
              </li>
              <li>
                Inline suggestions for edge cases and refactors while driving.
              </li>
            </ul>
          </div>
          <div className="border-l-4 border-lime-600 bg-lime-50/50 dark:bg-lime-950/30 pl-6 py-4 rounded-r-lg">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              Test‑first Flows
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Scaffolding unit tests and acceptance criteria as you design.
              </li>
              <li>Templates for pairing rituals and rotation reminders.</li>
            </ul>
          </div>

          <div className="pl-6">
            <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
              In practice
            </h3>
            <ul className="list-disc pl-6 text-slate-700 dark:text-gray-300 space-y-1">
              <li>
                Create shared prompts with context, constraints, and risks.
              </li>
              <li>Ask the agent to propose edge cases before you code.</li>
              <li>
                Use AI to generate refactor plans and small, staged commits.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  );
}
