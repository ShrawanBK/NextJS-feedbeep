import type {
  ICategory,
  ISubCategory,
  ICategorySubcategory,
} from "../model/category.type";

export const MOCK_CATEGORIES: ICategory[] = [
  {
    id: "technology",
    name: "Technology",
    slug: "technology",
    createdAt: new Date(),
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
    createdAt: new Date(),
  },
  {
    id: "science",
    name: "Science",
    slug: "science",
    createdAt: new Date(),
  },
  {
    id: "politics",
    name: "Politics",
    slug: "politics",
    createdAt: new Date(),
  },
  {
    id: "sports",
    name: "Sports",
    slug: "sports",
    createdAt: new Date(),
  },
];

export const MOCK_SUB_CATEGORIES: ISubCategory[] = [
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    slug: "ai-machine-learning",
    createdAt: new Date(),
  },
  {
    id: "gadgets",
    name: "Gadgets",
    slug: "gadgets",
    createdAt: new Date(),
  },
  {
    id: "startups",
    name: "Startups",
    slug: "startups",
    createdAt: new Date(),
  },
  {
    id: "software",
    name: "Software",
    slug: "software",
    createdAt: new Date(),
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    slug: "cybersecurity",
    createdAt: new Date(),
  },
  {
    id: "markets",
    name: "Markets",
    slug: "markets",
    createdAt: new Date(),
  },
  {
    id: "economics",
    name: "Economics",
    slug: "economics",
    createdAt: new Date(),
  },
  {
    id: "finance",
    name: "Finance",
    slug: "finance",
    createdAt: new Date(),
  },
  {
    id: "research",
    name: "Research",
    slug: "research",
    createdAt: new Date(),
  },
  {
    id: "climate",
    name: "Climate",
    slug: "climate",
    createdAt: new Date(),
  },
  {
    id: "space",
    name: "Space",
    slug: "space",
    createdAt: new Date(),
  },
  {
    id: "health",
    name: "Health",
    slug: "health",
    createdAt: new Date(),
  },
  {
    id: "elections",
    name: "Elections",
    slug: "elections",
    createdAt: new Date(),
  },
  {
    id: "policy",
    name: "Policy",
    slug: "policy",
    createdAt: new Date(),
  },
  {
    id: "international",
    name: "International",
    slug: "international",
    createdAt: new Date(),
  },
  {
    id: "football",
    name: "Football",
    slug: "football",
    createdAt: new Date(),
  },
  {
    id: "basketball",
    name: "Basketball",
    slug: "basketball",
    createdAt: new Date(),
  },
  {
    id: "soccer",
    name: "Soccer",
    slug: "soccer",
    createdAt: new Date(),
  },
  {
    id: "olympics",
    name: "Olympics",
    slug: "olympics",
    createdAt: new Date(),
  },
];

export const MOCK_CATEGORY_SUBCATEGORIES: ICategorySubcategory[] = [
  {
    id: "technology-ai-machine-learning",
    categoryId: "technology",
    subcategoryId: "ai-machine-learning",
  },
  {
    id: "technology-gadgets",
    categoryId: "technology",
    subcategoryId: "gadgets",
  },
  {
    id: "technology-software",
    categoryId: "technology",
    subcategoryId: "software",
  },
  {
    id: "technology-cybersecurity",
    categoryId: "technology",
    subcategoryId: "cybersecurity",
  },
  {
    id: "business-startups",
    categoryId: "business",
    subcategoryId: "startups",
  },
  {
    id: "business-markets",
    categoryId: "business",
    subcategoryId: "markets",
  },
  {
    id: "business-economics",
    categoryId: "business",
    subcategoryId: "economics",
  },
  {
    id: "business-finance",
    categoryId: "business",
    subcategoryId: "finance",
  },
  {
    id: "science-research",
    categoryId: "science",
    subcategoryId: "research",
  },
  {
    id: "science-climate",
    categoryId: "science",
    subcategoryId: "climate",
  },
  {
    id: "science-space",
    categoryId: "science",
    subcategoryId: "space",
  },
  {
    id: "science-health",
    categoryId: "science",
    subcategoryId: "health",
  },
  {
    id: "politics-elections",
    categoryId: "politics",
    subcategoryId: "elections",
  },
  {
    id: "politics-policy",
    categoryId: "politics",
    subcategoryId: "policy",
  },
  {
    id: "politics-international",
    categoryId: "politics",
    subcategoryId: "international",
  },
  {
    id: "sports-football",
    categoryId: "sports",
    subcategoryId: "football",
  },
  {
    id: "sports-basketball",
    categoryId: "sports",
    subcategoryId: "basketball",
  },
  {
    id: "sports-soccer",
    categoryId: "sports",
    subcategoryId: "soccer",
  },
  {
    id: "sports-olympics",
    categoryId: "sports",
    subcategoryId: "olympics",
  },
];
