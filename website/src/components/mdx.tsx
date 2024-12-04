import * as React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import { css } from "@pigment-css/react";
import type { MDXComponents } from "mdx/types";

import { cn } from "@/src/lib/cn";
import { ComponentPreview } from "@/src/components/component-preview";
import { ComponentSource } from "@/src/components/component-source";
import { Tabs, TabsContent, TabsIndicator, TabsList, TabsTrigger } from "@/src/components/ui/tabs";

function H1({ className, ...props }: React.ComponentProps<"h1">): React.JSX.Element {
  return (
    <h1
      className={cn(
        css({
          fontFamily: "var(--fontFamily-sans)",
          fontSize: "var(--fontSize-4xl)",
          fontWeight: "var(--fontWeight-medium)",
          lineHeight: "var(--lineHeight-normal)",
        }),
        className
      )}
      {...props}
    />
  );
}

function H2({ className, ...props }: React.ComponentProps<"h2">): React.JSX.Element {
  return (
    <h2
      className={cn(
        css({
          fontFamily: "var(--fontFamily-sans)",
          fontSize: "var(--fontSize-2xl)",
          fontWeight: "var(--fontWeight-bold)",
          lineHeight: "var(--lineHeight-normal)",
          marginBlockEnd: 0,
          marginBlockStart: "calc(var(--spacing-unit) * 12)",
          paddingBlockEnd: "calc(var(--spacing-unit) * 2)",
        }),
        className
      )}
      {...props}
    />
  );
}

function H3({ className, ...props }: React.ComponentProps<"h3">): React.JSX.Element {
  return (
    <h3
      className={cn(
        css({
          fontFamily: "var(--fontFamily-sans)",
          fontSize: "var(--fontSize-xl)",
          fontWeight: "var(--fontWeight-semibold)",
          lineHeight: "var(--lineHeight-normal)",
        }),
        className
      )}
      {...props}
    />
  );
}

function Code({ className, ...props }: React.ComponentProps<"code">): React.JSX.Element {
  return (
    <code
      className={cn(
        css({
          fontFamily: "var(--fontFamily-mono)",
          fontSize: "var(--fontSize-sm)",
          fontWeight: "var(--fontWeight-regular)",
          lineHeight: "var(--lineHeight-normal)",
        }),
        className
      )}
      {...props}
    />
  );
}

function Pre({ className, ...props }: React.ComponentProps<"pre">): React.JSX.Element {
  return (
    <pre
      className={cn(
        css({
          borderRadius: "var(--borderRadius-md)",
          boxSizing: "border-box",
          overflowX: "auto",
          padding: "calc(var(--spacing-unit) * 4)",
          width: "var(--size-full)",
        }),
        className
      )}
      {...props}
    />
  );
}

function Steps({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        css({
          borderLeft: "1px solid hsl(var(--color-border))",
          boxSizing: "border-box",
          counterReset: "step",
          marginBlockEnd: "calc(var(--spacing-unit) * 12)",
          marginInlineStart: "calc(var(--spacing-unit) * 4)",
          paddingInlineStart: "calc(var(--spacing-unit) * 8)",
        }),
        className
      )}
      {...props}
    />
  );
}

function Step({ className, ...props }: React.ComponentProps<"h3">) {
  return (
    <h3
      className={cn(
        css({
          boxSizing: "border-box",
          counterIncrement: "step",
          fontFamily: "var(--fontFamily-sans)",
          fontSize: "var(--fontSize-md)",
          fontWeight: "var(--fontWeight-semibold)",
          lineHeight: "var(--lineHeight-tight)",
          marginBlockStart: "calc(var(--spacing-unit) * 8)",
          position: "relative",
          "&::before": {
            alignItems: "center",
            backgroundColor: "hsl(var(--color-muted))",
            border: "4px solid hsl(var(--color-background))",
            borderRadius: "var(--borderRadius-full)",
            boxSizing: "border-box",
            content: "counter(step)",
            display: "inline-flex",
            fontFamily: "var(--fontFamily-mono)",
            fontSize: "var(--fontSize-md)",
            fontWeight: "var(--fontWeight-medium)",
            height: "2.25rem",
            justifyContent: "center",
            lineHeight: "var(--lineHeight-normal)",
            marginLeft: "-50px",
            marginTop: "-4px",
            position: "absolute",
            textAlign: "center",
            textIndent: "-1px",
            width: "2.25rem",
          },
        }),
        className
      )}
      {...props}
    />
  );
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: H1,
    h2: H2,
    h3: H3,
    code: Code,
    pre: Pre,
    ComponentPreview,
    ComponentSource,
    Steps,
    Step,
    Tabs,
    TabsList: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsList>): React.JSX.Element => (
      <TabsList
        className={cn(
          css({
            backgroundColor: "transparent",
            borderBottom: "1px solid hsl(var(--color-border))",
            borderRadius: 0,
            justifyContent: "flex-start",
            padding: 0,
            width: "var(--size-full)",
          }),
          className as string
        )}
        {...props}
      />
    ),
    TabsTrigger: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsTrigger>): React.JSX.Element => (
      <TabsTrigger
        className={cn(
          css({
            "&[data-selected]": {
              boxShadow: "none",
            },
          }),
          className as string
        )}
        {...props}
      />
    ),
    TabsContent,
    TabsIndicator: ({
      className,
      ...props
    }: React.ComponentProps<typeof TabsIndicator>): React.JSX.Element => (
      <TabsIndicator
        className={cn(
          css({
            bottom: 0,
          }),
          className as string
        )}
        {...props}
      />
    ),
  };
}

interface MDXProps {
  code: string;
}

export function MDX({ code }: MDXProps) {
  const components = useMDXComponents({});

  return <MDXContent components={components} code={code} />;
}
