import { useMemo, useState } from "react";
import React, { useCallback } from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { X, ChevronDown, ChevronRight } from "lucide-react";
import { useCategories } from "@/entities/category/api/queries";
import { useArticleFiltersStore } from "@/features/article/filter-articles";

import { cn } from "@/shared/utils";
import { Button } from "@/shared/rui/button";
import PATHS from "@/shared/config/routes/paths";
import { ScrollArea } from "@/shared/rui/scroll-area";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/shared/rui/collapsible";

import { MAIN_MENU } from "../constant/mainmenu.constant";

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
  const router = useRouter();
  const { data: categories = [] } = useCategories();
  const { filterMain, filterCategory, filterSubCategory } =
    useArticleFiltersStore();

  const pathname = usePathname();

  const pathnameParams = useParams();

  const isActiveMainMenu = useCallback(
    (label: string) => {
      return pathname === label;
    },
    [pathname]
  );

  const handleMainMenuClick = useCallback(
    (label: string) => {
      router.push(label);
      if (window.innerWidth < 1024) {
        onClose();
      }
    },
    [router, onClose]
  );

  const [expandedCategory, setExpandedCategory] = useState<string>(
    (filterCategory ?? categories.length > 0) ? categories[0].name : ""
  );

  const isCategoryActive = useCallback(
    (categorySlug: string) => {
      return categorySlug === pathnameParams.catSlug;
    },
    [pathnameParams.catSlug]
  );

  const handleCategoryClick = (category: string) => {
    router.push(PATHS.topics.category(category.toLowerCase()));
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  const paramHasSubcategory = useMemo(
    () => !!pathnameParams.subcatSlug,
    [pathnameParams.subcatSlug]
  );

  const isSubCategoryActive = useCallback(
    (categorySlug: string, subCategorySlug: string) => {
      return (
        categorySlug === pathnameParams.catSlug &&
        subCategorySlug === pathnameParams.subcatSlug
      );
    },
    [pathnameParams.catSlug, pathnameParams.subcatSlug]
  );

  const handleSubCategoryClick = (
    categorySlug: string,
    subCategorySlug: string
  ) => {
    router.push(PATHS.topics.subCategory(categorySlug, subCategorySlug));
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
              {MAIN_MENU.map((item) => (
                <Button
                  key={item.label}
                  variant={isActiveMainMenu(item.path) ? "default" : "ghost"}
                  className="w-full justify-start rounded-full"
                  onClick={() => handleMainMenuClick(item.path as string)}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Topics */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
                Topics
              </h3>
              <div className="space-y-1">
                {categories.map((category) => {
                  const categoryActive = isCategoryActive(category.slug);

                  return (
                    <Collapsible
                      key={category.name}
                      open={expandedCategory === category.name}
                      onOpenChange={() => setExpandedCategory(category.name)}
                    >
                      <CollapsibleTrigger asChild>
                        <Button
                          variant={categoryActive ? "default" : "ghost"}
                          className={cn(
                            "w-full justify-between rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
                            categoryActive &&
                              !paramHasSubcategory &&
                              "hover:bg-primary/80",
                            categoryActive &&
                              paramHasSubcategory &&
                              "bg-secondary/60 text-secondary-foreground hover:bg-secondary/80"
                          )}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCategoryClick(category.slug);
                          }}
                        >
                          <div className="flex items-center">
                            {category.name}
                          </div>
                          {expandedCategory === category.name ? (
                            <ChevronDown className="h-4 w-4" />
                          ) : (
                            <ChevronRight className="h-4 w-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="space-y-1 pl-6">
                        {category.subcategories?.map((subCategory) => {
                          const subcagegoryActive = isSubCategoryActive(
                            category.slug,
                            subCategory.slug
                          );
                          return (
                            <Button
                              key={subCategory.id}
                              variant={subcagegoryActive ? "default" : "ghost"}
                              size="sm"
                              className={cn(
                                "w-full justify-between rounded-full hover:bg-gray-200 dark:hover:bg-gray-800",
                                subcagegoryActive && "hover:bg-primary/90"
                              )}
                              onClick={() =>
                                handleSubCategoryClick(
                                  category.slug,
                                  subCategory.slug
                                )
                              }
                            >
                              {subCategory.name}
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
