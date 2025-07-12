export interface Article {
  id: string;
  title: string;
  summary: string;
  source: string;
  timestamp: string;
  category: string;
  readTime: number;
  imageUrl?: string;
  url: string;
  featured?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

export interface Topic {
  id: string;
  name: string;
  subcategories?: string[];
}

export interface Settings {
  theme: 'light' | 'dark' | 'auto';
  language: string;
  notifications: {
    daily: boolean;
    breaking: boolean;
  };
  textToSpeech: boolean;
}