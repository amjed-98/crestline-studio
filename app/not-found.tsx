import Link from "next/link";

import { PAGE_COPY } from "@/lib/constants";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-display text-8xl leading-none">404</p>
      <div className="space-y-3">
        <h1 className="text-4xl">{PAGE_COPY.notFound.title}</h1>
        <p className="max-w-md text-lg">{PAGE_COPY.notFound.description}</p>
      </div>
      <Link href="/" className="text-sm font-medium uppercase tracking-[0.18em] text-muted transition hover:text-ink">
        {PAGE_COPY.notFound.cta}
      </Link>
    </section>
  );
}
