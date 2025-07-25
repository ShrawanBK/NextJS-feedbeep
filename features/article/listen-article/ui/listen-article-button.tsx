import { Volume2Icon } from "lucide-react";

import { Button } from "@/shared/rui/button";
import { toast } from "@/shared/hooks/use-toast";

export const ListenArticleButton = ({ articleId }: { articleId: string }) => {
  const handleListen = (articleId: string) => {
    toast({
      title: "Listening for article id " + articleId,
      description: "Text-to-speech feature would start here",
    });
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => handleListen(articleId)}
      className="rounded-full"
    >
      <Volume2Icon className="mr-1 h-4 w-4" />
      Listen
    </Button>
  );
};

ListenArticleButton.displayName = "ListenArticleButton";
