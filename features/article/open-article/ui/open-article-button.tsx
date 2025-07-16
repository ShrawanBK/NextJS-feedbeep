import { ExternalLink } from "lucide-react";

import { Button } from "@/shared/rui/button";
import { toast } from "@/shared/hooks/use-toast";

const OpenArticleButton = ({ articleId }: { articleId: string }) => {
  const handleOpen = (articleId: string) => {
    toast({
      title: "Article opened for id " + articleId,
      description: "Article opened",
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleOpen(articleId)}
      className="rounded-full"
    >
      <ExternalLink className="h-4 w-4" />
    </Button>
  );
};

export default OpenArticleButton;
