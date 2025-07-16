import { Button } from "@/shared/rui/button";

interface Props {
  onClick: () => void;
  loading: boolean;
  disabled: boolean;
}

const LoadMoreArticleButton = ({ onClick, loading, disabled }: Props) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      size="lg"
      className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white hover:bg-blue-700"
    >
      {loading ? "Loading..." : "Load More Stories"}
    </Button>
  );
};

export default LoadMoreArticleButton;
