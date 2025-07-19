export interface Article {
  id: string;
  headline: string;
  summary: string;
  source: string;
  timestamp: string;
  category: string;
  imageUrl?: string;
  readTime: string;
}

export const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    headline:
      "Revolutionary AI Model Achieves Breakthrough in Natural Language Understanding",
    summary:
      "Researchers at leading tech companies have unveiled a new artificial intelligence model that demonstrates unprecedented capabilities in understanding and generating human language. The model shows remarkable improvements in context retention and reasoning abilities.",
    source: "TechCrunch",
    timestamp: "2 hours ago",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&q=80",
    readTime: "4 min read",
  },
  {
    id: "2",
    headline:
      "Global Stock Markets Rally as Economic Indicators Show Strong Growth",
    summary:
      "Major stock indices around the world posted significant gains today following the release of positive economic data. Investors are optimistic about future growth prospects amid improving consumer confidence and employment rates.",
    source: "Financial Times",
    timestamp: "4 hours ago",
    category: "Business",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    readTime: "3 min read",
  },
  {
    id: "3",
    headline:
      "Climate Scientists Discover New Method to Capture Carbon from Atmosphere",
    summary:
      "A team of international researchers has developed an innovative approach to carbon capture that could significantly impact global efforts to combat climate change. The method is both cost-effective and scalable for industrial applications.",
    source: "Nature",
    timestamp: "6 hours ago",
    category: "Science",
    imageUrl:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80",
    readTime: "5 min read",
  },
  {
    id: "4",
    headline:
      "Space Exploration Mission Reveals Stunning Images of Distant Galaxy",
    summary:
      "The latest space telescope has captured breathtaking images of a galaxy located billions of light-years away, providing new insights into the formation and evolution of cosmic structures in the early universe.",
    source: "NASA News",
    timestamp: "8 hours ago",
    category: "Science",
    imageUrl:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=500&q=80",
    readTime: "6 min read",
  },
  {
    id: "5",
    headline:
      "Cryptocurrency Market Experiences Significant Volatility Following Regulatory News",
    summary:
      "Digital currencies saw sharp price movements today as regulatory authorities announced new guidelines for cryptocurrency trading and investment. Market analysts are closely watching for long-term implications.",
    source: "CoinDesk",
    timestamp: "10 hours ago",
    category: "Business",
    readTime: "3 min read",
  },
  {
    id: "6",
    headline:
      "Breakthrough Medical Treatment Shows Promise for Rare Disease Patients",
    summary:
      "Clinical trials for a novel gene therapy have shown remarkable results in treating a previously incurable rare disease. The treatment offers hope to thousands of patients worldwide who have limited therapeutic options.",
    source: "Medical News Today",
    timestamp: "12 hours ago",
    category: "Science",
    imageUrl:
      "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
    readTime: "7 min read",
  },
  {
    id: "7",
    headline:
      "Tech Giant Announces Major Investment in Renewable Energy Infrastructure",
    summary:
      "One of the world's largest technology companies has committed to investing billions in renewable energy projects over the next decade, aiming to achieve carbon neutrality across all operations by 2030.",
    source: "Reuters",
    timestamp: "1 day ago",
    category: "Technology",
    imageUrl:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80",
    readTime: "4 min read",
  },
  {
    id: "8",
    headline:
      "Archaeological Discovery Uncovers Ancient Civilization Artifacts",
    summary:
      "Archaeologists have made a significant discovery of artifacts from an ancient civilization, providing new insights into human history and cultural development thousands of years ago.",
    source: "National Geographic",
    timestamp: "1 day ago",
    category: "Science",
    imageUrl:
      "https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=500&q=80",
    readTime: "5 min read",
  },
];
