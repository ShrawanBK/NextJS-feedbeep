export default async function CategoryPage({
  params,
}: {
  params: Promise<{ catSlug: string }>;
}) {
  const { catSlug } = await params;

  return <div>CategoryPage for {catSlug}</div>;
}
