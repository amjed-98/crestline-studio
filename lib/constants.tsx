import type {
  NavLink,
  ServiceItem,
  SocialLink,
  TeamMember,
  Testimonial,
  ValueItem,
} from "@/lib/types";

const iconClassName = "h-5 w-5 stroke-[1.7]";

export const SITE_NAME = "Crestline Studio";
export const SITE_URL = "https://crestline-studio.vercel.app";
export const SITE_DESCRIPTION =
  "Crestline Studio is a fictional design and branding agency crafting identity systems, websites, and launch campaigns with a sharp point of view.";

export const NAV_LINKS: NavLink[] = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { href: "https://dribbble.com", label: "Dribbble" },
  { href: "https://instagram.com", label: "Instagram" },
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://x.com", label: "Twitter/X" },
];

export const HERO_CONTENT = {
  heading: ["We build brands", "worth remembering."],
  subheading:
    "Crestline Studio is a design and branding agency helping ambitious companies find their voice.",
  primaryCta: { href: "/work", label: "See our work" },
  secondaryCta: { href: "/contact", label: "Get in touch" },
};

export const SERVICES: ServiceItem[] = [
  {
    title: "Brand Identity",
    description:
      "Identity systems with substance, not decoration. Built to move from pitch deck to product launch with ease.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M6 5.5h12v13H6z" />
        <path d="M9 9h6" />
        <path d="M9 12h6" />
        <path d="M9 15h3" />
      </svg>
    ),
  },
  {
    title: "Web Design",
    description:
      "Editorial, conversion-aware websites that make complex companies feel instantly legible and premium.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M4.5 6.5h15v11h-15z" />
        <path d="M4.5 10h15" />
        <path d="M8 6.5v11" />
      </svg>
    ),
  },
  {
    title: "Motion & Animation",
    description:
      "Motion systems that add pacing, clarity, and emotional lift without slipping into visual noise.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M5 7.5h9" />
        <path d="M5 12h14" />
        <path d="M5 16.5h11" />
      </svg>
    ),
  },
  {
    title: "Strategy & Positioning",
    description:
      "Messaging and strategic framing that sharpen what matters, align stakeholders, and support growth.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        className={iconClassName}
        aria-hidden="true"
      >
        <path d="M12 4v16" />
        <path d="M6 10l6-6 6 6" />
        <path d="M8 18h8" />
      </svg>
    ),
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Crestline gave us a language for our business that finally matched the ambition of the product.",
    name: "Alina Rhodes",
    role: "Chief Marketing Officer",
    company: "Meridian Financial",
  },
  {
    quote:
      "The team brought unusual clarity to a messy repositioning effort and shipped a site our sales team actually uses.",
    name: "Jared Lin",
    role: "Founder",
    company: "Stackly",
  },
  {
    quote:
      "They know when to push, when to simplify, and how to make a campaign feel inevitable instead of over-designed.",
    name: "Priya Shah",
    role: "VP Brand",
    company: "Orbit Mobile",
  },
];

export const ABOUT_STORY = [
  "Crestline Studio was built around a simple belief: the strongest brands do not shout louder, they speak more precisely. We partner with founders, marketing leaders, and internal teams who need their companies to feel sharper, more memorable, and more coherent at every touchpoint.",
  "Our process is intentionally small. Strategy, writing, design, and motion stay close enough to challenge each other. That keeps the work honest. It also means the systems we build can move fluidly from positioning decks to websites, launches, campaigns, and the everyday decisions that shape perception.",
];

export const VALUES: ValueItem[] = [
  {
    title: "Craft",
    description:
      "We obsess over proportion, pacing, language, and detail until the work feels inevitable.",
  },
  {
    title: "Clarity",
    description:
      "We remove friction, sharpen the idea, and make decisions legible for clients and audiences alike.",
  },
  {
    title: "Courage",
    description:
      "We push past safe middle-ground solutions when a stronger point of view is the right move.",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mara Quinn",
    role: "Creative Director",
    bio: "Shapes visual systems that balance restraint with distinct personality.",
    initials: "MQ",
    tone: "rust",
  },
  {
    name: "Elias Park",
    role: "Strategy Lead",
    bio: "Turns positioning ambiguity into frameworks clients can actually use.",
    initials: "EP",
    tone: "olive",
  },
  {
    name: "Noor Haddad",
    role: "Design Lead",
    bio: "Builds digital experiences with editorial rhythm and strong conversion logic.",
    initials: "NH",
    tone: "amber",
  },
  {
    name: "Jonas Vale",
    role: "Motion Designer",
    bio: "Adds timing and movement that clarify the idea instead of distracting from it.",
    initials: "JV",
    tone: "stone",
  },
];

export const CONTACT_DETAILS = {
  heading: "Tell us what you're building.",
  subheading:
    "Whether you need a new identity, a sharper website, or a campaign with more conviction, we would like to hear where you are and where you want to go.",
  email: "hello@crestlinestudio.co",
  location: "Remote studio, collaborating globally from Ramallah, London, and New York.",
};

export const CONTACT_PROJECT_TYPES = [
  "Brand Identity",
  "Web Design",
  "Motion",
  "Strategy",
  "Other",
] as const;

export const HOME_CTA = {
  heading: "Looking for a partner with a sharper point of view?",
  description:
    "We help ambitious teams clarify what they stand for, then translate it into systems people remember.",
  href: "/contact",
  label: "Start a project",
};

export const PAGE_COPY = {
  services: {
    heading:
      "Identity, digital design, and the strategic thinking beneath both.",
    description:
      "We build systems that give ambitious teams sharper language, more confident presentation, and digital experiences that carry the idea forward.",
  },
  selectedWork: {
    heading:
      "Recent engagements across fintech, software, health, and consumer tech.",
    cta: "View all work",
  },
  testimonials: {
    heading: "Trusted by teams who need conviction as much as polish.",
  },
  work: {
    title: "Work that gives ambitious companies a clearer edge.",
    description:
      "Identity systems, websites, campaigns, and positioning frameworks designed to make the right things feel unmistakable.",
    emptyTitle: "No matches",
    emptyDescription: "There is no case study in this category yet.",
  },
  about: {
    title: "A small team with a big point of view.",
    description:
      "We partner closely, work intentionally, and build systems that are as useful internally as they are persuasive externally.",
    valuesTitle: "How we work",
    teamTitle: "The studio team",
    ctaEyebrow: "Contact",
    ctaTitle: "Want to work together?",
    ctaLabel: "Start the conversation",
  },
  notFound: {
    title: "Page not found",
    description:
      "The page you were looking for is not here, or it may have moved.",
    cta: "Return home",
  },
  footer: {
    tagline:
      "Strategy, identity, digital design, and motion systems for ambitious companies that need to be remembered.",
  },
};

export function toCategoryParam(category: string) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}
