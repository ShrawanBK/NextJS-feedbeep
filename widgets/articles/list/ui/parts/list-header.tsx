interface Props {
  activeFilter: string;
  articlesCount: number;
}

export const ListHeader = ({ activeFilter, articlesCount }: Props) => {
  return (
    <div className="flex items-center justify-between">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
          {activeFilter === "Home"
            ? "Good morning! Here's your news feed"
            : `${activeFilter} News`}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          {articlesCount} {articlesCount === 1 ? "article" : "articles"} found
        </p>
      </div>
    </div>
  );
};
