"use client";

import * as React from "react";
import { AlertDialog as Primitive } from "@base-ui-components/react/alert-dialog";
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

const PromptProvider = ({
  variant,
  children,
}: React.PropsWithChildren<{
  variant: PromptVariant;
}>): React.JSX.Element => (
  <PromptContext.Provider value={{ variant }}>{children}</PromptContext.Provider>
);
PromptProvider.displayName = "PromptProvider";

const Prompt = ({
  /**
   * The variant of the prompt.
   */
  variant = "danger",
  ...props
}: React.PropsWithChildren<{
  variant?: PromptVariant;
}>): React.JSX.Element => (
  <PromptProvider variant={variant}>
    <Primitive.Root {...props} />
  </PromptProvider>
);
Prompt.displayName = "Prompt";

const PromptTrigger = Primitive.Trigger;

const PromptOverlay = styled(Primitive.Backdrop, {
  name: "PromptOverlay",
  slot: "overlay",
})<React.ComponentProps<typeof Primitive.Backdrop>>({
  backgroundColor: "hsl(var(--color-overlay))",
  position: "fixed",
  inset: 0,
  zIndex: "var(--zIndex-overlay)",
});

const PromptContent = styled(Primitive.Popup, {
  name: "PromptContent",
  slot: "content",
})<React.ComponentProps<typeof Primitive.Popup>>({
  backgroundColor: "hsl(var(--color-surface))",
  border: "1px solid hsl(var(--color-border))",
  borderRadius: "var(--borderRadius-md)",
  boxShadow: "var(--shadow-lg)",
  display: "flex",
  flexDirection: "column",
  fontFamily: "var(--font-sans)",
  gap: "calc(var(--spacing-unit) * 4)",
  insetBlockStart: "50%",
  insetInlineStart: "50%",
  maxWidth: "var(--size-lg)",
  padding: "calc(var(--spacing-unit) * 6)",
  position: "fixed",
  transform: "translate(-50%, -50%)",
  width: "var(--size-full)",
  zIndex: "var(--zIndex-modal)",
});

const PromptHeader = styled("div", {
  name: "PromptHeader",
  slot: "header",
})<React.ComponentProps<"div">>({
  display: "flex",
  flexDirection: "column",
  gap: "calc(var(--spacing-unit) * 2)",
});

const PromptFooter = styled("div", {
  name: "PromptFooter",
  slot: "footer",
})<React.ComponentProps<"div">>({
  display: "flex",
  justifyContent: "flex-end",
  gap: "calc(var(--spacing-unit) * 2)",
});

const PromptTitle = styled(Primitive.Title, {
  name: "PromptTitle",
  slot: "title",
})<React.ComponentProps<typeof Primitive.Title>>({
  fontSize: "var(--fontSize-lg)",
  fontWeight: "var(--fontWeight-semibold)",
  marginBlock: 0,
});

const PromptDescription = styled(Primitive.Description, {
  name: "PromptDescription",
  slot: "description",
})<React.ComponentProps<typeof Primitive.Description>>({
  color: "hsl(var(--color-mutedForeground))",
  fontSize: "var(--fontSize-sm)",
  lineHeight: "var(--lineHeight-tight)",
  marginBlock: 0,
});

const PromptAction = ({
  children,
  type,
  ...props
}: React.PropsWithChildren<{
  type?: "button" | "submit" | "reset";
}>) => {
  const { variant } = usePromptContext();

  return (
    <Primitive.Close
      render={
        <Button type={type} variant={variant === "danger" ? "danger" : "solid"}>
          {children}
        </Button>
      }
      {...props}
    />
  );
};
PromptAction.displayName = "PromptAction";

const PromptCancel = ({
  children,
  ...props
}: React.PropsWithChildren<{
  type?: "button" | "submit" | "reset";
}>) => <Primitive.Close render={<Button variant="outline">{children}</Button>} {...props} />;
PromptCancel.displayName = "PromptCancel";

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
  usePromptContext,
};
