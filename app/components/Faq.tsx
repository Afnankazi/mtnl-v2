import { faqs, pick } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

/*
 * Accordion markup follows the collapse contract the shipped UX4G runtime
 * actually binds: `[data-ux-toggle="collapse"]` triggers pointing at a
 * `.ux4g-accordion__collapse` panel, grouped by `data-bs-parent`. (The
 * `data-ux4g-accordion-toggle` attribute in the upstream README belongs to a
 * newer release than the published npm package and is a no-op here.)
 */
export default function Faq({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <section id="faq" className="ux4g-py-3xl ux4g-bg-neutral-subtle">
      <div className="ux4g-container">
        <div className="ux4g-grid ux4g-grid-cols-1 ux4g-lg-grid-cols-12 ux4g-gap-xl">
          <div className="ux4g-cols-span-1 ux4g-lg-cols-span-4">
            <span className="ux4g-label-m-strong ux4g-text-primary">{dict.faq.eyebrow}</span>
            <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.faq.heading}</h2>
            <p className="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-s">
              {dict.faq.cantFind}{" "}
              <a href={`/${locale}#contact`} className="ux4g-text-link-md">
                {dict.faq.contactSupport}
              </a>{" "}
              {dict.faq.orVisit}
            </p>
          </div>

          <div className="ux4g-cols-span-1 ux4g-lg-cols-span-8">
            <div
              className="ux4g-accordion ux4g-accordion-arrow-right ux4g-accordion-bordered"
              id="faq-accordion"
            >
              {faqs.map((item, i) => {
                const panelId = `faq-panel-${i}`;
                const open = i === 0;
                return (
                  <div key={panelId} className="ux4g-accordion__item">
                    <h3 className="ux4g-accordion__header">
                      <button
                        type="button"
                        className={`ux4g-accordion__button${open ? "" : " collapsed"}`}
                        data-ux-toggle="collapse"
                        data-ux-target={`#${panelId}`}
                        data-bs-parent="#faq-accordion"
                        aria-expanded={open}
                        aria-controls={panelId}
                      >
                        {pick(item.q, locale)}
                      </button>
                    </h3>
                    <div id={panelId} className={`ux4g-accordion__collapse${open ? " show" : ""}`}>
                      <div className="ux4g-accordion__body">{pick(item.a, locale)}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
