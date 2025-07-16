import { ArticleCardSkeleton } from "@/widgets/articles/article-card/ui/article-card-skeleton";

export const ArticleGridSkeleton = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
      <ArticleCardSkeleton />
    </div>
  );
};
