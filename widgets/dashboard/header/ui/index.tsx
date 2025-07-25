import Image from "next/image";
import React, { useState } from "react";
import logo from "@/public/feedbeep-logo.png";
import SettingsPanel from "@/widgets/settings-panel";
import { User, Menu, Bell, Search } from "lucide-react";
import { ThemeSwitcher } from "@/features/theme-switcher";

import { Input } from "@/shared/rui/input";
import { Button } from "@/shared/rui/button";

interface HeaderProps {
  onMenuToggle: () => void;
  isSidebarOpen: boolean;
  onSearch: (query: string) => void;
}

export const Header = ({
  onMenuToggle,
  isSidebarOpen,
  onSearch,
}: HeaderProps) => {
  const [showSettings, setShowSettings] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-700 dark:bg-gray-900/95 dark:supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-16 items-center justify-between px-4 lg:ml-24">
          {/* Left section */}
          <div className="flex items-center gap-4 lg:ml-36">
            <Button
              variant="ghost"
              size="sm"
              onClick={onMenuToggle}
              className="lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="flex items-center gap-2">
              <Image src={logo} alt="FeedBeep logo" className="h-8 w-auto" />
            </div>
          </div>

          {/* Center - Search and Theme Toggle */}
          <div className="mx-8 hidden max-w-md flex-1 items-center gap-3 md:flex">
            <div className="relative flex-1">
              <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search news..."
                value={searchQuery}
                onChange={handleSearch}
                className="rounded-full border-gray-200 pl-10 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700"
              />
            </div>
            <ThemeSwitcher />
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowSettings(true)}
              className="rounded-full"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <SettingsPanel
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
    </>
  );
};

Header.displayName = "Header";
