import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PAGE_COPY, TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="section-space">
      <div className="shell">
        <AnimatedSection className="space-y-10">
          <div className="space-y-3">
            <p className="eyebrow">Testimonials</p>
            <h2 className="max-w-2xl text-4xl sm:text-5xl">
              {PAGE_COPY.testimonials.heading}
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((item) => (
              <blockquote key={item.name} className="card-surface flex flex-col justify-between gap-10 p-8">
                <p className="text-xl leading-8 text-ink">“{item.quote}”</p>
                <footer className="space-y-1">
                  <p className="text-base font-medium text-ink">{item.name}</p>
                  <p className="text-sm uppercase tracking-[0.16em] text-muted">
                    {item.role}, {item.company}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
