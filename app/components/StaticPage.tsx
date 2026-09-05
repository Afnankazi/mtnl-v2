import type { ReactNode } from "react";
import Link from "next/link";
import type { Dictionary, Locale } from "../dictionaries";

export default function StaticPage({
  locale,
  dict,
  title,
  crumb,
  children,
}: {
  locale: Locale;
  dict: Dictionary;
  title: string;
  crumb: string;
  children: ReactNode;
}) {
  return (
    <section className="ux4g-py-3xl">
      <div className="ux4g-container" style={{ maxWidth: 800 }}>
        <nav className="ux4g-breadcrumb ux4g-breadcrumb-divider ux4g-mb-m" aria-label="Breadcrumb">
          <ol className="ux4g-breadcrumb-list">
            <li className="ux4g-breadcrumb-item">
              <Link href={`/${locale}`} className="ux4g-breadcrumb-link">
                <span>{dict.breadcrumb.home}</span>
              </Link>
            </li>
            <li className="ux4g-breadcrumb-item active" aria-current="page">
              <span>{crumb}</span>
            </li>
          </ol>
        </nav>
        <h1 className="ux4g-heading-xl-strong ux4g-mb-l">{title}</h1>
        <div className="ux4g-body-m-default">{children}</div>
      </div>
    </section>
  );
}
