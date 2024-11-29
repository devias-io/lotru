import * as React from "react";
import { notFound } from "next/navigation";
import { css } from "@pigment-css/react";

import { MDX } from "@/src/components/mdx";
import { Text } from "@/src/components/ui/text";
import { allComponents } from "content-collections";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps): Promise<React.JSX.Element> {
  const { slug } = await params;
  const component = allComponents.find((component) => {
    return component._meta.path === slug;
  });

  if (!component) {
    return notFound();
  }

  return (
    <article
      className={css({
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-unit) * 6)",
        "@media (min-width: 768px)": {
          paddingInline: "calc(var(--spacing-unit) * 8)",
        },
      })}
    >
      <div className={css({ display: "flex", flexDirection: "column", gap: "calc(var(--spacing-unit) * 2)" })}>
        <Text size="4xl" weight="bold">
          {component.title}
        </Text>
        {component.description ? (
          <Text
            className={css({
              color: "hsl(var(--color-mutedForeground))",
            })}
            size="xl"
          >
            {component.description}
          </Text>
        ) : null}
      </div>
      <div>
        <MDX code={component.mdx} />
      </div>
    </article>
  );
}
