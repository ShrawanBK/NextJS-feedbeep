
'use client';

import React, { useState } from 'react';
import { Home, TrendingUp, Bookmark, ChevronDown, ChevronRight, Tag, Hash, Menu, X } from 'lucide-react';
import { mockTopics, quickFilters } from '../../../shared/api/mock-data';
import { Button } from '../../../shared/ui/button';
import { Separator } from '../../../shared/ui/separator';

interface SidebarProps {
  isOpen?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen = true, onToggle }) => {
  const [expandedTopics, setExpandedTopics] = useState<string[]>(['technology']);
  const [activeNav, setActiveNav] = useState('home');

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  const navigationItems = [
    { id: 'home', label: 'Home', icon: Home, variant: 'default' as const },
    { id: 'trending', label: 'Trending', icon: TrendingUp, variant: 'ghost' as const },
    { id: 'saved', label: 'Read Later', icon: Bookmark, variant: 'ghost' as const },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onToggle}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:relative top-0 left-0 z-50 
        w-72 h-screen lg:h-[calc(100vh-4rem)]
        bg-sidebar-background border-r border-sidebar-border
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        ${!isOpen ? 'lg:w-16' : 'lg:w-72'}
      `}>
        <div className="flex flex-col h-full">
          {/* Mobile header */}
          <div className="flex items-center justify-between p-4 lg:hidden">
            <h2 className="font-semibold text-sidebar-foreground">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={onToggle}
              className="text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-col h-full p-4 space-y-4">
            {/* Main Navigation */}
            <nav className="space-y-1">
              {navigationItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeNav === item.id ? 'default' : 'ghost'}
                  className={`
                    w-full justify-start h-10 rounded-lg font-medium transition-colors
                    ${activeNav === item.id 
                      ? 'bg-sidebar-primary text-sidebar-primary-foreground hover:bg-sidebar-primary/90' 
                      : 'text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground'
                    }
                    ${!isOpen ? 'lg:justify-center lg:px-2' : ''}
                  `}
                  onClick={() => setActiveNav(item.id)}
                  title={!isOpen ? item.label : undefined}
                >
                  <item.icon className={`w-4 h-4 ${isOpen ? 'mr-3' : ''}`} />
                  {isOpen && <span>{item.label}</span>}
                </Button>
              ))}
            </nav>

            {isOpen && <Separator className="bg-sidebar-border" />}

            {/* Topics Section */}
            {isOpen && (
              <div className="flex-1 overflow-y-auto">
                <h3 className="text-xs font-semibold text-sidebar-foreground/60 uppercase tracking-wider mb-3 px-3">
                  TOPICS
                </h3>
                <div className="space-y-1">
                  {mockTopics.map((topic) => (
                    <div key={topic.id} className="space-y-1">
                      <Button
                        variant="ghost"
                        className="w-full justify-between h-9 rounded-lg text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        onClick={() => toggleTopic(topic.id)}
                      >
                        <div className="flex items-center">
                          <Hash className="w-3 h-3 mr-3 text-sidebar-foreground/60" />
                          {topic.name}
                        </div>
                        {expandedTopics.includes(topic.id) ? (
                          <ChevronDown className="w-3 h-3" />
                        ) : (
                          <ChevronRight className="w-3 h-3" />
                        )}
                      </Button>
                      
                      {expandedTopics.includes(topic.id) && topic.subcategories && (
                        <div className="ml-6 space-y-1">
                          {topic.subcategories.map((sub) => (
                            <Button
                              key={sub}
                              variant="ghost"
                              size="sm"
                              className="w-full justify-start h-8 rounded-md text-xs text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                            >
                              {sub}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};
