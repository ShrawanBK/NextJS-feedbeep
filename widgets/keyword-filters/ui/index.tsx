import { useMemo, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useKeywordFilters } from "@/entities/keyword/api/queries";

import { Button } from "@/shared/rui/button";
import PATHS from "@/shared/config/routes/paths";
import { FiltersSkeleton } from "./parts/filters-skeleton";

interface KeywordFiltersProps {
  onClick?: () => void;
}

export const KeywordFilters = ({ onClick }: KeywordFiltersProps) => {
  const router = useRouter();
  const { data: keywordFilters = [], isLoading } = useKeywordFilters();

  const pathnameParams = useParams();

  const handleKeywordClick = useCallback(
    (keywordSlug: string) => {
      router.push(PATHS.keyword.slug(keywordSlug));
      if (window.innerWidth < 1024 && onClick) {
        onClick();
      }
    },
    [router, onClick]
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
    <div>
      <h3 className="mb-3 text-sm font-semibold tracking-wider text-gray-600 uppercase dark:text-gray-400">
        Quick Filters
      </h3>

      {isLoading ? (
        <FiltersSkeleton />
      ) : (
        <div className="flex flex-wrap gap-2">
          {keywordFilters.map((filter) => (
            <Button
              key={filter.id}
              variant={isActiveKeyword(filter.slug) ? "default" : "outline"}
              size="sm"
              className="rounded-full text-xs"
              onClick={() => handleKeywordClick(filter.slug)}
            >
              {filter.keyword}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
