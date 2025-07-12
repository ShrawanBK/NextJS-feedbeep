
import React, { useState } from 'react';
import { Home, Bookmark, TrendingUp, Tag, ChevronRight, ChevronDown, X } from 'lucide-react';
import { Button } from '../../../shared/ui/button';
import { ScrollArea } from '../../../shared/ui/scroll-area';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../../../shared/ui/collapsible';
import { useCategories } from '../../../entities/category/hooks/use-categories';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeFilter?: string;
  onFilterChange?: (filter: string) => void;
}

const quickFilters = ['Elon Musk', 'Climate Change', 'AI', 'Bitcoin', 'Apple', 'Google'];

export const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen, 
  onClose, 
  activeFilter = "Home", 
  onFilterChange = () => {} 
}) => {
  const [expandedTopics, setExpandedTopics] = useState<string[]>(['Technology']);
  const { data: categories = [] } = useCategories();

  const toggleTopic = (topicName: string) => {
    setExpandedTopics(prev => 
      prev.includes(topicName)
        ? prev.filter(name => name !== topicName)
        : [...prev, topicName]
    );
  };

  const handleFilterClick = (filter: string) => {
    onFilterChange(filter);
    if (window.innerWidth < 1024) {
      onClose(); // Close sidebar on mobile after selection
    }
  };

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
      <aside className={`
        fixed lg:relative top-0 lg:top-0 left-0 z-50 h-full w-80 transform border-r border-sidebar-border bg-sidebar-background transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:flex lg:flex-col
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-4 border-b border-sidebar-border lg:hidden">
          <span className="text-lg font-semibold text-sidebar-foreground">Menu</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="rounded-full text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-4">
            {/* Main Navigation */}
            <div className="space-y-2 mb-6">
              <Button
                variant={activeFilter === 'Home' ? 'default' : 'ghost'}
                className="w-full justify-start rounded-full text-sidebar-foreground hover:bg-sidebar-accent data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground"
                onClick={() => handleFilterClick('Home')}
              >
                <Home className="mr-3 h-4 w-4" />
                Home
              </Button>
              
              <Button
                variant={activeFilter === 'Trending' ? 'default' : 'ghost'}
                className="w-full justify-start rounded-full text-sidebar-foreground hover:bg-sidebar-accent data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground"
                onClick={() => handleFilterClick('Trending')}
              >
                <TrendingUp className="mr-3 h-4 w-4" />
                Trending
              </Button>
              
              <Button
                variant={activeFilter === 'Read Later' ? 'default' : 'ghost'}
                className="w-full justify-start rounded-full text-sidebar-foreground hover:bg-sidebar-accent data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground"
                onClick={() => handleFilterClick('Read Later')}
              >
                <Bookmark className="mr-3 h-4 w-4" />
                Read Later
              </Button>
            </div>

            {/* Topics */}
            <div className="mb-6">
              <h3 className="mb-3 text-sm font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                Topics
              </h3>
              <div className="space-y-1">
                {categories.map((topic) => (
                  <Collapsible
                    key={topic.name}
                    open={expandedTopics.includes(topic.name)}
                    onOpenChange={() => toggleTopic(topic.name)}
                  >
                    <CollapsibleTrigger asChild>
                      <Button
                        variant={activeFilter === topic.name ? 'default' : 'ghost'}
                        className="w-full justify-between rounded-full text-sidebar-foreground hover:bg-sidebar-accent data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground"
                        onClick={() => handleFilterClick(topic.name)}
                      >
                        <div className="flex items-center">
                          <Tag className="mr-3 h-4 w-4" />
                          {topic.name}
                        </div>
                        {expandedTopics.includes(topic.name) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="space-y-1">
                      {topic.subcategories?.map((sub) => (
                        <Button
                          key={sub}
                          variant={activeFilter === sub ? 'default' : 'ghost'}
                          size="sm"
                          className="w-full justify-start rounded-full ml-6 text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground"
                          onClick={() => handleFilterClick(sub)}
                        >
                          {sub}
                        </Button>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div>
              <h3 className="mb-3 text-sm font-semibold text-sidebar-foreground/60 uppercase tracking-wider">
                Quick Filters
              </h3>
              <div className="flex flex-wrap gap-2">
                {quickFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant={activeFilter === filter ? 'default' : 'outline'}
                    size="sm"
                    className="rounded-full text-xs border-sidebar-border text-sidebar-foreground hover:bg-sidebar-accent data-[state=active]:bg-sidebar-primary data-[state=active]:text-sidebar-primary-foreground"
                    onClick={() => handleFilterClick(filter)}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </aside>
    </>
  );
};
