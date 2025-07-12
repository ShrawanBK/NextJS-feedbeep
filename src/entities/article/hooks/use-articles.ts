
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchArticles } from "../api/articles";

export const useArticles = () => {
  return useInfiniteQuery({
    queryKey: ["articles"],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => fetchArticles(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? allPages.length + 1 : undefined;
    },
  });
};
