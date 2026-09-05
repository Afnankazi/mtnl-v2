import type { Dictionary, Locale } from "../dictionaries";

export default function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const stats = [
    { value: dict.hero.statConnections, label: dict.hero.statConnectionsLabel },
    { value: dict.hero.statCities, label: dict.hero.statCitiesLabel },
    { value: dict.hero.statSupport, label: dict.hero.statSupportLabel },
  ];

  return (
    <section
      className="ux4g-p-3xl"
      style={{
        background:
          "linear-gradient(135deg, var(--ux4g-color-primary-700), var(--ux4g-color-primary-500))",
        color: "#fff",
      }}
      aria-labelledby="hero-heading"
    >
      <div className="ux4g-container">
        <div
          className="ux4g-grid ux4g-grid-cols-1 ux4g-lg-grid-cols-12 ux4g-gap-xl"
          style={{ alignItems: "center" }}
        >
          <div className="ux4g-cols-span-1 ux4g-lg-cols-span-7">
            <span
              className="ux4g-label-s-strong ux4g-d-inline-block ux4g-radius-full ux4g-mb-m"
              style={{ background: "rgba(255,255,255,0.16)", color: "#fff", padding: "4px 12px" }}
            >
              {dict.hero.badge}
            </span>
            <h1 id="hero-heading" className="ux4g-display-m-strong ux4g-mb-m">
              {dict.hero.heading}
            </h1>
            <p className="ux4g-body-l-default ux4g-mb-l" style={{ color: "rgba(255,255,255,0.9)" }}>
              {dict.hero.subheading}
            </p>
            <div className="ux4g-d-flex ux4g-flex-wrap ux4g-gap-m">
              <a href={`${base}#pay-bill`} className="ux4g-btn-tonal-primary ux4g-btn-lg">
                {dict.hero.payCta}
              </a>
              <a
                href={`${base}#recharge`}
                className="ux4g-btn-outline-neutral ux4g-btn-lg"
                style={{ borderColor: "#fff", color: "#fff", background: "transparent" }}
              >
                {dict.hero.rechargeCta}
              </a>
            </div>
          </div>

          <div className="ux4g-cols-span-1 ux4g-lg-cols-span-5">
            <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-3 ux4g-lg-grid-cols-1 ux4g-gap-m">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="ux4g-card ux4g-card-outline ux4g-p-l"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(255,255,255,0.25)",
                  }}
                >
                  <div className="ux4g-heading-l-strong" style={{ color: "#fff" }}>
                    {s.value}
                  </div>
                  <div className="ux4g-body-s-default" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
