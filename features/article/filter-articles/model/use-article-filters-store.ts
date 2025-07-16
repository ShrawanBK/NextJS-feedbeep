import { create } from "zustand";

interface ArticleFiltersState {
  filterCategory: string | null;
  filterSubCategory: string | null;
  searchQuery: string;
}

interface initializeProps {
  filterCategory?: string | null;
  filterSubCategory?: string | null;
  searchQuery?: string;
}

interface ArticleFiltersActions {
  setFilterCategory: (filter: string) => void;
  setFilterSubCategory: (filter: string) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  initialize: (props: initializeProps) => void;
}

type ArticleFiltersStore = ArticleFiltersState & ArticleFiltersActions;

const initialState: ArticleFiltersState = {
  filterCategory: null,
  filterSubCategory: null,
  searchQuery: "",
};

export const useArticleFiltersStore = create<ArticleFiltersStore>()((set) => ({
  ...initialState,
  setFilterCategory: (filter) => set({ filterCategory: filter }),
  setFilterSubCategory: (filter) => set({ filterSubCategory: filter }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () =>
    set({ filterCategory: null, filterSubCategory: null, searchQuery: "" }),
  initialize: (props) =>
    set({
      filterCategory: props.filterCategory ?? initialState.filterCategory,
      filterSubCategory:
        props.filterSubCategory ?? initialState.filterSubCategory,
      searchQuery: props.searchQuery ?? initialState.searchQuery,
    }),
}));
