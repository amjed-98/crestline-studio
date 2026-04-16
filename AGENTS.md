# Repository Guidelines

## Project Structure & Module Organization

- `app/`: Next.js App Router pages, layouts, loading UI, and route segments.
- `components/`: Reusable UI, layout, and homepage section components.
- `content/work/`: MDX case studies with frontmatter-backed portfolio content.
- `lib/`: Shared constants, types, utilities, and MDX file-loading helpers.
- `public/`: Static assets if added later. The current project mainly uses remote images.
- There is no dedicated `tests/` directory yet.

## Build, Test, and Development Commands

- `pnpm install`: Install dependencies.
- `pnpm dev`: Start the local dev server at `http://localhost:3000`.
- `pnpm build`: Create a production build and validate App Router output.
- `pnpm start`: Run the production build locally.
- `pnpm lint`: Run Next.js ESLint checks.
- `pnpm typecheck`: Run strict TypeScript checks with `tsc --noEmit`.

Use `pnpm` consistently. The repository includes `pnpm-lock.yaml`.

## Coding Style & Naming Conventions

- Language: TypeScript with strict mode.
- Indentation: 2 spaces; keep files formatted consistently with the existing codebase.
- Components: PascalCase filenames such as `Navbar.tsx`, `CaseStudyCard.tsx`.
- Routes: Follow Next.js conventions, for example `app/work/[slug]/page.tsx`.
- Utilities and shared modules: lowercase filenames like `mdx.ts`, `utils.ts`.
- Prefer React Server Components by default. Add `"use client"` only for interactive leaf components.

## Testing Guidelines

- There is no automated test suite yet.
- Before opening a PR, run:
  - `pnpm typecheck`
  - `pnpm lint`
  - `pnpm build`
- If you add tests later, place them near the feature or in a top-level `tests/` folder and use clear names such as `Navbar.test.tsx`.

## Commit & Pull Request Guidelines

- Keep commit messages short, imperative, and specific, matching the current history:
  - `Initial commit`
  - `Improve README`
- PRs should include:
  - a short summary of changes
  - screenshots or screen recordings for UI changes
  - verification notes listing the commands you ran
  - linked issue or task reference when applicable

## Architecture Notes

- Portfolio content is MDX-driven from `content/work/`.
- Shared copy is centralized in `lib/constants.tsx`.
- Remote image hosts must be allowlisted in `next.config.ts`.
- The app can be deployed on Netlify as well as Vercel. For Netlify, use `pnpm build` as the build command and publish via the Next.js adapter/plugin rather than a static export.
