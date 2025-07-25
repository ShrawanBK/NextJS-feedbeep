import { useQuery } from "@tanstack/react-query";

import { KEYWORD_QUERY_KEY } from "./query-keys";
import { fetchKeywordFilters } from "../functions/fetch-keyword-filters";

export const useKeywordFilters = () => {
  return useQuery({
    queryKey: KEYWORD_QUERY_KEY.allKeywords,
    queryFn: fetchKeywordFilters,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });
};
