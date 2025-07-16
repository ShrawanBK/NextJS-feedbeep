export const articleKeys = {
  all: ["articles"] as const,
  page: (page: number) => [...articleKeys.all, "page", page] as const,
};
