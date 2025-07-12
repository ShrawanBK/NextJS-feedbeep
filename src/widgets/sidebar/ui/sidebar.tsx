
import React, { useState } from "react";
import {
  Home,
  Bookmark,
  TrendingUp,
  Tag,
  ChevronRight,
  ChevronDown,
  X,
} from "lucide-react";
import { Button } from "@/shared/ui/button";
import { ScrollArea } from "@/shared/ui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/ui/collapsible";
import { useCategories } from "@/entities/category/hooks/use-categories";
import { useArticleFiltersStore } from "@/shared/stores/use-article-filters-store";

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
        : [...prev, topicName],
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
    type: "main" | "category" | "subcategory",
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
        className={`
        fixed lg:relative top-0 lg:top-0 left-0 z-50 w-80 h-full transform border-r border-sidebar-border bg-sidebar-background transition-transform duration-300 ease-in-out flex flex-col
        lg:translate-x-0 lg:h-[calc(100vh-4rem)]
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border lg:hidden flex-shrink-0">
          <span className="text-lg font-semibold text-sidebar-foreground">
            Menu
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {/* Main Navigation */}
            <div className="space-y-2 mb-6">
              <Button
                variant={isActive("Home", "main") ? "default" : "ghost"}
                className={`w-full justify-start rounded-full transition-colors text-left ${
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
                className={`w-full justify-start rounded-full transition-colors text-left ${
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
                className={`w-full justify-start rounded-full transition-colors text-left ${
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
              <h3 className="mb-3 text-sm font-semibold text-sidebar-foreground/60 uppercase tracking-wider text-left">
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
                        className={`w-full justify-between rounded-full transition-colors text-left ${
                          isActive(topic.name, "category")
                            ? "bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCategoryClick(topic.name);
                        }}
                      >
                        <div className="flex items-center min-w-0 flex-1">
                          <Tag className="mr-3 h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{topic.name}</span>
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          {expandedTopics.includes(topic.name) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </div>
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1 mt-1">
                      {topic.subcategories?.map((sub) => (
                        <Button
                          key={sub}
                          variant="ghost"
                          size="sm"
                          className={`w-full justify-start rounded-full ml-6 transition-colors text-left ${
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
              <h3 className="mb-3 text-sm font-semibold text-sidebar-foreground/60 uppercase tracking-wider text-left">
                Quick Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    className={`rounded-full text-xs transition-colors flex-shrink-0 ${
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
