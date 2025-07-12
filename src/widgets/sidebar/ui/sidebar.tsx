
'use client';

import React, { useState } from 'react';
import { TrendingUp, Bookmark, ChevronDown, ChevronRight, Tag } from 'lucide-react';
import { mockTopics, quickFilters } from '../../../shared/api/mock-data';
import { Button } from '../../../shared/ui/button';

export const Sidebar: React.FC = () => {
  const [expandedTopics, setExpandedTopics] = useState<string[]>(['technology']);

  const toggleTopic = (topicId: string) => {
    setExpandedTopics(prev =>
      prev.includes(topicId)
        ? prev.filter(id => id !== topicId)
        : [...prev, topicId]
    );
  };

  return (
    <aside className="w-64 h-[calc(100vh-4rem)] overflow-y-auto border-r border-border bg-background">
      <div className="p-4 space-y-6">
        {/* Navigation */}
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start">
            <TrendingUp className="w-4 h-4 mr-3" />
            Trending
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bookmark className="w-4 h-4 mr-3" />
            Read Later
          </Button>
        </nav>

        {/* Topics */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Topics
          </h3>
          <div className="space-y-1">
            {mockTopics.map((topic) => (
              <div key={topic.id}>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => toggleTopic(topic.id)}
                >
                  <Tag className="w-4 h-4 mr-3" />
                  <span className="flex-1 text-left">{topic.name}</span>
                  {topic.subcategories && (
                    expandedTopics.includes(topic.id) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )
                  )}
                </Button>
                
                {/* Subcategories */}
                {topic.subcategories && expandedTopics.includes(topic.id) && (
                  <div className="ml-6 mt-1 space-y-1">
                    {topic.subcategories.map((subcategory) => (
                      <Button
                        key={subcategory}
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-muted-foreground hover:text-foreground"
                      >
                        {subcategory}
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Filters */}
        <div>
          <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Quick Filters
          </h3>
          <div className="flex flex-wrap gap-2">
            {quickFilters.map((filter) => (
              <Button
                key={filter}
                variant="outline"
                size="sm"
                className="text-xs"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};
