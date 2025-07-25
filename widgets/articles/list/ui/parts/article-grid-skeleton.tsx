import { ArticleCardSkeleton } from "@/widgets/articles/article-card";
import { memo } from "react";

export const ArticleGridSkeleton = memo(() => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
    </div>
  );
});

ArticleGridSkeleton.displayName = "ArticleGridSkeleton";
