import { useMemo } from "react";

import { ArticleAPIQueries } from "./queries";

export const useArticles = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
  } = ArticleAPIQueries.getQueryOptionsFunctions.getArticles();

  const articles = useMemo(() => data?.pages.flat() ?? [], [data]);

  const memoizedReturn = useMemo(() => {
    return {
      articles,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      status,
      isFetching,
    };
  }, [
    articles,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
  ]);

  return memoizedReturn;
};
