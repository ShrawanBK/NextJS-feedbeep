import { create } from "zustand";

interface initializeProps {
  filterMain?: string | null;
  filterCategory?: string | null;
  filterSubCategory?: string | null;
  searchQuery?: string;
}

interface ArticleFiltersState {
  filterMain: string | null;
  filterCategory: string | null;
  filterSubCategory: string | null;
  searchQuery: string;
}

interface ArticleFiltersActions {
  setFilterMain: (filter: string) => void;
  setFilterCategory: (filter: string) => void;
  setFilterSubCategory: (filter: string) => void;
  setSearchQuery: (query: string) => void;
  resetFilters: () => void;
  initialize: (props: initializeProps) => void;
}

type ArticleFiltersStore = ArticleFiltersState & ArticleFiltersActions;

const initialState: ArticleFiltersState = {
  filterMain: "Home",
  filterCategory: null,
  filterSubCategory: null,
  searchQuery: "",
};

export const useArticleFiltersStore = create<ArticleFiltersStore>()((set) => ({
  ...initialState,
  setFilterMain: (filter) =>
    set({
      filterMain: filter,
      filterCategory: null,
      filterSubCategory: null,
    }),
  setFilterCategory: (filter) => {
    set({ filterCategory: filter, filterSubCategory: null });
  },
  setFilterSubCategory: (filter) => set({ filterSubCategory: filter }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  resetFilters: () => set(initialState),
  initialize: (props) =>
    set({
      filterMain: props.filterMain ?? initialState.filterMain,
      filterCategory: props.filterCategory ?? initialState.filterCategory,
      filterSubCategory:
        props.filterSubCategory ?? initialState.filterSubCategory,
      searchQuery: props.searchQuery ?? initialState.searchQuery,
    }),
}));
