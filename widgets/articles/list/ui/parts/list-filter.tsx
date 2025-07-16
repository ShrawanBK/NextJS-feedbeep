interface Props {
  activeFilter: string;
  searchQuery: string;
}

export const ListFilter = ({ activeFilter, searchQuery }: Props) => {
  return (
    <div className="mb-6 flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Filtered by:
      </span>
      <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-200">
        {activeFilter}
      </span>
      {searchQuery && (
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-200">
          Search: &quot;{searchQuery}&quot;
        </span>
      )}
    </div>
  );
};
