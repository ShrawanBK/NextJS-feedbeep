import React, { useState } from "react";
import { useCategories } from "@/src/entities/category/hooks/use-categories";
import {
  X,
  Tag,
  Home,
  Bookmark,
  TrendingUp,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { Button } from "@/shared/rui/button";
import { useArticleFiltersStore } from "@/src/shared/stores/use-article-filters-store";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/rui/collapsible";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const quickFilters = [
  "Elon Musk",
  "Climate Change",
  "AI",
  "Bitcoin",
  "Apple",
  "Google",
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedTopics, setExpandedTopics] = useState<string[]>([
    "Technology",
  ]);
  const { data: categories = [] } = useCategories();
  const {
    filterCategory,
    filterSubCategory,
    setFilterCategory,
    setFilterSubCategory,
    resetFilters,
  } = useArticleFiltersStore();

  const toggleTopic = (topicName: string) => {
    setExpandedTopics((prev) =>
      prev.includes(topicName)
        ? prev.filter((name) => name !== topicName)
        : [...prev, topicName]
    );
  };

  const handleMainFilterClick = (filter: string) => {
    if (filter === "Home") {
      resetFilters();
    } else {
      setFilterCategory(filter);
    }
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handleCategoryClick = (category: string) => {
    setFilterCategory(category);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const handleSubCategoryClick = (subCategory: string) => {
    setFilterSubCategory(subCategory);
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const isActive = (
    item: string,
    type: "main" | "category" | "subcategory"
  ) => {
    if (type === "main") {
      if (item === "Home") return !filterCategory && !filterSubCategory;
      return filterCategory === item && !filterSubCategory;
    }
    if (type === "category") {
      return filterCategory === item && !filterSubCategory;
    }
    if (type === "subcategory") {
      return filterSubCategory === item;
    }
    return false;
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`border-sidebar-border bg-sidebar-background fixed top-0 left-0 z-50 flex h-full w-80 transform flex-col border-r transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:h-[calc(100vh-4rem)] lg:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}
      >
        {/* Mobile close button */}
        <div className="border-sidebar-border flex flex-shrink-0 items-center justify-between border-b p-4 lg:hidden">
          <span className="text-sidebar-foreground text-lg font-semibold">
            Menu
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-sidebar-foreground hover:bg-sidebar-accent rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {/* Main Navigation */}
            <div className="mb-6 space-y-2">
              <Button
                variant={isActive("Home", "main") ? "default" : "ghost"}
                className={`w-full justify-start rounded-full text-left transition-colors ${
                  isActive("Home", "main")
                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => handleMainFilterClick("Home")}
              >
                <Home className="mr-3 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Home</span>
              </Button>

              <Button
                variant={isActive("Trending", "main") ? "default" : "ghost"}
                className={`w-full justify-start rounded-full text-left transition-colors ${
                  isActive("Trending", "main")
                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => handleMainFilterClick("Trending")}
              >
                <TrendingUp className="mr-3 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Trending</span>
              </Button>

              <Button
                variant={isActive("Read Later", "main") ? "default" : "ghost"}
                className={`w-full justify-start rounded-full text-left transition-colors ${
                  isActive("Read Later", "main")
                    ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                }`}
                onClick={() => handleMainFilterClick("Read Later")}
              >
                <Bookmark className="mr-3 h-4 w-4 flex-shrink-0" />
                <span className="truncate">Read Later</span>
              </Button>
            </div>

            {/* Topics */}
            <div className="mb-6">
              <h3 className="text-sidebar-foreground/60 mb-3 text-left text-sm font-semibold tracking-wider uppercase">
                Topics
              </h3>
              <div className="space-y-1">
                {categories.map((topic) => (
                  <Collapsible
                    key={topic.name}
                    open={expandedTopics.includes(topic.name)}
                    onOpenChange={() => toggleTopic(topic.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant="ghost"
                        className={`w-full justify-between rounded-full text-left transition-colors ${
                          isActive(topic.name, "category")
                            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(topic.name);
                        }}
                      >
                        <div className="flex min-w-0 flex-1 items-center">
                          <Tag className="mr-3 h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{topic.name}</span>
                        </div>
                        <div className="ml-2 flex-shrink-0">
                          {expandedTopics.includes(topic.name) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-1 space-y-1">
                      {topic.subcategories?.map((sub) => (
                        <Button
                          key={sub}
                          variant="ghost"
                          size="sm"
                          className={`ml-6 w-full justify-start rounded-full text-left transition-colors ${
                            isActive(sub, "subcategory")
                              ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                              : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                          }`}
                          onClick={() => handleSubCategoryClick(sub)}
                        >
                          <span className="truncate">{sub}</span>
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <h3 className="text-sidebar-foreground/60 mb-3 text-left text-sm font-semibold tracking-wider uppercase">
                Quick Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    className={`flex-shrink-0 rounded-full text-xs transition-colors ${
                      isActive(filter, "category")
                        ? "bg-sidebar-primary text-sidebar-primary-foreground border-sidebar-primary hover:bg-sidebar-primary/90"
                        : "border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    }`}
                    onClick={() => handleCategoryClick(filter)}
                  >
                    <span className="truncate">{filter}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
