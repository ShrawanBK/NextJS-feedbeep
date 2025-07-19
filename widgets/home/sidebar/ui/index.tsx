import { useState } from "react";
import React, { useCallback } from "react";
import { useCategories } from "@/entities/category/api/queries";
import { useArticleFiltersStore } from "@/features/article/filter-articles";
import {
  X,
  Home,
  Bookmark,
  TrendingUp,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { cn } from "@/shared/utils";
import { Button } from "@/shared/rui/button";
import { ScrollArea } from "@/shared/rui/scroll-area";
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
  "Meta",
  "Tesla",
  "Amazon",
  "Microsoft",
];

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const { data: categories = [] } = useCategories();
  const {
    filterMain,
    filterCategory,
    filterSubCategory,
    setFilterMain,
    setFilterCategory,
    setFilterSubCategory,
  } = useArticleFiltersStore();

  const [expandedTopics, setExpandedTopics] = useState<string[]>(
    filterCategory
      ? [filterCategory]
      : categories.length > 0
        ? [categories[0].name]
        : []
  );

  const toggleTopic = (topicName: string) => {
    setExpandedTopics((prev) =>
      prev.includes(topicName)
        ? prev.filter((name) => name !== topicName)
        : [...prev, topicName]
    );
  };

  const handleMainFilterClick = (filter: string) => {
    setFilterMain(filter);
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

  const isActive = useCallback(
    (item: string, type: "main" | "category" | "subcategory") => {
      if (type === "main") {
        return filterMain === item && !filterCategory && !filterSubCategory;
      }
      if (type === "category") {
        return filterCategory === item && !filterSubCategory;
      }
      if (type === "subcategory") {
        return filterSubCategory === item;
      }
      return false;
    },
    [filterCategory, filterMain, filterSubCategory]
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:flex lg:translate-x-0 lg:flex-col dark:border-gray-700 dark:bg-gray-900 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between border-b p-4 lg:hidden dark:border-gray-700">
          <span className="text-lg font-semibold dark:text-white">Menu</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            {/* Main Navigation */}
            <div className="mb-6 space-y-2">
              <Button
                variant={isActive("Home", "main") ? "default" : "ghost"}
                className="w-full justify-start rounded-full"
                onClick={() => handleMainFilterClick("Home")}
              >
                <Home className="mr-3 h-4 w-4" />
                Home
              </Button>

              <Button
                variant={isActive("Trending", "main") ? "default" : "ghost"}
                className="w-full justify-start rounded-full"
                onClick={() => handleMainFilterClick("Trending")}
              >
                <TrendingUp className="mr-3 h-4 w-4" />
                Trending
              </Button>

              <Button
                variant={isActive("Read Later", "main") ? "default" : "ghost"}
                className="w-full justify-start rounded-full"
                onClick={() => handleMainFilterClick("Read Later")}
              >
                <Bookmark className="mr-3 h-4 w-4" />
                Read Later
              </Button>
            </div>

            {/* Topics */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                Topics
              </h3>
              <div className="space-y-1">
                {categories.map((topic) => {
                  const isCategoryActive = isActive(topic.name, "category");

                  return (
                    <Collapsible
                      key={topic.name}
                      open={expandedTopics.includes(topic.name)}
                      onOpenChange={() => toggleTopic(topic.name)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant={isCategoryActive ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-between rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
                            isCategoryActive && "hover:bg-primary/90"
                          )}
                          onClick={(e) => {
                            console.log("topic.name", topic.name);
                            e.stopPropagation();
                            handleCategoryClick(topic.name);
                          }}
                        >
                          <div className="flex items-center">
                            {/* <topic.icon className="mr-3 h-4 w-4" /> */}
                            {topic.name}
                          </div>
                          {expandedTopics.includes(topic.name) ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-6">
                        {topic.subcategories?.map((sub) => {
                          const isSubCategoryActive = isActive(
                            sub.name,
                            "subcategory"
                          );
                          return (
                            <Button
                              key={sub.id}
                              variant={
                                isSubCategoryActive ? "default" : "ghost"
                              }
                              size="sm"
                              className={cn(
                                "w-full justify-between rounded-full hover:bg-gray-200 dark:hover:bg-gray-800",
                                isSubCategoryActive && "hover:bg-primary/90"
                              )}
                              onClick={() => handleSubCategoryClick(sub.name)}
                            >
                              {sub.name}
                            </Button>
                          );
                        })}
                      </CollapsibleContent>
                    </Collapsible>
                  );
                })}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                Quick Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={
                      isActive(filter, "category") ? "default" : "outline"
                    }
                    size="sm"
                    className="rounded-full text-xs"
                    onClick={() => handleCategoryClick(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};

export default Sidebar;
