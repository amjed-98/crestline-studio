import type { Metadata } from "next";
import Link from "next/link";

import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { Badge } from "@/components/ui/Badge";
import { getAllWork } from "@/lib/mdx";
import { PAGE_COPY, toCategoryParam } from "@/lib/constants";
import { cn } from "@/lib/utils";

type WorkPageProps = {
  searchParams: Promise<{
    category?: string;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Work",
    description: "A selection of identity, digital design, motion, and positioning engagements by Crestline Studio.",
  };
}

export default async function WorkPage({ searchParams }: WorkPageProps) {
  const { category } = await searchParams;
  const allWork = await getAllWork();
  const categories = [...new Set(allWork.map((item) => item.category))];
  const activeCategory = category ?? "all";
  const filteredWork =
    activeCategory === "all"
      ? allWork
      : allWork.filter((item) => toCategoryParam(item.category) === activeCategory);

  return (
    <section className="section-space">
      <div className="shell space-y-10">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">Portfolio</p>
            <h1 className="max-w-3xl text-5xl sm:text-6xl">{PAGE_COPY.work.title}</h1>
            <p className="max-w-2xl text-lg">
              {PAGE_COPY.work.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/work"
            className={cn(
              "rounded-full border px-4 py-2 text-sm transition",
              activeCategory === "all" ? "border-ink bg-ink text-canvas" : "border-line bg-panel text-muted hover:text-ink",
            )}
          >
            All
          </Link>
          {categories.map((item) => {
            const value = toCategoryParam(item);
            return (
              <Link
                key={value}
                href={`/work?category=${value}`}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm transition",
                  activeCategory === value
                    ? "border-ink bg-ink text-canvas"
                    : "border-line bg-panel text-muted hover:text-ink",
                )}
              >
                {item}
              </Link>
            );
          })}
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredWork.map((item) => (
            <CaseStudyCard key={item.slug} work={item} />
          ))}
        </div>

        {filteredWork.length === 0 ? (
          <div className="card-surface p-8">
            <Badge>{PAGE_COPY.work.emptyTitle}</Badge>
            <p className="mt-4 text-base">{PAGE_COPY.work.emptyDescription}</p>
          </div>
        ) : null}
      </div>
    </section>
  );
}
