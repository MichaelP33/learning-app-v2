import type { Quiz } from "@/types";
import { externalQuizzes as generated } from "@/lib/generated-quizzes";

export const externalQuizzes: Record<string, Quiz> = generated as Record<
  string,
  Quiz
>;
