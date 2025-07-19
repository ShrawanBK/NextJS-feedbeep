export interface ICategory {
  id: string;
  name: string;
  slug: string;
}

export interface ISubCategory {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
}

export interface ICategoryKeyword {
  id: string;
  categoryId: string;
  subCategoryId?: string;
  keyword: string;
}

export interface ICategoryWithSubcategories extends ICategory {
  subcategories: ISubCategory[];
}
