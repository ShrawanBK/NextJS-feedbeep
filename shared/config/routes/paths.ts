const PATH_ROOTS = {
  ROOT: "",
  TOPICS: "/topics",
  KEYWORD: "/keyword",
} as const;

const PATHS = {
  root: {
    home: `${PATH_ROOTS.ROOT}/home`,
    trending: `${PATH_ROOTS.ROOT}/trending`,
    readLater: `${PATH_ROOTS.ROOT}/read-later`,
  },
  topics: {
    root: PATH_ROOTS.TOPICS,
    category: (category: string) => `${PATH_ROOTS.TOPICS}/${category}`,
    subCategory: (category: string, subCategory: string) =>
      `${PATH_ROOTS.TOPICS}/${category}/${subCategory}`,
    article: (category: string, subCategory: string, article: string) =>
      `${PATH_ROOTS.TOPICS}/${category}/${subCategory}/${article}`,
  },
  keyword: {
    root: PATH_ROOTS.KEYWORD,
    slug: (keywordSlug: string) => `${PATH_ROOTS.KEYWORD}/${keywordSlug}`,
  },
};

export default PATHS;
