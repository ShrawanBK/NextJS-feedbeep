import { useQuery } from "@tanstack/react-query";

import { CATEGORY_QUERY_KEY } from "./query-keys";
import { fetchCategories } from "../functions/fetch-categories";

export const useCategories = () => {
  return useQuery({
    queryKey: CATEGORY_QUERY_KEY.allCategories,
    queryFn: fetchCategories,
  });
};
