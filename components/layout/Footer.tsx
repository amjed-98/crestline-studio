import Link from "next/link";

import { NAV_LINKS, PAGE_COPY, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-line/80 bg-panel">
      <div className="shell grid gap-12 py-14 md:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <Link href="/" className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em]">
            <svg viewBox="0 0 36 36" className="h-9 w-9 text-ink" fill="none" aria-hidden="true">
              <path d="M8 24L18 8l10 16" stroke="currentColor" strokeWidth="2.2" />
              <path d="M12 24h12" stroke="currentColor" strokeWidth="2.2" />
            </svg>
            <span>Crestline</span>
          </Link>
          <p className="max-w-md text-base">
            {PAGE_COPY.footer.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow">Navigation</p>
          <ul className="mt-5 space-y-3">
            {NAV_LINKS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-muted transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Social</p>
          <ul className="mt-5 space-y-3">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-muted transition hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-line/80 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
        <p>Built with Next.js &amp; Tailwind</p>
      </div>
    </footer>
  );
}
