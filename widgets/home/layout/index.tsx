import React, { useState } from "react";
import Header from "@/widgets/home/header/ui";
import Sidebar from "@/widgets/home/sidebar/ui";
import { FeaturedArticle } from "@/widgets/articles/featured-article/ui";
import { useArticleFiltersStore } from "@/features/article/filter-articles";
import { TopicArticleList } from "@/widgets/articles/list/ui/topic-article-list";

const HomeLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { filterMain } = useArticleFiltersStore();

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSearch = (query: string) => {
    console.log(query);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header
        onMenuToggle={handleMenuToggle}
        isSidebarOpen={isSidebarOpen}
        onSearch={handleSearch}
      />

      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <main className="flex-1 overflow-y-auto">
          <div className="mx-auto max-w-4xl p-6">
            <TopicArticleList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
