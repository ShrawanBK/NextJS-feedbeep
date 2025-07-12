
'use client';

import React, { useState } from 'react';
import { Home, TrendingUp, Bookmark, ChevronDown, ChevronRight, Tag, Hash } from 'lucide-react';
import { mockTopics, quickFilters } from '../../../shared/api/mock-data';
import { Button } from '../../../shared/ui/button';
import { Separator } from '../../../shared/ui/separator';

export const Sidebar: React.FC = () => {
  const [expandedTopics, setExpandedTopics] = useState<string[]>(['technology']);
  const [activeNav, setActiveNav] = useState('home');

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <aside className="w-72 h-[calc(100vh-4rem)] bg-background border-r border-border">
      <div className="flex flex-col h-full">
        <div className="p-4 space-y-4">
          {/* Main Navigation */}
          <nav className="space-y-1">
            <Button 
              variant={activeNav === 'home' ? 'default' : 'ghost'} 
              className="w-full justify-start h-10 rounded-full font-medium"
              onClick={() => setActiveNav('home')}
            >
              <Home className="w-4 h-4 mr-3" />
              Home
            </Button>
            <Button 
              variant={activeNav === 'trending' ? 'secondary' : 'ghost'} 
              className="w-full justify-start h-10 rounded-full"
              onClick={() => setActiveNav('trending')}
            >
              <TrendingUp className="w-4 h-4 mr-3" />
              Trending
            </Button>
            <Button 
              variant={activeNav === 'saved' ? 'secondary' : 'ghost'} 
              className="w-full justify-start h-10 rounded-full"
              onClick={() => setActiveNav('saved')}
            >
              <Bookmark className="w-4 h-4 mr-3" />
              Read Later
            </Button>
          </nav>

          <Separator />

          {/* Topics Section */}
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 px-3">
              TOPICS
            </h3>
            <div className="space-y-1">
              {mockTopics.map((topic) => (
                <div key={topic.id} className="space-y-1">
                  <Button
                    variant="ghost"
                    className="w-full justify-between h-9 rounded-lg text-sm font-medium"
                    onClick={() => toggleTopic(topic.id)}
                  >
                    <div className="flex items-center">
                      <Hash className="w-3 h-3 mr-3 text-muted-foreground" />
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
                          className="w-full justify-start h-8 rounded-md text-xs text-muted-foreground hover:text-foreground"
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
        </div>
      </div>
    </aside>
  );
};
