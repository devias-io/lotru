import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { css } from "@pigment-css/react";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";

import { allDocs, type Doc } from "content-collections";

import { Text } from "@/src/components/ui/text";
import { Stack } from "@/src/components/ui/stack";
import { Badge } from "@/src/components/ui/badge";
import { MDX } from "@/src/components/mdx";
import { Toc } from "@/src/components/toc";

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
    <main
      className={css({
        boxSizing: "border-box",
        display: "grid",
        paddingBlock: "calc(var(--spacing-unit) * 8)",
        position: "relative",
        "@media (min-width: 1280px)": {
          gridTemplateColumns: "1fr 300px",
        },
      })}
    >
      <div
        className={css({
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: "calc(var(--spacing-unit) * 6)",
          marginInline: "auto",
          maxWidth: "48rem",
          minWidth: 0,
          paddingInline: "calc(var(--size-unit) * 8)",
          width: "var(--size-full)",
        })}
      >
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            gap: "calc(var(--spacing-unit) * 2)",
          })}
        >
          <Stack alignItems="center" direction="row" gap={1}>
            <Text fontSize="sm" className={css({ color: "hsl(var(--color-mutedForeground))" })}>
              Docs
            </Text>
            <ChevronRightIcon size={14} />
            <Text fontSize="sm">{doc.title}</Text>
          </Stack>
          <Text fontSize="3xl" fontWeight="bold">
            {doc.title}
          </Text>
          {doc.description ? (
            <Text className={css({ color: "hsl(var(--color-mutedForeground))" })}>
              {doc.description}
            </Text>
          ) : null}
          {doc.links ? (
            <Stack alignItems="center" direction="row" gap={2}>
              {doc.links?.doc ? (
                <Link href={doc.links.doc} target="_blank" rel="noreferrer">
                  <Badge>
                    Docs
                    <ExternalLinkIcon />
                  </Badge>
                </Link>
              ) : null}
              {doc.links?.api ? (
                <Link href={doc.links.api} target="_blank" rel="noreferrer">
                  <Badge>
                    API Reference
                    <ExternalLinkIcon />
                  </Badge>
                </Link>
              ) : null}
            </Stack>
          ) : null}
        </div>
        <div className={css({ minWidth: 0 })}>
          <MDX code={doc.mdx} />
        </div>
      </div>
      <div
        className={css({
          display: "none",
          "@media (min-width: 1280px)": {
            display: "block",
          },
        })}
      >
        <div
          className={css({
            left: 0,
            position: "sticky",
            top: "calc(var(--spacing-unit) * 20)",
            zIndex: "var(--zIndex-sticky)",
          })}
        >
          <Toc tree={doc.toc} />
        </div>
      </div>
    </main>
  );
}
