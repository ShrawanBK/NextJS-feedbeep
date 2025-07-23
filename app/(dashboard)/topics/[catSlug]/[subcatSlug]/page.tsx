export default async function SubCategoryPage({
  params,
}: {
  params: Promise<{ catSlug: string; subcatSlug: string }>;
}) {
  const { catSlug, subcatSlug } = await params;

  return (
    <div>
      SubCategoryPage for {subcatSlug} in {catSlug}
    </div>
  );
}
