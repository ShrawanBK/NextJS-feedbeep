import { Clock } from "lucide-react";
import OpenArticleButton from "@/features/article/open-article/ui/open-article-button";
import SaveArticleButton from "@/features/article/save-article/ui/save-article-button";
import ShareArticleButton from "@/features/article/share-article/ui/share-article-button";
import ListenArticleButton from "@/features/article/listen-article/ui/listen-article-button";

import { Badge } from "@/shared/rui/badge";
import { Skeleton } from "@/shared/rui/skeleton";
import { Card, CardContent } from "@/shared/rui/card";

export const ArticleCardSkeleton = () => {
  return (
    <Card className="group overflow-hidden rounded-2xl border-0 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-0">
        <Skeleton>
          <div className="relative h-48 overflow-hidden">
            <div
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{
                width: 800,
                height: 800,
              }}
            />
            <div className="absolute top-3 left-3">
              <Badge
                variant="secondary"
                className="rounded-full bg-white/90 text-gray-800"
              >
                <Skeleton>article-category</Skeleton>
              </Badge>
            </div>
          </div>

          <div className="p-6">
            <h3 className="mb-3 text-lg leading-tight font-bold text-gray-900 transition-colors group-hover:text-blue-600">
              article-headline
            </h3>

            <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-600">
              article-summary
            </p>

            <div className="mb-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <span className="font-medium">article-source</span>
                <span>•</span>
                <span>article-timestamp</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                <span>article-readTime</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ListenArticleButton articleId={"article-id"} />
                <SaveArticleButton articleId={"article-id"} />
                <ShareArticleButton articleId={"article-id"} />
              </div>

              <OpenArticleButton articleId={"article-id"} />
            </div>
          </div>
        </Skeleton>
      </CardContent>
    </Card>
  );
};
