import { BookmarkIcon } from "lucide-react";

import { Button } from "@/shared/rui/button";
import { toast } from "@/shared/hooks/use-toast";

const SaveArticleButton = ({ articleId }: { articleId: string }) => {
  const handleSave = (articleId: string) => {
    toast({
      title: "Article saved for id" + articleId,
      description: "Added to your Read Later list",
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleSave(articleId)}
      className="rounded-full"
    >
      <BookmarkIcon className="h-4 w-4" />
    </Button>
  );
};

export default SaveArticleButton;
