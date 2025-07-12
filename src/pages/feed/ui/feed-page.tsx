
'use client';

import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Header } from '../../../widgets/header/ui/header';
import { Sidebar } from '../../../widgets/sidebar/ui/sidebar';
import { FeaturedArticle } from '../../../entities/article/ui/featured-article';
import { ArticleCard } from '../../../entities/article/ui/article-card';
import { SettingsPanel } from '../../../widgets/settings/ui/settings-panel';
import { useArticles, useFeaturedArticle } from '../../../shared/api/articles';
import { Button } from '../../../shared/ui/button';
import { Loader2 } from 'lucide-react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 10,
      retry: 2,
      refetchOnWindowFocus: false,
    },
  },
});

const FeedContent: React.FC = () => {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { data: featuredArticle, isLoading: isFeaturedLoading } = useFeaturedArticle();
  const {
    data: articlesData,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading: isArticlesLoading,
  } = useArticles();

  const allArticles = articlesData?.pages.flatMap(page => page.articles) || [];

  return (
    <div className="min-h-screen bg-background">
      <Header onSettingsClick={() => setIsSettingsOpen(true)} />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Good morning! Here's your news feed
              </h1>
              <p className="text-muted-foreground">
                {allArticles.length} articles found
              </p>
            </div>

            {/* Featured Article */}
            {isFeaturedLoading ? (
              <div className="flex items-center justify-center h-64 card rounded-2xl mb-8">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            ) : featuredArticle ? (
              <FeaturedArticle article={featuredArticle} />
            ) : null}

            {/* Articles Grid */}
            {isArticlesLoading ? (
              <div className="flex items-center justify-center h-64">
                <Loader2 className="w-8 h-8 animate-spin text-blue-500" />
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {allArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            )}

            {/* Load More */}
            {hasNextPage && (
              <div className="text-center mt-8">
                <Button
                  onClick={() => fetchNextPage()}
                  disabled={isFetchingNextPage}
                  className="min-w-32"
                >
                  {isFetchingNextPage ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Loading...
                    </>
                  ) : (
                    'Load More'
                  )}
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>

      <SettingsPanel
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};

export const FeedPage: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedContent />
    </QueryClientProvider>
  );
};
