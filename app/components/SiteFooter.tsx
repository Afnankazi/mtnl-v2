import Link from "next/link";
import { serviceCategories, pick } from "../content";
import type { Dictionary, Locale } from "../dictionaries";

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Twitter / X", href: "https://x.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "YouTube", href: "https://youtube.com" },
];

export default function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;

  const columns: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
    {
      title: dict.footer.services,
      links: serviceCategories.map((s) => ({
        label: pick(s.name, locale),
        href: `${base}/services/${s.slug}`,
      })),
    },
    {
      title: dict.footer.quickLinks,
      links: [
        { label: dict.header.payBill, href: `${base}#pay-bill` },
        { label: dict.header.recharge, href: `${base}#recharge` },
        { label: dict.quickActions.heading, href: `${base}#account-billing` },
        { label: dict.footer.planComparison, href: `${base}#plans` },
      ],
    },
    {
      title: dict.footer.support,
      links: [
        { label: dict.footer.helpCentre, href: `${base}#faq` },
        { label: dict.footer.storeLocator, href: `${base}#locator` },
        { label: dict.footer.securityAdvisories, href: `${base}#security` },
        { label: dict.footer.contactUs, href: `${base}#contact` },
      ],
    },
    {
      title: dict.footer.compliance,
      links: [
        { label: dict.footer.rti, href: `${base}/rti` },
        { label: dict.footer.sitemap, href: `${base}/site-map` },
        { label: dict.footer.accessibility, href: `${base}/accessibility-statement` },
        { label: dict.footer.grievance, href: `${base}/grievance-redressal` },
      ],
    },
  ];

  return (
    <footer className="ux4g-footer-dark" id="contact">
      {/* ux4g-footer-wrapper ships `padding: 64px 80px 0`; add the missing bottom gap */}
      <div className="ux4g-footer-wrapper" style={{ paddingBottom: 48 }}>
        <div className="ux4g-container">
          <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-lg-grid-cols-4 ux4g-gap-xl">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="ux4g-heading-xs-strong ux4g-text-white ux4g-mb-m">{col.title}</h4>
                {/* Plain list — ux4g-list paints an elevated surface that is
                    unreadable against the dark footer. */}
                <ul
                  className="ux4g-d-flex ux4g-flex-column ux4g-gap-s"
                  style={{ listStyle: "none", padding: 0, margin: 0 }}
                >
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="ux4g-body-s-default"
                        style={{ color: "rgba(255,255,255,0.82)" }}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ux4g-fbs-t1">
        <div className="ux4g-container ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-flex-wrap ux4g-gap-m">
          <p className="ux4g-body-xs-default ux4g-text-white">
            &copy; {new Date().getFullYear()} {dict.footer.copyright}
          </p>
          <ul
            className="ux4g-fbs-social-list ux4g-d-flex ux4g-gap-s"
            style={{ listStyle: "none" }}
          >
            {socialLinks.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className="ux4g-body-xs-default"
                  style={{ color: "rgba(255,255,255,0.82)" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
