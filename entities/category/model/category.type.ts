export interface ICategory {
  id: string; // PK
  name: string;
  slug: string;
  createdAt: Date;
}

export interface ISubCategory {
  id: string; // PK
  slug: string;
  name: string;
  createdAt: Date;
}

export interface ICategorySubcategory {
  id: string; // PK
  categoryId: string; // FK -> Category.id
  subcategoryId: string; // FK -> Subcategory.id
}

export interface ICategoryWithSubcategories extends ICategory {
  subcategories: ISubCategory[];
}
