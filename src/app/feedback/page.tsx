"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { PageTransition } from "@/components/page-transition";
import { motion } from "framer-motion";

export default function FeedbackPage() {
  const router = useRouter();

  const handleSubmit = () => {
    // Submit logic will be implemented later
    console.log("Feedback submitted");
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Header */}
        <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Give Feedback
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Help us improve your learning experience
              </p>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 border border-gray-200 dark:border-gray-700 shadow-sm">
            {/* Feedback form content will be added manually by user */}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:justify-end mt-8">
              <button
                onClick={handleCancel}
                className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 font-medium transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </main>
      </div>
    </PageTransition>
  );
}
