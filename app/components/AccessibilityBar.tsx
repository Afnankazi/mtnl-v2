"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, localeShortNames, type Dictionary, type Locale } from "../dictionaries";
import { useFontScale, useTheme } from "./usePrefs";

const FONT_SCALES = ["sm", "base", "lg", "xl"] as const;

/**
 * Top utility strip: Government of India identity, skip link, and the
 * accessibility controls (text size, colour theme, language) required for a
 * compliant government site. Preferences live on <html> / localStorage
 * (see usePrefs + ThemeScript), so they survive navigation and never flash.
 */
export default function AccessibilityBar({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname();
  const [theme, setTheme] = useTheme();
  const [fontScale, setFontScale] = useFontScale();
  const dark = theme === "dark";

  function stepFont(direction: 1 | -1) {
    const i = FONT_SCALES.indexOf(fontScale);
    setFontScale(FONT_SCALES[Math.min(Math.max(i + direction, 0), FONT_SCALES.length - 1)]);
  }

  /** Same page, other language. */
  function localeHref(target: Locale) {
    const rest = pathname.replace(new RegExp(`^/(${locales.join("|")})`), "");
    return `/${target}${rest}`;
  }

  return (
    <header className="ux4g-topbar" role="banner">
      <div className="ux4g-container">
        <div className="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-flex-wrap ux4g-gap-s">
          <a
            className="ux4g-d-flex ux4g-ai-center ux4g-gap-xs"
            href="https://www.india.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span aria-hidden="true">🇮🇳</span>
            <span className="ux4g-label-m-default">{dict.topbar.govOfIndia}</span>
            <span className="ux4g-icon-outlined ux4g-fs-14" aria-hidden="true">
              open_in_new
            </span>
          </a>

          <nav
            aria-label={dict.topbar.utilitiesLabel}
            className="ux4g-d-flex ux4g-ai-center ux4g-gap-s ux4g-flex-wrap"
          >
            <a className="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">
              {dict.topbar.skipToMain}
            </a>

            <span className="ux4g-divider-vertical" aria-hidden="true" />

            <div
              className="ux4g-topbar__group ux4g-d-flex ux4g-ai-center"
              role="group"
              aria-label={dict.topbar.textSize}
            >
              <button
                type="button"
                className="ux4g-topbar__iconbtn"
                aria-label={dict.topbar.decreaseText}
                onClick={() => stepFont(-1)}
              >
                <span className="ux4g-icon-outlined ux4g-top-bar-icon">text_decrease</span>
              </button>
              <button
                type="button"
                className="ux4g-topbar__iconbtn"
                aria-label={dict.topbar.resetText}
                onClick={() => setFontScale("base")}
              >
                <span className="ux4g-icon-outlined ux4g-top-bar-icon">font_download</span>
              </button>
              <button
                type="button"
                className="ux4g-topbar__iconbtn"
                aria-label={dict.topbar.increaseText}
                onClick={() => stepFont(1)}
              >
                <span className="ux4g-icon-outlined ux4g-top-bar-icon">text_increase</span>
              </button>
            </div>

            <span className="ux4g-divider-vertical" aria-hidden="true" />

            <button
              type="button"
              className="ux4g-topbar__iconbtn"
              aria-label={dark ? dict.topbar.toLightTheme : dict.topbar.toDarkTheme}
              aria-pressed={dark}
              onClick={() => setTheme(dark ? "light" : "dark")}
            >
              <span className="ux4g-icon-outlined ux4g-top-bar-icon">
                {dark ? "light_mode" : "dark_mode"}
              </span>
            </button>

            <span className="ux4g-divider-vertical" aria-hidden="true" />

            <div
              className="ux4g-d-flex ux4g-ai-center ux4g-gap-2xs"
              role="group"
              aria-label={dict.topbar.language}
            >
              {locales.map((l) => (
                <Link
                  key={l}
                  href={localeHref(l)}
                  hrefLang={l}
                  lang={l}
                  className={`ux4g-filter-chip-sm${locale === l ? " active" : ""}`}
                  aria-current={locale === l ? "true" : undefined}
                >
                  {localeShortNames[l]}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
