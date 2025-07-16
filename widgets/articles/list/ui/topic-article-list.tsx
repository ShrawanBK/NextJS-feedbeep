"use client";

import { useMemo, useState } from "react";
import {
  useLoadMoreArticles,
  LoadMoreArticleButton,
} from "@/features/article/load-more-article";

import { NoArticle } from "./no-article";
import { GridView } from "./parts/grid-view";
import { ListFilter } from "./parts/list-filter";
import { ListHeader } from "./parts/list-header";
import { ListSkeleton } from "./parts/list-skeleton";
import { useArticleFiltersStore } from "@/src/shared/stores/use-article-filters-store";

interface Props {
  topicId?: string;
  subCategoryId?: string;
}

export const TopicArticleList = ({ topicId, subCategoryId }: Props) => {
  const [activeFilter, setActiveFilter] = useState("Home");
  const [searchQuery, setSearchQuery] = useState("");
  // const { filterCategory: activeFilter, searchQuery } = useArticleFiltersStore(
  //   (state) => ({
  //     filterCategory: state.filterCategory,
  //     searchQuery: state.searchQuery,
  //   })
  // );

  // const {
  //   filterCategory: activeFilter,
  //   filterSubCategory,
  //   searchQuery,
  // } = useArticleFiltersStore((state) => ({
  //   filterCategory: state.filterCategory,
  //   filterSubCategory: state.filterSubCategory,
  //   searchQuery: state.searchQuery,
  // }));

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

    // Filter by active filter
    if (activeFilter !== "Home") {
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
          filterKeywords[activeFilter as keyof typeof filterKeywords];
        if (keywords) {
          return keywords.some(
            (keyword) =>
              article.headline.toLowerCase().includes(keyword) ||
              article.summary.toLowerCase().includes(keyword)
          );
        }
        return true;
      });
    }

    return filtered;
  }, [activeFilter, articles, searchQuery]);

  if (isFetching && !isFetchingNextPage) {
    return <ListSkeleton />;
  }

  if (filteredArticles.length === 0) {
    return <NoArticle activeFilter={activeFilter} searchQuery={searchQuery} />;
  }

  return (
    <>
      {activeFilter !== "Home" && (
        <ListFilter activeFilter={activeFilter} searchQuery={searchQuery} />
      )}

      <ListHeader
        activeFilter={activeFilter}
        articlesCount={filteredArticles.length}
      />
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
  );
};
