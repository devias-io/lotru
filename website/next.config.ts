import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { withContentCollections } from "@content-collections/next";
import { withPigment } from "@pigment-css/nextjs-plugin";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import { visit } from "unist-util-visit";

import {
  rehypeComponentPreview,
  rehypeComponentSource,
  type UnistNode,
  type UnistTree,
} from "./src/lib/rehype";
import pigmentConfig from "./pigment.config";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    esmExternals: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      rehypeAutolinkHeadings,
      rehypeComponentPreview,
      rehypeComponentSource,
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
  },
});

export default withContentCollections(withMDX(withPigment(nextConfig, pigmentConfig)));
