'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Search, Menu, X } from 'lucide-react'
import { format } from 'date-fns'
import LanguageSwitcher from './LanguageSwitcher'
import type { Category } from '@/lib/data'

type HeaderProps = {
  dict: any
  categories: Category[]
  lang: string
}

export default function Header({ dict, categories, lang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const today = format(new Date(), 'EEEE, MMMM d, yyyy')

  return (
    <header className="bg-white sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-primary text-white text-xs py-2">
        <div className="container mx-auto px-4 max-w-7xl flex justify-between items-center">
          <div className="hidden sm:block">{today}</div>
          <div className="flex items-center space-x-4 ml-auto">
            <LanguageSwitcher currentLang={lang} />
            <div className="h-3 w-px bg-white/30 mx-2 hidden sm:block"></div>
            <Link href="#" className="hover:text-accent transition-colors font-medium">FB</Link>
            <Link href="#" className="hover:text-accent transition-colors font-medium">X</Link>
            <Link href="#" className="hover:text-accent transition-colors font-medium">IG</Link>
            <Link href="#" className="hover:text-accent transition-colors font-medium">YT</Link>
            <div className="h-3 w-px bg-white/30 mx-2"></div>
            <Link href={`/${lang}/login`} className="hover:text-accent font-medium transition-colors">{dict.navigation.login}</Link>
            <span>/</span>
            <Link href={`/${lang}/register`} className="hover:text-accent font-medium transition-colors">{dict.navigation.register}</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 max-w-7xl py-6 flex justify-between items-center">
        {/* Logo */}
        <Link href={`/${lang}`} className="flex items-center group">
          <div className="bg-primary text-white p-2 rounded-lg mr-3 shadow-md group-hover:bg-green-700 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-3xl font-black text-primary leading-none tracking-tight">Greenline</span>
            <span className="font-sans text-xl font-bold text-gray-900 leading-none tracking-widest uppercase">News</span>
          </div>
        </Link>

        {/* Ad Placeholder (728x90) */}
        <div className="hidden md:flex flex-col items-center justify-center bg-gray-100 text-gray-400 border border-gray-200 rounded w-[728px] h-[90px] shadow-inner text-sm">
          <span>Advertisement - 728x90</span>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-gray-700 hover:text-primary transition-colors p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sticky Navigation */}
      <nav className="border-t border-gray-100 hidden lg:block bg-white shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
          <ul className="flex flex-wrap items-center space-x-6 text-sm font-semibold uppercase tracking-wider py-3">
            <li>
              <Link href={`/${lang}`} className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary">
                {dict.navigation.home}
              </Link>
            </li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link 
                  href={`/${lang}/category/${category.slug}`}
                  className="hover:text-primary transition-colors py-2 border-b-2 border-transparent hover:border-primary"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link href={`/${lang}/search`} className="text-gray-500 hover:text-primary transition-colors">
            <Search size={20} />
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-gray-100 p-4 max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col space-y-4 font-semibold text-lg">
            <li><Link href={`/${lang}`} onClick={() => setIsMobileMenuOpen(false)}>{dict.navigation.home}</Link></li>
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/${lang}/category/${category.slug}`} onClick={() => setIsMobileMenuOpen(false)}>
                  {category.name}
                </Link>
              </li>
            ))}
            <li className="pt-4 border-t border-gray-100">
              <Link href={`/${lang}/login`} onClick={() => setIsMobileMenuOpen(false)}>{dict.navigation.login}</Link> / <Link href={`/${lang}/register`} onClick={() => setIsMobileMenuOpen(false)}>{dict.navigation.register}</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
