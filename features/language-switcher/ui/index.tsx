"use client";

import React, { memo, useCallback } from "react";

import { Button } from "@/shared/rui/button";
import { useBoolean } from "@/shared/hooks/use-boolean";
import type { ILanguageValue } from "@/shared/config/i18n";
import { LANGUAGES, useTranslate } from "@/shared/config/i18n";
import { Popover, PopoverContent, PopoverTrigger } from "@/shared/rui/popover";

const LanguageSwitcher = () => {
  const { onChangeLang, activeLng } = useTranslate();

  const { value: open, setValue: setOpen } = useBoolean(false);

  const handleLangChange = useCallback(
    (lang: ILanguageValue) => {
      onChangeLang(lang);
      setOpen(false);
    },
    [onChangeLang, setOpen]
  );

  return (
    <div className="bg-primary/90 flex items-center gap-1 rounded-full border p-1">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="text-primary-foreground h-7 w-7 rounded-full p-0 uppercase"
          >
            {activeLng}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-primary/10 flex max-w-fit flex-col gap-1 border-none">
          {LANGUAGES.map((lang) => (
            <Button
              key={lang}
              variant={activeLng === lang ? "default" : "ghost"}
              size="sm"
              onClick={() => handleLangChange(lang)}
              className="h-7 w-7 rounded-full p-0 uppercase"
              title={lang}
            >
              {lang}
            </Button>
          ))}
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default memo(LanguageSwitcher);
