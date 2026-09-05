import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import StaticPage from "../../components/StaticPage";

export async function generateMetadata({ params }: PageProps<"/[lang]/rti">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: `${getDictionary(lang).rti.title} — MTNL` };
}

export default async function RtiPage({ params }: PageProps<"/[lang]/rti">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <StaticPage locale={lang} dict={dict} title={dict.rti.title} crumb={dict.rti.crumb}>
      <p className="ux4g-mb-m">{dict.rti.intro}</p>
      <ul className="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-m">
        {[dict.rti.fee, dict.rti.timeline, dict.rti.appeal].map((line) => (
          <li key={line} className="ux4g-list-item">
            <div className="ux4g-list-item-row">
              <span className="ux4g-list-item-start">{line}</span>
            </div>
          </li>
        ))}
      </ul>
      <a href={`/${lang}#contact`} className="ux4g-btn-outline-primary ux4g-btn-md">
        {dict.rti.cta}
      </a>
    </StaticPage>
  );
}
