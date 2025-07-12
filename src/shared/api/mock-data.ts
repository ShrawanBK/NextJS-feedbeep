import { Article, Topic } from '../types';

const images = [
  "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
  "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
  "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
  "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80",
  "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&q=80",
];

export const mockArticles: Article[] = [
  {
    id: '1',
    title: 'The Future of AI: How Machine Learning is Reshaping Industries',
    summary: 'Explore the transformative impact of artificial intelligence across various sectors and what it means for the future of work and society.',
    source: 'Tech Weekly',
    timestamp: '1 hour ago',
    category: 'Technology',
    readTime: 8,
    imageUrl: images[0],
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
    imageUrl: images[1],
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
    imageUrl: images[2],
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
    imageUrl: images[3],
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
    imageUrl: images[4],
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