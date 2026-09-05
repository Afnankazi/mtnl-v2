import { propertyListings, pick } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

export default function PropertyListings({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="properties" className="ux4g-py-3xl">
      <div className="ux4g-container">
        <div className="ux4g-mb-l">
          <span className="ux4g-label-m-strong ux4g-text-primary">{dict.properties.eyebrow}</span>
          <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.properties.heading}</h2>
        </div>

        <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-gap-l">
          {propertyListings.map((p) => (
            <div key={p.id} className="ux4g-card ux4g-card-outline ux4g-card-horizontal">
              <div className="ux4g-card-body">
                <h3 className="ux4g-heading-xs-strong">{pick(p.title, locale)}</h3>
                <div className="ux4g-d-flex ux4g-gap-m ux4g-mt-s ux4g-ai-center">
                  <span className="ux4g-body-s-default ux4g-text-neutral-secondary">
                    {pick(p.area, locale)}
                  </span>
                  <span className="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-d-inline-flex ux4g-ai-center ux4g-gap-2xs">
                    <span className="ux4g-icon-outlined ux4g-fs-16" aria-hidden="true">
                      location_on
                    </span>
                    {pick(p.city, locale)}
                  </span>
                </div>
              </div>
              <div className="ux4g-card-footer">
                <a href={`/${locale}#contact`} className="ux4g-text-link-md">
                  {dict.properties.enquire}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
