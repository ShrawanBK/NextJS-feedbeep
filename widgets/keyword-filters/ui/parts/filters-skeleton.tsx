import { memo } from "react";

import { Button } from "@/shared/rui/button";
import { Skeleton } from "@/shared/rui/skeleton";

interface FiltersSkeletonItemProps {
  isActive: boolean;
}

export const FiltersSkeletonItem = memo(
  ({ isActive }: FiltersSkeletonItemProps) => {
    return (
      <Skeleton className="rounded-full">
        <Button
          variant={isActive ? "default" : "ghost"}
          className="rounded-full text-xs"
          size="sm"
        >
          <div className="flex items-center">Loading...</div>
        </Button>
      </Skeleton>
    );
  }
);

FiltersSkeletonItem.displayName = "FiltersSkeletonItem";

export const FiltersSkeleton = memo(() => {
  const totalFilters = 10;
  const activeCollapsibleItemIndex = 0;

  return (
    <div className="flex flex-wrap gap-2">
      {Array.from({ length: totalFilters }).map((_, index) => {
        const isActive = index === activeCollapsibleItemIndex;
        return <FiltersSkeletonItem key={index} isActive={isActive} />;
      })}
    </div>
  );
});

FiltersSkeleton.displayName = "FiltersSkeleton";
