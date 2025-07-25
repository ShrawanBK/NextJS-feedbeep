export default async function KeywordArticlesPage({
  params,
}: {
  params: Promise<{ keywordSlug: string }>;
}) {
  const { keywordSlug } = await params;
  return <div>KeywordArticlesPage {keywordSlug}</div>;
}
