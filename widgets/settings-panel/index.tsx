import React, { useState } from "react";
import {
  X,
  Sun,
  Bell,
  User,
  Moon,
  Globe,
  Shield,
  Palette,
  Monitor,
  ArrowLeft,
} from "lucide-react";

import { Label } from "@/shared/rui/label";
import { Button } from "@/shared/rui/button";
import { Switch } from "@/shared/rui/switch";
import { Separator } from "@/shared/rui/separator";
import { useTheme } from "@/src/shared/hooks/use-theme";
import { RadioGroup, RadioGroupItem } from "@/shared/rui/radio-group";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectTrigger,
} from "@/shared/rui/select";

interface SettingsPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const SettingsPanel = ({ isOpen, onClose }: SettingsPanelProps) => {
  const [currentView, setCurrentView] = useState("main");
  const { theme, setTheme } = useTheme();
  const [language, setLanguage] = useState("en");
  const [notificationFreq, setNotificationFreq] = useState("daily");
  const [textToSpeech, setTextToSpeech] = useState(true);
  const [breakingNews, setBreakingNews] = useState(false);

  const views = {
    main: {
      title: "Settings",
      showBack: false,
    },
    notifications: {
      title: "Notifications",
      showBack: true,
    },
    theme: {
      title: "Theme & Display",
      showBack: true,
    },
    language: {
      title: "Language",
      showBack: true,
    },
    privacy: {
      title: "Privacy",
      showBack: true,
    },
    account: {
      title: "Account",
      showBack: true,
    },
  };

  const handleBack = () => {
    setCurrentView("main");
  };

  const renderMainView = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 rounded-2xl bg-gray-50 p-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
          <User className="h-6 w-6 text-white" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Demo User</h3>
          <p className="text-sm text-gray-500">demo@feedbeep.com</p>
        </div>
      </div>

      <div className="space-y-4">
        <Button
          variant="ghost"
          className="h-auto w-full justify-between rounded-2xl p-4"
          onClick={() => setCurrentView("notifications")}
        >
          <div className="flex items-center gap-3">
            <Bell className="h-5 w-5 text-gray-600" />
            <span>Notifications</span>
          </div>
          <span className="text-sm text-gray-500">Daily</span>
        </Button>

        <Button
          variant="ghost"
          className="h-auto w-full justify-between rounded-2xl p-4"
          onClick={() => setCurrentView("theme")}
        >
          <div className="flex items-center gap-3">
            <Palette className="h-5 w-5 text-gray-600" />
            <span>Theme & Display</span>
          </div>
          <span className="text-sm text-gray-500 capitalize">{theme}</span>
        </Button>

        <Button
          variant="ghost"
          className="h-auto w-full justify-between rounded-2xl p-4"
          onClick={() => setCurrentView("language")}
        >
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-gray-600" />
            <span>Language</span>
          </div>
          <span className="text-sm text-gray-500">English</span>
        </Button>

        <Button
          variant="ghost"
          className="h-auto w-full justify-between rounded-2xl p-4"
          onClick={() => setCurrentView("privacy")}
        >
          <div className="flex items-center gap-3">
            <Shield className="h-5 w-5 text-gray-600" />
            <span>Privacy & Security</span>
          </div>
        </Button>

        <Button
          variant="ghost"
          className="h-auto w-full justify-between rounded-2xl p-4"
          onClick={() => setCurrentView("account")}
        >
          <div className="flex items-center gap-3">
            <User className="h-5 w-5 text-gray-600" />
            <span>Account Settings</span>
          </div>
        </Button>
      </div>
    </div>
  );

  const renderNotificationsView = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Notification Frequency</h3>
        <Select value={notificationFreq} onValueChange={setNotificationFreq}>
          <SelectTrigger className="rounded-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="realtime">Real-time</SelectItem>
            <SelectItem value="hourly">Hourly</SelectItem>
            <SelectItem value="daily">Daily</SelectItem>
            <SelectItem value="weekly">Weekly</SelectItem>
            <SelectItem value="off">Off</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Breaking News</h4>
          <p className="text-sm text-gray-500">
            Get notified about breaking news
          </p>
        </div>
        <Switch checked={breakingNews} onCheckedChange={setBreakingNews} />
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-medium">Text-to-Speech</h4>
          <p className="text-sm text-gray-500">
            Enable audio playback for articles
          </p>
        </div>
        <Switch checked={textToSpeech} onCheckedChange={setTextToSpeech} />
      </div>
    </div>
  );

  const renderThemeView = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Theme</h3>
        <RadioGroup
          value={theme}
          onValueChange={(value) =>
            setTheme(value as "light" | "dark" | "system")
          }
          className="space-y-4"
        >
          <div className="dark:hover:bg-primary/20 flex items-center space-x-3 rounded-2xl border p-3 hover:bg-gray-100">
            <RadioGroupItem value="light" id="light" />
            <Label
              htmlFor="light"
              className="flex flex-1 cursor-pointer items-center gap-3"
            >
              <Sun className="h-5 w-5 text-yellow-500" />
              <div>
                <div className="font-medium">Light</div>
                <div className="text-sm text-gray-500">
                  Clean white background
                </div>
              </div>
            </Label>
          </div>

          <div className="dark:hover:bg-primary/20 flex items-center space-x-3 rounded-2xl border p-3 hover:bg-gray-100">
            <RadioGroupItem value="dark" id="dark" />
            <Label
              htmlFor="dark"
              className="flex flex-1 cursor-pointer items-center gap-3"
            >
              <Moon className="h-5 w-5 text-blue-600" />
              <div>
                <div className="font-medium">Dark</div>
                <div className="text-sm text-gray-500">
                  Dark background for low light
                </div>
              </div>
            </Label>
          </div>

          <div className="dark:hover:bg-primary/20 flex items-center space-x-3 rounded-2xl border p-3 hover:bg-gray-100">
            <RadioGroupItem value="system" id="system" />
            <Label
              htmlFor="system"
              className="flex flex-1 cursor-pointer items-center gap-3"
            >
              <Monitor className="h-5 w-5 text-gray-600" />
              <div>
                <div className="font-medium">System</div>
                <div className="text-sm text-gray-500">
                  Follows your system setting
                </div>
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );

  const renderLanguageView = () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-4 text-lg font-semibold">Language</h3>
        <Select value={language} onValueChange={setLanguage}>
          <SelectTrigger className="rounded-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="en">English</SelectItem>
            <SelectItem value="fi">Finnish</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );

  const renderPrivacyView = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Analytics</h4>
            <p className="text-sm text-gray-500">
              Help improve FeedBeep with anonymous usage data
            </p>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Personalized Ads</h4>
            <p className="text-sm text-gray-500">
              Show ads based on your interests
            </p>
          </div>
          <Switch />
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-medium">Data Export</h4>
            <p className="text-sm text-gray-500">Download your data</p>
          </div>
          <Button variant="outline" className="rounded-full">
            Export
          </Button>
        </div>
      </div>
    </div>
  );

  const renderAccountView = () => (
    <div className="space-y-6">
      <div className="space-y-4">
        <Button variant="outline" className="w-full rounded-full">
          Change Password
        </Button>

        <Button variant="outline" className="w-full rounded-full">
          Manage Subscription
        </Button>

        <Button variant="destructive" className="w-full rounded-full">
          Delete Account
        </Button>
      </div>
    </div>
  );

  const renderCurrentView = () => {
    switch (currentView) {
      case "notifications":
        return renderNotificationsView();
      case "theme":
        return renderThemeView();
      case "language":
        return renderLanguageView();
      case "privacy":
        return renderPrivacyView();
      case "account":
        return renderAccountView();
      default:
        return renderMainView();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 backdrop-blur-sm">
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="bg-background fixed top-0 right-0 h-full w-full max-w-md shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b p-4">
            <div className="flex items-center gap-3">
              {views[currentView as keyof typeof views].showBack && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleBack}
                  className="cursor-pointer rounded-full"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              )}
              <h2 className="text-lg font-semibold">
                {views[currentView as keyof typeof views].title}
              </h2>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="rounded-full"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {renderCurrentView()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPanel;
