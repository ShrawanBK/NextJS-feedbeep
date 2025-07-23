const PATH_ROOTS = {
  ROOT: "",
  TOPICS: "/topics",
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
};

export default PATHS;
