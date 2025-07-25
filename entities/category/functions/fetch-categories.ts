import {
  MOCK_CATEGORIES,
  MOCK_SUB_CATEGORIES,
  MOCK_CATEGORY_SUBCATEGORIES,
} from "../data/mock-categories";

import type {
  ICategory,
  ISubCategory,
  ICategorySubcategory,
  ICategoryWithSubcategories,
} from "../model/category.type";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCategories = async (): Promise<
  ICategoryWithSubcategories[]
> => {
  await delay(800);
  const res = mapCategorySubCategory(
    MOCK_CATEGORIES,
    MOCK_SUB_CATEGORIES,
    MOCK_CATEGORY_SUBCATEGORIES
  );

  console.log({ res });
  return res;
};

const mapCategorySubCategory = (
  categories: ICategory[],
  subcategories: ISubCategory[],
  categorySubcategories: ICategorySubcategory[]
): ICategoryWithSubcategories[] => {
  return categories.map((category) => {
    return {
      ...category,
      subcategories: subcategories.filter((subcategory) =>
        categorySubcategories.some(
          (categorySubcategory) =>
            categorySubcategory.categoryId === category.id &&
            categorySubcategory.subcategoryId === subcategory.id
        )
      ),
    };
  });
};
