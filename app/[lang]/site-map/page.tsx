import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import StaticPage from "../../components/StaticPage";
import { serviceCategories, quickActions, pick } from "../../content";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/site-map">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: `${getDictionary(lang).sitemap.title} — MTNL` };
}

export default async function SiteMapPage({ params }: PageProps<"/[lang]/site-map">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const s = dict.sitemap;
  const base = `/${lang}`;

  const groups = [
    {
      title: s.accountBilling,
      links: quickActions.map((a) => ({ label: pick(a.title, lang), href: `${base}#${a.slug}` })),
    },
    {
      title: s.services,
      links: serviceCategories.map((sc) => ({
        label: pick(sc.name, lang),
        href: `${base}/services/${sc.slug}`,
      })),
    },
    {
      title: s.information,
      links: [
        { label: s.whatsNew, href: `${base}#notices` },
        { label: s.plans, href: `${base}#plans` },
        { label: s.dashboard, href: `${base}#dashboard` },
        { label: s.help, href: `${base}#faq` },
        { label: s.locator, href: `${base}#locator` },
      ],
    },
    {
      title: s.compliance,
      links: [
        { label: dict.footer.rti, href: `${base}/rti` },
        { label: dict.footer.accessibility, href: `${base}/accessibility-statement` },
        { label: dict.footer.grievance, href: `${base}/grievance-redressal` },
      ],
    },
  ];

  return (
    <StaticPage locale={lang} dict={dict} title={s.title} crumb={s.crumb}>
      <div className="ux4g-grid ux4g-grid-cols-1 ux4g-sm-grid-cols-2 ux4g-gap-l">
        {groups.map((g) => (
          <div key={g.title}>
            <h2 className="ux4g-heading-s-strong ux4g-mb-s">{g.title}</h2>
            <ul className="ux4g-list ux4g-list-default ux4g-list-s">
              {g.links.map((l) => (
                <li key={l.label} className="ux4g-list-item">
                  <Link href={l.href} className="ux4g-text-link-md">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </StaticPage>
  );
}
