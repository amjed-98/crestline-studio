import { Button } from "@/components/ui/Button";
import { HOME_CTA } from "@/lib/constants";

export function CtaBanner() {
  return (
    <section className="section-space pt-0">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-line/80 bg-ink px-6 py-10 text-canvas sm:px-10 sm:py-14 lg:px-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(123,127,93,0.28),transparent_32%)]" />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="eyebrow text-canvas/70">Next engagement</p>
              <h2 className="text-4xl text-canvas sm:text-5xl">{HOME_CTA.heading}</h2>
              <p className="max-w-xl text-lg leading-8 text-canvas/76">{HOME_CTA.description}</p>
            </div>
            <Button href={HOME_CTA.href} className="bg-canvas text-ink hover:bg-canvas/90">
              {HOME_CTA.label}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
