import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { Geist, Geist_Mono } from "next/font/google";
import "ux4g-web-components/styles.css";
import "../globals.css";
import "../theme.css";
import { getDictionary, hasLocale, locales } from "../dictionaries";
import Ux4gRuntime from "../components/Ux4gRuntime";
import ServiceWorker from "../components/ServiceWorker";
import ThemeScript from "../components/ThemeScript";
import AccessibilityBar from "../components/AccessibilityBar";
import SiteHeader from "../components/SiteHeader";
import FraudBanner from "../components/FraudBanner";
import SiteFooter from "../components/SiteFooter";
import InstallPrompt from "../components/InstallPrompt";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: "MTNL",
    manifest: "/manifest.webmanifest",
    appleWebApp: {
      capable: true,
      title: "MTNL",
      statusBarStyle: "default",
    },
    icons: {
      apple: "/icons/apple-touch-icon.png",
    },
    alternates: {
      canonical: `/${lang}`,
      languages: Object.fromEntries(locales.map((l) => [l, `/${l}`])),
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0b5fad" },
    { media: "(prefers-color-scheme: dark)", color: "#031b30" },
  ],
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang} className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body>
        <ThemeScript />
        <Ux4gRuntime />
        <ServiceWorker />
        <AccessibilityBar locale={lang} dict={dict} />
        <SiteHeader locale={lang} dict={dict} />
        <FraudBanner locale={lang} dict={dict} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={lang} dict={dict} />
        <InstallPrompt dict={dict} />
      </body>
    </html>
  );
}
