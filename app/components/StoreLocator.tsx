import type { Dictionary } from "../dictionaries";

export default function StoreLocator({ dict }: { dict: Dictionary }) {
  return (
    <section id="locator" className="ux4g-py-3xl">
      <div className="ux4g-container">
        <div className="ux4g-card ux4g-card-solid ux4g-p-xl">
          <div
            className="ux4g-grid ux4g-grid-cols-1 ux4g-md-grid-cols-12 ux4g-gap-l"
            style={{ alignItems: "center" }}
          >
            <div className="ux4g-cols-span-1 ux4g-md-cols-span-7">
              <span className="ux4g-label-m-strong ux4g-text-primary">{dict.locator.eyebrow}</span>
              <h2 className="ux4g-heading-l-strong ux4g-mt-xs">{dict.locator.heading}</h2>
              <p className="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mt-xs">
                {dict.locator.body}
              </p>
            </div>
            <div className="ux4g-cols-span-1 ux4g-md-cols-span-5">
              <form className="ux4g-d-flex ux4g-gap-s ux4g-ai-end" role="search">
                <div
                  className="ux4g-input-container ux4g-input-md ux4g-input-default"
                  style={{ flex: 1 }}
                >
                  <input
                    type="text"
                    className="ux4g-input"
                    placeholder={dict.locator.placeholder}
                    aria-label={dict.locator.placeholder}
                  />
                </div>
                <button type="submit" className="ux4g-btn-primary ux4g-btn-md">
                  <span className="ux4g-icon-outlined" aria-hidden="true">
                    search
                  </span>
                  <span className="ux4g-d-none ux4g-sm-d-inline">&nbsp;{dict.locator.search}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
