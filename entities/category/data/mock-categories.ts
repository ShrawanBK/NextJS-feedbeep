import type {
  ICategory,
  ISubCategory,
  ICategoryKeyword,
} from "../model/category.type";

export const MOCK_CATEGORIES: ICategory[] = [
  {
    id: "technology",
    name: "Technology",
    slug: "technology",
  },
  {
    id: "business",
    name: "Business",
    slug: "business",
  },
  {
    id: "science",
    name: "Science",
    slug: "science",
  },
  {
    id: "politics",
    name: "Politics",
    slug: "politics",
  },
  {
    id: "sports",
    name: "Sports",
    slug: "sports",
  },
];

export const MOCK_SUB_CATEGORIES: ISubCategory[] = [
  {
    id: "ai-machine-learning",
    name: "AI & Machine Learning",
    categoryId: "technology",
    slug: "ai-machine-learning",
  },
  {
    id: "gadgets",
    name: "Gadgets",
    categoryId: "technology",
    slug: "gadgets",
  },
  {
    id: "startups",
    name: "Startups",
    categoryId: "technology",
    slug: "startups",
  },
  {
    id: "software",
    name: "Software",
    categoryId: "technology",
    slug: "software",
  },
  {
    id: "cybersecurity",
    name: "Cybersecurity",
    categoryId: "technology",
    slug: "cybersecurity",
  },
  {
    id: "markets",
    name: "Markets",
    categoryId: "business",
    slug: "markets",
  },
  {
    id: "economics",
    name: "Economics",
    categoryId: "business",
    slug: "economics",
  },
  {
    id: "finance",
    name: "Finance",
    categoryId: "business",
    slug: "finance",
  },
  {
    id: "research",
    name: "Research",
    categoryId: "science",
    slug: "research",
  },
  {
    id: "climate",
    name: "Climate",
    categoryId: "science",
    slug: "climate",
  },
  {
    id: "space",
    name: "Space",
    categoryId: "science",
    slug: "space",
  },
  {
    id: "health",
    name: "Health",
    categoryId: "science",
    slug: "health",
  },
  {
    id: "elections",
    name: "Elections",
    categoryId: "politics",
    slug: "elections",
  },
  {
    id: "policy",
    name: "Policy",
    categoryId: "politics",
    slug: "policy",
  },
  {
    id: "international",
    name: "International",
    categoryId: "politics",
    slug: "international",
  },
  {
    id: "football",
    name: "Football",
    categoryId: "sports",
    slug: "football",
  },
  {
    id: "basketball",
    name: "Basketball",
    categoryId: "sports",
    slug: "basketball",
  },
  {
    id: "soccer",
    name: "Soccer",
    categoryId: "sports",
    slug: "soccer",
  },
  {
    id: "olympics",
    name: "Olympics",
    categoryId: "sports",
    slug: "olympics",
  },
];

export const MOCK_KEYWORDS: ICategoryKeyword[] = [
  // Technology category
  { id: "1", categoryId: "technology", keyword: "tech" },
  { id: "2", categoryId: "technology", keyword: "ai" },
  { id: "3", categoryId: "technology", keyword: "software" },
  { id: "4", categoryId: "technology", keyword: "digital" },
  { id: "5", categoryId: "technology", keyword: "innovation" },

  // AI & Machine Learning subcategory
  {
    id: "6",
    categoryId: "technology",
    subCategoryId: "ai-machine-learning",
    keyword: "ai",
  },
  {
    id: "7",
    categoryId: "technology",
    subCategoryId: "ai-machine-learning",
    keyword: "machine learning",
  },
  {
    id: "8",
    categoryId: "technology",
    subCategoryId: "ai-machine-learning",
    keyword: "artificial",
  },

  // Business category
  { id: "9", categoryId: "business", keyword: "business" },
  { id: "10", categoryId: "business", keyword: "market" },
  { id: "11", categoryId: "business", keyword: "economy" },
  { id: "12", categoryId: "business", keyword: "finance" },

  // Science category
  { id: "13", categoryId: "science", keyword: "science" },
  { id: "14", categoryId: "science", keyword: "research" },
  { id: "15", categoryId: "science", keyword: "study" },
  { id: "16", categoryId: "science", keyword: "climate" },

  // Optional — Additional unlinked tags (for discovery/popularity-based logic)
  // These don't tie to a specific category but could be assigned if needed
  { id: "18", categoryId: "technology", keyword: "elon" },
  { id: "19", categoryId: "technology", keyword: "musk" },
  { id: "20", categoryId: "technology", keyword: "tesla" },
  { id: "21", categoryId: "technology", keyword: "spacex" },
  { id: "22", categoryId: "business", keyword: "bitcoin" },
  { id: "23", categoryId: "business", keyword: "crypto" },
  { id: "24", categoryId: "business", keyword: "blockchain" },
  { id: "25", categoryId: "technology", keyword: "apple" },
  { id: "26", categoryId: "technology", keyword: "iphone" },
  { id: "27", categoryId: "technology", keyword: "ios" },
  { id: "28", categoryId: "technology", keyword: "google" },
  { id: "29", categoryId: "technology", keyword: "android" },
  { id: "30", categoryId: "technology", keyword: "alphabet" },
];
