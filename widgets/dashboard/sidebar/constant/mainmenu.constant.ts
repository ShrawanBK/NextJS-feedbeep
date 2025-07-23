import { HomeIcon, BookmarkIcon, TrendingUpIcon } from "lucide-react";

import PATHS from "@/shared/config/routes/paths";

export const MAIN_MENU = [
  {
    label: "Home",
    path: PATHS.root.home,
    icon: HomeIcon,
  },
  {
    label: "Trending",
    path: PATHS.root.trending,
    icon: TrendingUpIcon,
  },
  {
    label: "Read Later",
    path: PATHS.root.readLater,
    icon: BookmarkIcon,
  },
];
