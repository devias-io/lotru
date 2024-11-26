import fs from "fs";
import path from "path";
import type { Node } from "unist";
import { u } from "unist-builder";
import { visit } from "unist-util-visit";

import { index } from "../__registry__";

export interface UnistNode extends Node {
  type: string;
  name?: string;
  tagName?: string;
  value?: string;
  properties?: {
    __rawString__?: string;
    __className__?: string;
    __event__?: string;
    [key: string]: unknown;
  };
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
}

export interface UnistTree extends Node {
  children: UnistNode[];
}

export function rehypeComponent() {
  return async (tree: UnistTree) => {
    visit(tree, (node: UnistNode): void => {
      // src prop overrides both name and fileName.
      const { value: srcPath } =
        (getNodeAttributeByName(node, "src") as {
          name: string;
          value?: string;
          type?: string;
        }) || {};

      if (node.name === "ComponentPreview") {
        const id = getNodeAttributeByName(node, "id")?.value as string;

        if (!id) {
          console.error(`Component id is required for ComponentPreview`);
          return;
        }

        try {
          const component = index[id];

          if (!component) {
            console.error(`Component "${id}" not found in registry.`);
            return;
          }

          const src = component.files[0];

          if (!src) {
            console.error(`Component "${id}" does not have a source file.`);
            return;
          }

          // Read the source file.
          const filePath = path.join("src/components", src.path);
          let source = fs.readFileSync(filePath, "utf8");

          // Replace export.
          // TODO: Use ts-morph to replace this.
          source = source.replaceAll("@/src/", "@/");
          source = source.replaceAll("export default", "export");

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src,
              },
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: source,
                    },
                  ],
                }),
              ],
            })
          );
        } catch (error) {
          console.error(error);
        }
      }
    });
  };
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

function getComponentSourceFileContent(node: UnistNode) {
  const src = getNodeAttributeByName(node, "src")?.value as string;

  if (!src) {
    return null;
  }

  // Read the source file.
  const filePath = path.join(process.cwd(), src);
  const source = fs.readFileSync(filePath, "utf8");

  return source;
}
