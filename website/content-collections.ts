import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import { visit } from "unist-util-visit";
import rehypePrettyCode from "rehype-pretty-code";

import {
  rehypeComponentPreview,
  rehypeComponentSource,
  type UnistNode,
  type UnistTree,
} from "./src/lib/rehype";

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
      remarkPlugins: [],
      rehypePlugins: [
        rehypeComponentSource,
        rehypeComponentPreview,
        function (): (tree: UnistTree) => Promise<void> {
          return async (tree: UnistTree): Promise<void> => {
            visit(tree, (node?: UnistNode): void => {
              if (node?.type === "element" && node.tagName === "pre") {
                const [codeElement] = node.children ?? [];

                if (codeElement.tagName !== "code") {
                  return;
                }

                node.__rawString__ = codeElement.children?.[0].value;
                node.__src__ = node.properties?.__src__;
              }
            });
          };
        },
        [rehypePrettyCode, { theme: "github-dark" }],
        function (): (tree: UnistTree) => Promise<void> {
          return async (tree: UnistTree): Promise<void> => {
            visit(tree, (node?: UnistNode): void => {
              if (node?.type === "element" && node.tagName === "figure") {
                if (!("data-rehype-pretty-code-figure" in (node.properties ?? {}))) {
                  return;
                }

                const preElement = node.children?.at(-1);

                if (preElement?.tagName !== "pre") {
                  return;
                }

                preElement.properties!["__rawString__"] = node.__rawString__;

                if (node.__src__) {
                  preElement.properties!["__src__"] = node.__src__;
                }
              }
            });
          };
        },
      ],
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
