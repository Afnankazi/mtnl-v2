import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import StaticPage from "../../components/StaticPage";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/grievance-redressal">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return { title: `${getDictionary(lang).grievance.title} — MTNL` };
}

export default async function GrievanceRedressalPage({
  params,
}: PageProps<"/[lang]/grievance-redressal">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);
  const g = dict.grievance;

  return (
    <StaticPage locale={lang} dict={dict} title={g.title} crumb={g.crumb}>
      <p className="ux4g-mb-l">{g.intro}</p>

      <form className="ux4g-card ux4g-card-outline ux4g-p-l">
        <div className="ux4g-input-container ux4g-input-md ux4g-input-default ux4g-mb-m">
          <label className="ux4g-label-m-default" htmlFor="g-name">
            {g.nameLabel}
          </label>
          <input id="g-name" type="text" className="ux4g-input" placeholder={g.namePlaceholder} />
        </div>
        <div className="ux4g-input-container ux4g-input-md ux4g-input-default ux4g-mb-m">
          <label className="ux4g-label-m-default" htmlFor="g-ref">
            {g.refLabel}
          </label>
          <input id="g-ref" type="text" className="ux4g-input" placeholder={g.refPlaceholder} />
        </div>
        <div className="ux4g-textarea-container ux4g-textarea-md ux4g-textarea-default ux4g-mb-l">
          <label className="ux4g-label-m-default" htmlFor="g-details">
            {g.detailsLabel}
          </label>
          <textarea
            id="g-details"
            className="ux4g-textarea-input"
            rows={5}
            placeholder={g.detailsPlaceholder}
          />
        </div>
        <button type="submit" className="ux4g-btn-primary ux4g-btn-md">
          {g.submit}
        </button>
      </form>
    </StaticPage>
  );
}
