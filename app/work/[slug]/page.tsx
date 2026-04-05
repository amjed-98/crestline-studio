import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Badge } from "@/components/ui/Badge";
import { CaseStudyCover } from "@/components/ui/CaseStudyCard";
import { getAllWork, getWorkBySlug } from "@/lib/mdx";

type WorkDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const work = await getAllWork();
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getWorkBySlug(slug);

  if (!post) {
    return {
      title: "Work not found",
    };
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const post = await getWorkBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="section-space">
      <div className="shell space-y-10">
        <Link href="/work" className="text-sm font-medium uppercase tracking-[0.18em] text-muted transition hover:text-ink">
          Back to work
        </Link>

        <CaseStudyCover work={post} sizes="100vw" />

        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <aside className="card-surface space-y-6 p-8">
            <div className="space-y-4">
              <Badge>{post.category}</Badge>
              <h1 className="text-4xl sm:text-5xl">{post.title}</h1>
              <p className="text-lg">{post.description}</p>
            </div>

            <dl className="grid gap-5 text-sm">
              <div>
                <dt className="uppercase tracking-[0.18em] text-muted">Client</dt>
                <dd className="mt-1 text-base text-ink">{post.client}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-muted">Year</dt>
                <dd className="mt-1 text-base text-ink">{post.year}</dd>
              </div>
              <div>
                <dt className="uppercase tracking-[0.18em] text-muted">Tags</dt>
                <dd className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="bg-paper text-muted">
                      {tag}
                    </Badge>
                  ))}
                </dd>
              </div>
            </dl>
          </aside>

          <article className="mdx">
            <MDXRemote source={post.content} />
          </article>
        </div>
      </div>
    </section>
  );
}
