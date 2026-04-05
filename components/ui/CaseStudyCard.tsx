import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/Badge";
import type { WorkFrontmatter } from "@/lib/types";
import { cn } from "@/lib/utils";

function hasLocalImage(src: string) {
  return src.startsWith("/") && existsSync(path.join(process.cwd(), "public", src));
}

function isRemoteImage(src: string) {
  return src.startsWith("https://") || src.startsWith("http://");
}

function canRenderImage(src: string) {
  return hasLocalImage(src) || isRemoteImage(src);
}

function CoverArt({ work }: { work: WorkFrontmatter }) {
  if (canRenderImage(work.coverImage)) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={work.coverImage}
          alt={work.title}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden bg-[linear-gradient(135deg,rgba(245,158,11,0.16),rgba(123,127,93,0.2),rgba(180,106,71,0.22))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(29,27,24,0.12),transparent_38%)]" />
      <div className="absolute inset-x-6 bottom-6">
        <p className="font-mono text-xs uppercase tracking-[0.26em] text-ink/70">{work.client}</p>
        <h3 className="mt-2 text-3xl text-ink sm:text-4xl">{work.title}</h3>
      </div>
    </div>
  );
}

export function CaseStudyCard({
  work,
  featured = false,
}: {
  work: WorkFrontmatter;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/work/${work.slug}`}
      className={cn(
        "group card-surface overflow-hidden",
        featured ? "flex h-full flex-col" : "flex h-full flex-col",
      )}
    >
      <div className="relative">
        <CoverArt work={work} />
        <div className="pointer-events-none absolute inset-0 bg-ink/0 transition duration-500 group-hover:bg-ink/12" />
        <div className="pointer-events-none absolute inset-x-6 top-6 flex items-start justify-between gap-4">
          <Badge>{work.category}</Badge>
          <span className="text-sm font-medium text-ink/70">{work.year}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-8">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">{work.client}</p>
          <h3 className="mt-2 text-3xl leading-tight">{work.title}</h3>
        </div>
        <p className="text-base leading-7 text-muted">{work.description}</p>
      </div>
    </Link>
  );
}

export function CaseStudyCover({
  work,
  sizes,
}: {
  work: WorkFrontmatter;
  sizes: string;
}) {
  if (canRenderImage(work.coverImage)) {
    return (
      <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem]">
        <Image
          src={work.coverImage}
          alt={work.title}
          fill
          sizes={sizes}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,rgba(245,158,11,0.16),rgba(123,127,93,0.2),rgba(180,106,71,0.22))]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(29,27,24,0.12),transparent_38%)]" />
      <div className="absolute inset-x-8 bottom-8">
        <p className="font-mono text-xs uppercase tracking-[0.26em] text-ink/70">{work.client}</p>
        <h1 className="mt-3 max-w-2xl text-4xl text-ink sm:text-5xl lg:text-6xl">{work.title}</h1>
      </div>
    </div>
  );
}
