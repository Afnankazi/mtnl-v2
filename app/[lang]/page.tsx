import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import Hero from "../components/Hero";
import QuickActions from "../components/QuickActions";
import ServiceCategories from "../components/ServiceCategories";
import PlanTeaser from "../components/PlanTeaser";
import SelfServiceTeaser from "../components/SelfServiceTeaser";
import Notices from "../components/Notices";
import SecurityAdvisories from "../components/SecurityAdvisories";
import PropertyListings from "../components/PropertyListings";
import StoreLocator from "../components/StoreLocator";
import Faq from "../components/Faq";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero locale={lang} dict={dict} />
      <QuickActions locale={lang} dict={dict} />
      <ServiceCategories locale={lang} dict={dict} />
      <PlanTeaser locale={lang} dict={dict} />
      <SelfServiceTeaser locale={lang} dict={dict} />
      <Notices locale={lang} dict={dict} />
      <SecurityAdvisories locale={lang} dict={dict} />
      <PropertyListings locale={lang} dict={dict} />
      <StoreLocator dict={dict} />
      <Faq locale={lang} dict={dict} />
    </>
  );
}
