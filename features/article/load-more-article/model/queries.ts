import { useInfiniteQuery } from "@tanstack/react-query";

import { articleKeys } from "./query-keys";
import { fetchArticles } from "../api/fetch-articles";

export const useArticlePagesQuery = () => {
  return useInfiniteQuery({
    queryKey: articleKeys.all,
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) => fetchArticles(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined; // No more pages
      if (allPages.length >= 5) return undefined; // No more pages
      return allPages.length + 1; // Next page index
    },
  });
};
