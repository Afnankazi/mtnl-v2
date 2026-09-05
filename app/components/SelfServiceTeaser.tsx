import type { Dictionary, Locale } from "../dictionaries";

export default function SelfServiceTeaser({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const features = [
    { icon: "data_usage", label: dict.dashboard.featureUsage },
    { icon: "receipt_long", label: dict.dashboard.featureBills },
    { icon: "upgrade", label: dict.dashboard.featureUpgrade },
    { icon: "support", label: dict.dashboard.featureComplaint },
  ];

  return (
    <section id="dashboard" className="ux4g-py-3xl ux4g-bg-neutral-subtle">
      <div className="ux4g-container">
        <div
          className="ux4g-grid ux4g-grid-cols-1 ux4g-lg-grid-cols-12 ux4g-gap-xl"
          style={{ alignItems: "center" }}
        >
          <div className="ux4g-cols-span-1 ux4g-lg-cols-span-7">
            <span className="ux4g-label-m-strong ux4g-text-primary">{dict.dashboard.eyebrow}</span>
            <h2 className="ux4g-heading-xl-strong ux4g-mt-xs">{dict.dashboard.heading}</h2>
            <p className="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs ux4g-mb-l">
              {dict.dashboard.body}
            </p>
            <ul
              className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-gap-m"
              style={{ listStyle: "none", padding: 0 }}
            >
              {features.map((f) => (
                <li key={f.label} className="ux4g-d-flex ux4g-ai-center ux4g-gap-s">
                  <span
                    className="ux4g-icon-outlined ux4g-text-primary ux4g-fs-24"
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <span className="ux4g-body-s-default">{f.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="ux4g-cols-span-1 ux4g-lg-cols-span-5">
            <div className="ux4g-card ux4g-card-solid ux4g-card-vertical">
              <div className="ux4g-card-body">
                <h3 className="ux4g-heading-xs-strong ux4g-mb-m">{dict.dashboard.loginTitle}</h3>

                <div className="ux4g-input-container ux4g-input-md ux4g-input-default ux4g-mb-m">
                  <label className="ux4g-label-m-default" htmlFor="dash-user">
                    {dict.dashboard.accountLabel}
                  </label>
                  <input
                    id="dash-user"
                    type="text"
                    className="ux4g-input"
                    placeholder={dict.dashboard.accountPlaceholder}
                    autoComplete="off"
                  />
                </div>

                <div className="ux4g-input-container ux4g-input-md ux4g-input-default ux4g-mb-l">
                  <label className="ux4g-label-m-default" htmlFor="dash-otp">
                    {dict.dashboard.otpLabel}
                  </label>
                  <input
                    id="dash-otp"
                    type="text"
                    inputMode="numeric"
                    className="ux4g-input"
                    placeholder={dict.dashboard.otpPlaceholder}
                    autoComplete="one-time-code"
                  />
                </div>

                <button type="button" className="ux4g-btn-primary ux4g-btn-md ux4g-w-100 ux4g-mb-s">
                  {dict.dashboard.submit}
                </button>
                <p className="ux4g-body-xs-default ux4g-text-neutral-secondary ux4g-text-center">
                  {dict.dashboard.newHere}{" "}
                  <a href={`/${locale}#new-connection`} className="ux4g-text-link-sm">
                    {dict.dashboard.bookConnection}
                  </a>{" "}
                  {dict.dashboard.toGetId}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
