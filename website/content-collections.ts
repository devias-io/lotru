import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeShiki from "@shikijs/rehype";

import { rehypeComponent } from "./src/lib/rehype-component";

const components = defineCollection({
  name: "components",
  directory: "src/content/docs/components",
  include: "*.mdx",
  schema: (z) => ({
    title: z.string(),
    description: z.string(),
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      rehypePlugins: [[rehypeComponent], [rehypeShiki, { theme: "github-dark" }]],
    });

    return {
      ...document,
      mdx,
    };
  },
});

export default defineConfig({
  collections: [components],
});
