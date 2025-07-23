// ---------- USERS ----------

export interface User {
  id: string; // PK (Supabase UUID)
  username: string;
  email: string;
  created_at: Date;

  active_subscription_id?: string; // FK -> Subscription.id
}

// User’s subscription history
export interface UserSubscription {
  id: string; // PK
  user_id: string; // FK -> User.id
  subscription_id: string; // FK -> Subscription.id
  start_date: Date;
  end_date: Date;
  status: "active" | "cancelled" | "expired";
}

export interface Subscription {
  id: string; // PK
  type: "Free" | "Premium" | "Trial";
  price_cents: number;
  created_at: Date;
}

// ---------- USER SETTINGS & PREFERENCES ----------

export interface UserSettings {
  id: string; // PK
  user_id: string; // FK -> User.id
  theme: "light" | "dark";
  article_frequency: "daily" | "weekly" | "monthly";
  preferred_languages: string[]; // e.g., ['en', 'fi']
  created_at: Date;
}

export interface UserCategoryPreference {
  id: string; // PK
  user_id: string; // FK -> User.id
  category_id: string; // FK -> Category.id
}

export interface UserSubcategoryPreference {
  id: string; // PK
  user_id: string; // FK -> User.id
  subcategory_id: string; // FK -> Subcategory.id
}

export interface UserKeywordPreference {
  id: string; // PK
  user_id: string; // FK -> User.id
  keyword_id: string; // FK -> Keyword.id
}

// ---------- CATEGORY SYSTEM ----------

export interface Category {
  id: string; // PK
  name: string;
  slug: string;
  created_at: Date;
}

export interface Subcategory {
  id: string; // PK
  name: string;
  slug: string;
  created_at: Date;
}

export interface CategorySubcategory {
  id: string; // PK
  category_id: string; // FK -> Category.id
  subcategory_id: string; // FK -> Subcategory.id
}

// ---------- KEYWORDS ----------

export interface Keyword {
  id: string; // PK
  keyword: string;
  category_id?: string; // FK -> Category.id (nullable)
  subcategory_id?: string; // FK -> Subcategory.id (nullable)
}

// ---------- ARTICLES & PIPELINE ----------

// Raw scraped article
export interface OriginalArticle {
  id: string; // PK
  url: string;
  content: string;
  language: string;
  source: string;
  created_at: Date;
}

// Cleaned article post-processing
export interface CleanedArticle {
  id: string; // PK
  title: string;
  slug: string;
  url: string;
  content: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  metadata: Record<string, any>; // JSONB (author, image, etc.)
  category_id?: string; // FK -> Category.id (nullable)
  subcategory_id?: string; // FK -> Subcategory.id (nullable)
  created_at: Date;
}

// Links Original -> Cleaned article for traceability
export interface ArticleMapping {
  id: string; // PK
  original_article_id: string; // FK -> OriginalArticle.id
  cleaned_article_id: string; // FK -> CleanedArticle.id
}
