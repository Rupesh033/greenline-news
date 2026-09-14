import Link from 'next/link';
import Logo from './Logo';
import NewsletterBox from './NewsletterBox';
import type { Category } from '@/lib/data';
import { MapPin } from 'lucide-react';

type FooterProps = {
  dict: any;
  categories: Category[];
  lang: string;
};

export default function Footer({ dict, categories, lang }: FooterProps) {
  const isHindi = lang === 'hi';

  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-primary">
      <div className="container mx-auto px-4 max-w-7xl py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About & Authority Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-5">
              <Logo lang={lang} variant="footer" />
            </div>
            <p className="text-sm mb-4 leading-relaxed text-gray-400">
              {isHindi
                ? 'Greenline News (ग्रीनलाइन न्यूज़) गढ़वा, झारखंड की प्रमुख डिजिटल न्यूज़ एजेंसी है। "हर पंक्ति में सच्चाई" के संकल्प के साथ हम गढ़वा समाचार, झारखंड ब्रेकिंग न्यूज़, वायरल वीडियो और ज़मीनी रिपोर्ट निष्पक्षता से प्रस्तुत करते हैं।'
                : 'Greenline News is the premier digital news agency based in Garhwa, Jharkhand. Under our motto "Truth in Every Line", we deliver trusted Garhwa news, Jharkhand breaking updates, viral stories, and grassroots investigative journalism.'}
            </p>

            {/* Official Social Channels */}
            <div className="pt-2">
              <div className="text-xs uppercase font-bold text-gray-400 tracking-wider mb-2">
                {isHindi ? 'हमारे ऑफिशियल चैनल्स' : 'Follow Our Channels'}
              </div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.youtube.com/c/GreenLineNews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-700 text-white text-xs font-bold px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                  <span>YouTube 3.6L+</span>
                </a>
                <a
                  href="https://www.facebook.com/greenlinenews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-md transition-colors"
                >
                  <span>Facebook 2.8L+</span>
                </a>
                <a
                  href="https://www.facebook.com/garhwagreenlinenews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 hover:bg-blue-900 text-white text-xs font-bold px-3 py-1.5 rounded-md transition-colors"
                >
                  <span>Garhwa FB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">
              {dict.footer.quickLinks}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${lang}/category/garhwa`} className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  {isHindi ? 'गढ़वा समाचार (Garhwa News)' : 'Garhwa News Bureau'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/category/daltonganj`} className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  {isHindi ? 'डाल्टनगंज समाचार (Daltonganj)' : 'Daltonganj News'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/category/palamu`} className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  {isHindi ? 'पलामू समाचार (Palamu News)' : 'Palamu Division News'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/category/ranchi`} className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  {isHindi ? 'राँची समाचार (Ranchi News)' : 'Ranchi Capital Bureau'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/category/viral`} className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">
                  {isHindi ? 'वायरल न्यूज़ (Viral News)' : 'Viral News'}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/about`} className="hover:text-primary transition-colors">
                  {dict.footer.aboutUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/contact`} className="hover:text-primary transition-colors">
                  {dict.footer.contactUs}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/privacy`} className="hover:text-primary transition-colors">
                  {dict.footer.privacyPolicy}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/terms`} className="hover:text-primary transition-colors">
                  {dict.footer.termsConditions}
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">
              {dict.navigation.categories}
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {categories.slice(0, 14).map((cat) => (
                <Link
                  key={cat.id}
                  href={`/${lang}/category/${cat.slug}`}
                  className="hover:text-primary transition-colors py-1 truncate"
                >
                  {cat.name}
                </Link>
              ))}
            </div>

            {/* Regional Coverage Keywords */}
            <div className="mt-5 pt-4 border-t border-gray-800">
              <div className="flex items-center gap-1 text-xs font-bold text-gray-400 mb-2">
                <MapPin size={12} className="text-emerald-400" />
                <span>{isHindi ? 'क्षेत्रीय ब्यूरो' : 'Regional Bureaus'}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Garhwa • Sonpurwa • Ranchi • Majhiaon • Nagar Untari • Ranka • Daltonganj • Jharkhand
              </p>
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">
              {dict.footer.subscribe}
            </h3>
            <p className="text-sm mb-4 text-gray-400">{dict.footer.subscribeText}</p>
            <NewsletterBox mini dict={dict} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Greenline News (ग्रीनलाइन न्यूज़). {dict.footer.allRightsReserved}
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={`/${lang}/category/garhwa`} className="hover:text-emerald-400 transition-colors">
              Garhwa News
            </Link>
            <span>•</span>
            <Link href={`/${lang}/category/viral`} className="hover:text-emerald-400 transition-colors">
              Viral News
            </Link>
            <span>•</span>
            <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">
              {dict.footer.privacyPolicy}
            </Link>
            <span>•</span>
            <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">
              {dict.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
