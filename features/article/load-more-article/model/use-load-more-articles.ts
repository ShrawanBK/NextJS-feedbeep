import { useMemo } from "react";

import { useArticlePagesQuery } from "./queries";

export const useLoadMoreArticles = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    isFetching,
  } = useArticlePagesQuery();

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
