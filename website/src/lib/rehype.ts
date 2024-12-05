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
    __src__?: string;
    __rawString__?: string;
    [key: string]: unknown;
  };
  attributes?: {
    name: string;
    value: unknown;
    type?: string;
  }[];
  children?: UnistNode[];
  __src__?: string;
  __rawString__?: string;
}

export interface UnistTree extends Node {
  children: UnistNode[];
}

function getNodeAttributeByName(node: UnistNode, name: string) {
  return node.attributes?.find((attribute) => attribute.name === name);
}

export function rehypeComponentSource(): (tree: UnistTree) => Promise<void> {
  return async (tree: UnistTree): Promise<void> => {
    visit(tree, (node: UnistNode): void => {
      if (node.name === "ComponentSource") {
        const id = getNodeAttributeByName(node, "id")?.value as string;

        if (!id) {
          console.error(`Component id is required for ComponentSource`);
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
          let content = fs.readFileSync(filePath, "utf8");

          // Replace imports and export.
          // TODO: Use ts-morph to replace this.
          content = content.replaceAll("@/src/", "@/");
          content = content.replaceAll("export default", "export");

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src.path,
              },
              attributes: [],
              children: [
                u("element", {
                  tagName: "code",
                  properties: {
                    className: ["language-tsx"],
                  },
                  children: [
                    {
                      type: "text",
                      value: content,
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

export function rehypeComponentPreview(): (tree: UnistTree) => Promise<void> {
  return async (tree: UnistTree): Promise<void> => {
    visit(tree, (node: UnistNode): void => {
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
          let content = fs.readFileSync(filePath, "utf8");

          // Replace imports and export.
          // TODO: Use ts-morph to replace this.
          content = content.replaceAll("@/src/", "@/");
          content = content.replaceAll("export default", "export");

          // Add code as children so that rehype can take over at build time.
          node.children?.push(
            u("element", {
              tagName: "pre",
              properties: {
                __src__: src.path,
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
                      value: content,
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
