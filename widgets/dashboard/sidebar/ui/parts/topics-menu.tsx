import { useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useCategories } from "@/entities/category/api/queries";

import PATHS from "@/shared/config/routes/paths";

import { TopicsMenuItem } from "./topics-menu-item";
import { TopicsMenuSkeleton } from "./topics-menu-skeleton";

interface TopicsMenuProps {
  onClose: () => void;
}

export const TopicsMenu = ({ onClose }: TopicsMenuProps) => {
  const { data: categories = [], isLoading } = useCategories();
  const router = useRouter();

  const pathnameParams = useParams();

  const paramHasCategory = useMemo(
    () => !!pathnameParams.catSlug,
    [pathnameParams.catSlug]
  );

  const isCategoryActive = useCallback(
    (categorySlug: string) => {
      if (!paramHasCategory) {
        return false;
      }
      return categorySlug === pathnameParams.catSlug;
    },
    [pathnameParams.catSlug, paramHasCategory]
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

  return (
    <div className="mb-6">
      <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
        Topics
      </h3>
      {isLoading ? (
        <div className="space-y-1">
          <TopicsMenuSkeleton />
        </div>
      ) : (
        <div className="space-y-1">
          {categories.map((category) => (
            <TopicsMenuItem
              key={category.slug}
              category={category}
              isCategoryActive={isCategoryActive}
              handleCategoryClick={handleCategoryClick}
              isSubCategoryActive={isSubCategoryActive}
              handleSubCategoryClick={handleSubCategoryClick}
              paramHasSubcategory={paramHasSubcategory}
            />
          ))}
        </div>
      )}
    </div>
  );
};
