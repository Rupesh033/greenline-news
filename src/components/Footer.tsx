import Link from 'next/link'
import Logo from './Logo'
import NewsletterBox from './NewsletterBox'
import type { Category } from '@/lib/data'

type FooterProps = {
  dict: any
  categories: Category[]
  lang: string
}

export default function Footer({ dict, categories, lang }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 border-t-4 border-primary">
      <div className="container mx-auto px-4 max-w-7xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          
          {/* About Column */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <Logo lang={lang} variant="footer" />
            </div>
            <p className="text-sm mb-4 leading-relaxed">
              {dict.footer.aboutText}
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">{dict.footer.quickLinks}</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href={`/${lang}/about`} className="hover:text-primary transition-colors">{dict.footer.aboutUs}</Link></li>
              <li><Link href={`/${lang}/contact`} className="hover:text-primary transition-colors">{dict.footer.contactUs}</Link></li>
              <li><Link href={`/${lang}/privacy`} className="hover:text-primary transition-colors">{dict.footer.privacyPolicy}</Link></li>
              <li><Link href={`/${lang}/terms`} className="hover:text-primary transition-colors">{dict.footer.termsConditions}</Link></li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">{dict.navigation.categories}</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {categories.slice(0, 8).map(cat => (
                <Link key={cat.id} href={`/${lang}/category/${cat.slug}`} className="hover:text-primary transition-colors">
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-12 after:h-0.5 after:bg-primary after:bottom-[-8px] after:left-0">{dict.footer.subscribe}</h3>
            <p className="text-sm mb-4">{dict.footer.subscribeText}</p>
            <NewsletterBox mini dict={dict} />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Greenline News. {dict.footer.allRightsReserved}</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{dict.footer.privacyPolicy}</Link>
            <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{dict.footer.termsOfService}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
