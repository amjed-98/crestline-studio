# Crestline Studio

Fictional multi-page agency website for a design and branding studio, built as a portfolio project with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Framer Motion, and MDX-driven case studies.

## Overview

Crestline Studio is a polished marketing site for a fictional branding agency. The project focuses on production-quality App Router patterns, clean server-first component boundaries, CMS-like MDX content, and a visual system that feels intentional rather than template-driven.

## Preview

- GitHub: https://github.com/amjed-98/crestline-studio
- Primary routes:
  - `/`
  - `/work`
  - `/work/[slug]`
  - `/about`
  - `/contact`

## Features

- Next.js 15 App Router with React Server Components by default
- React 19 patterns including `useActionState`
- Tailwind CSS v4 with CSS-first theme tokens in `app/globals.css`
- Framer Motion client wrappers for reveal and navigation transitions
- MDX-powered case studies with frontmatter parsing via `gray-matter`
- Dynamic work detail pages with `generateStaticParams`
- Per-page SEO with async `generateMetadata`
- URL-based filtering on the work page using `searchParams`
- Responsive navigation with mobile overlay menu
- Validated contact form using React Hook Form and Zod
- Remote placeholder cover images rendered through `next/image`

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion v11
- React Hook Form v7
- Zod v3
- MDX with `@next/mdx`, `gray-matter`, and `next-mdx-remote`

## Project Structure

```text
app/
  about/page.tsx
  contact/page.tsx
  globals.css
  layout.tsx
  loading.tsx
  not-found.tsx
  page.tsx
  work/
    page.tsx
    [slug]/page.tsx

components/
  layout/
  sections/
  ui/

content/
  work/
    brand-refresh-meridian.mdx
    campaign-orbit.mdx
    identity-nexus.mdx
    ux-redesign-stackly.mdx

lib/
  constants.tsx
  mdx.ts
  types.ts
  utils.ts
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm

### Install

```bash
pnpm install
```

### Run Locally

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
pnpm typecheck
```

## Deployment

The project is set up for Vercel deployment.

```bash
pnpm build
```

Then connect the repository in Vercel or deploy with the Vercel CLI.

## Notes

- All case study copy lives in MDX under `content/work/`
- Shared site copy and structured content live in `lib/constants.tsx`
- Remote cover images are configured in `next.config.ts`
