"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "lucide-react";

import { IconButton } from "@/src/components/ui/icon-button";

export function ThemeSwitch(): React.JSX.Element | null {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <IconButton disabled variant="ghost" />;
  }

  const Icon = theme === "light" ? SunIcon : MoonIcon;

  return (
    <IconButton onClick={() => setTheme(theme === "light" ? "dark" : "light")} variant="ghost">
      <Icon />
    </IconButton>
  );
}
