// Static content for the MTNL redesign, in both supported locales.
// Swap for CMS/API-backed data once the backend contracts are defined —
// see the "Likely Backend/Admin Features" note in the project brief.

import type { Locale } from "./dictionaries";

/** A string that exists in every supported locale. */
export type LocalizedText = Record<Locale, string>;

/** Read the copy for the active locale. */
export function pick(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export type ServiceCategory = {
  slug: string;
  name: LocalizedText;
  icon: string; // Material Symbols ligature name (ux4g-icon-outlined)
  description: LocalizedText;
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "landline",
    icon: "call",
    name: { en: "Landline", hi: "लैंडलाइन" },
    description: {
      en: "Reliable fixed-line voice service for home and business.",
      hi: "घर और व्यवसाय के लिए भरोसेमंद फिक्स्ड-लाइन वॉइस सेवा।",
    },
  },
  {
    slug: "broadband",
    icon: "wifi",
    name: { en: "Broadband", hi: "ब्रॉडबैंड" },
    description: {
      en: "High-speed wired broadband plans for every household.",
      hi: "हर घर के लिए हाई-स्पीड वायर्ड ब्रॉडबैंड प्लान।",
    },
  },
  {
    slug: "ftth",
    icon: "cable",
    name: { en: "FTTH", hi: "एफटीटीएच" },
    description: {
      en: "Fiber-to-the-home for gigabit speeds and IPTV.",
      hi: "गीगाबिट स्पीड और आईपीटीवी के लिए फाइबर-टू-द-होम।",
    },
  },
  {
    slug: "mobile",
    icon: "smartphone",
    name: { en: "Mobile", hi: "मोबाइल" },
    description: {
      en: "Prepaid and postpaid mobile plans on the MTNL network.",
      hi: "एमटीएनएल नेटवर्क पर प्रीपेड और पोस्टपेड मोबाइल प्लान।",
    },
  },
  {
    slug: "toll-free",
    icon: "support_agent",
    name: { en: "Toll Free Services", hi: "टोल फ्री सेवाएँ" },
    description: {
      en: "1800-series toll-free numbers for businesses and citizens.",
      hi: "व्यवसायों और नागरिकों के लिए 1800-श्रृंखला के टोल फ्री नंबर।",
    },
  },
];

export type QuickAction = {
  slug: string;
  icon: string;
  title: LocalizedText;
  description: LocalizedText;
  /** Slugs of the service categories this action applies to. */
  services: string[];
  cta: LocalizedText;
};

export const quickActions: QuickAction[] = [
  {
    slug: "pay-bill",
    icon: "receipt_long",
    title: { en: "Pay Bill", hi: "बिल भुगतान" },
    description: {
      en: "Pay your outstanding bill instantly, no login required.",
      hi: "अपना बकाया बिल तुरंत भरें, लॉगिन की आवश्यकता नहीं।",
    },
    services: ["landline", "broadband", "ftth", "mobile"],
    cta: { en: "Pay now", hi: "अभी भुगतान करें" },
  },
  {
    slug: "recharge",
    icon: "bolt",
    title: { en: "Recharge", hi: "रिचार्ज" },
    description: {
      en: "Top up a prepaid mobile or broadband connection.",
      hi: "प्रीपेड मोबाइल या ब्रॉडबैंड कनेक्शन रिचार्ज करें।",
    },
    services: ["mobile", "broadband"],
    cta: { en: "Recharge now", hi: "अभी रिचार्ज करें" },
  },
  {
    slug: "new-connection",
    icon: "add_circle",
    title: { en: "Book New Connection", hi: "नया कनेक्शन बुक करें" },
    description: {
      en: "Apply for a new connection and track installation status.",
      hi: "नए कनेक्शन के लिए आवेदन करें और इंस्टॉलेशन की स्थिति देखें।",
    },
    services: ["landline", "broadband", "ftth", "mobile", "toll-free"],
    cta: { en: "Book now", hi: "अभी बुक करें" },
  },
  {
    slug: "complaint",
    icon: "support",
    title: { en: "Register Complaint", hi: "शिकायत दर्ज करें" },
    description: {
      en: "Log a service complaint and get a tracking number.",
      hi: "सेवा संबंधी शिकायत दर्ज करें और ट्रैकिंग नंबर पाएँ।",
    },
    services: ["landline", "broadband", "ftth", "mobile"],
    cta: { en: "Register complaint", hi: "शिकायत दर्ज करें" },
  },
];

export type NoticeCategory =
  | "recruitment"
  | "vigilance"
  | "tender"
  | "jobs"
  | "pension"
  | "employee"
  | "govt-initiative"
  | "business";

export type Notice = {
  id: string;
  category: NoticeCategory;
  title: LocalizedText;
  date: string; // ISO
  isFraudWarning?: boolean;
  href: string;
};

export const noticeCategories: { slug: NoticeCategory | "all"; label: LocalizedText }[] = [
  { slug: "all", label: { en: "All", hi: "सभी" } },
  { slug: "recruitment", label: { en: "Recruitment", hi: "भर्ती" } },
  { slug: "tender", label: { en: "Tenders", hi: "निविदाएँ" } },
  { slug: "pension", label: { en: "Pension / EPFO", hi: "पेंशन / ईपीएफओ" } },
  { slug: "employee", label: { en: "Employee Circulars", hi: "कर्मचारी परिपत्र" } },
  { slug: "govt-initiative", label: { en: "Govt. Initiatives", hi: "सरकारी पहल" } },
  { slug: "business", label: { en: "Business", hi: "व्यवसाय" } },
];

export const notices: Notice[] = [
  {
    id: "n1",
    category: "recruitment",
    date: "2026-08-28",
    isFraudWarning: true,
    href: "#",
    title: {
      en: "Recruitment notice — fake appointment letters in circulation, verify before responding",
      hi: "भर्ती सूचना — फर्जी नियुक्ति पत्र प्रसारित हो रहे हैं, उत्तर देने से पहले सत्यापन करें",
    },
  },
  {
    id: "n2",
    category: "vigilance",
    date: "2026-08-25",
    href: "#",
    title: {
      en: "Vigilance Awareness Week — message from the Chief Vigilance Officer (CVO)",
      hi: "सतर्कता जागरूकता सप्ताह — मुख्य सतर्कता अधिकारी (सीवीओ) का संदेश",
    },
  },
  {
    id: "n3",
    category: "tender",
    date: "2026-08-20",
    href: "#",
    title: {
      en: "Empanelment of Arbitrators — panel notice",
      hi: "मध्यस्थों का पैनल गठन — पैनल सूचना",
    },
  },
  {
    id: "n4",
    category: "jobs",
    date: "2026-08-18",
    href: "#",
    title: {
      en: "Job postings at MTML (Mauritius Telecom) subsidiary",
      hi: "एमटीएमएल (मॉरीशस टेलीकॉम) सहायक कंपनी में रिक्तियाँ",
    },
  },
  {
    id: "n5",
    category: "pension",
    date: "2026-08-15",
    href: "#",
    title: {
      en: "EPFO higher pension forms — EPS-95 scheme, last date reminder",
      hi: "ईपीएफओ उच्च पेंशन फॉर्म — ईपीएस-95 योजना, अंतिम तिथि की सूचना",
    },
  },
  {
    id: "n6",
    category: "employee",
    date: "2026-08-10",
    href: "#",
    title: {
      en: "Sabbatical Scheme and Form 26(6) — employee circular",
      hi: "सबैटिकल योजना एवं फॉर्म 26(6) — कर्मचारी परिपत्र",
    },
  },
  {
    id: "n7",
    category: "govt-initiative",
    date: "2026-08-05",
    href: "#",
    title: {
      en: "MyGov initiative — participate in Ayurveda@2047",
      hi: "माईगव पहल — आयुर्वेद@2047 में भाग लें",
    },
  },
  {
    id: "n8",
    category: "business",
    date: "2026-08-01",
    href: "#",
    title: {
      en: "Expression of Interest — dark fibre lease",
      hi: "रुचि की अभिव्यक्ति — डार्क फाइबर पट्टे हेतु",
    },
  },
  {
    id: "n9",
    category: "business",
    date: "2026-07-28",
    href: "#",
    title: {
      en: "Free SIM offer for new mobile connections",
      hi: "नए मोबाइल कनेक्शन पर निःशुल्क सिम की पेशकश",
    },
  },
];

export type SecurityAdvisory = {
  id: string;
  title: LocalizedText;
  body: LocalizedText;
};

export const securityAdvisories: SecurityAdvisory[] = [
  {
    id: "s1",
    title: { en: "Beware of fake MTNL websites", hi: "फर्जी एमटीएनएल वेबसाइटों से सावधान रहें" },
    body: {
      en: "MTNL's only official domain is mtnl.in. Do not enter payment details on look-alike domains shared over SMS or email.",
      hi: "एमटीएनएल का एकमात्र आधिकारिक डोमेन mtnl.in है। एसएमएस या ईमेल पर भेजे गए मिलते-जुलते डोमेन पर भुगतान विवरण दर्ज न करें।",
    },
  },
  {
    id: "s2",
    title: { en: "Fake KYC messages on WhatsApp", hi: "व्हाट्सऐप पर फर्जी केवाईसी संदेश" },
    body: {
      en: "MTNL never asks for OTP, KYC documents, or payment through WhatsApp. Report such messages and do not click attached links.",
      hi: "एमटीएनएल कभी भी व्हाट्सऐप के माध्यम से ओटीपी, केवाईसी दस्तावेज़ या भुगतान नहीं माँगता। ऐसे संदेशों की शिकायत करें और संलग्न लिंक पर क्लिक न करें।",
    },
  },
];

export type PropertyListing = {
  id: string;
  title: LocalizedText;
  area: LocalizedText;
  city: LocalizedText;
};

export const propertyListings: PropertyListing[] = [
  {
    id: "p1",
    title: {
      en: "Vacant commercial space — MTNL Exchange Building, Bandra",
      hi: "रिक्त वाणिज्यिक स्थान — एमटीएनएल एक्सचेंज भवन, बांद्रा",
    },
    area: { en: "1,200 sq. ft.", hi: "1,200 वर्ग फुट" },
    city: { en: "Mumbai", hi: "मुंबई" },
  },
  {
    id: "p2",
    title: {
      en: "Vacant office space — MTNL Building, Janpath",
      hi: "रिक्त कार्यालय स्थान — एमटीएनएल भवन, जनपथ",
    },
    area: { en: "2,400 sq. ft.", hi: "2,400 वर्ग फुट" },
    city: { en: "Delhi", hi: "दिल्ली" },
  },
];

export type PlanType = "prepaid" | "postpaid" | "broadband";

export type Plan = {
  id: string;
  name: LocalizedText;
  price: LocalizedText;
  detail: LocalizedText;
  highlight?: boolean;
};

export const planTabs: { id: PlanType; label: LocalizedText }[] = [
  { id: "prepaid", label: { en: "Mobile Prepaid", hi: "मोबाइल प्रीपेड" } },
  { id: "postpaid", label: { en: "Mobile Postpaid", hi: "मोबाइल पोस्टपेड" } },
  { id: "broadband", label: { en: "Broadband / FTTH", hi: "ब्रॉडबैंड / एफटीटीएच" } },
];

export const plans: Record<PlanType, Plan[]> = {
  prepaid: [
    {
      id: "pp1",
      name: { en: "Value", hi: "वैल्यू" },
      price: { en: "₹199 / 28 days", hi: "₹199 / 28 दिन" },
      detail: { en: "1.5 GB/day, unlimited calls", hi: "1.5 जीबी/दिन, असीमित कॉल" },
    },
    {
      id: "pp2",
      name: { en: "Popular", hi: "लोकप्रिय" },
      price: { en: "₹399 / 56 days", hi: "₹399 / 56 दिन" },
      detail: { en: "2 GB/day, unlimited calls + SMS", hi: "2 जीबी/दिन, असीमित कॉल + एसएमएस" },
      highlight: true,
    },
    {
      id: "pp3",
      name: { en: "Long Validity", hi: "लंबी वैधता" },
      price: { en: "₹999 / 180 days", hi: "₹999 / 180 दिन" },
      detail: { en: "1.5 GB/day, unlimited calls", hi: "1.5 जीबी/दिन, असीमित कॉल" },
    },
  ],
  postpaid: [
    {
      id: "po1",
      name: { en: "Basic", hi: "बेसिक" },
      price: { en: "₹299 / month", hi: "₹299 / माह" },
      detail: { en: "40 GB data, unlimited calls", hi: "40 जीबी डेटा, असीमित कॉल" },
    },
    {
      id: "po2",
      name: { en: "Family", hi: "फैमिली" },
      price: { en: "₹599 / month", hi: "₹599 / माह" },
      detail: { en: "100 GB shared, 2 connections", hi: "100 जीबी साझा, 2 कनेक्शन" },
      highlight: true,
    },
    {
      id: "po3",
      name: { en: "Business", hi: "बिज़नेस" },
      price: { en: "₹999 / month", hi: "₹999 / माह" },
      detail: { en: "Unlimited data, priority support", hi: "असीमित डेटा, प्राथमिकता सहायता" },
    },
  ],
  broadband: [
    {
      id: "bb1",
      name: { en: "Home 40", hi: "होम 40" },
      price: { en: "₹499 / month", hi: "₹499 / माह" },
      detail: { en: "40 Mbps, 1000 GB FUP", hi: "40 एमबीपीएस, 1000 जीबी एफयूपी" },
    },
    {
      id: "bb2",
      name: { en: "Home 100", hi: "होम 100" },
      price: { en: "₹799 / month", hi: "₹799 / माह" },
      detail: { en: "100 Mbps, unlimited data", hi: "100 एमबीपीएस, असीमित डेटा" },
      highlight: true,
    },
    {
      id: "bb3",
      name: { en: "FTTH 300", hi: "एफटीटीएच 300" },
      price: { en: "₹1,499 / month", hi: "₹1,499 / माह" },
      detail: { en: "300 Mbps fibre + free IPTV", hi: "300 एमबीपीएस फाइबर + निःशुल्क आईपीटीवी" },
    },
  ],
};

export type Faq = { q: LocalizedText; a: LocalizedText };

export const faqs: Faq[] = [
  {
    q: {
      en: "How do I pay my MTNL bill online without logging in?",
      hi: "बिना लॉगिन किए एमटीएनएल बिल ऑनलाइन कैसे भरें?",
    },
    a: {
      en: "Use the Pay Bill card on the homepage, enter your account/telephone number, and pay by UPI, card, or net banking. A receipt is emailed instantly.",
      hi: "होमपेज पर बिल भुगतान कार्ड चुनें, अपना खाता/टेलीफोन नंबर दर्ज करें और यूपीआई, कार्ड या नेट बैंकिंग से भुगतान करें। रसीद तुरंत ईमेल कर दी जाती है।",
    },
  },
  {
    q: {
      en: "How long does a new FTTH connection take to install?",
      hi: "नया एफटीटीएच कनेक्शन लगने में कितना समय लगता है?",
    },
    a: {
      en: "Most FTTH connections are activated within 3–7 working days of application, subject to fibre availability at your address.",
      hi: "आपके पते पर फाइबर उपलब्ध होने पर अधिकांश एफटीटीएच कनेक्शन आवेदन के 3–7 कार्य दिवसों में सक्रिय हो जाते हैं।",
    },
  },
  {
    q: {
      en: "How do I track a complaint I've already registered?",
      hi: "पहले से दर्ज शिकायत की स्थिति कैसे देखें?",
    },
    a: {
      en: "Use the complaint tracking number sent to you by SMS/email at the time of registration on the Complaint Status page.",
      hi: "शिकायत दर्ज करते समय एसएमएस/ईमेल से भेजे गए ट्रैकिंग नंबर का उपयोग शिकायत स्थिति पृष्ठ पर करें।",
    },
  },
  {
    q: {
      en: "Is MTNL's website available in Hindi?",
      hi: "क्या एमटीएनएल की वेबसाइट हिंदी में उपलब्ध है?",
    },
    a: {
      en: "Yes — use the language selector in the top utility bar to switch between English and Hindi.",
      hi: "हाँ — अंग्रेज़ी और हिंदी के बीच बदलने के लिए ऊपर की उपयोगिता पट्टी में भाषा चयनकर्ता का उपयोग करें।",
    },
  },
];
