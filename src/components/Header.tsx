'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, Menu, X } from 'lucide-react'
import { format } from 'date-fns'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'
import type { Category } from '@/lib/data'

type HeaderProps = {
  dict: any
  categories: Category[]
  lang: string
}

export default function Header({ dict, categories, lang }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const today = new Date()

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Top Utility Bar */}
      <div className="border-b border-gray-100 bg-gray-50 text-xs text-gray-500 py-1.5 px-4">
        <div className="container mx-auto max-w-7xl flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>{format(today, 'EEEE, MMMM dd, yyyy')}</span>
            <span className="hidden md:inline">|</span>
            <span className="hidden md:inline">{dict.navigation.edition}</span>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher currentLang={lang} />
            <span>|</span>
            <Link href={`/${lang}/login`} className="hover:text-accent font-medium transition-colors">{dict.navigation.login}</Link>
            <span>/</span>
            <Link href={`/${lang}/register`} className="hover:text-accent font-medium transition-colors">{dict.navigation.register}</Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 max-w-7xl py-5 flex justify-between items-center">
        {/* Logo */}
        <Logo lang={lang} variant="header" />

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
