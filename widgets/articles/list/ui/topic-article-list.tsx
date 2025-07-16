"use client";

import { useMemo } from "react";
import {
  useLoadMoreArticles,
  LoadMoreArticleButton,
} from "@/features/article/load-more-article";

import { useArticleFiltersStore } from "@/src/shared/stores/use-article-filters-store";

import { NoArticle } from "./no-article";
import { GridView } from "./parts/grid-view";
import { ListFilter } from "./parts/list-filter";
import { ListHeader } from "./parts/list-header";
import { ListSkeleton } from "./parts/list-skeleton";

interface Props {
  topicId?: string;
  subCategoryId?: string;
}

export const TopicArticleList = ({ topicId, subCategoryId }: Props) => {
  const { filterMain, filterCategory, filterSubCategory, searchQuery } =
    useArticleFiltersStore();

  const {
    articles,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useLoadMoreArticles();

  const filteredArticles = useMemo(() => {
    let filtered = [...articles];

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (article) =>
          article.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
          article.source.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (filterMain && !filterCategory && !filterSubCategory) {
      return filtered;
    }

    // Filter by active filter
    filtered = filtered.filter((article) => {
      // For this demo, we'll simulate filtering by matching keywords
      const filterKeywords = {
        Technology: ["tech", "ai", "software", "digital", "innovation"],
        "AI & Machine Learning": ["ai", "machine learning", "artificial"],
        Business: ["business", "market", "economy", "finance"],
        Science: ["science", "research", "study", "climate"],
        Trending: ["trending", "popular", "viral"],
        "Elon Musk": ["elon", "musk", "tesla", "spacex"],
        "Climate Change": ["climate", "environment", "green", "carbon"],
        AI: ["ai", "artificial", "machine learning"],
        Bitcoin: ["bitcoin", "crypto", "blockchain"],
        Apple: ["apple", "iphone", "ios"],
        Google: ["google", "android", "alphabet"],
      };

      const keywords =
        filterKeywords[filterCategory as keyof typeof filterKeywords];
      if (keywords) {
        return keywords.some(
          (keyword) =>
            article.headline.toLowerCase().includes(keyword) ||
            article.summary.toLowerCase().includes(keyword)
        );
      }
      return true;
    });

    return filtered;
  }, [articles, searchQuery, filterMain, filterCategory, filterSubCategory]);

  const activeFilterText = useMemo(() => {
    if (!filterCategory && !filterSubCategory) {
      return "";
    }
    return `${filterCategory ?? ""} ${
      filterSubCategory ? `- ${filterSubCategory}` : ""
    }`;
  }, [filterCategory, filterSubCategory]);

  if (isFetching && !isFetchingNextPage) {
    return <ListSkeleton />;
  }

  return (
    <>
      {filterCategory && (
        <ListFilter activeFilter={activeFilterText} searchQuery={searchQuery} />
      )}

      <ListHeader
        activeFilter={activeFilterText}
        articlesCount={filteredArticles.length}
      />
      {filteredArticles.length > 0 ? (
        <>
          <GridView data={filteredArticles} isLoading={isFetchingNextPage} />
          {hasNextPage && (
            <div className="mt-12 flex justify-center">
              <LoadMoreArticleButton
                onClick={() => fetchNextPage()}
                loading={isFetchingNextPage}
                disabled={!hasNextPage}
              />
            </div>
          )}
        </>
      ) : (
        <NoArticle activeFilter={activeFilterText} searchQuery={searchQuery} />
      )}
    </>
  );
};
