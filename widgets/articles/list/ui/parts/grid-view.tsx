import type { IArticle } from "@/entities/article/model/article.type";
import ArticleCard from "@/widgets/articles/article-card/ui/article-card";

import { ArticleGridSkeleton } from "./article-grid-skeleton";

type Props = {
  data: IArticle[];
  isLoading: boolean;
};

export const GridView = ({ data, isLoading }: Props) => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
      {isLoading && (
        <div className="mt-6 flex justify-center">
          <ArticleGridSkeleton />
        </div>
      )}
    </>
  );
};
