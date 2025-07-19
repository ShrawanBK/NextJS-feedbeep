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
  setFilterSubCategory: (category: string, subCategory: string) => void;
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
    set({ filterMain: null, filterCategory: filter, filterSubCategory: null });
  },
  setFilterSubCategory: (category, subCategory) =>
    set({
      filterSubCategory: subCategory,
      filterCategory: category,
      filterMain: null,
    }),
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
