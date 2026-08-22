'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher({ currentLang }: { currentLang: string }) {
  const pathname = usePathname()
  
  // Create a new path by replacing the current language with the new one
  const getRedirectedPathname = (locale: string) => {
    if (!pathname) return '/'
    const segments = pathname.split('/')
    segments[1] = locale
    return segments.join('/')
  }

  return (
    <div className="flex items-center space-x-2 text-sm font-medium">
      <Link 
        href={getRedirectedPathname('en')}
        className={`px-2 py-1 rounded transition-colors ${currentLang === 'en' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'}`}
      >
        EN
      </Link>
      <span className="text-gray-500">|</span>
      <Link 
        href={getRedirectedPathname('hi')}
        className={`px-2 py-1 rounded transition-colors ${currentLang === 'hi' ? 'bg-primary text-white' : 'text-gray-300 hover:text-white'}`}
      >
        HI
      </Link>
    </div>
  )
}
