"use client";

import { useTheme } from "next-themes";
import React, { useState } from "react";
import { X, ChevronRight } from "lucide-react";

import { Button } from "@/shared/rui/button";

import { Toggle } from "./parts/toggle";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  isOpen,
  onClose,
}) => {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    daily: true,
    breaking: false,
  });
  const [textToSpeech, setTextToSpeech] = useState(true);
  const [language, setLanguage] = useState("English");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="bg-background border-border absolute top-0 right-0 h-full w-96 border-l shadow-xl">
        <div className="border-border flex items-center justify-between border-b p-6">
          <h2 className="text-xl font-semibold">Settings</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-8 p-6">
          {/* Notification Frequency */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Notification Frequency</h3>
            <div className="flex gap-2">
              <Button
                variant={notifications.daily ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotifications((prev) => ({ ...prev, daily: !prev.daily }))
                }
              >
                Daily
              </Button>
              <Button
                variant={notifications.breaking ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setNotifications((prev) => ({
                    ...prev,
                    breaking: !prev.breaking,
                  }))
                }
              >
                Breaking News
              </Button>
              <Button variant="outline" size="sm">
                Off
              </Button>
            </div>
          </div>

          {/* Language */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Language</h3>
            <Button variant="outline" className="w-full justify-between">
              <span>{language}</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Text-to-Speech */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Text-to-Speech</h3>
              <p className="text-muted-foreground text-sm">
                Enable audio playback of articles
              </p>
            </div>
            <Toggle checked={textToSpeech} onCheckedChange={setTextToSpeech} />
          </div>

          {/* Theme */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Theme</h3>
            <div className="flex gap-2">
              <Button
                variant={theme === "light" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("light")}
              >
                Light
              </Button>
              <Button
                variant={theme === "dark" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("dark")}
              >
                Dark
              </Button>
              <Button
                variant={theme === "system" ? "default" : "outline"}
                size="sm"
                onClick={() => setTheme("system")}
              >
                System
              </Button>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="mb-4 text-lg font-medium">Privacy</h3>
            <Button variant="outline" className="w-full justify-between">
              <span>Controls</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
