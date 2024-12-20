import { readFile } from "node:fs/promises";
import { defineCollection, defineConfig } from "@content-collections/core";

import { getTableOfContents } from "./src/lib/toc";

const docs = defineCollection({
  name: "docs",
  directory: "src/content/docs",
  include: "**/*.mdx",
  parser: "frontmatter-only",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
    links: z
      .object({
        api: z.string().optional(),
        doc: z.string().optional(),
      })
      .optional(),
    toc: z
      .object({
        items: z.array(
          z.object({
            title: z.string(),
            url: z.string().optional(),
          })
        ),
      })
      .optional(),
  }),
  transform: async (document) => {
    const content = await readFile(`./src/content/docs/${document._meta.filePath}`, "utf-8");
    const toc = await getTableOfContents(content);

    return {
      ...document,
      toc,
    };
  },
});

export default defineConfig({
  // @ts-ignore -- TODO: Fix this
  collections: [docs],
});
