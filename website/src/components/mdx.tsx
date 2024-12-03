import * as React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import { css } from "@pigment-css/react";
import type { MDXComponents } from "mdx/types";

import { cn } from "@/src/lib/cn";
import { ComponentPreview } from "@/src/components/component-preview";

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
          padding: "calc(var(--spacing-unit) * 4)",
          overflowX: "auto",
          width: "var(--size-full)",
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
  };
}

interface MDXProps {
  code: string;
}

export function MDX({ code }: MDXProps) {
  const components = useMDXComponents({});

  return <MDXContent components={components} code={code} />;
}
