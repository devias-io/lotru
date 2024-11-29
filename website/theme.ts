import type { ExtendTheme } from "@pigment-css/react/theme";

declare module "@pigment-css/react/theme" {
  export interface ThemeArgs {
    theme: Theme;
  }
}

type BreakpointFn = (breakpoint: string) => string;

type SelectorFn = (colorScheme: string | undefined, css: Record<string, unknown>) => string;

interface ColorTokens {
  background: string;
  foreground: string;
  border: string;
  ring: string;
  overlay: string;
  surface: string;
  primary: string;
  primaryForeground: string;
  danger: string;
  dangerForeground: string;
  muted: string;
  mutedForeground: string;
}

interface BorderRadiusTokens {
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  full: string;
}

interface DurationTokens {
  fastest: string;
  faster: string;
  fast: string;
  normal: string;
  slow: string;
  slower: string;
  slowest: string;
}

interface EasingTokens {
  pulse: string;
  default: string;
  emphasizedIn: string;
  emphasizedOut: string;
}

interface FontFamilyTokens {
  sans: string;
  mono: string;
}

interface FontSizeTokens {
  "2xs": string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
  "8xl": string;
  "9xl": string;
}

interface FontWeightTokens {
  light: string;
  regular: string;
  medium: string;
  semibold: string;
  bold: string;
}

interface LetterSpacingTokens {
  tighter: string;
  tight: string;
  normal: string;
  wide: string;
  wider: string;
  widest: string;
}

interface LineHeightTokens {
  none: string;
  tighter: string;
  tight: string;
  normal: string;
  relaxed: string;
  loose: string;
}

interface ShadowTokens {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  "2xl": string;
}

interface SizeTokens {
  unit: string;
  xs: string;
  sm: string;
  md: string; 
  lg: string;
  xl: string;
  "2xl": string;
  "3xl": string;
  "4xl": string;
  "5xl": string;
  "6xl": string;
  "7xl": string;
  full: string;
  min: string;
  max: string;
  fit: string;
}

interface SpacingTokens {
  unit: string;
}

interface ZIndexTokens {
  hide: string;
  base: string;
  docked: string;
  dropdown: string;
  sticky: string;
  banner: string;
  overlay: string;
  modal: string;
  popover: string;
  skipLink: string;
  toast: string;
  tooltip: string;
}

export interface ThemeInput {
  colorSchemes: {
    light: {
      color: ColorTokens;
      shadow: ShadowTokens;
    };
    dark: {
      color: ColorTokens;
      shadow: ShadowTokens;
    };
  };
  borderRadius: BorderRadiusTokens;
  duration: DurationTokens;
  easing: EasingTokens;
  fontFamily: FontFamilyTokens;
  fontSize: FontSizeTokens;
  fontWeight: FontWeightTokens;
  letterSpacing: LetterSpacingTokens;
  lineHeight: LineHeightTokens;
  size: SizeTokens;
  spacing: SpacingTokens;
  zIndex: ZIndexTokens;
  breakpoint: {
    gt: BreakpointFn;
    lt: BreakpointFn;
  };
  getSelector: SelectorFn;
}

export type Theme = ExtendTheme<{
  colorScheme: "light" | "dark";
  tokens: {
    color: ColorTokens;
    shadow: ShadowTokens;
    borderRadius: BorderRadiusTokens;
    duration: DurationTokens;
    fontFamily: FontFamilyTokens;
    fontSize: FontSizeTokens;
    fontWeight: FontWeightTokens;
    letterSpacing: LetterSpacingTokens;
    lineHeight: LineHeightTokens;
    spacing: SpacingTokens;
    zIndex: ZIndexTokens;
  };
  breakpoint: {
    lt: BreakpointFn;
    gt: BreakpointFn;
  };
}>;

const theme: ThemeInput = {
  colorSchemes: {
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
      shadow: {
        xs: "0px 1px 2px hsl(0 0% 0% / 12%), 0px 0px 1px hsl(0 0% 0% / 19%)",
        sm: "0px 2px 4px hsl(0 0% 0% / 6%), 0px 0px 1px hsl(0 0% 0% / 19%)",
        md: "0px 4px 8px hsl(0 0% 0% / 6%), 0px 0px 1px hsl(0 0% 0% / 19%)",
        lg: "0px 8px 16px hsl(0 0% 0% / 6%), 0px 0px 1px hsl(0 0% 0% / 19%)",
        xl: "0px 16px 24px hsl(0 0% 0% / 6%), 0px 0px 1px hsl(0 0% 0% / 19%)",
        "2xl": "0px 24px 40px hsl(0 0% 0% / 6%), 0px 0px 1px hsl(0 0% 0% / 19%)",
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
      shadow: {
        xs: "0px 1px 1px hsl(0 0% 0% / 95%), 0px 0px 1px inset hsl(0 0% 100% / 23%)",
        sm: "0px 2px 4px hsl(0 0% 0% / 80%), 0px 0px 1px inset hsl(0 0% 100% / 23%)",
        md: "0px 4px 8px hsl(0 0% 0% / 80%), 0px 0px 1px inset hsl(0 0% 100% / 23%)",
        lg: "0px 8px 16px hsl(0 0% 0% / 80%), 0px 0px 1px inset hsl(0 0% 100% / 23%)",
        xl: "0px 16px 24px hsl(0 0% 0% / 80%), 0px 0px 1px inset hsl(0 0% 100% / 23%)",
        "2xl": "0px 24px 40px hsl(0 0% 0% / 80%), 0px 0px 1px inset hsl(0 0% 100% / 23%)",
      },
    },
  },
  borderRadius: {
    "2xs": "0.0625rem",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  duration: {
    fastest: "50ms",
    faster: "100ms",
    fast: "150ms",
    normal: "200ms",
    slow: "300ms",
    slower: "400ms",
    slowest: "500ms",
  },
  easing: {
    pulse: "cubic-bezier(0.4, 0.0, 0.6, 1.0)",
    default: "cubic-bezier(0.2, 0.0, 0, 1.0)",
    emphasizedIn: "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    emphasizedOut: "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
  },
  fontFamily: {
    sans: "var(--font-geist-sans), sans-serif",
    mono: "var(--font-geist-mono), monospace",
  },
  fontSize: {
    "2xs": "0.5rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeight: {
    light: "300",
    regular: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
  },
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeight: {
    none: "1",
    tighter: "1.125",
    tight: "1.25",
    normal: "1.5",
    relaxed: "1.75",
    loose: "2",
  },
  size: {
    unit: ".25rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  spacing: {
    unit: ".25rem",
  },
  zIndex: {
    hide: "-1",
    base: "0",
    docked: "10",
    dropdown: "1000",
    sticky: "1100",
    banner: "1200",
    overlay: "1300",
    modal: "1400",
    popover: "1500",
    skipLink: "1600",
    toast: "1700",
    tooltip: "1800",
  },
  breakpoint: buildBreakpoints(),
  getSelector(colorScheme: string | undefined) {
    return colorScheme ? `[data-theme="${colorScheme}"]` : ":root";
  },
};

function buildBreakpoints(): {
  gt: BreakpointFn;
  lt: BreakpointFn;
} {
  const breakpoints: Record<string, number> = {
    xs: 0,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };

  return {
    gt(breakpoint: string): string {
      return `@media (min-width: ${breakpoints[breakpoint] - 1}px)`;
    },
    lt(breakpoint: string): string {
      return `@media (max-width: ${breakpoints[breakpoint] - 1}px)`;
    },
  };
}

export default theme;
