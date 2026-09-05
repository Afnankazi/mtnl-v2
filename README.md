# MTNL website redesign

A redesign of [mtnl.in](https://mtnl.in/) built with Next.js (App Router) on the
[UX4G](https://www.ux4g.gov.in/) government design system.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Design system

UX4G ships as **CSS classes plus a JS runtime** — there are no React components to
import. Markup uses `className="ux4g-…"` and the runtime binds behaviours by class
and `data-*` attribute.

- `app/layout.tsx` loads, in this order: `ux4g-web-components/styles.css` →
  `app/globals.css` (Tailwind) → `app/theme.css` (brand tokens). The order matters —
  the token overrides must land after the UX4G bundle.
- `app/components/Ux4gRuntime.tsx` boots the runtime. It is a client component on
  purpose: a bare side-effect import in the server-rendered layout never ships to
  the browser and every dropdown/accordion silently goes dead.
- `app/theme.css` carries the MTNL brand ramps (blue `#0b5fad`, orange `#e8580f`,
  teal `#0e7c86`) as `--ux4g-color-*` overrides. **These are approximations and
  still need sign-off against the official MTNL brand guideline.** Never edit the
  package in `node_modules`.

The npm package (`ux4g-web-components@2.0.1`) lags the published docs (v3.1.0), so
some documented class names and behaviours don't exist yet. Verify against the
installed bundle before using an unfamiliar class:

```bash
grep -o '\.ux4g-thing-you-want[^{,]*' node_modules/ux4g-web-components/styles/ux4g.css
```

Where the shipped runtime has no behaviour (tab panels, chip filtering), the
component drives state in React and reuses the design system's classes.

## Structure

- `app/page.tsx` — homepage sections: hero, quick actions (pay / recharge / book /
  complain), service categories, plan comparison, self-service dashboard, notices,
  security advisories, property listings, store locator, FAQ.
- `app/content.ts` — all copy and listings, ready to swap for a CMS/API.
- `app/services/[slug]` — per-service pages (landline, broadband, FTTH, mobile,
  toll-free).
- `app/rti`, `app/site-map`, `app/accessibility-statement`,
  `app/grievance-redressal` — GIGW compliance pages.

## Not built yet

Payments, authentication, complaint tracking, and the recharge flow are UI only —
they need backend contracts. Hindi content is a language toggle with a notice, not a
translation layer.
