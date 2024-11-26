import * as React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { css } from "@pigment-css/react";
import { ThemeProvider } from "next-themes";
import "@pigment-css/react/styles.css";

import { cn } from "@/src/lib/cn";
import { siteConfig } from "@/src/config/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html className={cn(geistSans.variable, geistMono.variable)} dir="ltr" lang="en" suppressHydrationWarning>
      <body
        className={css(({ theme }) => ({
          backgroundColor: "hsl(var(--color-background))",
          color: "hsl(var(--color-foreground))",
          margin: 0,
          padding: 0,
          ...theme.applyStyles("dark", {
            colorScheme: "dark",
          }),
        }))}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
