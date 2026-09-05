import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale } from "./app/dictionaries";

/**
 * Every route lives under /[lang]. Requests without a locale prefix are sent to
 * the visitor's preferred language when we support it, otherwise to English.
 * (`middleware.ts` was renamed to `proxy.ts` in Next.js 16.)
 */
function preferredLocale(request: NextRequest): string {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  // "hi-IN,hi;q=0.9,en;q=0.8" -> ["hi-in", "hi", "en"], best first.
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    const match = locales.find((locale) => locale === base);
    if (match) return match;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (hasLocale) return;

  const locale = preferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, the service worker, the manifest, and public assets.
  matcher: ["/((?!_next|api|icons|sw.js|manifest.webmanifest|favicon.ico|.*\\.[\\w]+$).*)"],
};
