import React from "react";
import Image from "next/image";
import { Clock } from "lucide-react";
import type { IArticle } from "@/entities/article/model";
import {
  OpenArticleButton,
  SaveArticleButton,
  ShareArticleButton,
  ListenArticleButton,
} from "@/features/article";

import { Badge } from "@/shared/rui/badge";
import { Card, CardContent } from "@/shared/rui/card";

interface ArticleCardProps {
  article: IArticle;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Card className="group bg-card/90 overflow-hidden rounded-2xl border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-0">
        {article.imageUrl && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={article.imageUrl}
              alt={article.headline}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              width={800}
              height={800}
            />
            <div className="absolute top-3 left-3">
              <Badge
                variant="secondary"
                className="rounded-full bg-white/90 text-gray-800"
              >
                {article.category}
              </Badge>
            </div>
          </div>
        )}

        <div className="p-6">
          {!article.imageUrl && (
            <div className="mb-3">
              <Badge variant="secondary" className="rounded-full">
                {article.category}
              </Badge>
            </div>
          )}

          <h3 className="text-card-foreground group-hover:text-primary mb-3 text-lg leading-tight font-bold transition-colors dark:group-hover:text-blue-400">
            {article.headline}
          </h3>

          <p className="text-muted-foreground mb-4 line-clamp-3 text-sm leading-relaxed">
            {article.summary}
          </p>

          <div className="text-muted-foreground mb-4 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <span className="font-medium">{article.source}</span>
              <span>•</span>
              <span>{article.timestamp}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{article.readTime}</span>
            </div>
          </div>

          <div className="group-hover:text-primary-foreground flex items-center justify-between transition-colors">
            <div className="flex w-full items-center gap-2">
              <ListenArticleButton articleId={article.id} />
              <SaveArticleButton articleId={article.id} />
              <ShareArticleButton articleId={article.id} />
            </div>

            <OpenArticleButton articleId={article.id} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

ArticleCard.displayName = "ArticleCard";
