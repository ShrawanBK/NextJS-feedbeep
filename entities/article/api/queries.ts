import { useInfiniteQuery } from "@tanstack/react-query";

import { ARTICLE_QUERY_KEYS } from "./query-keys";
import { fetchArticles } from "../functions/fetch-articles";

const queries = {
  getArticles: async (page: number) => {
    const articles = await fetchArticles(page);
    return articles;
  },
};

const useArticlePagesQuery = () => {
  return useInfiniteQuery({
    queryKey: ARTICLE_QUERY_KEYS.all,
    initialPageParam: 1,
    queryFn: ({ pageParam }) => queries.getArticles(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === 0) return undefined; // No more pages
      if (allPages.length >= 5) return undefined; // No more pages
      return allPages.length + 1; // Next page index
    },
  });
};

const getQueryOptionsFunctions = {
  getArticles: useArticlePagesQuery,
};

export const ArticleAPIQueries = {
  queries,
  getQueryOptionsFunctions,
};
