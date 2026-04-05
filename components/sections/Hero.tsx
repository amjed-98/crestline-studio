import { Button } from "@/components/ui/Button";
import { AnimatedHero } from "@/components/sections/AnimatedHero";
import { HERO_CONTENT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="shell flex min-h-[calc(100vh-6rem)] items-center py-16">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
        <div className="space-y-8">
          <p className="eyebrow">Crestline Studio</p>
          <h1 className="max-w-4xl text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.94] tracking-[-0.06em]">
            <AnimatedHero lines={HERO_CONTENT.heading} />
          </h1>
          <p className="max-w-xl text-balance text-lg leading-8 sm:text-xl">
            {HERO_CONTENT.subheading}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href={HERO_CONTENT.primaryCta.href}>{HERO_CONTENT.primaryCta.label}</Button>
            <Button href={HERO_CONTENT.secondaryCta.href} variant="secondary">
              {HERO_CONTENT.secondaryCta.label}
            </Button>
          </div>
        </div>
        <div className="card-surface relative hidden min-h-[22rem] overflow-hidden lg:block">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.25),transparent_28%),linear-gradient(135deg,rgba(123,127,93,0.12),rgba(180,106,71,0.08))]" />
          <div className="absolute inset-8 grid grid-cols-2 gap-4">
            <div className="rounded-[2rem] bg-panel/80" />
            <div className="rounded-[2rem] bg-ink/6" />
            <div className="rounded-[2rem] bg-ink/10" />
            <div className="rounded-[2rem] bg-accent/18" />
          </div>
        </div>
      </div>
    </section>
  );
}
