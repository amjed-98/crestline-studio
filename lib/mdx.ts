import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import type { WorkFrontmatter, WorkPost } from "@/lib/types";

const workDirectory = path.join(process.cwd(), "content", "work");

function withSlug(frontmatter: Omit<WorkFrontmatter, "slug">, slug: string): WorkFrontmatter {
  return {
    slug,
    ...frontmatter,
  };
}

export const getAllWork = cache(async (): Promise<WorkFrontmatter[]> => {
  const entries = await fs.readdir(workDirectory, { withFileTypes: true });
  const posts = await Promise.all(
    entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map(async (entry) => {
        const slug = entry.name.replace(/\.mdx$/, "");
        const source = await fs.readFile(path.join(workDirectory, entry.name), "utf8");
        const { data } = matter(source);
        return withSlug(data as Omit<WorkFrontmatter, "slug">, slug);
      }),
  );

  return posts.sort((a, b) => b.year - a.year);
});

export const getWorkBySlug = cache(async (slug: string): Promise<WorkPost | null> => {
  const filePath = path.join(workDirectory, `${slug}.mdx`);

  try {
    const source = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(source);
    return {
      slug,
      ...(data as Omit<WorkFrontmatter, "slug">),
      content,
    };
  } catch {
    return null;
  }
});
