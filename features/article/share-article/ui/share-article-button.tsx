import { Share2Icon } from "lucide-react";

import { Button } from "@/shared/rui/button";
import { toast } from "@/shared/hooks/use-toast";

const ShareArticleButton = ({ articleId }: { articleId: string }) => {
  const handleShare = (articleId: string) => {
    toast({
      title: "Link copied for article id " + articleId,
      description: "Article link copied to clipboard",
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleShare(articleId)}
      className="rounded-full"
    >
      <Share2Icon className="h-4 w-4" />
    </Button>
  );
};

export default ShareArticleButton;
