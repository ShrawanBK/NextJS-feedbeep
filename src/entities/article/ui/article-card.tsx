'use client';

import React from 'react';
import { Clock, User, ExternalLink } from 'lucide-react';
import { Article } from '../../../shared/types';
import { Button } from '../../../shared/ui/button';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      {/* Image */}
      <div className="aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-primary/90 backdrop-blur-sm px-2 py-1 text-xs font-medium text-primary-foreground">
            {article.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-semibold text-lg leading-tight mb-3 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}m read</span>
            </div>
          </div>

          <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity h-7 text-xs">
            Read more
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
      </div>
    </article>
  );
};