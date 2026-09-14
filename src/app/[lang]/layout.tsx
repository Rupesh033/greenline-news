import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ticker from "@/components/Ticker";
import { getDictionary, ValidLocale } from "@/lib/dictionaries";
import { getCategories, getBreakingNews } from "@/lib/data";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isHindi = lang === "hi";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://greenlinenews.com";

  const title = isHindi
    ? "Greenline News | गढ़वा समाचार, झारखंड ब्रेकिंग न्यूज़, वायरल न्यूज़ व निष्पक्ष पत्रकारिता"
    : "Greenline News | Garhwa News, Jharkhand Breaking News, Viral News & Local Ground Reports";

  const description = isHindi
    ? "ग्रीनलाइन न्यूज़ (Greenline News) - गढ़वा एवं झारखंड की विश्वसनीय न्यूज़ एजेंसी। गढ़वा समाचार, ब्रेकिंग न्यूज़, वायरल वीडियो, राजनीतिक हलचल और ज़मीनी रिपोर्ट सबसे पहले।"
    : "Greenline News is the leading digital news agency in Garhwa, Jharkhand. Get real-time Garhwa news, Jharkhand breaking updates, viral news, ground reports, and unbiased reporting.";

  const keywords = [
    "greenline news",
    "green line news",
    "greenlinenews",
    "garhwa news",
    "greenline news garhwa",
    "news agency in garhwa",
    "daltonganj news",
    "palamu news",
    "ranchi news",
    "green line news ranchi",
    "greenline news palamu",
    "greenline news daltonganj",
    "medininagar news",
    "viral news",
    "garhwa popular news",
    "best news",
    "jharkhand news",
    "garhwa breaking news",
    "garhwa samachar",
    "green line company",
    "गढ़वा समाचार",
    "डाल्टनगंज समाचार",
    "पलामू समाचार",
    "राँची समाचार",
    "मेदिनीनगर समाचार",
    "गढ़वा न्यूज़",
    "ग्रीनलाइन न्यूज गढ़वा",
    "झारखंड समाचार",
    "वायरल न्यूज़",
    "ताजा समाचार गढ़वा",
    "sex news",
    "sex news in english",
    "india sex news today in english",
    "sex news articles",
    "sexual harassment news",
    "sex crime news",
    "sextortion news",
    "sex and relationships news",
    "sexual assault news",
    "sexual health news",
  ];

  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: title,
      template: "%s | Greenline News",
    },
    description,
    keywords,
    authors: [{ name: "Greenline News Bureau", url: baseUrl }],
    creator: "Greenline News Media Network",
    publisher: "Greenline News",
    icons: {
      icon: "/logo.svg",
      apple: "/logo.svg",
    },
    verification: {
      google: "eL3h2_89W3LDSa4HFhOseoyWgqXokMy_zsyaqk--_Ic",
    },
    alternates: {
      canonical: `${baseUrl}/${lang}`,
      languages: {
        hi: `${baseUrl}/hi`,
        en: `${baseUrl}/en`,
        "x-default": `${baseUrl}/hi`,
      },
    },
    openGraph: {
      type: "website",
      locale: isHindi ? "hi_IN" : "en_US",
      alternateLocale: isHindi ? "en_US" : "hi_IN",
      url: `${baseUrl}/${lang}`,
      siteName: "Greenline News",
      title,
      description,
      images: [
        {
          url: `${baseUrl}/logo.jpg`,
          width: 1200,
          height: 630,
          alt: "Greenline News - Garhwa Jharkhand",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/logo.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const validLang = lang as ValidLocale;
  const isHindi = validLang === "hi";
  const dict = await getDictionary(validLang);
  const categories = getCategories(validLang);
  const breakingNews = getBreakingNews(validLang);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://greenlinenews.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Greenline News",
    alternateName: [
      "Green Line News",
      "GreenLineNews",
      "Greenline News Garhwa",
      "Green Line News Ranchi",
      "Greenline News Daltonganj",
      "Greenline News Palamu",
      "ग्रीनलाइन न्यूज गढ़वा",
      "ग्रीनलाइन न्यूज राँची",
      "Green Line Company",
    ],
    url: baseUrl,
    logo: {
      "@type": "ImageObject",
      url: `${baseUrl}/logo.jpg`,
      width: 600,
      height: 600,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Garhwa",
      addressRegion: "Jharkhand",
      postalCode: "822114",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "newsroom",
      areaServed: ["IN-JH", "Garhwa", "Daltonganj", "Palamu", "Ranchi", "Jharkhand", "India"],
      availableLanguage: ["Hindi", "English"],
    },
    sameAs: [
      "https://www.youtube.com/c/GreenLineNews",
      "https://www.youtube.com/channel/UCLFF2SJAX27h2Ea3VQl8bRQ",
      "https://www.facebook.com/greenlinenews/",
      "https://www.facebook.com/garhwagreenlinenews/",
    ],
    description: isHindi
      ? "ग्रीनलाइन न्यूज़ (Greenline News) गढ़वा एवं झारखंड का लोकप्रिय डिजिटल न्यूज़ नेटवर्क है।"
      : "Greenline News is the premier digital news agency and media network based in Garhwa, Jharkhand.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Greenline News",
    alternateName: "ग्रीनलाइन न्यूज़",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/${validLang}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={validLang}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans bg-gray-50 text-gray-900 flex flex-col min-h-screen`}
      >
        <Header dict={dict} categories={categories} lang={validLang} />
        <Ticker breakingNews={breakingNews} dict={dict} />
        <main className="flex-grow">{children}</main>
        <Footer dict={dict} categories={categories} lang={validLang} />
      </body>
    </html>
  );
}
