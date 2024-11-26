import * as React from "react";
import { MDXContent } from "@content-collections/mdx/react";
import { css } from "@pigment-css/react";
import type { MDXComponents } from "mdx/types";

import { cn } from "@/src/lib/cn";
import { ComponentPreview } from "./component-preview";

function H1(props: React.ComponentProps<"h1">): React.JSX.Element {
  return (
    <h1
      className={css({
        fontFamily: "var(--fontFamily-sans)",
        fontSize: "var(--fontSize-4xl)",
        fontWeight: "var(--fontWeight-medium)",
        lineHeight: "var(--lineHeight-normal)",
      })}
      {...props}
    />
  );
}

function H2(props: React.ComponentProps<"h2">): React.JSX.Element {
  return (
    <h2
      className={css({
        fontFamily: "var(--fontFamily-sans)",
        fontSize: "var(--fontSize-2xl)",
        fontWeight: "var(--fontWeight-bold)",
        lineHeight: "var(--lineHeight-normal)",
        marginBottom: 0,
        marginTop: "calc(var(--spacing-unit) * 12)",
        paddingBottom: "calc(var(--spacing-unit) * 2)",
      })}
      {...props}
    />
  );
}

function H3(props: React.ComponentProps<"h3">): React.JSX.Element {
  return (
    <h3
      className={css({
        fontFamily: "var(--fontFamily-sans)",
        fontSize: "var(--fontSize-xl)",
        fontWeight: "var(--fontWeight-semibold)",
        lineHeight: "var(--lineHeight-normal)",
      })}
      {...props}
    />
  );
}

function Code({ className, ...props }: React.ComponentProps<"code">): React.JSX.Element {
  return (
    <code
      className={cn(
        className,
        css({
          fontFamily: "var(--fontFamily-mono)",
          fontSize: "var(--fontSize-xs)",
          fontWeight: "var(--fontWeight-regular)",
          lineHeight: "var(--lineHeight-normal)",
        })
      )}
      {...props}
    />
  );
}

function Pre({ className, ...props }: React.ComponentProps<"pre">): React.JSX.Element {
  return (
    <pre
      className={cn(
        className,
        css({
          borderRadius: "var(--borderRadius-md)",
          boxSizing: "border-box",
          padding: "1rem",
          overflowX: "auto",
          width: "var(--size-full)",
        })
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
