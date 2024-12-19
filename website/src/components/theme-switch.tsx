"use client";

import * as React from "react";
import { css } from "@pigment-css/react";
import { SunIcon, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuPositioner,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import { IconButton } from "@/src/components/ui/icon-button";

export function ThemeSwitch(): React.JSX.Element {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <IconButton variant="ghost">
            <SunIcon
              className={css(({ theme }) =>
                theme.applyStyles("dark", {
                  display: "none",
                })
              )}
            />
            <MoonIcon
              className={css(({ theme }) =>
                theme.applyStyles("light", {
                  display: "none",
                })
              )}
            />
          </IconButton>
        }
      />
      <DropdownMenuPortal>
        <DropdownMenuPositioner align="start" side="bottom" sideOffset={4}>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenuPositioner>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
