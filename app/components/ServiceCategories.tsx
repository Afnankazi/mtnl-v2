import Link from "next/link";
import { serviceCategories, pick } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

export default function ServiceCategories({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="services" className="ux4g-py-3xl ux4g-bg-neutral-subtle">
      <div className="ux4g-container">
        <div className="ux4g-mb-xl">
          <span className="ux4g-label-m-strong ux4g-text-primary">{dict.services.eyebrow}</span>
          <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.services.heading}</h2>
        </div>

        <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-lg-grid-cols-5 ux4g-gap-l">
          {serviceCategories.map((service) => (
            <Link
              key={service.slug}
              href={`/${locale}/services/${service.slug}`}
              className="ux4g-card ux4g-card-outline ux4g-card-vertical"
              style={{ height: "100%" }}
            >
              <div className="ux4g-card-body">
                <span
                  className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-32 ux4g-mb-m"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <h3 className="ux4g-heading-xs-strong">{pick(service.name, locale)}</h3>
                <p className="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mt-2xs">
                  {pick(service.description, locale)}
                </p>
                <span className="ux4g-text-link-sm ux4g-mt-m ux4g-d-inline-block">
                  {dict.services.explore} →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
