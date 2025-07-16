"use client";

import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { Header } from "@/src/widgets/header/ui/header";
import { Sidebar } from "@/src/widgets/sidebar/ui/sidebar";
import { ArticleCard } from "@/src/widgets/article/ui/article-card";
import { useArticles } from "@/src/entities/article/hooks/use-articles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SettingsPanel } from "@/src/widgets/settings/ui/settings-panel";
import { FeaturedArticle } from "@/src/widgets/article/ui/featured-article";
import { useFeaturedArticle } from "@/src/entities/article/hooks/use-featured-article";

import { Button } from "@/shared/rui/button";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

function FeedContent() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Home");

  const {
    data: articlesInfiniteData,
    isLoading: isLoadingArticles,
    error: articlesError,
  } = useArticles();

  const articles =
    articlesInfiniteData?.pages.flatMap((page) => page.articles) || [];

  const {
    data: featuredArticle,
    isLoading: isLoadingFeatured,
    error: featuredError,
  } = useFeaturedArticle();

  if (isLoadingArticles || isLoadingFeatured) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <Loader2 className="text-primary mx-auto mb-4 h-8 w-8 animate-spin" />
          <p className="text-muted-foreground">
            Loading your personalized feed...
          </p>
        </div>
      </div>
    );
  }

  if (articlesError || featuredError) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <p className="text-destructive mb-4">Failed to load articles</p>
          <Button variant="outline" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Header
        onSettingsClick={() => setIsSettingsOpen(true)}
        onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="mx-auto max-w-4xl flex-1 p-4 lg:ml-0 lg:p-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-foreground mb-2 text-2xl font-bold lg:text-3xl">
              Good morning! Here&apos;s your news feed
            </h1>
            <p className="text-muted-foreground">
              {articles.length} articles found • {activeFilter}
            </p>
          </div>

          {/* Featured Article */}
          {featuredArticle && <FeaturedArticle article={featuredArticle} />}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </main>
      </div>

      {/* Settings Panel */}
      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
}

export const FeedPage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedContent />
    </QueryClientProvider>
  );
};
