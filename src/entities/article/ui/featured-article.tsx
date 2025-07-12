
'use client';

import React from 'react';
import { Clock, User } from 'lucide-react';
import { Article } from '../../../shared/types';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 p-8 text-white mb-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
        <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium mb-4">
          Featured Story
        </div>
        
        <h1 className="text-3xl font-bold leading-tight mb-4 max-w-3xl">
          {article.title}
        </h1>
        
        <p className="text-blue-100 text-lg leading-relaxed mb-6 max-w-2xl">
          {article.description}
        </p>
        
        <div className="flex items-center space-x-6 text-sm text-blue-100">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span>{article.publishedAt}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>•</span>
            <span>{article.readTime} min read</span>
          </div>
        </div>
      </div>
    </div>
  );
};
