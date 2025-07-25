import { X } from "lucide-react";
import { useMemo, useState } from "react";
import React, { useCallback } from "react";
import { KeywordFilters } from "@/widgets/keyword-filters/ui";
import { useCategories } from "@/entities/category/api/queries";
import { useKeywordFilters } from "@/entities/keyword/api/queries";
import { useRouter, useParams, usePathname } from "next/navigation";
import { useArticleFiltersStore } from "@/features/article/filter-articles";

import { Button } from "@/shared/rui/button";
import PATHS from "@/shared/config/routes/paths";
import { ScrollArea } from "@/shared/rui/scroll-area";

import { TopicsMenu } from "./parts/topics-menu";
import { MAIN_MENU } from "../constant/mainmenu.constant";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const router = useRouter();
  const { data: categories = [] } = useCategories();

  const { data: keywordFilters = [] } = useKeywordFilters();

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
      if (!pathnameParams.catSlug) {
        return false;
      }
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
      if (!paramHasSubcategory) {
        return false;
      }
      return (
        categorySlug === pathnameParams.catSlug &&
        subCategorySlug === pathnameParams.subcatSlug
      );
    },
    [pathnameParams.catSlug, pathnameParams.subcatSlug, paramHasSubcategory]
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

  const handleKeywordClick = useCallback(
    (keywordSlug: string) => {
      router.push(PATHS.keyword.slug(keywordSlug));
      if (window.innerWidth < 1024) {
        onClose();
      }
    },
    [router, onClose]
  );

  const pathnameHasKeyword = useMemo(
    () => !!pathnameParams.keywordSlug,
    [pathnameParams.keywordSlug]
  );

  const isActiveKeyword = useCallback(
    (keywordSlug: string) => {
      if (!pathnameHasKeyword) {
        return false;
      }
      return keywordSlug === pathnameParams.keywordSlug;
    },
    [pathnameParams.keywordSlug, pathnameHasKeyword]
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
            <TopicsMenu onClose={onClose} />

            {/* Quick Filters */}
            <KeywordFilters onClick={onClose} />
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};

export default Sidebar;
