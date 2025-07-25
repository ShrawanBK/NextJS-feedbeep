import { X } from "lucide-react";
import React, { useCallback } from "react";
import { useRouter, usePathname } from "next/navigation";
import { KeywordFilters } from "@/widgets/keyword-filters";

import { Button } from "@/shared/rui/button";
import { ScrollArea } from "@/shared/rui/scroll-area";

import { TopicsMenu } from "./parts/topics-menu";
import { MAIN_MENU } from "../constant/mainmenu.constant";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  const router = useRouter();

  const pathname = usePathname();

  const isActiveMainMenu = useCallback(
    (label: string) => {
      return pathname === label;
    },
    [pathname]
  );

  const handleMainMenuClick = useCallback(
    (label: string) => {
      router.push(label);
      if (window.innerWidth < 1024) {
        onClose();
      }
    },
    [router, onClose]
  );

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-full w-80 transform border-r border-gray-200 bg-white transition-transform duration-300 ease-in-out lg:relative lg:top-0 lg:flex lg:translate-x-0 lg:flex-col dark:border-gray-700 dark:bg-gray-900 ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"} `}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between border-b p-4 lg:hidden dark:border-gray-700">
          <span className="text-lg font-semibold dark:text-white">Menu</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            {/* Main Navigation */}
            <div className="mb-6 space-y-2">
              {MAIN_MENU.map((item) => (
                <Button
                  key={item.label}
                  variant={isActiveMainMenu(item.path) ? "default" : "ghost"}
                  className="w-full justify-start rounded-full"
                  onClick={() => handleMainMenuClick(item.path as string)}
                >
                  <item.icon className="mr-3 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Topics */}
            <TopicsMenu onClose={onClose} />

            {/* Quick Filters */}
            <KeywordFilters onClick={onClose} />
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};

Sidebar.displayName = "Sidebar";
