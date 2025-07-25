import { MOCK_KEYWORDS } from "../data/mock-keywords";

import type { IKeyword, IKeywordFilter } from "../model/keyword.type";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchKeywordFilters = async (): Promise<IKeywordFilter[]> => {
  await delay(800);
  const res = getUniqueKeywordFilters(MOCK_KEYWORDS);

  console.log({ res });
  return res;
};

const getUniqueKeywordFilters = (keywords: IKeyword[]): IKeywordFilter[] => {
  const uniqueKeywords: IKeywordFilter[] = [];
  keywords.forEach((keyword) => {
    if (!uniqueKeywords.some((k) => k.slug === keyword.slug)) {
      uniqueKeywords.push({
        id: keyword.id,
        slug: keyword.slug,
        keyword: keyword.keyword,
      });
    }
  });

  return uniqueKeywords;
};
