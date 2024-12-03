"use client";

import * as React from "react";
import * as Primitives from "@base_ui/react/AlertDialog";
import { styled } from "@pigment-css/react";

import { Button } from "@/src/components/ui/button";

type PromptVariant = "danger" | "confirmation";

const PromptContext = React.createContext<{ variant: PromptVariant }>({
  variant: "danger",
});

const usePromptContext = () => {
  const context = React.useContext(PromptContext);
  if (!context) {
    throw new Error("usePromptContext must be used within a PromptProvider");
  }
  return context;
};

type PromptProviderProps = React.PropsWithChildren<{
  variant: PromptVariant;
}>;

const PromptProvider = ({ variant, children }: PromptProviderProps) => {
  return <PromptContext.Provider value={{ variant }}>{children}</PromptContext.Provider>;
};

interface PromptProps {
  children: React.ReactNode;
  variant?: PromptVariant;
}

const Prompt: React.FC<PromptProps> = ({
  /**
   * The variant of the prompt.
   */
  variant = "danger",
  ...props
}) => {
  return (
    <PromptProvider variant={variant}>
      <Primitives.Root {...props} />
    </PromptProvider>
  );
};
Prompt.displayName = "Prompt";

const PromptTrigger = Primitives.Trigger;

const PromptOverlay = styled(Primitives.Backdrop, {
  name: "PromptOverlay",
  slot: "backdrop",
})({
  backgroundColor: "hsl(var(--color-overlay))",
  position: "fixed",
  inset: 0,
  zIndex: "var(--zIndex-overlay)",
});

const PromptContent = styled(Primitives.Popup, {
  name: "PromptContent",
  slot: "content",
})({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxShadow: "var(--shadow-lg)",
  display: "flex",
  flexDirection: "column",
  fontFamily: "var(--font-sans)",
  gap: "calc(var(--spacing-unit) * 4)",
  left: "50%",
  maxWidth: "var(--size-lg)",
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  top: "50%",
  transform: "translate(-50%, -50%)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
});

const PromptHeader = styled("div", {
  name: "PromptHeader",
  slot: "header",
})({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

const PromptFooter = styled("div", {
  name: "PromptFooter",
  slot: "footer",
})({
  display: "flex",
  justifyContent: "flex-end",
  gap: "calc(var(--spacing-unit) * 2)",
});

const PromptTitle = styled(Primitives.Title)({
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-lg)",
  lineHeight: "var(--lineHeight-normal)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const PromptDescription = styled(Primitives.Description)({
  color: "hsl(var(--color-mutedForeground))",
  fontFamily: "var(--fontFamily-sans)",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  marginBlock: 0,
});

interface PromptActionProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const PromptAction = React.forwardRef<HTMLButtonElement, PromptActionProps>(function PromptAction(
  { children, type, ...props },
  ref
) {
  const _ = usePromptContext();

  return <Primitives.Close ref={ref} render={<Button type={type}>{children}</Button>} {...props} />;
});

interface PromptCancelProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const PromptCancel = React.forwardRef<HTMLButtonElement, PromptCancelProps>(function PromptCancel(
  { children, ...props },
  ref
) {
  return <Primitives.Close ref={ref} render={<Button variant="ghost">{children}</Button>} {...props} />;
});

export {
  Prompt,
  PromptTrigger,
  PromptOverlay,
  PromptContent,
  PromptHeader,
  PromptFooter,
  PromptTitle,
  PromptDescription,
  PromptAction,
  PromptCancel,
};

export type { PromptProps, PromptActionProps, PromptCancelProps };
