
"use client";

import React, { useState } from 'react';

interface CollapsibleProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ 
  open: controlledOpen, 
  onOpenChange, 
  children 
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const isOpen = controlledOpen !== undefined ? controlledOpen : internalOpen;
  
  const handleOpenChange = (newOpen: boolean) => {
    if (onOpenChange) {
      onOpenChange(newOpen);
    } else {
      setInternalOpen(newOpen);
    }
  };

  return (
    <div data-state={isOpen ? "open" : "closed"}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { 
            ...child.props, 
            isOpen,
            onToggle: () => handleOpenChange(!isOpen)
          });
        }
        return child;
      })}
    </div>
  );
};

interface CollapsibleTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const CollapsibleTrigger: React.FC<CollapsibleTriggerProps> = ({ 
  asChild, 
  children,
  onToggle
}) => {
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      onClick: (e: React.MouseEvent) => {
        e.stopPropagation();
        if (onToggle) onToggle();
        if (children.props.onClick) children.props.onClick(e);
      }
    });
  }
  
  return (
    <button onClick={onToggle}>
      {children}
    </button>
  );
};

interface CollapsibleContentProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export const CollapsibleContent: React.FC<CollapsibleContentProps> = ({ 
  className, 
  children,
  isOpen 
}) => {
  if (!isOpen) return null;
  
  return (
    <div className={className}>
      {children}
    </div>
  );
};
