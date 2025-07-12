
import { useQuery } from "@tanstack/react-query";
import { fetchFeaturedArticle } from "../api/articles";

export const useFeaturedArticle = () => {
  return useQuery({
    queryKey: ["featured-article"],
    queryFn: fetchFeaturedArticle,
  });
};
