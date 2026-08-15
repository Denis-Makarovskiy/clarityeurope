# Clarity Europe

Static Next.js (App Router, TypeScript, Tailwind CSS v4) marketing site for
**Clarity Europe**, an independent placement and admissions-coordination
service for private mental-health treatment in Europe, serving clients from
the United States and Canada. Operated by MK REHAB DOO (Podgorica,
Montenegro) — the same operating entity as the sister site,
recoveryeurope.com, but this brand is strictly mental-health positioned
(depression, anxiety, burnout, trauma, bipolar disorder, eating disorders)
and carries no addiction-treatment vocabulary anywhere on the site (see
`CONTENT.md` for the hard content rules this repo must keep satisfying).

`CONTENT.md` is the owner-approved, verbatim source of truth for all on-site
copy. `lib/content.ts` is transcribed from it; if the two ever disagree,
`CONTENT.md` wins and `lib/content.ts` should be corrected to match.

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

No environment variables are required to run the app locally — the phone
number and lead endpoint fall back to safe defaults in `lib/constants.ts`,
and analytics is a no-op when its IDs are unset.

### Quality gates

```bash
npx tsc --noEmit   # type-check
npm run lint       # ESLint
npm run build      # production static export (writes to out/)
```

## Lead delivery (shared Cloudflare Worker)

This site has no server at runtime (`output: "export"` in `next.config.ts`).
Both lead-capture forms (`components/sections/Hero.tsx` and
`components/sections/Assessment.tsx`) POST directly to a Cloudflare Worker
shared with the sister site:

```
https://era-lead-worker.d-makarovskiy.workers.dev
```

Every submission includes `"site": "clarityeurope"` in its JSON body, which
is how the shared Worker labels the brand in its Telegram notification — the
Worker itself is already deployed and tested server-side and is not part of
this repo's build.

## Deployment (GitHub Pages)

The app builds to a static export and deploys via
`.github/workflows/deploy.yml` on every push to `main` (or manually via
`workflow_dispatch`). `public/CNAME` pins the custom domain
(`clarityeurope.com`).

### Required repository variables

Set under **Settings > Secrets and variables > Actions > Variables** (not
Secrets — every value here is a public, client-exposed `NEXT_PUBLIC_*` value
baked into the static build):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_LEAD_ENDPOINT` | Full URL of the shared lead-capture Worker (see above). |

Optional:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin used for metadata, Open Graph and JSON-LD. Defaults to `https://clarityeurope.com`; only needed to override (e.g. while still serving from a github.io project URL). |
| `NEXT_PUBLIC_BASE_PATH` | `/<repo-name>` if served from a GitHub Pages *project* page; leave unset for a custom domain (the normal case here, since `public/CNAME` is set). |
| `NEXT_PUBLIC_ADMISSIONS_PHONE` | Overrides the phone number baked into `lib/constants.ts`. |
| `NEXT_PUBLIC_SCHEDULER_URL` | External call-scheduling URL; falls back to the on-page assessment section if unset. |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; analytics is a no-op if unset. |
| `NEXT_PUBLIC_YM_ID` | Overrides the Yandex Metrica counter (`111638009`) baked into `lib/analytics.ts` — e.g. a staging counter. Set it to `0` to build without Metrica. |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console HTML-tag verification content. |
| `NEXT_PUBLIC_YANDEX_VERIFICATION` | Yandex Webmaster meta-tag verification content. |

## What's on the site

Hero (with consultation form), trust strip, why Europe, four-step
assessment, how it works, what's included, trust process, suitability
(with the 988 crisis-line note), FAQ (with `FAQPage` JSON-LD generated from
the same `faq` array the accordion renders), final CTA, footer, plus
`/privacy/` and `/terms/` legal pages. There is no "Scenarios" section and no
`/professionals/` page on this brand — both exist on the sister site only.
