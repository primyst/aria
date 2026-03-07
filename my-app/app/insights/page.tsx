'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

const allInsights = [
  {
    id: 1,
    title: 'Market Outlook 2024: Strategic Positioning',
    category: 'Market Analysis',
    description: 'Our latest analysis on market trends and strategic recommendations for portfolio positioning in the coming year.',
    date: 'January 15, 2024',
    author: 'Michael Richardson',
  },
  {
    id: 2,
    title: 'Tax-Efficient Wealth Transfer Strategies',
    category: 'Financial Planning',
    description: 'Comprehensive guide to minimizing tax liability while transferring wealth to the next generation.',
    date: 'January 10, 2024',
    author: 'Sarah Mitchell',
  },
  {
    id: 3,
    title: 'Diversification in Uncertain Times',
    category: 'Investment Strategy',
    description: 'How strategic diversification can help protect your portfolio during periods of market volatility.',
    date: 'January 5, 2024',
    author: 'David Chen',
  },
  {
    id: 4,
    title: 'The Rise of Alternative Investments',
    category: 'Investment Strategy',
    description: 'Understanding private equity, hedge funds, and real assets in a modern portfolio.',
    date: 'December 28, 2023',
    author: 'Jennifer Walsh',
  },
  {
    id: 5,
    title: 'Estate Planning Essentials for High-Net-Worth Individuals',
    category: 'Estate Planning',
    description: 'Key considerations and strategies for protecting and transferring your legacy.',
    date: 'December 20, 2023',
    author: 'Robert Mitchell',
  },
  {
    id: 6,
    title: 'Navigating Inflation: Protecting Your Purchasing Power',
    category: 'Market Analysis',
    description: 'Investment strategies to maintain wealth value in an inflationary environment.',
    date: 'December 15, 2023',
    author: 'Michael Richardson',
  },
];

export default function Insights() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = Array.from(new Set(allInsights.map(insight => insight.category)));
  const filteredInsights = selectedCategory 
    ? allInsights.filter(insight => insight.category === selectedCategory)
    : allInsights;

  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-blue-900 font-semibold text-sm tracking-widest uppercase">
            Insights & Research
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Market Expertise & Thought Leadership
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest market analysis and financial insights.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-6 py-2 rounded font-medium transition-smooth ${
              selectedCategory === null
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Articles
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded font-medium transition-smooth ${
                selectedCategory === category
                  ? 'bg-blue-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {filteredInsights.map((insight, index) => (
            <div
              key={insight.id}
              className={`stagger-item p-8 rounded-lg border border-gray-200 hover-lift bg-white ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <p className="text-blue-900 font-semibold text-xs uppercase tracking-wide mb-3">
                {insight.category}
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-900 transition-smooth cursor-pointer">
                {insight.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {insight.description}
              </p>
              <div className="flex justify-between items-center pt-6 border-t border-gray-200">
                <div>
                  <p className="text-sm text-gray-500">{insight.date}</p>
                  <p className="text-sm text-gray-600 font-medium">{insight.author}</p>
                </div>
                <Link href="#" className="text-blue-900 hover:text-blue-950 transition-smooth">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredInsights.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles found in this category.</p>
          </div>
        )}
      </div>
    </main>
  );
}
