"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CursorInspiredCard } from "@/components/cursor-inspired-card";
import { AnimatedProgressBar } from "@/components/animated-card";
import { Category, Progress } from "@/types";
import {
  calculateCategoryProficiency,
  calculateArticleProficiency,
} from "@/lib/data";
import {
  getCategoryPrimaryGradient,
  getCategoryAccentGradient,
} from "@/lib/gradients";

interface CategoryCardClientProps {
  category: Category;
  index: number;
}

export function CategoryCardClient({
  category,
  index,
}: CategoryCardClientProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [categoryProficiency, setCategoryProficiency] = useState(0);
  const [proficiencyStats, setProficiencyStats] = useState({
    total: 0,
    completed: 0,
    inProgress: 0,
    notStarted: 0,
  });

  useEffect(() => {
    // Calculate proficiency on client side after hydration
    const proficiency = calculateCategoryProficiency(category.id);
    setCategoryProficiency(proficiency);

    // Calculate all articles across all topics
    const allArticles = category.topics.flatMap((topic) => topic.articles);

    // Calculate proficiency-based stats
    const completed = allArticles.filter(
      (article) => calculateArticleProficiency(article.id) === 100
    ).length;

    const inProgress = allArticles.filter((article) => {
      const proficiency = calculateArticleProficiency(article.id);
      return proficiency > 0 && proficiency < 100;
    }).length;

    const notStarted = allArticles.length - completed - inProgress;

    setProficiencyStats({
      total: allArticles.length,
      completed,
      inProgress,
      notStarted,
    });

    setIsHydrated(true);
  }, [category.id, category.topics]);

  // Get category-specific gradients
  const progressGradient = getCategoryPrimaryGradient(category.id);
  const arrowGradient = getCategoryAccentGradient(category.id);
  return (
    <CursorInspiredCard className="cursor-pointer" categoryId={category.id}>
      <Link href={`/category/${category.id}`} className="block p-8">
        {/* Category Header - Responsive Layout */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-4">
            {/* Icon - Centered on mobile, left-aligned on larger screens */}
            <motion.div
              className="flex justify-center sm:justify-start"
              whileHover={{
                scale: 1.05,
                rotate: 2,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl sm:text-3xl shadow-lg transition-all duration-300`}
                style={{
                  fontFamily:
                    'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Helvetica Neue", Arial, sans-serif',
                  fontVariantEmoji: "normal",
                  lineHeight: 1,
                }}
              >
                {category.icon}
              </div>
            </motion.div>
            {/* Title and Description - Centered on mobile, left-aligned on larger */}
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Stats - Hidden on mobile */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {isHydrated
                ? proficiencyStats.total
                : category.topics.reduce(
                    (sum, topic) => sum + topic.articles.length,
                    0
                  )}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Articles
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {isHydrated ? proficiencyStats.completed : 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {isHydrated ? proficiencyStats.inProgress : 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              In Progress
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              {isHydrated ? proficiencyStats.notStarted : 0}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Not Started
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
            <span>Proficiency</span>
            <span>
              {isHydrated
                ? categoryProficiency > 0
                  ? `${categoryProficiency}%`
                  : "Not Started"
                : "Not Started"}
            </span>
          </div>
          <AnimatedProgressBar
            percentage={isHydrated ? categoryProficiency : 0}
            gradient={progressGradient}
            delay={index + 12}
          />
        </div>

        {/* Topics Preview */}
        <div className="space-y-2">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
            Topics ({category.topics.length})
          </h4>
          {category.topics.slice(0, 3).map((topic) => (
            <div
              key={topic.id}
              className="flex items-center justify-between text-sm"
            >
              <span className="text-gray-700 dark:text-gray-300">
                {topic.name}
              </span>
              <span className="hidden md:inline text-gray-500 dark:text-gray-400">
                {topic.articles.length} articles
              </span>
            </div>
          ))}
          {category.topics.length > 3 && (
            <div className="text-sm text-gray-500 dark:text-gray-400">
              +{category.topics.length - 3} more topics
            </div>
          )}
        </div>

        {/* Enhanced Hover Indicator with Gradient - Permanent on mobile, hover on desktop */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400"
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
