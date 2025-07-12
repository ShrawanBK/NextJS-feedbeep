
'use client';

import React from 'react';
import { Clock, ExternalLink, Bookmark, Share2, Volume2 } from 'lucide-react';
import { Article } from '../../../shared/types';
import { Button } from '../../../shared/ui/button';

interface FeaturedArticleProps {
  article: Article;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ article }) => {
  return (
    <article className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white mb-8">
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative p-8">
        <div className="mb-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm">
            Featured Story
          </span>
        </div>
        
        <h1 className="text-3xl font-bold mb-4 leading-tight">
          {article.title}
        </h1>
        
        <p className="text-lg text-white/90 mb-6 leading-relaxed max-w-3xl">
          {article.summary}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-white/80">
            <span className="font-medium">{article.source}</span>
            <span>{article.timestamp}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="secondary" size="sm">
              <Volume2 className="w-4 h-4 mr-2" />
              Listen
            </Button>
            <Button variant="secondary" size="sm">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </Button>
            <Button variant="secondary" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
