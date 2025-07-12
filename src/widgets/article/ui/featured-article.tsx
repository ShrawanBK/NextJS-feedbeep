
'use client';

import React from 'react';
import { Clock, User } from 'lucide-react';
import { Article } from '@/shared/types';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <article className="group bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-border p-8 mb-8 transition-all duration-200 hover:shadow-xl hover:border-border/60">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Article Image */}
        {article.imageUrl && (
          <div className="lg:w-1/2 overflow-hidden rounded-xl">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-64 lg:h-80 object-cover transition-transform duration-200 group-hover:scale-105"
            />
          </div>
        )}
        
        {/* Content */}
        <div className={`${article.imageUrl ? 'lg:w-1/2' : 'w-full'} flex flex-col justify-center`}>
          {/* Featured Badge */}
          <div className="mb-4">
            <span className="inline-block px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-full">
              ⭐ Featured Article
            </span>
          </div>

          {/* Category */}
          <div className="mb-3">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full">
              {article.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors">
            {article.title}
          </h2>

          {/* Excerpt */}
          <p className="text-muted-foreground mb-6 text-base leading-relaxed">
            {article.excerpt}
          </p>

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                {article.author}
              </span>
              <span className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                {article.readTime} min read
              </span>
            </div>
            <span>{formatTimeAgo(article.publishedAt)}</span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-muted text-muted-foreground rounded-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};
