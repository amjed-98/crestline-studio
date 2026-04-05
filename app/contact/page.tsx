import type { Metadata } from "next";

import { ContactForm } from "@/components/sections/ContactForm";
import { CONTACT_DETAILS } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Contact",
    description: "Get in touch with Crestline Studio about branding, websites, motion, or strategy engagements.",
  };
}

export default function ContactPage() {
  return (
    <section className="section-space">
      <div className="shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-6">
          <p className="eyebrow">Contact</p>
          <h1 className="max-w-xl text-5xl sm:text-6xl">{CONTACT_DETAILS.heading}</h1>
          <p className="max-w-xl text-lg">{CONTACT_DETAILS.subheading}</p>
          <div className="space-y-4 pt-4">
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Email</p>
              <p className="mt-1 text-lg text-ink">{CONTACT_DETAILS.email}</p>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.18em] text-muted">Office</p>
              <p className="mt-1 text-lg text-ink">{CONTACT_DETAILS.location}</p>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
