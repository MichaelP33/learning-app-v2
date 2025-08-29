"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FeedbackPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: 'general',
    feedback: '',
    email: ''
  });
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.feedback.trim()) {
      newErrors.feedback = 'Please provide your feedback';
    }
    
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    console.log("Feedback submitted:", formData);
    // Simulate form submission delay
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleCancel = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0">
        {/* Light Mode Background */}
        <div className="absolute inset-0 bg-white dark:bg-gray-900" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/60 dark:from-blue-950/40 dark:via-gray-900 dark:to-cyan-950/30" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-tl from-purple-400/15 to-pink-400/15 dark:from-purple-600/8 dark:to-pink-600/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
        </div>
      </div>
      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-in fade-in duration-700">
        {/* Header */}
        <header className="text-center mb-12 animate-in slide-in-from-top duration-500">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Share Your
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent"> Feedback</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-lg mx-auto leading-relaxed">
            Help us create a better learning experience for everyone
          </p>
        </header>

        {/* Feedback Form Container */}
        <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-gray-200/60 dark:border-gray-700/60 shadow-xl animate-in slide-in-from-bottom duration-500 delay-200">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Feedback Type Selection */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                What type of feedback would you like to share?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 'general', label: 'General', icon: '💬' },
                  { value: 'bug', label: 'Bug Report', icon: '🐛' },
                  { value: 'feature', label: 'Feature Request', icon: '✨' }
                ].map((type) => (
                  <button
                    key={type.value}
                    type="button"
                    onClick={() => handleInputChange('type', type.value)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                      formData.type === type.value
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                        : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{type.icon}</span>
                      <span className="font-medium">{type.label}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Feedback Text Area */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                Your feedback
              </label>
              <textarea
                value={formData.feedback}
                onChange={(e) => handleInputChange('feedback', e.target.value)}
                placeholder="Tell us about your experience, suggestions, or any issues you've encountered..."
                rows={6}
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-0 ${
                  errors.feedback
                    ? 'border-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-500'
                    : 'border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                }`}
              />
              {errors.feedback && (
                <p className="text-red-500 dark:text-red-400 text-sm font-medium flex items-center gap-2">
                  <span>⚠️</span>
                  {errors.feedback}
                </p>
              )}
            </div>

            {/* Optional Email */}
            <div className="space-y-3">
              <label className="block text-lg font-semibold text-gray-900 dark:text-white">
                Email (optional)
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="your@email.com - if you'd like us to follow up"
                className={`w-full px-4 py-4 rounded-xl border-2 transition-all duration-300 bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-0 ${
                  errors.email
                    ? 'border-red-300 dark:border-red-600 focus:border-red-500 dark:focus:border-red-500'
                    : 'border-gray-200 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-400'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 dark:text-red-400 text-sm font-medium flex items-center gap-2">
                  <span>⚠️</span>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-end pt-4">
              {/* Cancel Button */}
              <button
                type="button"
                onClick={handleCancel}
                disabled={isLoading}
                className="px-8 py-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-700/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold backdrop-blur-sm"
              >
                Cancel
              </button>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || !formData.feedback.trim()}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 dark:from-blue-500 dark:to-cyan-500 dark:hover:from-blue-600 dark:hover:to-cyan-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 backdrop-blur-sm"
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending feedback...</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span>Submit Feedback</span>
                    <span>🚀</span>
                  </div>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}