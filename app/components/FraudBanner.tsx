import type { Dictionary, Locale } from "../dictionaries";

/**
 * Sitewide fraud warning. Dismissal is handled by the UX4G runtime, which
 * binds a click handler to `.ux4g-alert-close` — no React needed.
 */
export default function FraudBanner({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <div className="ux4g-container ux4g-mt-m">
      <div className="ux4g-alert ux4g-alert-warning" role="alert">
        <span className="ux4g-icon-outlined" aria-hidden="true">
          warning
        </span>
        <span className="ux4g-body-s-default">
          <strong>{dict.fraudBanner.label}</strong> {dict.fraudBanner.body}{" "}
          <a href={`/${locale}#security`} className="ux4g-text-link-sm">
            {dict.fraudBanner.readMore}
          </a>
        </span>
        <button className="ux4g-alert-close" aria-label={dict.fraudBanner.dismiss}>
          &times;
        </button>
      </div>
    </div>
  );
}
