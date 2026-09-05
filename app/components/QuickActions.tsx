import { quickActions, serviceCategories, pick } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

function serviceName(slug: string, locale: Locale) {
  const match = serviceCategories.find((s) => s.slug === slug);
  return match ? pick(match.name, locale) : slug;
}

export default function QuickActions({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="account-billing" className="ux4g-py-3xl">
      <div className="ux4g-container">
        <div className="ux4g-mb-xl">
          <span className="ux4g-label-m-strong ux4g-text-primary">{dict.quickActions.eyebrow}</span>
          <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.quickActions.heading}</h2>
          <p className="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">
            {dict.quickActions.sub}
          </p>
        </div>

        <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-lg-grid-cols-4 ux4g-gap-l">
          {quickActions.map((action) => (
            <div
              key={action.slug}
              id={action.slug}
              className="ux4g-card ux4g-card-solid ux4g-card-vertical"
              style={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <div className="ux4g-card-body" style={{ flex: 1 }}>
                <span
                  className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-32 ux4g-mb-m"
                  aria-hidden="true"
                >
                  {action.icon}
                </span>
                <h3 className="ux4g-heading-xs-strong">{pick(action.title, locale)}</h3>
                <p className="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mt-2xs ux4g-mb-m">
                  {pick(action.description, locale)}
                </p>
                <div className="ux4g-d-flex ux4g-flex-wrap ux4g-gap-xs">
                  {action.services.map((slug) => (
                    <span key={slug} className="ux4g-tag-tonal-neutral ux4g-tag-s">
                      {serviceName(slug, locale)}
                    </span>
                  ))}
                </div>
              </div>
              <div className="ux4g-card-footer">
                <a
                  href={`/${locale}#${action.slug}-form`}
                  className="ux4g-btn-primary ux4g-btn-md ux4g-w-100"
                >
                  {pick(action.cta, locale)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
