
'use client';

import React, { useState } from 'react';
import { Search, Bell, Settings, User, Sun, Moon, Computer, MessageSquare, Menu } from 'lucide-react';
import { Button } from '../../../shared/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../../../shared/ui/avatar';
import { useTheme } from '../../../shared/hooks/use-theme';

interface HeaderProps {
  onSettingsClick: () => void;
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSettingsClick, onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  const getThemeIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      default:
        return <Computer className="w-4 h-4" />;
    }
  };

  return (
    <header className="h-16 bg-background border-b border-border px-4 lg:px-6">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={onMenuClick}
          >
            <Menu className="w-5 h-5" />
          </Button>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:block">NewsHub</span>
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

          <Button variant="ghost" size="icon" className="rounded-full relative">
            <Bell className="w-4 h-4" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full"></span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={onSettingsClick}
            className="rounded-full"
          >
            <Settings className="w-4 h-4" />
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarImage src="/api/placeholder/32/32" alt="User" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};
