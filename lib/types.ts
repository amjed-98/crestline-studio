import type { ReactNode } from "react";

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = NavLink;

export type ServiceItem = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export type ValueItem = {
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  tone: "olive" | "rust" | "amber" | "stone";
};

export type WorkFrontmatter = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: number;
  description: string;
  tags: string[];
  coverImage: string;
};

export type WorkPost = WorkFrontmatter & {
  content: string;
};

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};
