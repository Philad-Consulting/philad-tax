# Philad Tax Advisors

The U.S. site for Philad Consulting Inc., served at [philadtax.com](https://philadtax.com).
It is a single marketing page: services, process, FAQ and a consultation request form.

## Stack

Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4, motion, react-hook-form and zod.
Package manager: **pnpm**.

## Getting started

```bash
cp .env.example .env.local   # point NEXT_PUBLIC_API_BASE_URL at the Philad API
pnpm install
pnpm dev                     # http://localhost:3200
```

## Leads

The contact form posts to `POST <NEXT_PUBLIC_API_BASE_URL>/contact` on the Philad API
(`philad-backend`) with `source: "us-site"`. Leads show in the Philad admin console under
**Contact Leads** as "U.S. site". The API rejects unknown fields, so the payload
(`lib/lead.ts`) must match its `CreateContactDto`.

The API's `CORS_ORIGINS` must include `https://philadtax.com` and `https://www.philadtax.com`.

## Editing copy

All wording lives in `lib/content.ts`.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
```

CI runs all four on pull requests to `main`. Commits follow Conventional Commits (commitlint), and
lint-staged formats staged files before each commit.
