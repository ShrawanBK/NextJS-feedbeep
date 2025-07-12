
'use client';

import React from 'react';
import { Search, Settings, Menu, Sun, Moon, Monitor, MessageSquare } from 'lucide-react';
import { Button } from '@/shared/ui/button';
import { useTheme } from '@/shared/hooks/use-theme';
import { useArticleFiltersStore } from '@/shared/stores/use-article-filters-store';

interface HeaderProps {
  onSettingsClick: () => void;
  onMenuClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick, onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const { searchQuery, setSearchQuery } = useArticleFiltersStore();

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Left side - Logo and Menu */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onMenuClick}
            className="lg:hidden rounded-full"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">FB</span>
            </div>
            <h1 className="text-xl font-bold text-foreground hidden sm:block">
              FeedBeep
            </h1>
          </div>
        </div>

        {/* Center - Search */}
        <div className="flex-1 max-w-2xl mx-8 hidden md:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-input rounded-full bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center space-x-2">
          {/* Mobile search */}
          <Button variant="ghost" size="icon" className="md:hidden rounded-full">
            <Search className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
            title={`Switch to ${theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light'} mode`}
          >
            {getThemeIcon()}
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageSquare className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onSettingsClick}
            className="rounded-full"
          >
            <Settings className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};
