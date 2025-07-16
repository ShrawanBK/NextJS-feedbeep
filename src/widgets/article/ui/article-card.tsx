"use client";

import React from "react";
import { User, Clock, ExternalLink } from "lucide-react";

import { Button } from "@/shared/rui/button";
import type { Article } from "@/src/shared/types";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60 * 60)
    );

    if (diffInHours < 1) return "Just now";
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${Math.floor(diffInHours / 24)}d ago`;
  };

  return (
    <article className="group bg-card border-border hover:border-border/60 rounded-xl border p-6 transition-all duration-200 hover:shadow-lg">
      {/* Article Image */}
      {article.imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="h-48 w-full object-cover transition-transform duration-200 group-hover:scale-105"
          />
        </div>
      )}

      {/* Category Badge */}
      <div className="mb-3">
        <span className="bg-secondary text-secondary-foreground inline-block rounded-full px-3 py-1 text-xs font-medium">
          {article.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-card-foreground group-hover:text-primary mb-3 line-clamp-2 text-lg font-semibold transition-colors">
        {article.title}
      </h3>

      {/* Excerpt */}
      {/* <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
        {article.excerpt}
      </p> */}

      {/* Meta Information */}
      <div className="text-muted-foreground mb-4 flex items-center justify-between text-xs">
        <div className="flex items-center space-x-4">
          <span className="flex items-center">
            <User className="mr-1 h-3 w-3" />
            {/* {article.author} */}
          </span>
          <span className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            {article.readTime} min read
          </span>
        </div>
        {/* <span>{formatTimeAgo(article.publishedAt)}</span> */}
      </div>

      {/* Tags */}
      {/* <div className="flex flex-wrap gap-2 mb-4">
        {article.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md"
          >
            #{tag}
          </span>
        ))}
      </div> */}

      {/* Read More Button */}
      <Button
        variant="ghost"
        size="sm"
        className="group-hover:bg-primary group-hover:text-primary-foreground w-full transition-colors"
      >
        Read More
        <ExternalLink className="ml-2 h-3 w-3" />
      </Button>
    </article>
  );
};
