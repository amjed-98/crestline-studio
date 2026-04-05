import type { Metadata } from "next";

import { CtaBanner } from "@/components/sections/CtaBanner";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  };
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <SelectedWork />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
