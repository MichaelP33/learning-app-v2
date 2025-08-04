"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CursorInspiredCard } from "@/components/cursor-inspired-card";
import { Topic, Progress } from "@/types";
import {
  getStatusIcon,
  calculateTopicProficiency,
  calculateArticleProficiency,
} from "@/lib/data";
import {
  getCategoryPrimaryGradient,
  getCategoryAccentGradient,
} from "@/lib/gradients";

interface TopicCardClientProps {
  topic: Topic;
  index: number;
  topicProgress: Progress;
  categoryId: string;
}

export function TopicCardClient({
  topic,
  index,
  topicProgress,
  categoryId,
}: TopicCardClientProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [topicProficiency, setTopicProficiency] = useState(0);
  const [articlesLeftToMaster, setArticlesLeftToMaster] = useState(0);

  useEffect(() => {
    // Calculate proficiency on client side after hydration
    const proficiency = calculateTopicProficiency(topic.id);
    setTopicProficiency(proficiency);

    // Calculate articles left to master (not 100% proficiency)
    const articlesNotMastered = topic.articles.filter(
      (article) => calculateArticleProficiency(article.id) < 100
    ).length;
    setArticlesLeftToMaster(articlesNotMastered);

    setIsHydrated(true);
  }, [topic.id, topic.articles]);

  // Get category-specific gradients
  const progressGradient = getCategoryPrimaryGradient(categoryId);
  const arrowGradient = getCategoryAccentGradient(categoryId);
  return (
    <CursorInspiredCard className="cursor-pointer" categoryId={categoryId}>
      <Link href={`/topic/${topic.id}`} className="block p-6 pb-12 md:pb-6">
        {/* Topic Header */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
            {topic.name}
          </h3>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {topic.description}
        </p>

        {/* Progress Bar */}
        <div className="mb-4">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r ${progressGradient} transition-all duration-500 ease-out`}
              initial={{ width: 0 }}
              animate={{ width: `${isHydrated ? topicProficiency : 0}%` }}
              transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Mastery Progress */}
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {isHydrated
            ? `${articlesLeftToMaster}/${topic.articles.length} articles left to master`
            : `${topic.articles.length} articles ready to learn`}
        </div>

        {/* Enhanced Hover Indicator with Gradient - Permanent on mobile, hover on desktop */}
        <motion.div
          className="absolute bottom-4 right-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div
            className={`w-8 h-8 rounded-full bg-gradient-to-r ${arrowGradient} flex items-center justify-center shadow-lg`}
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </motion.div>
      </Link>
    </CursorInspiredCard>
  );
}
