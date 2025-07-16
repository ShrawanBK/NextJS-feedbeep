"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import React, { memo, useState, useEffect } from "react";

import { cn } from "@/shared/utils";
import { Button } from "@/shared/rui/button";

const themes = [
  { value: "light", icon: Sun, label: "Light" },
  { value: "dark", icon: Moon, label: "Dark" },
  { value: "system", icon: Monitor, label: "System" },
] as const;

interface Props {
  containerClassName?: string;
  buttonClassName?: string;
  variant?: "icon" | "text" | "icon-text";
}
const ThemeSwitcher = ({
  containerClassName,
  variant = "icon",
  buttonClassName,
}: Props) => {
  const [mounted, setMounted] = useState(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full border border-gray-200 bg-gray-100 p-1 dark:border-gray-700 dark:bg-gray-800",
        containerClassName
      )}
    >
      {themes.map(({ value, icon: Icon, label }) => (
        <Button
          key={value}
          variant={theme === value ? "default" : "ghost"}
          size="sm"
          onClick={() => setTheme(value)}
          className={cn("h-7 w-7 rounded-full p-0", buttonClassName)}
          title={label}
        >
          {["icon", "icon-text"].includes(variant) && (
            <Icon className="h-3 w-3" />
          )}
          {["text", "icon-text"].includes(variant) && (
            <span className="text-xs">{label}</span>
          )}
        </Button>
      ))}
    </div>
  );
};

export default memo(ThemeSwitcher);
