import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, locales } from "../../../dictionaries";
import { serviceCategories, quickActions, pick } from "../../../content";
import StaticPage from "../../../components/StaticPage";

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    serviceCategories.map((s) => ({ lang, slug: s.slug }))
  );
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/services/[slug]">): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  const service = serviceCategories.find((s) => s.slug === slug);
  return { title: service ? `${pick(service.name, lang)} — MTNL` : "MTNL" };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/[lang]/services/[slug]">) {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const service = serviceCategories.find((s) => s.slug === slug);
  if (!service) notFound();

  const applicable = quickActions.filter((a) => a.services.includes(service.slug));

  return (
    <StaticPage
      locale={lang}
      dict={dict}
      title={pick(service.name, lang)}
      crumb={pick(service.name, lang)}
    >
      <p className="ux4g-mb-l">{pick(service.description, lang)}</p>

      {applicable.length > 0 && (
        <>
          <h2 className="ux4g-heading-s-strong ux4g-mb-s">{dict.services.manageHeading}</h2>
          <div className="ux4g-d-flex ux4g-flex-wrap ux4g-gap-m">
            {applicable.map((a) => (
              <a
                key={a.slug}
                href={`/${lang}#${a.slug}`}
                className="ux4g-btn-outline-primary ux4g-btn-md"
              >
                {pick(a.title, lang)}
              </a>
            ))}
          </div>
        </>
      )}
    </StaticPage>
  );
}
