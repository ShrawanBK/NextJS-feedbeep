import { MOCK_CATEGORIES, MOCK_SUB_CATEGORIES } from "../data/mock-categories";

import type {
  ICategory,
  ISubCategory,
  ICategoryWithSubcategories,
} from "../model/category.type";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCategories = async (): Promise<
  ICategoryWithSubcategories[]
> => {
  await delay(800);
  const res = mapCategorySubCategory(MOCK_CATEGORIES, MOCK_SUB_CATEGORIES);
  return res;
};

const mapCategorySubCategory = (
  categories: ICategory[],
  subcategories: ISubCategory[]
): ICategoryWithSubcategories[] => {
  return categories.map((category) => {
    return {
      ...category,
      subcategories: subcategories.filter(
        (subcategory) => subcategory.categoryId === category.id
      ),
    };
  });
};
