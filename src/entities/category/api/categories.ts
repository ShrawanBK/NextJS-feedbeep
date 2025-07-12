
import { delay } from "../../../shared/lib/utils";

export interface Category {
  id: string;
  name: string;
  subcategories?: string[];
}

const mockCategories: Category[] = [
  {
    id: "tech",
    name: "Technology",
    subcategories: ["AI & Machine Learning", "Gadgets", "Startups", "Software", "Cybersecurity"]
  },
  {
    id: "business",
    name: "Business",
    subcategories: ["Markets", "Startups", "Personal Finance", "Cryptocurrency", "Economy"]
  },
  {
    id: "science",
    name: "Science",
    subcategories: ["Space", "Health", "Environment", "Research", "Climate"]
  },
  {
    id: "politics",
    name: "Politics",
    subcategories: ["Elections", "Policy", "International", "Local News"]
  },
  {
    id: "sports",
    name: "Sports",
    subcategories: ["Football", "Basketball", "Soccer", "Olympics", "E-Sports"]
  }
];

export const fetchCategories = async (): Promise<Category[]> => {
  await delay(300);
  return mockCategories;
};
