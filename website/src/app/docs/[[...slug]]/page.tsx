import * as React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { css } from "@pigment-css/react";
import { ExternalLinkIcon } from "lucide-react";

import { allDocs, type Doc } from "content-collections";

import { MDX } from "@/src/components/mdx";
import { Text } from "@/src/components/ui/text";
import { Stack } from "@/src/components/ui/stack";
import { Badge } from "@/src/components/ui/badge";

async function getDocFromParams(params: Promise<{ slug: string[] }>): Promise<Doc | null> {
  const { slug } = await params;
  const path = slug?.join("/") ?? "index";
  return allDocs.find((doc) => doc._meta.path === path) ?? null;
}

interface PageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Page({ params }: PageProps): Promise<React.JSX.Element> {
  const doc = await getDocFromParams(params);

  if (!doc) {
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
      <div
        className={css({
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-unit) * 2)",
        })}
      >
        <Text size="3xl" weight="bold">
          {doc.title}
        </Text>
        {doc.description ? (
          <Text className={css({ color: "hsl(var(--color-mutedForeground))" })}>
            {doc.description}
          </Text>
        ) : null}
        {doc.links ? (
          <Stack alignItems="center" direction="row" gap={2}>
            {doc.links?.doc && (
              <Link href={doc.links.doc} target="_blank" rel="noreferrer">
                <Badge>
                  Docs
                  <ExternalLinkIcon />
                </Badge>
              </Link>
            )}
            {doc.links?.api && (
              <Link href={doc.links.api} target="_blank" rel="noreferrer">
                <Badge>
                  API Reference
                  <ExternalLinkIcon />
                </Badge>
              </Link>
            )}
          </Stack>
        ) : null}
      </div>
      <div>
        <MDX code={doc.mdx} />
      </div>
    </article>
  );
}
