
import { Article } from "../../../shared/types";
import { mockArticles } from "../../../shared/api/mock-data";

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
