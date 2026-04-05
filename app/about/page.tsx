import type { Metadata } from "next";

import { Button } from "@/components/ui/Button";
import { ABOUT_STORY, PAGE_COPY, TEAM_MEMBERS, VALUES } from "@/lib/constants";
import { toneClassName } from "@/lib/utils";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About",
    description: "Meet the team, values, and point of view behind Crestline Studio.",
  };
}

export default function AboutPage() {
  return (
    <section className="section-space">
      <div className="shell space-y-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="space-y-4">
            <p className="eyebrow">About</p>
            <h1 className="max-w-3xl text-5xl sm:text-6xl">{PAGE_COPY.about.title}</h1>
          </div>
          <p className="text-lg">{PAGE_COPY.about.description}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {ABOUT_STORY.map((paragraph) => (
            <div key={paragraph} className="card-surface p-8">
              <p className="text-lg">{paragraph}</p>
            </div>
          ))}
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">Values</p>
            <h2 className="text-4xl sm:text-5xl">{PAGE_COPY.about.valuesTitle}</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="card-surface p-8">
                <h3 className="text-3xl">{value.title}</h3>
                <p className="mt-4 text-base">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <p className="eyebrow">Team</p>
            <h2 className="text-4xl sm:text-5xl">{PAGE_COPY.about.teamTitle}</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.name} className="card-surface p-6">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl text-lg font-medium ${toneClassName(member.tone)}`}>
                  {member.initials}
                </div>
                <div className="mt-6 space-y-2">
                  <h3 className="text-2xl">{member.name}</h3>
                  <p className="text-sm uppercase tracking-[0.16em] text-muted">{member.role}</p>
                </div>
                <p className="mt-4 text-base">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface flex flex-col gap-6 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="eyebrow">{PAGE_COPY.about.ctaEyebrow}</p>
            <h2 className="text-4xl">{PAGE_COPY.about.ctaTitle}</h2>
          </div>
          <Button href="/contact">{PAGE_COPY.about.ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}
