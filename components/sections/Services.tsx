import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PAGE_COPY, SERVICES } from "@/lib/constants";

export function Services() {
  return (
    <section className="section-space">
      <div className="shell">
        <AnimatedSection className="space-y-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">What we do</p>
              <h2 className="max-w-2xl text-4xl sm:text-5xl">
                {PAGE_COPY.services.heading}
              </h2>
            </div>
            <p className="max-w-lg text-base sm:text-lg">
              {PAGE_COPY.services.description}
            </p>
          </div>

          <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-line/80 bg-panel md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className={[
                  "p-8 sm:p-10",
                  index < 2 ? "md:border-b md:border-line/80" : "",
                  index % 2 === 0 ? "md:border-r md:border-line/80" : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="mb-6 inline-flex rounded-full bg-paper p-3 text-ink">
                  {service.icon}
                </div>
                <h3 className="text-3xl">{service.title}</h3>
                <p className="mt-4 max-w-md text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
