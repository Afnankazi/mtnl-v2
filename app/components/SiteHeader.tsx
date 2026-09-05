import Link from "next/link";
import type { Dictionary, Locale } from "../dictionaries";

/**
 * Primary site navbar: brand mark, desktop nav links, and the two
 * highest-frequency actions (Pay Bill / Recharge) surfaced as buttons
 * rather than buried in a menu, plus a documented dropdown for mobile.
 */
export default function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const base = `/${locale}`;
  const navLinks = [
    { label: dict.header.home, href: base },
    { label: dict.header.services, href: `${base}#services` },
    { label: dict.header.whatsNew, href: `${base}#notices` },
    { label: dict.header.plans, href: `${base}#plans` },
    { label: dict.header.contactUs, href: `${base}#contact` },
  ];

  return (
    <nav className="ux4g-navbar" aria-label={dict.header.primaryNav}>
      <div className="ux4g-container">
        <div className="ux4g-navbar-wrap">
          <Link
            href={base}
            className="ux4g-d-flex ux4g-ai-center ux4g-gap-s"
            aria-label={dict.header.homeAria}
          >
            <span
              className="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-radius-m ux4g-fw-bold"
              style={{
                width: 40,
                height: 40,
                background:
                  "linear-gradient(135deg, var(--ux4g-color-secondary-500), var(--ux4g-color-primary-500))",
                color: "#fff",
              }}
              aria-hidden="true"
            >
              M
            </span>
            <span>
              <span className="ux4g-heading-xs-strong ux4g-d-block">MTNL</span>
              <span className="ux4g-body-xs-default ux4g-text-neutral-secondary ux4g-d-block">
                {dict.header.brandFull}
              </span>
            </span>
          </Link>

          <div className="ux4g-navbar-desktop">
            <ul className="ux4g-navbar-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="ux4g-text-link-neutral-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="ux4g-d-flex ux4g-ai-center ux4g-gap-s">
            <Link
              href={`${base}#pay-bill`}
              className="ux4g-btn-outline-primary ux4g-btn-sm ux4g-d-none ux4g-md-d-inline-flex"
            >
              {dict.header.payBill}
            </Link>
            <Link
              href={`${base}#recharge`}
              className="ux4g-btn-primary ux4g-btn-sm ux4g-d-none ux4g-md-d-inline-flex"
            >
              {dict.header.recharge}
            </Link>

            <div className="ux4g-navbar-mobile ux4g-dropdown ux4g-dropdown-overflow">
              <button
                type="button"
                className="ux4g-dropdown-control ux4g-btn-outline-primary ux4g-btn-sm"
                aria-expanded="false"
                aria-label={dict.header.openMenu}
              >
                <span className="ux4g-icon-outlined">menu</span>
              </button>
              <ul className="ux4g-dropdown-menu">
                {navLinks.map((link) => (
                  <li key={link.href} className="ux4g-dropdown-option">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
                <li className="ux4g-dropdown-option">
                  <Link href={`${base}#pay-bill`}>{dict.header.payBill}</Link>
                </li>
                <li className="ux4g-dropdown-option">
                  <Link href={`${base}#recharge`}>{dict.header.recharge}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
