
'use client';

import React from 'react';
import { Clock, ExternalLink, Bookmark, Share2, Volume2 } from 'lucide-react';
import { Article } from '../../../shared/types';
import { Button } from '../../../shared/ui/button';

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const handleSave = () => {
    console.log('Saving article:', article.id);
  };

  const handleShare = () => {
    console.log('Sharing article:', article.id);
  };

  const handleListen = () => {
    console.log('Playing article:', article.id);
  };

  return (
    <article className="card rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      {article.imageUrl && (
        <div className="mb-4 rounded-xl overflow-hidden">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            {article.category}
          </span>
        </div>

        <h2 className="text-xl font-semibold text-foreground leading-tight hover:text-blue-600 cursor-pointer transition-colors">
          {article.title}
        </h2>

        <p className="text-muted-foreground leading-relaxed">
          {article.summary}
        </p>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="font-medium">{article.source}</span>
            <span>{article.timestamp}</span>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{article.readTime} min read</span>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" onClick={handleListen}>
              <Volume2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleSave}>
              <Bookmark className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};
