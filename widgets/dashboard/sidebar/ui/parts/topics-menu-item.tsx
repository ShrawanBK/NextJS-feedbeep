import { useMemo } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import type { ICategoryWithSubcategories } from "@/entities/category/model/category.type";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";

import { cn } from "@/shared/utils";
import { Button } from "@/shared/rui/button";

interface TopicsMenuItemProps {
  category: ICategoryWithSubcategories;
  isCategoryActive: (categorySlug: string) => boolean;
  handleCategoryClick: (categorySlug: string) => void;
  isSubCategoryActive: (
    categorySlug: string,
    subCategorySlug: string
  ) => boolean;
  handleSubCategoryClick: (
    categorySlug: string,
    subCategorySlug: string
  ) => void;
  paramHasSubcategory: boolean;
}

export const TopicsMenuItem = ({
  category,
  isCategoryActive,
  handleCategoryClick,
  isSubCategoryActive,
  handleSubCategoryClick,
  paramHasSubcategory,
}: TopicsMenuItemProps) => {
  const categoryActive = useMemo(
    () => isCategoryActive(category.slug),
    [category.slug, isCategoryActive]
  );

  return (
    <Collapsible key={category.name} open={categoryActive}>
      <CollapsibleTrigger asChild>
        <Button
          variant={categoryActive ? "default" : "ghost"}
          className={cn(
            "w-full justify-between rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
            categoryActive && !paramHasSubcategory && "hover:bg-primary/80",
            categoryActive &&
              paramHasSubcategory &&
              "bg-secondary/60 text-secondary-foreground hover:bg-secondary/80"
          )}
          onClick={(e) => {
            e.stopPropagation();
            handleCategoryClick(category.slug);
          }}
        >
          <div className="flex items-center">{category.name}</div>
          {categoryActive ? (
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
                handleSubCategoryClick(category.slug, subCategory.slug)
              }
            >
              {subCategory.name}
            </Button>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
};
