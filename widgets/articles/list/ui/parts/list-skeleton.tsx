import { Skeleton } from "@/shared/rui/skeleton";

import { ListHeader } from "./list-header";
import { ListFilter } from "./list-filter";
import { ArticleGridSkeleton } from "./article-grid-skeleton";

export const ListSkeleton = () => {
  return (
    <>
      <Skeleton>
        <ListFilter activeFilter={""} searchQuery={""} />
      </Skeleton>
      <Skeleton>
        <ListHeader activeFilter="Home" articlesCount={0} />
      </Skeleton>
      <ArticleGridSkeleton />
    </>
  );
};
