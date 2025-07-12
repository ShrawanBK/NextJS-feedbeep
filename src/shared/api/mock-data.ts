
import { Article, Topic } from '../types';

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of AI: How Machine Learning is Reshaping Industries',
    summary: 'Explore the transformative impact of artificial intelligence across various sectors and what it means for the future of work and society.',
    source: 'Tech Weekly',
    timestamp: '1 hour ago',
    category: 'Technology',
    readTime: 8,
    imageUrl: '/api/placeholder/400/200',
    url: '#',
    featured: true,
  },
  {
    id: '2',
    title: 'Revolutionary AI Model Achieves Breakthrough in Natural Language Processing',
    summary: 'New research demonstrates unprecedented capabilities in understanding and generating human-like text.',
    source: 'AI Research',
    timestamp: '2 hours ago',
    category: 'Technology',
    readTime: 5,
    imageUrl: '/api/placeholder/400/200',
    url: '#',
  },
  {
    id: '3',
    title: 'Global Stock Markets Rally as Tech Earnings Beat Expectations',
    summary: 'Major technology companies report strong quarterly results, driving market optimism worldwide.',
    source: 'Financial Times',
    timestamp: '3 hours ago',
    category: 'Business',
    readTime: 4,
    imageUrl: '/api/placeholder/400/200',
    url: '#',
  },
  {
    id: '4',
    title: 'Climate Change Summit Addresses Urgent Environmental Challenges',
    summary: 'World leaders gather to discuss innovative solutions for reducing carbon emissions and protecting biodiversity.',
    source: 'Environmental News',
    timestamp: '4 hours ago',
    category: 'Science',
    readTime: 6,
    url: '#',
  },
  {
    id: '5',
    title: 'Breakthrough in Quantum Computing Opens New Possibilities',
    summary: 'Scientists achieve quantum supremacy milestone, paving the way for revolutionary computing applications.',
    source: 'Science Daily',
    timestamp: '5 hours ago',
    category: 'Technology',
    readTime: 7,
    url: '#',
  },
];

export const mockTopics: Topic[] = [
  {
    id: 'technology',
    name: 'Technology',
    subcategories: ['AI & Machine Learning', 'Gadgets', 'Startups', 'Software', 'Cybersecurity'],
  },
  {
    id: 'business',
    name: 'Business',
    subcategories: ['Markets', 'Startups', 'Economics', 'Finance'],
  },
  {
    id: 'science',
    name: 'Science',
    subcategories: ['Research', 'Climate', 'Space', 'Health'],
  },
  {
    id: 'politics',
    name: 'Politics',
    subcategories: ['Elections', 'Policy', 'International'],
  },
  {
    id: 'sports',
    name: 'Sports',
    subcategories: ['Football', 'Basketball', 'Soccer', 'Olympics'],
  },
];

export const quickFilters = [
  'Elon Musk',
  'Climate Change',
  'AI',
  'Bitcoin',
  'Apple',
  'Google',
];
