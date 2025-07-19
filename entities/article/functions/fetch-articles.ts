import { MOCK_ARTICLES } from "@/entities/article/data/mock-articles";
import type { IArticle } from "@/entities/article/model/article.type";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchArticles = async (page: number): Promise<IArticle[]> => {
  await delay(800);
  const res = MOCK_ARTICLES.slice(0, page * 2).map((article) => ({
    ...article,
    id: `${article.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
  }));
  return res;
};

export const fetchFeaturedArticle = async (): Promise<IArticle> => {
  await delay(500);
  return MOCK_ARTICLES[0];
};
