import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import AppThemeProvider from "@/shared/providers/app-theme-provider";

import { Toaster } from "@/shared/rui/toaster";
import { Toaster as Sonner } from "@/shared/rui/sonner";
import { detectLanguage } from "@/shared/config/i18n/server-helper";
import I18nProvider from "@/shared/config/i18n/providers/i18n-provider";
import TanstackQueryProvider from "@/shared/providers/tanstack-query-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FeedBeep - Personalized News Feed",
  description: "A clean, personalized news feed experience",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await detectLanguage();
  return (
    <html lang={language} suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <I18nProvider>
          <TanstackQueryProvider>
            <AppThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
              <Toaster />
              <Sonner />
            </AppThemeProvider>
          </TanstackQueryProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
