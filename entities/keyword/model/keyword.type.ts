export interface IKeyword {
  id: string; // PK
  categoryId?: string | null;
  subCategoryId?: string | null; // FK -> Category.id (nullable)
  keyword: string;
  slug: string;
}

export type IKeywordFilter = Pick<IKeyword, "id" | "slug" | "keyword">;
