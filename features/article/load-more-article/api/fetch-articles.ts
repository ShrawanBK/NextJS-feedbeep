import { MOCK_ARTICLES } from "@/data/mock-articles";
import type { IArticle } from "@/entities/article/model/article.type";

export const fetchArticles = async (page: number): Promise<IArticle[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = MOCK_ARTICLES.slice(0, page * 2).map((article) => ({
    ...article,
    id: `${article.id}-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: `${Math.floor(Math.random() * 24)} hours ago`,
  }));
  return res;
};
