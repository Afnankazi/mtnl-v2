/**
 * UI strings for every supported locale.
 *
 * Translations are hand-written rather than machine-translated: government
 * service copy has fixed official terminology (e.g. "शिकायत निवारण" for
 * Grievance Redressal) that a generic translation API gets wrong, and a
 * third-party translation widget would put citizen page content behind an
 * external script. `hi` is typed as `typeof en`, so a missing key is a
 * build error, not a silently untranslated screen.
 */

export const locales = ["en", "hi"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Label for each locale, always shown in its own script. */
export const localeNames: Record<Locale, string> = {
  en: "English",
  hi: "हिंदी",
};
export const localeShortNames: Record<Locale, string> = {
  en: "EN",
  hi: "हिं",
};

const en = {
  meta: {
    title: "MTNL — Mahanagar Telephone Nigam Ltd.",
    description:
      "Pay bills, recharge, book new connections, and register complaints for MTNL Landline, Broadband, FTTH, Mobile and Toll Free services.",
  },
  topbar: {
    govOfIndia: "Government of India Enterprise",
    skipToMain: "Skip to Main Content",
    utilitiesLabel: "Accessibility and site utilities",
    textSize: "Text size",
    decreaseText: "Decrease text size",
    resetText: "Reset text size",
    increaseText: "Increase text size",
    toDarkTheme: "Switch to dark theme",
    toLightTheme: "Switch to light theme",
    language: "Language",
  },
  header: {
    brandFull: "Mahanagar Telephone Nigam Ltd.",
    homeAria: "MTNL home",
    primaryNav: "Primary",
    openMenu: "Open menu",
    home: "Home",
    services: "Services",
    whatsNew: "What's New",
    plans: "Plans",
    contactUs: "Contact Us",
    payBill: "Pay Bill",
    recharge: "Recharge",
  },
  fraudBanner: {
    label: "Security notice:",
    body: "MTNL's only official website is mtnl.in. Beware of fake recruitment letters and fake KYC messages on WhatsApp — MTNL never asks for OTP or payment over WhatsApp.",
    readMore: "Read the full advisory",
    dismiss: "Dismiss",
  },
  hero: {
    badge: "A Government of India Enterprise",
    heading: "Landline, Broadband, FTTH & Mobile — one account for every MTNL service.",
    subheading:
      "Pay bills, recharge, book a new connection, or track a complaint in a few clicks — no login required for quick actions.",
    payCta: "Pay a bill",
    rechargeCta: "Recharge",
    statConnections: "50L+",
    statConnectionsLabel: "Active connections",
    statCities: "2",
    statCitiesLabel: "Cities served — Delhi & Mumbai",
    statSupport: "24×7",
    statSupportLabel: "Complaint support",
  },
  quickActions: {
    eyebrow: "Account & billing",
    heading: "Do it yourself, in under a minute",
    sub: "The four things most visitors come here for — no account needed to get started.",
  },
  services: {
    eyebrow: "Service categories",
    heading: "Everything MTNL provides, in one place",
    explore: "Explore",
    manageHeading: "Manage this service",
  },
  plans: {
    eyebrow: "Plans & tariffs",
    heading: "Compare plans before you commit",
    viewAll: "View full tariff comparison",
    bestValue: "Best value",
    choose: "Choose plan",
  },
  dashboard: {
    eyebrow: "Self-service dashboard",
    heading: "One login for every connection you own",
    body: "Link your landline, broadband, FTTH and mobile accounts to a single MTNL ID to see usage, bills, and complaint status without repeating your details each time.",
    featureUsage: "Real-time usage & balance",
    featureBills: "Full bill and payment history",
    featureUpgrade: "Upgrade or change your plan",
    featureComplaint: "Track complaint status",
    loginTitle: "Log in to My MTNL",
    accountLabel: "Mobile / Account number",
    accountPlaceholder: "10-digit number",
    otpLabel: "OTP",
    otpPlaceholder: "Sent via SMS",
    submit: "Send OTP & continue",
    newHere: "New here?",
    bookConnection: "Book a connection",
    toGetId: "to get your MTNL ID.",
  },
  notices: {
    eyebrow: "What's new",
    heading: "Notices & announcements",
    filterLabel: "Filter notices",
    fraudAlert: "Fraud alert",
    empty: "No notices in this category.",
  },
  security: {
    eyebrow: "Security & fraud alerts",
    heading: "Protect yourself from impersonation",
  },
  properties: {
    eyebrow: "Properties",
    heading: "Vacant spaces available for rent",
    enquire: "Enquire",
  },
  locator: {
    eyebrow: "Store & office locator",
    heading: "Find your nearest MTNL customer service centre",
    body: "Search by city or PIN code to find CSCs, franchise outlets, and payment counters.",
    placeholder: "City or PIN code",
    search: "Search",
  },
  faq: {
    eyebrow: "Help centre",
    heading: "Frequently asked questions",
    cantFind: "Can't find an answer?",
    contactSupport: "Contact support",
    orVisit: "or visit your nearest customer service centre.",
  },
  footer: {
    services: "Services",
    quickLinks: "Quick links",
    support: "Support",
    compliance: "Compliance",
    helpCentre: "Help Centre / FAQ",
    storeLocator: "Store Locator",
    securityAdvisories: "Security Advisories",
    contactUs: "Contact Us",
    planComparison: "Plan Comparison",
    rti: "RTI",
    sitemap: "Sitemap",
    accessibility: "Accessibility Statement",
    grievance: "Grievance Redressal",
    copyright: "Mahanagar Telephone Nigam Ltd. A Government of India Enterprise. All rights reserved.",
  },
  breadcrumb: {
    home: "Home",
  },
  rti: {
    title: "Right to Information (RTI)",
    crumb: "RTI",
    intro:
      "MTNL is a public authority under the Right to Information Act, 2005. Citizens may seek information about MTNL's functioning by filing an RTI application with the designated Central Public Information Officer (CPIO).",
    fee: "Fee for filing an application: ₹10 (via IPO/DD/online)",
    timeline: "Response timeline: 30 days from receipt",
    appeal: "First appeal: to the designated Appellate Authority",
    cta: "Contact the CPIO",
  },
  accessibility: {
    title: "Accessibility Statement",
    crumb: "Accessibility",
    intro:
      "This website is built on the UX4G Design System and targets WCAG 2.1 Level AA conformance, in line with the Guidelines for Indian Government Websites (GIGW).",
    featuresHeading: "Built-in accessibility features",
    featureText: "Adjustable text size and a high-contrast dark theme, in the top utility bar",
    featureSkip: "Skip-to-main-content link on every page",
    featureKeyboard: "Keyboard-navigable menus, accordions, and tabs",
    featureLanguage: "Full Hindi and English versions of every page",
    featureOffline: "Installable as an app, with core pages available offline",
    barrier: "If you encounter an accessibility barrier, please raise it through",
  },
  grievance: {
    title: "Grievance Redressal",
    crumb: "Grievance Redressal",
    intro:
      "Unresolved a complaint through the regular support channels? Escalate it here and it is routed to the Nodal Grievance Officer.",
    nameLabel: "Full name",
    namePlaceholder: "Your name",
    refLabel: "Prior complaint / ticket number (if any)",
    refPlaceholder: "e.g. MTNL-2026-000123",
    detailsLabel: "Details of the grievance",
    detailsPlaceholder: "Describe the issue and prior attempts to resolve it",
    submit: "Submit grievance",
  },
  sitemap: {
    title: "Sitemap",
    crumb: "Sitemap",
    accountBilling: "Account & Billing",
    services: "Services",
    information: "Information",
    compliance: "Compliance",
    whatsNew: "What's New / Notices",
    plans: "Plans & Tariffs",
    dashboard: "Self-Service Dashboard",
    help: "Help Centre / FAQ",
    locator: "Store Locator",
  },
  offline: {
    title: "You are offline",
    crumb: "Offline",
    body: "This page hasn't been saved for offline use yet. Pages you've already visited stay available, and everything else loads again once you're back online.",
    retry: "Try again",
    goHome: "Go to homepage",
  },
  install: {
    prompt: "Install MTNL for quick access to bills, recharge and complaints.",
    action: "Install app",
    dismiss: "Not now",
    iosHint: 'On iPhone or iPad, tap the Share button and choose "Add to Home Screen".',
  },
};

const hi: typeof en = {
  meta: {
    title: "एमटीएनएल — महानगर टेलीफोन निगम लिमिटेड",
    description:
      "एमटीएनएल लैंडलाइन, ब्रॉडबैंड, एफटीटीएच, मोबाइल और टोल फ्री सेवाओं के लिए बिल भुगतान करें, रिचार्ज करें, नया कनेक्शन बुक करें और शिकायत दर्ज करें।",
  },
  topbar: {
    govOfIndia: "भारत सरकार का उद्यम",
    skipToMain: "मुख्य सामग्री पर जाएँ",
    utilitiesLabel: "सुगम्यता एवं साइट उपयोगिताएँ",
    textSize: "पाठ का आकार",
    decreaseText: "पाठ का आकार घटाएँ",
    resetText: "पाठ का आकार पुनः निर्धारित करें",
    increaseText: "पाठ का आकार बढ़ाएँ",
    toDarkTheme: "गहरे रंग की थीम पर जाएँ",
    toLightTheme: "हल्के रंग की थीम पर जाएँ",
    language: "भाषा",
  },
  header: {
    brandFull: "महानगर टेलीफोन निगम लिमिटेड",
    homeAria: "एमटीएनएल मुखपृष्ठ",
    primaryNav: "मुख्य",
    openMenu: "मेन्यू खोलें",
    home: "मुखपृष्ठ",
    services: "सेवाएँ",
    whatsNew: "नया क्या है",
    plans: "प्लान",
    contactUs: "संपर्क करें",
    payBill: "बिल भुगतान",
    recharge: "रिचार्ज",
  },
  fraudBanner: {
    label: "सुरक्षा सूचना:",
    body: "एमटीएनएल की एकमात्र आधिकारिक वेबसाइट mtnl.in है। फर्जी नियुक्ति पत्रों और व्हाट्सऐप पर आने वाले फर्जी केवाईसी संदेशों से सावधान रहें — एमटीएनएल कभी भी व्हाट्सऐप पर ओटीपी या भुगतान नहीं माँगता।",
    readMore: "पूरी सलाह पढ़ें",
    dismiss: "बंद करें",
  },
  hero: {
    badge: "भारत सरकार का उद्यम",
    heading: "लैंडलाइन, ब्रॉडबैंड, एफटीटीएच और मोबाइल — हर एमटीएनएल सेवा के लिए एक ही खाता।",
    subheading:
      "कुछ ही क्लिक में बिल भरें, रिचार्ज करें, नया कनेक्शन बुक करें या शिकायत की स्थिति देखें — त्वरित सेवाओं के लिए लॉगिन आवश्यक नहीं।",
    payCta: "बिल भरें",
    rechargeCta: "रिचार्ज करें",
    statConnections: "50 लाख+",
    statConnectionsLabel: "सक्रिय कनेक्शन",
    statCities: "2",
    statCitiesLabel: "सेवित शहर — दिल्ली और मुंबई",
    statSupport: "24×7",
    statSupportLabel: "शिकायत सहायता",
  },
  quickActions: {
    eyebrow: "खाता एवं बिलिंग",
    heading: "एक मिनट से भी कम में, स्वयं करें",
    sub: "जिन चार कामों के लिए अधिकांश लोग यहाँ आते हैं — शुरू करने के लिए खाते की आवश्यकता नहीं।",
  },
  services: {
    eyebrow: "सेवा श्रेणियाँ",
    heading: "एमटीएनएल की सभी सेवाएँ, एक ही जगह",
    explore: "देखें",
    manageHeading: "इस सेवा का प्रबंधन करें",
  },
  plans: {
    eyebrow: "प्लान एवं टैरिफ",
    heading: "चुनने से पहले प्लान की तुलना करें",
    viewAll: "पूरी टैरिफ तुलना देखें",
    bestValue: "सर्वोत्तम मूल्य",
    choose: "प्लान चुनें",
  },
  dashboard: {
    eyebrow: "स्वयं-सेवा डैशबोर्ड",
    heading: "आपके हर कनेक्शन के लिए एक ही लॉगिन",
    body: "अपने लैंडलाइन, ब्रॉडबैंड, एफटीटीएच और मोबाइल खातों को एक ही एमटीएनएल आईडी से जोड़ें और हर बार विवरण दोहराए बिना उपयोग, बिल तथा शिकायत की स्थिति देखें।",
    featureUsage: "वास्तविक समय उपयोग एवं शेष राशि",
    featureBills: "संपूर्ण बिल एवं भुगतान इतिहास",
    featureUpgrade: "प्लान बदलें या अपग्रेड करें",
    featureComplaint: "शिकायत की स्थिति देखें",
    loginTitle: "माई एमटीएनएल में लॉगिन करें",
    accountLabel: "मोबाइल / खाता संख्या",
    accountPlaceholder: "10 अंकों की संख्या",
    otpLabel: "ओटीपी",
    otpPlaceholder: "एसएमएस से भेजा गया",
    submit: "ओटीपी भेजें और आगे बढ़ें",
    newHere: "पहली बार आए हैं?",
    bookConnection: "कनेक्शन बुक करें",
    toGetId: "और अपनी एमटीएनएल आईडी पाएँ।",
  },
  notices: {
    eyebrow: "नया क्या है",
    heading: "सूचनाएँ एवं घोषणाएँ",
    filterLabel: "सूचनाएँ छाँटें",
    fraudAlert: "धोखाधड़ी चेतावनी",
    empty: "इस श्रेणी में कोई सूचना नहीं है।",
  },
  security: {
    eyebrow: "सुरक्षा एवं धोखाधड़ी चेतावनियाँ",
    heading: "प्रतिरूपण से स्वयं को सुरक्षित रखें",
  },
  properties: {
    eyebrow: "संपत्तियाँ",
    heading: "किराए के लिए उपलब्ध रिक्त स्थान",
    enquire: "पूछताछ करें",
  },
  locator: {
    eyebrow: "केंद्र एवं कार्यालय खोजें",
    heading: "अपना निकटतम एमटीएनएल ग्राहक सेवा केंद्र खोजें",
    body: "सीएससी, फ्रेंचाइजी आउटलेट और भुगतान काउंटर खोजने के लिए शहर या पिन कोड से खोजें।",
    placeholder: "शहर या पिन कोड",
    search: "खोजें",
  },
  faq: {
    eyebrow: "सहायता केंद्र",
    heading: "अक्सर पूछे जाने वाले प्रश्न",
    cantFind: "उत्तर नहीं मिला?",
    contactSupport: "सहायता से संपर्क करें",
    orVisit: "या अपने निकटतम ग्राहक सेवा केंद्र पर जाएँ।",
  },
  footer: {
    services: "सेवाएँ",
    quickLinks: "त्वरित लिंक",
    support: "सहायता",
    compliance: "अनुपालन",
    helpCentre: "सहायता केंद्र / प्रश्नोत्तर",
    storeLocator: "केंद्र खोजें",
    securityAdvisories: "सुरक्षा सलाह",
    contactUs: "संपर्क करें",
    planComparison: "प्लान तुलना",
    rti: "सूचना का अधिकार",
    sitemap: "साइट मैप",
    accessibility: "सुगम्यता विवरण",
    grievance: "शिकायत निवारण",
    copyright: "महानगर टेलीफोन निगम लिमिटेड। भारत सरकार का उद्यम। सर्वाधिकार सुरक्षित।",
  },
  breadcrumb: {
    home: "मुखपृष्ठ",
  },
  rti: {
    title: "सूचना का अधिकार (आरटीआई)",
    crumb: "सूचना का अधिकार",
    intro:
      "एमटीएनएल सूचना का अधिकार अधिनियम, 2005 के अंतर्गत एक लोक प्राधिकरण है। नागरिक नामित केंद्रीय लोक सूचना अधिकारी (सीपीआईओ) के पास आरटीआई आवेदन दाखिल कर एमटीएनएल के कामकाज से संबंधित जानकारी माँग सकते हैं।",
    fee: "आवेदन शुल्क: ₹10 (आईपीओ/डीडी/ऑनलाइन के माध्यम से)",
    timeline: "उत्तर की अवधि: प्राप्ति से 30 दिन",
    appeal: "प्रथम अपील: नामित अपीलीय प्राधिकारी के समक्ष",
    cta: "सीपीआईओ से संपर्क करें",
  },
  accessibility: {
    title: "सुगम्यता विवरण",
    crumb: "सुगम्यता",
    intro:
      "यह वेबसाइट यूएक्स4जी डिज़ाइन सिस्टम पर बनी है और भारत सरकार की वेबसाइटों हेतु दिशानिर्देशों (जीआईजीडब्ल्यू) के अनुरूप डब्ल्यूसीएजी 2.1 स्तर एए अनुपालन का लक्ष्य रखती है।",
    featuresHeading: "अंतर्निहित सुगम्यता सुविधाएँ",
    featureText: "ऊपर की उपयोगिता पट्टी में पाठ का आकार बदलने की सुविधा और उच्च कंट्रास्ट वाली गहरी थीम",
    featureSkip: "हर पृष्ठ पर मुख्य सामग्री पर जाने का लिंक",
    featureKeyboard: "कीबोर्ड से चलने योग्य मेन्यू, अकॉर्डियन और टैब",
    featureLanguage: "हर पृष्ठ के पूर्ण हिंदी एवं अंग्रेज़ी संस्करण",
    featureOffline: "ऐप के रूप में इंस्टॉल करने योग्य, मुख्य पृष्ठ ऑफ़लाइन भी उपलब्ध",
    barrier: "यदि आपको सुगम्यता में कोई बाधा मिले, तो कृपया इसके माध्यम से सूचित करें",
  },
  grievance: {
    title: "शिकायत निवारण",
    crumb: "शिकायत निवारण",
    intro:
      "सामान्य सहायता माध्यमों से आपकी शिकायत का समाधान नहीं हुआ? इसे यहाँ आगे बढ़ाएँ, यह नोडल शिकायत अधिकारी तक पहुँचाई जाएगी।",
    nameLabel: "पूरा नाम",
    namePlaceholder: "आपका नाम",
    refLabel: "पूर्व शिकायत / टिकट संख्या (यदि हो)",
    refPlaceholder: "जैसे MTNL-2026-000123",
    detailsLabel: "शिकायत का विवरण",
    detailsPlaceholder: "समस्या और उसे हल करने के पूर्व प्रयासों का विवरण दें",
    submit: "शिकायत जमा करें",
  },
  sitemap: {
    title: "साइट मैप",
    crumb: "साइट मैप",
    accountBilling: "खाता एवं बिलिंग",
    services: "सेवाएँ",
    information: "जानकारी",
    compliance: "अनुपालन",
    whatsNew: "नया क्या है / सूचनाएँ",
    plans: "प्लान एवं टैरिफ",
    dashboard: "स्वयं-सेवा डैशबोर्ड",
    help: "सहायता केंद्र / प्रश्नोत्तर",
    locator: "केंद्र खोजें",
  },
  offline: {
    title: "आप ऑफ़लाइन हैं",
    crumb: "ऑफ़लाइन",
    body: "यह पृष्ठ अभी ऑफ़लाइन उपयोग के लिए सहेजा नहीं गया है। आपके द्वारा पहले देखे गए पृष्ठ उपलब्ध रहते हैं, और नेटवर्क वापस आते ही बाकी सब फिर से खुल जाएगा।",
    retry: "पुनः प्रयास करें",
    goHome: "मुखपृष्ठ पर जाएँ",
  },
  install: {
    prompt: "बिल, रिचार्ज और शिकायतों तक तेज़ पहुँच के लिए एमटीएनएल इंस्टॉल करें।",
    action: "ऐप इंस्टॉल करें",
    dismiss: "अभी नहीं",
    iosHint: "आईफ़ोन या आईपैड पर शेयर बटन दबाएँ और “Add to Home Screen” चुनें।",
  },
};

const dictionaries = { en, hi };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
