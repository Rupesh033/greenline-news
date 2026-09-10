import React from 'react'
import Link from 'next/link'

interface LogoProps {
  lang?: string
  variant?: 'header' | 'footer' | 'admin' | 'mark-only'
  className?: string
  showTagline?: boolean
}

export function LogoMark({ size = 44, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
    >
      <defs>
        <linearGradient id="logo-emblem-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="logo-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34d399" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>

      {/* Outer Circular Globe Frame */}
      <circle cx="40" cy="40" r="36" stroke="#059669" strokeWidth="4.5" fill="none" opacity="0.95" />

      {/* Longitude and Latitude Grid Lines */}
      <path d="M40 4 C 22 4, 16 22, 16 40 C 16 58, 22 76, 40 76" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M40 4 C 58 4, 64 22, 64 40 C 64 58, 58 76, 40 76" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M6 40 Q 40 46 74 40" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M12 24 Q 40 28 68 24" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M12 56 Q 40 52 68 56" stroke="#10b981" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Dynamic Rising Greenline Swoosh */}
      <path d="M 10 68 C 18 42, 34 22, 78 16 C 56 26, 32 46, 26 72 Z" fill="url(#logo-emblem-grad)" />

      {/* Stylized Ecology / Sustainability Leaf */}
      <path d="M 38 48 C 38 34, 52 28, 64 28 C 64 42, 50 48, 38 48 Z" fill="url(#logo-leaf-grad)" />
      <path d="M 40 46 Q 52 36 62 30" stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" fill="none" opacity="0.8" />

      {/* North-East Dynamic Beacon Dot */}
      <circle cx="77" cy="17" r="3" fill="#34d399" />
    </svg>
  )
}

export default function Logo({
  lang = 'hi',
  variant = 'header',
  className = '',
  showTagline = true,
}: LogoProps) {
  if (variant === 'mark-only') {
    return (
      <Link href={`/${lang}`} className={`inline-flex items-center group ${className}`}>
        <LogoMark size={44} />
      </Link>
    )
  }

  if (variant === 'footer') {
    return (
      <Link href={`/${lang}`} className={`flex items-center group gap-3 ${className}`}>
        <div className="bg-emerald-950/80 p-2 rounded-xl border border-emerald-700/40 shadow-inner flex items-center justify-center">
          <LogoMark size={38} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="font-serif text-2xl font-black text-white tracking-tight">Greenline</span>
            <span className="bg-emerald-600 text-white font-sans text-xs font-bold px-2 py-0.5 rounded tracking-widest uppercase">
              News
            </span>
          </div>
          {showTagline && (
            <span className="text-[10px] uppercase font-semibold text-emerald-400/90 tracking-widest mt-0.5">
              {lang === 'hi' ? 'हर पंक्ति में सच्चाई' : 'Truth In Every Line'}
            </span>
          )}
        </div>
      </Link>
    )
  }

  if (variant === 'admin') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <div className="bg-white/10 p-1.5 rounded-lg">
          <LogoMark size={32} />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="font-serif text-xl font-bold text-white tracking-tight">Greenline</span>
            <span className="text-emerald-300 font-sans text-xs font-bold px-1.5 py-0.5 rounded bg-white/10 uppercase">
              Admin
            </span>
          </div>
        </div>
      </div>
    )
  }

  // Default: Header Logo
  return (
    <Link href={`/${lang}`} className={`flex items-center group gap-3 ${className}`}>
      <div className="relative p-1.5 rounded-2xl bg-gradient-to-br from-emerald-50 via-white to-emerald-100/50 border border-emerald-100 shadow-sm group-hover:shadow-md transition-all duration-300">
        <LogoMark size={48} />
      </div>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className="font-serif text-3xl md:text-4xl font-black text-[#047857] leading-none tracking-tight group-hover:text-emerald-700 transition-colors">
            Greenline
          </span>
          <span className="bg-gradient-to-r from-emerald-700 to-[#064e3b] text-white font-sans text-xs md:text-sm font-extrabold px-2 py-0.5 rounded-md tracking-widest uppercase shadow-sm">
            News
          </span>
        </div>
        {showTagline && (
          <div className="flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span className="font-sans text-[11px] font-bold text-gray-500 uppercase tracking-[0.2em]">
              {lang === 'hi' ? 'हर पंक्ति में सच्चाई' : 'Truth in Every Line'}
            </span>
          </div>
        )}
      </div>
    </Link>
  )
}
