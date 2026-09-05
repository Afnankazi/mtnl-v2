import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import StaticPage from "../../components/StaticPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/offline">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: `${getDictionary(lang).offline.title} — MTNL` };
}

export default async function OfflinePage({ params }: PageProps<"/[lang]/offline">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const o = dict.offline;

  return (
    <StaticPage locale={lang} dict={dict} title={o.title} crumb={o.crumb}>
      <p className="ux4g-mb-l">{o.body}</p>
      <div className="ux4g-d-flex ux4g-flex-wrap ux4g-gap-m">
        <a href={`/${lang}`} className="ux4g-btn-primary ux4g-btn-md">
          {o.goHome}
        </a>
        {/* Re-requesting this route makes the SW re-attempt the network. */}
        <a href={`/${lang}/offline`} className="ux4g-btn-outline-primary ux4g-btn-md">
          {o.retry}
        </a>
      </div>
    </StaticPage>
  );
}
