import type { List, ListItem, Nodes, Link, Text } from "mdast";
import { toc } from "mdast-util-toc";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import type { Node } from "unist";
import { visit } from "unist-util-visit";
import type { VFile } from "vfile";
import { unified } from "unified";

interface Item {
  title?: string;
  url?: string;
  items?: Item[];
}

const textTypes = ["text", "emphasis", "strong", "inlineCode"];

function flattenContent(node: Link | Text): string {
  const result: string[] = [];

  visit(
    node,
    (
      node: Node & {
        value?: string;
      }
    ) => {
      if (!textTypes.includes(node.type)) {
        return;
      }

      result.push(node.value ?? "");
    }
  );

  return result.join("");
}

function traverse(
  node: List | ListItem,
  current: {
    title?: string;
    url?: string;
    items?: Item[];
  }
): {
  title?: string;
  url?: string;
  items?: Item[];
} {
  if (node.type === "list") {
    current.items = node.children?.map((node) => traverse(node, {}));

    return current;
  }

  if (node.type === "listItem") {
    if (node.children?.length === 0) {
      return current;
    }

    if (node.children[0].type === "paragraph") {
      visit(node.children[0], (node) => {
        if (node.type === "link") {
          current.url = node.url;
          current.title = flattenContent(node);
        }

        if (node.type === "text") {
          current.title = flattenContent(node);
        }
      });
    }

    if (node.children.length > 1 && node.children[1].type === "list") {
      traverse(node.children[1] as List, current);
    }

    return current;
  }

  return {};
}

function getToc(): (tree: Node, file: VFile) => void {
  return function (tree: Node, file: VFile): void {
    const result = toc(tree as Nodes);

    if (!result.map) {
      return;
    }

    file.data = traverse(result.map, {});
  };
}

export interface TableOfContents {
  items?: Item[];
}

export async function getTableOfContents(content: string): Promise<TableOfContents> {
  const file = await unified().use(remarkParse).use(remarkStringify).use(getToc).process(content);

  return file.data as TableOfContents;
}
