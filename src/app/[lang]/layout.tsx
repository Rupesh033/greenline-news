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

export const metadata: Metadata = {
  title: "Greenline News | Truth in Every Line",
  description: "A clean, fast, mobile-friendly news portal with a focus on environment and sustainability.",
};

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>
}>) {
  const { lang } = await params;
  const validLang = lang as ValidLocale;
  const dict = await getDictionary(validLang);
  const categories = getCategories(validLang);
  const breakingNews = getBreakingNews(validLang);

  return (
    <html lang={validLang}>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-gray-50 text-gray-900 flex flex-col min-h-screen`}>
        <Header dict={dict} categories={categories} lang={validLang} />
        <Ticker breakingNews={breakingNews} dict={dict} />
        <main className="flex-grow">
          {children}
        </main>
        <Footer dict={dict} categories={categories} lang={validLang} />
      </body>
    </html>
  );
}
