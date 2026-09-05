import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import StaticPage from "../../components/StaticPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/accessibility-statement">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: `${getDictionary(lang).accessibility.title} — MTNL` };
}

export default async function AccessibilityStatementPage({
  params,
}: PageProps<"/[lang]/accessibility-statement">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const a = dict.accessibility;

  return (
    <StaticPage locale={lang} dict={dict} title={a.title} crumb={a.crumb}>
      <p className="ux4g-mb-m">{a.intro}</p>
      <h2 className="ux4g-heading-s-strong ux4g-mb-s ux4g-mt-l">{a.featuresHeading}</h2>
      <ul className="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
        {[a.featureText, a.featureSkip, a.featureKeyboard, a.featureLanguage, a.featureOffline].map(
          (line) => (
            <li key={line} className="ux4g-list-item">
              <div className="ux4g-list-item-row">
                <span className="ux4g-list-item-start">{line}</span>
              </div>
            </li>
          )
        )}
      </ul>
      <p>
        {a.barrier}{" "}
        <a href={`/${lang}/grievance-redressal`} className="ux4g-text-link-md">
          {dict.footer.grievance}
        </a>
        .
      </p>
    </StaticPage>
  );
}
