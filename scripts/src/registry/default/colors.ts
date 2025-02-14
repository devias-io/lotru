import type { RegistryColor } from "../schema";

export const colors: RegistryColor[] = [
  {
    id: "colors/neutral",
    name: "Neutral",
    tokens: {
      light: {
        color: {
          background: "0 0% 100%",
          foreground: "240 5% 10%",
          border: "240 5% 90%",
          ring: "240 5% 65%",
          overlay: "224 71% 4% / 40%",
          surface: "0 0% 100%",
          primary: "240 4% 16%",
          primaryForeground: "0 0% 100%",
          danger: "347 77% 50%",
          dangerForeground: "0 0% 100%",
          muted: "0 0% 98%",
          mutedForeground: "240 5% 35%",
        },
      },
      dark: {
        color: {
          background: "0 0% 7%",
          foreground: "220 9% 94%",
          border: "223 7% 19%",
          ring: "240 5% 16%",
          overlay: "240 4% 10% / 70%",
          surface: "0 0% 7%",
          primary: "220 9% 94%",
          primaryForeground: "0 0% 7%",
          danger: "347 77% 50%",
          dangerForeground: "0 0% 100%",
          muted: "0 0% 10%",
          mutedForeground: "218 7% 70%",
        },
      },
    },
  },
];
