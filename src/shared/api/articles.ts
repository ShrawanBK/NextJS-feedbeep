import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { Article } from "../types";
import { mockArticles } from "./mock-data";

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchArticles = async (
  page = 1,
  limit = 10,
): Promise<{ articles: Article[]; hasNextPage: boolean }> => {
  await delay(800);

  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const articles = mockArticles.slice(startIndex, endIndex);

  return {
    articles,
    hasNextPage: endIndex < mockArticles.length,
  };
};

export const fetchFeaturedArticle = async (): Promise<Article> => {
  await delay(500);
  return mockArticles.find((article) => article.featured) || mockArticles[0];
};

export const useArticles = () => {
  return useInfiniteQuery({
    queryKey: ["articles"],
    initialPageParam: 1, // ✅ Required in v5
    queryFn: ({ pageParam }) => fetchArticles(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasNextPage ? allPages.length + 1 : undefined;
    },
  });
};

export const useFeaturedArticle = () => {
  return useQuery({
    queryKey: ["featured-article"],
    queryFn: async () => {
      return fetchFeaturedArticle();
    },
  });
};