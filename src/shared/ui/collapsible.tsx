
import React from 'react';

interface CollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ open, onOpenChange, children }) => {
  return <div data-state={open ? "open" : "closed"}>{children}</div>;
};

interface CollapsibleTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ asChild, children }) => {
  return <>{children}</>;
};

interface CollapsibleContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};
