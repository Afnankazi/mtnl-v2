import { securityAdvisories, pick } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

export default function SecurityAdvisories({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="security" className="ux4g-py-3xl ux4g-bg-neutral-subtle">
      <div className="ux4g-container">
        <div className="ux4g-mb-l">
          <span className="ux4g-label-m-strong ux4g-text-error">{dict.security.eyebrow}</span>
          <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.security.heading}</h2>
        </div>

        <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-gap-l">
          {securityAdvisories.map((a) => (
            <div key={a.id} className="ux4g-alert ux4g-alert-error" role="alert">
              <span className="ux4g-icon-outlined ux4g-fs-20 ux4g-text-error" aria-hidden="true">
                report
              </span>
              <span>
                <span className="ux4g-body-m-strong ux4g-d-block">{pick(a.title, locale)}</span>
                <span className="ux4g-body-s-default">{pick(a.body, locale)}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
