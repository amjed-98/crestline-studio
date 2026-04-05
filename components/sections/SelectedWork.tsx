import Link from "next/link";

import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { PAGE_COPY } from "@/lib/constants";
import { getAllWork } from "@/lib/mdx";

export async function SelectedWork() {
  const work = (await getAllWork()).slice(0, 3);

  return (
    <section className="section-space">
      <div className="shell space-y-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-3">
            <p className="eyebrow">Selected work</p>
            <h2 className="max-w-2xl text-4xl sm:text-5xl">
              {PAGE_COPY.selectedWork.heading}
            </h2>
          </div>
          <Link href="/work" className="text-sm font-medium uppercase tracking-[0.18em] text-muted transition hover:text-ink">
            {PAGE_COPY.selectedWork.cta}
          </Link>
        </div>

        <div className="grid gap-8 xl:grid-cols-3">
          {work.map((item) => (
            <CaseStudyCard key={item.slug} work={item} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
