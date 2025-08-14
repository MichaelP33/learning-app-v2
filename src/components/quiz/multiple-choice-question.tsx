"use client";

import { motion } from "framer-motion";
import { QuizQuestion } from "@/types";
import { CheckCircle, XCircle } from "lucide-react";

interface MultipleChoiceQuestionProps {
  question: QuizQuestion;
  selectedAnswer?: number;
  onAnswer: (answer: number) => void;
  showResult: boolean;
}

export default function MultipleChoiceQuestion({
  question,
  selectedAnswer,
  onAnswer,
  showResult,
}: MultipleChoiceQuestionProps) {
  const correctAnswer = question.correctAnswer;

  // Parse structured sections out of additionalContext when authors use
  // labels like "Headline:", "Why correct:", "Why others are wrong:",
  // "Cursor leverage:", and "Acceptance checks:". Falls back gracefully
  // to plain paragraph rendering if labels are not present.
  const parseAdditionalContext = (context?: string) => {
    if (!context) return null;
    const labels = [
      "Headline",
      "Why correct",
      "Why others are wrong",
      "Cursor leverage",
      "Acceptance checks",
    ];

    const re = new RegExp(
      `(${labels.join("|")})\\:\\s*([\\s\\S]*?)(?=(?:${labels.join(
        "|"
      )})\\:|$)`,
      "gi"
    );

    const sections: Record<string, string> = {};
    let match: RegExpExecArray | null;
    while ((match = re.exec(context)) !== null) {
      const key = match[1].toLowerCase();
      const value = match[2].trim();
      sections[key] = value;
    }

    if (Object.keys(sections).length === 0) return null;

    const splitToList = (text?: string): string[] => {
      if (!text) return [];
      // Prefer splitting on semicolons; then commas as a fallback.
      return text
        .split(/;|\n|\r|\u2022/g)
        .map((s) => s.replace(/^[-–•]\s*/, "").trim())
        .filter(Boolean);
    };

    return {
      headline: sections["headline"],
      whyCorrect: sections["why correct"],
      whyWrong: splitToList(sections["why others are wrong"]),
      cursorLeverage: splitToList(sections["cursor leverage"]),
      acceptanceChecks: splitToList(sections["acceptance checks"]),
      raw: context,
    };
  };

  const structured = parseAdditionalContext(question.additionalContext);

  const getOptionStyle = (index: number) => {
    if (!showResult) {
      return selectedAnswer === index
        ? "bg-blue-50 dark:bg-blue-900/20 border-blue-300 dark:border-blue-600"
        : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50";
    }

    // Show results
    if (index === correctAnswer) {
      return "bg-green-50 dark:bg-green-900/20 border-green-300 dark:border-green-600";
    } else if (selectedAnswer === index && index !== correctAnswer) {
      return "bg-red-50 dark:bg-red-900/20 border-red-300 dark:border-red-600";
    } else {
      return "bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60";
    }
  };

  const getOptionIcon = (index: number) => {
    if (!showResult) return null;

    if (index === correctAnswer) {
      return (
        <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
      );
    } else if (selectedAnswer === index && index !== correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-600 dark:text-red-400" />;
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Question */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 dark:border-gray-700/50">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          {question.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <motion.button
              key={index}
              onClick={() => !showResult && onAnswer(index)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${getOptionStyle(
                index
              )}`}
              whileHover={!showResult ? { scale: 1.01 } : {}}
              whileTap={!showResult ? { scale: 0.99 } : {}}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-start gap-3">
                  <span className="font-semibold text-gray-500 dark:text-gray-400 text-sm mt-1">
                    {String.fromCharCode(65 + index)})
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {option}
                  </span>
                </div>
                {getOptionIcon(index)}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Additional Context (shown after answering) */}
      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-blue-50/80 dark:bg-blue-900/20 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 dark:border-blue-700/50"
        >
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-3">
            Explanation
          </h4>

          {!structured ? (
            <p className="text-blue-800 dark:text-blue-200 mb-4 leading-relaxed">
              {question.additionalContext || "No additional context available."}
            </p>
          ) : (
            <div className="space-y-4 text-blue-800 dark:text-blue-200">
              {structured.headline && (
                <div>
                  <p className="leading-relaxed font-medium">
                    {structured.headline}
                  </p>
                </div>
              )}

              {structured.whyCorrect && (
                <div>
                  <div className="font-semibold mb-1">Why this is correct</div>
                  <p className="leading-relaxed">{structured.whyCorrect}</p>
                </div>
              )}

              {structured.whyWrong?.length ? (
                <div>
                  <div className="font-semibold mb-1">Why others are wrong</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {structured.whyWrong.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {structured.cursorLeverage?.length ? (
                <div>
                  <div className="font-semibold mb-1">Cursor leverage</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {structured.cursorLeverage.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {structured.acceptanceChecks?.length ? (
                <div>
                  <div className="font-semibold mb-1">Acceptance checks</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {structured.acceptanceChecks.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          )}

          <div className="border-t border-blue-200 dark:border-blue-700 pt-4 mt-4">
            <h5 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              Key Concepts:
            </h5>
            <div className="flex flex-wrap gap-2">
              {question.keyConcepts?.map((concept, index) => (
                <span
                  key={index}
                  className="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
                >
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
