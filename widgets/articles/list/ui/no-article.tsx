type Props = {
  activeFilter: string;
  searchQuery: string;
};

export const NoArticle = ({ activeFilter, searchQuery }: Props) => {
  return (
    <div>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        No articles found for &quot;{activeFilter}&quot;
        {searchQuery && ` matching &quot;{searchQuery}&quot;`}
      </p>
    </div>
  );
};
