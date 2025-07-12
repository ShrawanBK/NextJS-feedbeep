` tags, ensuring that no parts are skipped, indentation is preserved, and no forbidden words are included.

```typescript
<replit_final_file>
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

function FeedContent() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const { data: articles, isLoading: isLoadingArticles, error: articlesError } = useArticles();
  const { data: featuredArticle, isLoading: isLoadingFeatured, error: featuredError } = useFeaturedArticle();

  if (isLoadingArticles || isLoadingFeatured) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Loading your personalized feed...</p>
        </div>
      </div>
    );
  }

  if (articlesError || featuredError) {
    return (
      <div className="flex items-center justify-center min-h-screen">
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
    <div className="min-h-screen bg-background">
      <Header onSettingsClick={() => setIsSettingsOpen(true)} />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 max-w-4xl mx-auto p-8">
          {/* Welcome Message */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Good morning! Here's your news feed
            </h1>
            <p className="text-muted-foreground">
              {articles?.length || 0} articles found
            </p>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <FeaturedArticle article={featuredArticle} />
          )}

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles?.map((article) => (
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