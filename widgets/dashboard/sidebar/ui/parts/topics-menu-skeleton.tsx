import { memo } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@radix-ui/react-collapsible";

import { cn } from "@/shared/utils";
import { Button } from "@/shared/rui/button";
import { Skeleton } from "@/shared/rui/skeleton";

interface TopicsMenuSkeletonItemProps {
  index: number;
  categoryActive: boolean;
  paramHasSubcategory: boolean;
  totalSubcategoryItems: number;
  activeCollapsibleItemIndex: number;
}

export const TopicsMenuSkeletonItem = memo(
  ({
    index,
    categoryActive,
    paramHasSubcategory,
    totalSubcategoryItems,
    activeCollapsibleItemIndex,
  }: TopicsMenuSkeletonItemProps) => {
    return (
      <Collapsible key={index} open={categoryActive}>
        <CollapsibleTrigger asChild>
          <Skeleton>
            <Button
              variant={categoryActive ? "default" : "ghost"}
              className={cn(
                "w-full justify-between rounded-full hover:bg-gray-100 dark:hover:bg-gray-800",
                categoryActive && !paramHasSubcategory && "hover:bg-primary/80",
                categoryActive &&
                  paramHasSubcategory &&
                  "bg-secondary/60 text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <div className="flex items-center">Loading category...</div>

              {categoryActive ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </Button>
          </Skeleton>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 pl-6">
          {Array.from({ length: totalSubcategoryItems }).map((_, subIndex) => {
            const subcagegoryActive = subIndex === activeCollapsibleItemIndex;
            return (
              <Skeleton
                key={subIndex}
                className={cn(
                  "w-full justify-between rounded-full hover:bg-gray-200 dark:hover:bg-gray-800",
                  subcagegoryActive && "hover:bg-primary/90"
                )}
              >
                <Button
                  variant={subcagegoryActive ? "default" : "ghost"}
                  size="sm"
                  className={cn(
                    "w-full justify-between rounded-full hover:bg-gray-200 dark:hover:bg-gray-800",
                    subcagegoryActive && "hover:bg-primary/90"
                  )}
                >
                  Subcategory
                </Button>
              </Skeleton>
            );
          })}
        </CollapsibleContent>
      </Collapsible>
    );
  }
);

TopicsMenuSkeletonItem.displayName = "TopicsMenuSkeletonItem";

export const TopicsMenuSkeleton = memo(() => {
  const totalCollapsibleItems = 3;
  const activeCollapsibleItemIndex = 0;
  const paramHasSubcategory = true;
  const totalSubcategoryItems = 4;

  return (
    <>
      {Array.from({ length: totalCollapsibleItems }).map((_, index) => {
        const categoryActive = index === activeCollapsibleItemIndex;
        return (
          <TopicsMenuSkeletonItem
            key={index}
            index={index}
            categoryActive={categoryActive}
            paramHasSubcategory={paramHasSubcategory}
            totalSubcategoryItems={totalSubcategoryItems}
            activeCollapsibleItemIndex={activeCollapsibleItemIndex}
          />
        );
      })}
    </>
  );
});

TopicsMenuSkeleton.displayName = "TopicsMenuSkeleton";
