import * as React from "react";
import type { Metadata } from "next";
import { css } from "@pigment-css/react";
import { ThemeProvider } from "next-themes";

import "@pigment-css/react/styles.css";

import { cn } from "@/src/lib/cn";
import { siteConfig } from "@/src/config/site";
import { fontMono, fontSans } from "@/src/lib/fonts";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html
      className={cn(
        css({
          "-webkit-font-smoothing": "antialiased",
          "-webkit-text-size-adjust": "100%",
          fontFamily: "var(--fontFamily-sans)",
          fontSize: "var(--fontSize-md)",
          fontSynthesisWeight: "none",
          lineHeight: "var(--lineHeight-normal)",
          textRendering: "optimizeLegibility",
        } as React.CSSProperties),
        fontSans.variable,
        fontMono.variable
      )}
      dir="ltr"
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={css({
          backgroundColor: "hsl(var(--color-background))",
          color: "hsl(var(--color-foreground))",
          margin: 0,
        })}
      >
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
      </body>
    </html>
  );
}
