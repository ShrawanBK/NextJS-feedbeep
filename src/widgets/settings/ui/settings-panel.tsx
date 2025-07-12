
'use client';

import React, { useState } from 'react';
import { X, ChevronRight } from 'lucide-react';
import { Button } from '../../../shared/ui/button';
import { Toggle } from '../../../shared/ui/toggle';
import { useTheme } from '../../../shared/hooks/use-theme';

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ isOpen, onClose }) => {
  const { theme, setTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    daily: true,
    breaking: false,
  });
  const [textToSpeech, setTextToSpeech] = useState(true);
  const [language, setLanguage] = useState('English');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-96 bg-background border-l border-border shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold">Settings</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        <div className="p-6 space-y-8">
          {/* Notification Frequency */}
          <div>
            <h3 className="text-lg font-medium mb-4">Notification Frequency</h3>
            <div className="flex gap-2">
              <Button
                variant={notifications.daily ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setNotifications(prev => ({ ...prev, daily: !prev.daily }))}
              >
                Daily
              </Button>
              <Button
                variant={notifications.breaking ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setNotifications(prev => ({ ...prev, breaking: !prev.breaking }))}
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
            <h3 className="text-lg font-medium mb-4">Language</h3>
            <Button variant="outline" className="w-full justify-between">
              <span>{language}</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Text-to-Speech */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-medium">Text-to-Speech</h3>
              <p className="text-sm text-muted-foreground">Enable audio playback of articles</p>
            </div>
            <Toggle
              checked={textToSpeech}
              onCheckedChange={setTextToSpeech}
            />
          </div>

          {/* Theme */}
          <div>
            <h3 className="text-lg font-medium mb-4">Theme</h3>
            <div className="flex gap-2">
              <Button
                variant={theme === 'light' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                Dark
              </Button>
              <Button
                variant={theme === 'auto' ? 'primary' : 'outline'}
                size="sm"
                onClick={() => setTheme('auto')}
              >
                Auto
              </Button>
            </div>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="text-lg font-medium mb-4">Privacy</h3>
            <Button variant="outline" className="w-full justify-between">
              <span>Controls</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
