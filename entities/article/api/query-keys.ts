export const ARTICLE_QUERY_KEYS = {
  all: ["articles"] as const,
  page: (page: number) => [...ARTICLE_QUERY_KEYS.all, "page", page] as const,
  topicArticles: (topic: string) =>
    [...ARTICLE_QUERY_KEYS.all, "topic", topic] as const,
  topicFeaturedArticle: (topic: string) =>
    [...ARTICLE_QUERY_KEYS.topicArticles(topic), "featured"] as const,
  subTopicArticles: (topic: string, subTopic: string) =>
    [...ARTICLE_QUERY_KEYS.topicArticles(topic), "subTopic", subTopic] as const,
  subTopicFeaturedArticle: (topic: string, subTopic: string) =>
    [
      ...ARTICLE_QUERY_KEYS.subTopicArticles(topic, subTopic),
      "featured",
    ] as const,
};
