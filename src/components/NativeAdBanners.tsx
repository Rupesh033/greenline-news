'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  MessageCircle, 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  ShoppingCart, 
  Star, 
  Info, 
  Check, 
  Tag, 
  Truck, 
  ArrowRight, 
  ShieldCheck, 
  MapPin 
} from 'lucide-react';
import AmazonAffiliateAd from './AmazonAffiliateAd';
import { useAdSettings } from '@/lib/useAdSettings';

export { AmazonAffiliateAd };

// Contact & Links constants
const PHONE_NUMBER = '+91 87893 20315';
const PHONE_CALL_HREF = 'tel:+918789320315';

const BRIGHTBOOKS_URL = 'https://brightbookstore.in';
const BRIGHTBOOKS_WA_HREF =
  'https://wa.me/918789320315?text=' +
  encodeURIComponent(
    'नमस्ते Bright Books, मुझे प्रीमियम स्टेशनरी, नोटबुक्स और आर्ट सप्लाइज के बारे में जानकारी चाहिए और ऑर्डर करना है।'
  );

const WEBDESIGNER_URL = 'https://www.rupeshvish.com';
const WEBDESIGNER_WA_HREF =
  'https://wa.me/918789320315?text=' +
  encodeURIComponent(
    'नमस्ते रूपेश जी, मुझे अपने बिज़नेस / दुकान / संस्था के लिए वेबसाइट या ऐप बनवानी है। कृपया जानकारी दें।'
  );

interface AdProps {
  className?: string;
  variant?: 'horizontal' | 'sidebar' | 'compact' | 'card';
  isEnglish?: boolean;
}

/* =========================================================================
   1. BRIGHT BOOKS & STATIONERY AD COMPONENT (Zero AdBlock / Native Store Ad)
   ========================================================================= */
export function BrightBooksAd({ className = '', variant = 'horizontal', isEnglish = false }: AdProps) {
  const settings = useAdSettings();
  if (!settings.showBrightBooksAd) return null;
  // ── SIDEBAR VARIANT ──────────────────────────────────────────────────────
  if (variant === 'sidebar') {
    return (
      <div className={`bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 relative group font-sans ${className}`}>
        {/* Ad Header */}
        <div className="bg-slate-50 dark:bg-zinc-800/80 px-3.5 py-2 border-b border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="bg-slate-200/90 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
              Ad
            </span>
            <span className="text-slate-400 dark:text-zinc-500">•</span>
            <span className="text-slate-700 dark:text-zinc-300 font-semibold truncate max-w-[150px]">
              brightbookstore.in
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-0.5">
              <Check className="w-3 h-3" /> {isEnglish ? 'Verified Store' : 'सत्यापित स्टोर'}
            </span>
            <Info className="w-3 h-3 text-slate-400 ml-1" />
          </div>
        </div>

        {/* Hero Product Visual */}
        <div className="relative aspect-[16/10] bg-slate-100 dark:bg-zinc-950 overflow-hidden group">
          <Image
            src="/ads/brightbooks-promo.png"
            alt="BrightBooks Stationery Collection"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, 360px"
          />

          <div className="absolute top-2.5 left-2.5 bg-[#008060] text-white text-[10px] font-black px-2.5 py-1 rounded shadow-md uppercase tracking-wider flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span>FLAT 30% OFF</span>
          </div>

          <div className="absolute bottom-2.5 left-2.5 bg-black/75 backdrop-blur-md text-white text-[11px] font-bold px-2 py-0.5 rounded flex items-center gap-1 shadow-xs">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>4.9</span>
            <span className="text-slate-300 text-[9px]">(540+ reviews)</span>
          </div>
        </div>

        {/* Store Info & Product Highlights */}
        <div className="p-3.5 sm:p-4 space-y-3">
          <div className="flex items-start gap-3">
            <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-700 bg-white shrink-0 shadow-2xs">
              <Image 
                src="/ads/brightbooks-logo.jpg" 
                alt="Bright Books Logo" 
                fill 
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#008060] bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                Official Stationery Partner
              </span>
              <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-[15px] leading-snug mt-1 truncate">
                {isEnglish ? 'Bright Books & Stationery' : 'ब्राइट बुक्स एवं स्टेशनरी'}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                BrightBooks & Stationery • गढ़वा
              </p>
            </div>
          </div>

          {/* Mini Product Catalog */}
          <div className="bg-slate-50 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-slate-200/90 dark:border-zinc-700/80 text-[11px] space-y-2">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/70 dark:border-zinc-700/70">
              <span className="font-semibold text-slate-800 dark:text-zinc-200 truncate pr-2">
                📓 {isEnglish ? 'Premium Notebooks & Journals' : 'प्रीमियम स्पाइरल डायरी व जर्नल्स'}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">
                ₹149 <span className="line-through text-slate-400 font-normal text-[10px]">₹299</span>
              </span>
            </div>

            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/70 dark:border-zinc-700/70">
              <span className="font-semibold text-slate-800 dark:text-zinc-200 truncate pr-2">
                ✒️ {isEnglish ? 'Pentonic & Doms Luxury Pens' : 'Pentonic & Doms लक्जरी पेन सेट'}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">
                ₹89 <span className="line-through text-slate-400 font-normal text-[10px]">₹179</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-800 dark:text-zinc-200 truncate pr-2">
                🎨 {isEnglish ? 'Brustro Art & Sketch Kit' : 'Brustro आर्ट & स्केचिंग किट'}
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">
                ₹249 <span className="line-through text-slate-400 font-normal text-[10px]">₹499</span>
              </span>
            </div>
          </div>

          {/* Delivery & Address */}
          <div className="text-[11px] text-slate-600 dark:text-zinc-300 space-y-1">
            <p className="flex items-center gap-1.5 font-medium text-slate-800 dark:text-zinc-200">
              <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>{isEnglish ? 'Same-day home delivery in Garhwa & Palamu' : 'गढ़वा एवं पलामू में सेम-डे होम डिलीवरी'}</span>
            </p>
            <p className="text-[10px] text-slate-500 dark:text-zinc-400">
              📍 मदरसा रोड, ब्राइट फ्यूचर स्कूल के पास, गढ़वा (झारखंड)
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2 pt-1">
            <a 
              href={BRIGHTBOOKS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#004c3f] active:bg-[#00382e] text-white font-bold text-[13px] py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>{isEnglish ? 'Shop on Online Store' : 'ऑनलाइन स्टोर देखें'}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a 
                href={BRIGHTBOOKS_WA_HREF} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-[11px] py-2 px-2.5 rounded-xl shadow-2xs transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp {isEnglish ? 'Order' : 'ऑर्डर'}
              </a>
              <a 
                href={PHONE_CALL_HREF} 
                className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-[11px] py-2 px-2.5 rounded-xl transition-colors border border-slate-200 dark:border-zinc-700"
              >
                <Phone className="w-3.5 h-3.5 text-slate-600 dark:text-zinc-400" /> {isEnglish ? 'Direct Call' : 'सीधे कॉल करें'}
              </a>
            </div>
          </div>

          {/* Footer */}
          <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-[9px] text-slate-400 dark:text-zinc-500 font-sans">
            <span>Verified Local Merchant • Garhwa</span>
            <span className="flex items-center gap-0.5">
              Sponsored <Info className="w-2.5 h-2.5 inline" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── CARD VARIANT ─────────────────────────────────────────────────────────
  if (variant === 'card') {
    return (
      <div className={`bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-emerald-500/60 dark:hover:border-emerald-500/60 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group font-sans ${className}`}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

        <div>
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider border border-slate-200/80 dark:border-zinc-700">
                Ad
              </span>
              <span className="font-semibold text-slate-700 dark:text-zinc-300">
                brightbookstore.in
              </span>
              <span className="inline-flex items-center gap-0.5 text-emerald-700 dark:text-emerald-400 font-semibold text-[10px] bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200/60 dark:border-emerald-800/60">
                <Check className="w-2.5 h-2.5" /> {isEnglish ? 'Verified' : 'सत्यापित स्टोर'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <span className="bg-[#008060] text-white font-extrabold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">
                FLAT 30% OFF
              </span>
              <span className="text-slate-300 dark:text-zinc-700 mx-0.5">|</span>
              <span className="hidden sm:inline">Sponsored</span>
              <Info className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          <div className="flex items-start gap-3.5 mb-3">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border border-slate-200/80 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 shrink-0 shadow-xs">
              <Image 
                src="/ads/brightbooks-promo.png" 
                alt="Bright Books Stationery" 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="80px"
              />
              <div className="absolute top-1 left-1 bg-[#008060] text-white text-[8px] font-black px-1 rounded shadow-2xs">
                -30%
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                <a href={BRIGHTBOOKS_URL} target="_blank" rel="noopener noreferrer">
                  {isEnglish ? 'Bright Books & Stationery' : 'ब्राइट बुक्स एवं स्टेशनरी'}
                </a>
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                {isEnglish ? 'Premium Notebooks, Art Supplies & Luxury Pens • Garhwa' : 'प्रीमियम नोटबुक्स, आर्ट सप्लाइज व लग्जरी पेन • गढ़वा'}
              </p>
              
              <div className="flex items-center gap-1.5 flex-wrap mt-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-900 dark:text-amber-200 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded-md border border-amber-200/60 dark:border-amber-800/50">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> 4.9
                  <span className="text-amber-700/80 dark:text-amber-400 font-normal text-[10px]">(540+ रिव्यू)</span>
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/50">
                  <Truck className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> {isEnglish ? 'Fast Delivery' : 'सेम-डे फ्री डिलीवरी'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/90 dark:bg-zinc-800/50 rounded-xl p-3 border border-slate-200/70 dark:border-zinc-800 space-y-1.5 text-xs text-slate-700 dark:text-zinc-300 mb-3">
            <div className="flex items-center justify-between">
              <span className="font-medium truncate pr-2">📓 {isEnglish ? 'Spiral Diaries, Classmate Notebooks' : 'प्रीमियम स्पाइरल डायरी, क्लासमेट कॉपियां'}</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">{isEnglish ? 'From ₹49' : '₹49 से शुरू'}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium truncate pr-2">✒️ Doms, Pentonic, Camlin Pen Sets</span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold shrink-0">FLAT 30% OFF</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-zinc-400 pt-1.5 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-emerald-600 shrink-0" />
              <span className="truncate">मदरसा रोड, ब्राइट फ्यूचर स्कूल के पास, गढ़वा (झारखंड)</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
            <a 
              href={BRIGHTBOOKS_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#006e52] active:bg-[#004c3f] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <ShoppingCart className="w-4 h-4 shrink-0" />
              <span>{isEnglish ? 'Online Store' : 'ऑनलाइन स्टोर'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80 shrink-0" />
            </a>

            <a 
              href={BRIGHTBOOKS_WA_HREF} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <a 
              href={PHONE_CALL_HREF} 
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 transition-colors shrink-0"
              title={`Call: ${PHONE_NUMBER}`}
            >
              <Phone className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            </a>
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 dark:text-zinc-500">
            <span>Verified Local Merchant</span>
            <span>Garhwa News Partner</span>
          </div>
        </div>
      </div>
    );
  }

  // ── HORIZONTAL VARIANT (Leaderboard / In-Feed) ─────────────────────────────
  return (
    <div className={`bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-sans ${className}`}>
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-400">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold px-1.5 py-0.5 rounded uppercase text-[9px] border border-slate-200/80 dark:border-zinc-700">
            Ad
          </span>
          <span className="text-slate-700 dark:text-zinc-300 font-semibold">
            brightbookstore.in • Premium Stationery Store
          </span>
          <span className="bg-[#008060] text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-2xs">
            FLAT 30% OFF
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <span>Sponsored</span>
          <Info className="w-3 h-3 text-slate-400" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
          <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-slate-200/80 dark:border-zinc-700 shrink-0 bg-slate-50 dark:bg-zinc-800 shadow-xs group">
            <Image 
              src="/ads/brightbooks-promo.png" 
              alt="Bright Books Stationery" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="100px"
            />
            <div className="absolute top-1 left-1 bg-[#008060] text-white text-[8px] font-black px-1 rounded shadow-2xs">
              -30%
            </div>
          </div>

          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-emerald-700 dark:text-emerald-400 text-xs">
                BrightBooks Store
              </span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/40 px-1.5 py-0.5 rounded border border-amber-200/60 dark:border-amber-800/40">
                <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> 4.9 (540+ {isEnglish ? 'Reviews' : 'रिव्यू'})
              </span>
              <span className="inline-flex items-center gap-0.5 text-emerald-800 dark:text-emerald-300 font-semibold text-[10px] bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40">
                <Truck className="w-2.5 h-2.5 text-emerald-600" /> {isEnglish ? 'Free Delivery' : 'फ्री डिलीवरी'}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 leading-snug line-clamp-2 hover:text-[#008060] transition-colors">
              <a href={BRIGHTBOOKS_URL} target="_blank" rel="noopener noreferrer">
                {isEnglish
                  ? 'Bright Books & Stationery — Premium Notebooks, Art Supplies & Luxury Pens'
                  : 'ब्राइट बुक्स एवं स्टेशनरी — प्रीमियम नोटबुक्स, आर्ट सप्लाइज व लग्जरी पेन'}
              </a>
            </h4>

            <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2">
              {isEnglish
                ? 'Doms, Pentonic, Brustro, Camlin Flat 30% OFF • School, college & office stationery at wholesale prices.'
                : 'Doms, Pentonic, Brustro, Camlin पर 30% छूट • स्कूल, कॉलेज व ऑफिस स्टेशनरी थोक भाव पर।'}
            </p>

            <div className="flex items-center gap-2 pt-0.5 text-[11px] text-slate-600 dark:text-zinc-300 flex-wrap">
              <span className="font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded">
                {isEnglish ? 'From ₹49 only' : 'मात्र ₹49 से शुरू'}
              </span>
              <span className="text-slate-500 dark:text-zinc-400 text-[10px] flex items-center gap-0.5">
                <MapPin className="w-3 h-3 text-emerald-600" /> मदरसा रोड, गढ़वा
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-stretch sm:items-center justify-end gap-2 shrink-0 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-zinc-800">
          <a 
            href={BRIGHTBOOKS_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{isEnglish ? 'Visit Store' : 'ऑनलाइन स्टोर देखें'}</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-80" />
          </a>

          <a 
            href={BRIGHTBOOKS_WA_HREF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 px-3 rounded-xl shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isEnglish ? 'WhatsApp Order' : 'WhatsApp पर ऑर्डर'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   2. WEBSITE DESIGNER & DEVELOPER AD COMPONENT (Zero AdBlock Loss)
   ========================================================================= */
export function WebsiteDesignerAd({ className = '', variant = 'horizontal', isEnglish = false }: AdProps) {
  const settings = useAdSettings();
  if (!settings.showWebsiteDesignerAd) return null;
  // ── SIDEBAR VARIANT ──────────────────────────────────────────────────────
  if (variant === 'sidebar') {
    return (
      <div className={`bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 relative group font-sans ${className}`}>
        <div className="bg-slate-50 dark:bg-zinc-800/80 px-3.5 py-2 border-b border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="bg-slate-200/90 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider">
              Ad
            </span>
            <span className="text-slate-400 dark:text-zinc-500">•</span>
            <span className="text-slate-700 dark:text-zinc-300 font-semibold truncate max-w-[150px]">
              rupeshvish.com
            </span>
          </div>

          <div className="flex items-center gap-1 text-[10px] text-blue-600 dark:text-blue-400 font-bold">
            <CheckCircle2 className="w-3 h-3" /> {isEnglish ? 'Verified Dev' : 'सत्यापित डेवलपर'}
          </div>
        </div>

        <div className="p-3.5 sm:p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shrink-0 bg-slate-900 shadow-xs">
              <Image 
                src="/ads/webdesigner-profile.png" 
                alt="Rupesh Vishwakarma - Website Developer" 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800">
                Full-Stack Next.js & AI
              </span>
              <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-[15px] leading-snug mt-1">
                {isEnglish ? 'Rupesh Vishwakarma' : 'रूपेश विश्वकर्मा'}
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-medium">
                {isEnglish ? 'Website, E-commerce & Software Expert' : 'वेबसाइट, ई-कॉमर्स व सॉफ्टवेयर एक्सपर्ट'}
              </p>
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-800/60 p-2.5 rounded-xl border border-slate-200/90 dark:border-zinc-700/80 text-[11px] text-slate-700 dark:text-zinc-300 space-y-1.5">
            <p className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{isEnglish ? 'Shop, School, Business & News Portal Websites' : 'दुकान, स्कूल, बिज़नेस व न्यूज़ पोर्टल वेबसाइट'}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{isEnglish ? 'Next.js, React, Online Billing & Payment Gateway' : 'Next.js, React, ऑनलाइन बिलिंग व पेमेंट गेटवे'}</span>
            </p>
            <p className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{isEnglish ? 'Google SEO Ranking, Superfast Speed & 100% Support' : 'Google SEO रैंकिंग, सुपरफास्ट स्पीड व 100% सपोर्ट'}</span>
            </p>
          </div>

          <div className="space-y-2 pt-1">
            <a 
              href={WEBDESIGNER_WA_HREF} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] active:bg-[#12468e] text-white font-bold text-[13px] py-2.5 px-4 rounded-xl shadow-xs hover:shadow-md transition-all active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp {isEnglish ? 'Free Consultation' : 'पर फ्री कंसल्टेशन'}</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a 
                href={WEBDESIGNER_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-[11px] py-2 px-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 transition-colors"
              >
                <ExternalLink className="w-3 h-3 text-slate-500" /> {isEnglish ? 'Portfolio' : 'पोर्टफोलियो'}
              </a>
              <a 
                href={PHONE_CALL_HREF} 
                className="flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-[11px] py-2 px-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 transition-colors"
              >
                <Phone className="w-3 h-3 text-slate-500" /> {isEnglish ? 'Call' : 'सीधे कॉल'}
              </a>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-[9px] text-slate-400 dark:text-zinc-500 font-sans">
            <span>Verified Local Tech Developer</span>
            <span className="flex items-center gap-0.5">
              Garhwa News Partner <Info className="w-2.5 h-2.5 inline" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ── CARD VARIANT ─────────────────────────────────────────────────────────
  if (variant === 'card') {
    return (
      <div className={`bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-blue-500/60 dark:hover:border-blue-500/60 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group font-sans ${className}`}>
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl" />

        <div>
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-400">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider border border-slate-200/80 dark:border-zinc-700">
                Ad
              </span>
              <span className="font-semibold text-slate-700 dark:text-zinc-300">
                rupeshvish.com
              </span>
              <span className="inline-flex items-center gap-0.5 text-blue-700 dark:text-blue-400 font-semibold text-[10px] bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200/60 dark:border-blue-800/60">
                <CheckCircle2 className="w-2.5 h-2.5" /> {isEnglish ? 'Verified' : 'सत्यापित डेवलपर'}
              </span>
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-400">
              <span className="bg-blue-600 text-white font-extrabold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">
                3 DAYS DELIVERY
              </span>
              <span className="text-slate-300 dark:text-zinc-700 mx-0.5">|</span>
              <span className="hidden sm:inline">Sponsored</span>
              <Info className="w-3 h-3 text-slate-400" />
            </div>
          </div>

          <div className="flex items-start gap-3.5 mb-3">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-500 shrink-0 bg-slate-900 shadow-xs group-hover:scale-105 transition-transform duration-500">
              <Image 
                src="/ads/webdesigner-profile.png" 
                alt="Rupesh Vishwakarma" 
                fill 
                className="object-cover"
                sizes="80px"
              />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                <a href={WEBDESIGNER_URL} target="_blank" rel="noopener noreferrer">
                  {isEnglish ? 'Rupesh Vishwakarma' : 'रूपेश विश्वकर्मा'}
                </a>
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-relaxed">
                {isEnglish ? 'Website, E-commerce & Mobile App Developer • Garhwa' : 'वेबसाइट, ई-कॉमर्स व मोबाइल ऐप डेवलपर • गढ़वा'}
              </p>
              
              <div className="flex items-center gap-1.5 flex-wrap mt-2">
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-900 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/50 px-2 py-0.5 rounded-md border border-blue-200/60 dark:border-blue-800/50">
                  <Sparkles className="w-3 h-3 text-blue-600 dark:text-blue-400" /> 100+ {isEnglish ? 'Projects' : 'वेबसाइट्स'}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 px-2 py-0.5 rounded-md border border-emerald-200/60 dark:border-emerald-800/50">
                  <Check className="w-3 h-3 text-emerald-600 dark:text-emerald-400" /> {isEnglish ? '3-Days Delivery' : 'मात्र 3 दिन में लाइव'}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50/90 dark:bg-zinc-800/50 rounded-xl p-3 border border-slate-200/70 dark:border-zinc-800 space-y-1.5 text-xs text-slate-700 dark:text-zinc-300 mb-3">
            <div className="flex items-center justify-between">
              <span className="font-medium truncate pr-2">🌐 {isEnglish ? 'Store, School, Coaching & News Portals' : 'दुकान, स्कूल, कोचिंग व न्यूज़ पोर्टल वेबसाइट'}</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">100% Responsive</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium truncate pr-2">💳 {isEnglish ? 'Payment Gateway, Billing & Apps' : 'ऑनलाइन पेमेंट गेटवे, बिलिंग व Android ऐप'}</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold shrink-0">Next.js & SEO</span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-zinc-400 pt-1.5 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-blue-600 shrink-0" />
              <span className="truncate">{isEnglish ? 'Fast speed, Google SEO ranking & Lifetime support' : 'सुपरफास्ट स्पीड, Google सर्च रैंकिंग व लाइफटाइम टेक्निकल सपोर्ट'}</span>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-zinc-800">
            <a 
              href={WEBDESIGNER_WA_HREF} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] active:bg-[#12468e] text-white font-bold text-xs sm:text-sm py-2.5 px-3 rounded-xl shadow-xs hover:shadow transition-all"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>{isEnglish ? 'Chat WhatsApp' : 'WhatsApp बात करें'}</span>
            </a>

            <a 
              href={WEBDESIGNER_URL} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-xs sm:text-sm py-2.5 px-3 rounded-xl border border-slate-200 dark:border-zinc-700 transition-colors"
            >
              <ExternalLink className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
              <span>{isEnglish ? 'Portfolio' : 'पोर्टफोलियो'}</span>
            </a>

            <a 
              href={PHONE_CALL_HREF} 
              className="p-2.5 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 transition-colors shrink-0"
              title={`Call: ${PHONE_NUMBER}`}
            >
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </a>
          </div>

          <div className="pt-2 flex items-center justify-between text-[10px] text-slate-400 dark:text-zinc-500">
            <span>Verified Local Tech Developer • झारखंड</span>
            <span>Garhwa News Partner</span>
          </div>
        </div>
      </div>
    );
  }

  // ── HORIZONTAL VARIANT ───────────────────────────────────────────────────
  return (
    <div className={`bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 hover:border-blue-500/50 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-sans ${className}`}>
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-400">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold px-1.5 py-0.5 rounded uppercase text-[9px] border border-slate-200/80 dark:border-zinc-700">
            Ad
          </span>
          <span className="text-slate-700 dark:text-zinc-300 font-semibold">
            rupeshvish.com • Full-Stack Web & App Development
          </span>
          <span className="bg-blue-600 text-white text-[9px] font-extrabold px-1.5 py-0.5 rounded shadow-2xs">
            3 DAYS DELIVERY
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <span>Sponsored</span>
          <Info className="w-3 h-3 text-slate-400" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-500 shrink-0 bg-slate-900 shadow-xs group">
            <Image 
              src="/ads/webdesigner-profile.png" 
              alt="Rupesh Vishwakarma Website Designer" 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="80px"
            />
          </div>

          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-blue-600 dark:text-blue-400 text-xs">
                {isEnglish ? 'Rupesh Vishwakarma' : 'रूपेश विश्वकर्मा'}
              </span>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-blue-800 dark:text-blue-300 bg-blue-50 dark:bg-blue-950/40 px-1.5 py-0.5 rounded border border-blue-200/60 dark:border-blue-800/40">
                <Sparkles className="w-2.5 h-2.5 text-blue-600" /> 100+ {isEnglish ? 'Projects' : 'वेबसाइट्स'}
              </span>
              <span className="inline-flex items-center gap-0.5 text-emerald-800 dark:text-emerald-300 font-semibold text-[10px] bg-emerald-50 dark:bg-emerald-950/40 px-1.5 py-0.5 rounded border border-emerald-200/60 dark:border-emerald-800/40">
                <Check className="w-2.5 h-2.5 text-emerald-600" /> {isEnglish ? '3-Days Delivery' : '3 दिन में लाइव'}
              </span>
            </div>

            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 leading-snug line-clamp-2 hover:text-blue-600 transition-colors">
              <a href={WEBDESIGNER_URL} target="_blank" rel="noopener noreferrer">
                {isEnglish 
                  ? 'Build Modern Website & Android App for your Shop, School or Business' 
                  : 'अपनी दुकान, स्कूल या बिज़नेस के लिए आधुनिक वेबसाइट व ऐप बनवाएं'}
              </a>
            </h4>

            <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-2">
              {isEnglish 
                ? 'Next.js, React, Google SEO, E-commerce & Automated Billing | Live in just 3 days.' 
                : 'Next.js, React, Google SEO, ई-कॉमर्स व ऑटोमेटेड बिलिंग सॉफ्टवेयर | मात्र 3 दिनों में डिलीवरी।'}
            </p>

            <div className="flex items-center gap-2 pt-0.5 text-[11px] text-slate-600 dark:text-zinc-300 flex-wrap">
              <span className="font-semibold text-slate-700 dark:text-zinc-300 bg-slate-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-[10px]">
                Google SEO & Fast Hosting
              </span>
              <span className="text-slate-500 dark:text-zinc-400 text-[10px] flex items-center gap-0.5">
                <MapPin className="w-3 h-3 text-blue-600" /> गढ़वा / झारखंड
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-stretch sm:items-center justify-end gap-2 shrink-0 w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-zinc-800">
          <a 
            href={WEBDESIGNER_WA_HREF} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 bg-[#1a73e8] hover:bg-[#1557b0] text-white font-bold text-xs sm:text-sm py-2.5 px-4 rounded-xl shadow-xs hover:shadow transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{isEnglish ? 'WhatsApp Chat' : 'WhatsApp पर बात करें'}</span>
          </a>

          <a 
            href={WEBDESIGNER_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 md:flex-initial flex items-center justify-center gap-1.5 bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold text-xs py-2 px-3 rounded-xl border border-slate-200 dark:border-zinc-700 transition-colors whitespace-nowrap"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            <span>{isEnglish ? 'View Portfolio' : 'पोर्टफोलियो देखें'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* =========================================================================
   3. DUAL PROMO COMBO GRID (Shopify & Google Display Verified Merchants)
   ========================================================================= */
export function DualAdBanner({ 
  className = '', 
  variant = 'section',
  isEnglish = false 
}: { 
  className?: string; 
  variant?: 'section' | 'leaderboard';
  isEnglish?: boolean;
}) {
  const settings = useAdSettings();
  if (!settings.showDualAdBanner) return null;
  if (variant === 'leaderboard') {
    return (
      <div className={`w-full max-w-7xl mx-auto px-2 sm:px-4 my-4 font-sans ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Card 1: Bright Books */}
          <div className="bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-xs hover:border-emerald-500/60 dark:hover:border-emerald-500/60 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden shrink-0 border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 shadow-2xs">
                <Image src="/ads/brightbooks-promo.png" alt="Bright Books" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-[#008060]">
                  <span className="bg-emerald-50 dark:bg-emerald-950/60 px-1 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">Ad</span>
                  <span>•</span>
                  <span>Shopify Store</span>
                  <span>•</span>
                  <span className="text-amber-600 font-bold">★ 4.9</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-xs sm:text-sm leading-tight truncate mt-0.5">
                  {isEnglish ? 'Bright Books & Stationery' : 'ब्राइट बुक्स एवं स्टेशनरी'}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                  {isEnglish ? '30% Off on Notebooks • Same-day Delivery' : 'नोटबुक्स व स्टेशनरी पर 30% छूट • सेम-डे डिलीवरी'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a 
                href={BRIGHTBOOKS_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#008060] hover:bg-[#006e52] text-white py-1.5 px-3 rounded-lg flex items-center gap-1 text-[11px] font-bold shadow-xs transition-colors"
                title="Shop Store"
              >
                <ShoppingCart className="w-3.5 h-3.5" /> <span className="hidden sm:inline">{isEnglish ? 'Shop' : 'स्टोर'}</span>
              </a>
              <a 
                href={BRIGHTBOOKS_WA_HREF} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white p-1.5 rounded-lg flex items-center gap-1 text-[11px] font-bold shadow-xs transition-colors"
                title="WhatsApp Order"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

                    {/* Card 2: Website Designer (Conditional) */}
          {settings.showWebsiteDesignerAd && (
            <div className="bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 rounded-xl p-3 sm:p-3.5 flex items-center justify-between gap-3 shadow-xs hover:border-blue-500/60 dark:hover:border-blue-500/60 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-blue-500 bg-slate-900 shadow-2xs">
                <Image src="/ads/webdesigner-profile.png" alt="Rupesh Vishwakarma" fill className="object-cover" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 text-[10px] font-bold text-blue-600 dark:text-blue-400">
                  <span className="bg-blue-50 dark:bg-blue-950/60 px-1 py-0.5 rounded border border-blue-200 dark:border-blue-800">Ad</span>
                  <span>•</span>
                  <span>Web Developer</span>
                  <span>•</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">3 Days Live</span>
                </div>
                <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-xs sm:text-sm leading-tight truncate mt-0.5">
                  {isEnglish ? 'Rupesh Vishwakarma (Web Dev)' : 'रूपेश विश्वकर्मा (Website Designer)'}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
                  {isEnglish ? 'Shop, School & Business Websites • 100% Support' : 'दुकान, स्कूल व बिज़नेस वेबसाइट • 100% सपोर्ट'}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              <a 
                href={WEBDESIGNER_WA_HREF} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#1a73e8] hover:bg-[#1557b0] text-white py-1.5 px-3 rounded-lg flex items-center gap-1 text-[11px] font-bold shadow-xs transition-colors"
                title="Contact Developer"
              >
                <MessageCircle className="w-3.5 h-3.5" /> <span className="hidden sm:inline">{isEnglish ? 'Chat' : 'बात करें'}</span>
              </a>
              <a 
                href={PHONE_CALL_HREF} 
                className="bg-slate-100 hover:bg-slate-200 dark:bg-zinc-800 text-slate-800 dark:text-zinc-200 p-1.5 rounded-lg flex items-center gap-1 text-[11px] font-bold border border-slate-200 dark:border-zinc-700 transition-colors"
                title="Direct Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  }

  // Full section dual showcase
  return (
    <section className={`my-8 lg:my-10 font-sans ${className}`} aria-label="Featured Local Partners">
      <div className="flex items-center justify-between border-b border-slate-200/80 dark:border-zinc-800 pb-3 mb-4 text-xs">
        <div className="flex items-center gap-2.5">
          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-[10px] px-2.5 py-0.5 rounded-md uppercase tracking-wider shadow-2xs">
            Sponsored
          </span>
          <h3 className="font-extrabold text-slate-900 dark:text-zinc-100 text-sm sm:text-base flex items-center gap-1.5">
            <span>{isEnglish ? 'Featured Local Partners' : 'विशेष प्रायोजक एवं स्थानीय सत्यापित सेवाएं'}</span>
            <span className="text-slate-400 dark:text-zinc-500 font-normal text-xs hidden sm:inline">
              ({isEnglish ? 'Verified Services' : 'Featured Local Partners'})
            </span>
          </h3>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-slate-600 dark:text-zinc-400 bg-slate-100 dark:bg-zinc-800/80 px-2.5 py-1 rounded-full border border-slate-200/60 dark:border-zinc-700/60">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          <span>Greenline News {isEnglish ? 'Verified' : 'सत्यापित'}</span>
        </div>
      </div>

      <div className={`grid grid-cols-1 ${settings.showWebsiteDesignerAd ? 'md:grid-cols-2' : 'max-w-2xl mx-auto'} gap-4 lg:gap-6`}>
        <BrightBooksAd variant="card" isEnglish={isEnglish} />
        {settings.showWebsiteDesignerAd && (
          <WebsiteDesignerAd variant="card" isEnglish={isEnglish} />
        )}
      </div>
    </section>
  );
}

/* =========================================================================
   4. HIGH QUALITY NATIVE AD MASTER COMPONENT (Fully Configurable)
   ========================================================================= */
export interface HighQualityNativeAdProps {
  brandName?: string;
  domain?: string;
  offer?: string;
  headline?: string;
  description?: string;
  startingPrice?: string;
  rating?: string | number;
  reviews?: string;
  imageUrl?: string;
  websiteUrl?: string;
  whatsappUrl?: string;
  phoneCallUrl?: string;
  className?: string;
  badge?: string;
}

export function HighQualityNativeAd({
  brandName = 'ब्राइट बुक्स एवं स्टेशनरी',
  domain = 'brightbookstore.in',
  offer = 'FLAT 30% OFF',
  headline = 'प्रीमियम नोटबुक्स, आर्ट सप्लाइज व लग्जरी पेन',
  description = 'Doms, Pentonic, Classmate पर विशेष छूट। स्कूल और ऑफिस स्टेशनरी थोक भाव पर।',
  startingPrice = '₹49 से शुरू',
  rating = '4.9',
  reviews = '540+',
  imageUrl = '/ads/brightbooks-promo.png',
  websiteUrl = 'https://brightbookstore.in',
  whatsappUrl = 'https://wa.me/918789320315',
  phoneCallUrl = 'tel:+918789320315',
  className = '',
  badge = 'सत्यापित स्टोर',
}: HighQualityNativeAdProps) {
  return (
    <div className={`relative group bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/60 rounded-2xl p-4 sm:p-5 shadow-xs hover:shadow-xl transition-all duration-300 font-sans my-6 overflow-hidden ${className}`}>
      {/* 1. Accent glow line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* 2. Google AdStyle Top Bar */}
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-zinc-800 text-[11px] text-slate-500 dark:text-zinc-400">
        <div className="flex items-center gap-2">
          <span className="bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1.5 py-0.5 rounded uppercase tracking-wider border border-slate-200 dark:border-zinc-700">
            Ad
          </span>
          <span className="font-semibold text-slate-700 dark:text-zinc-300 truncate max-w-[140px] sm:max-w-none">
            {domain}
          </span>
          <span className="inline-flex items-center gap-0.5 text-emerald-700 dark:text-emerald-400 font-semibold text-[10px] bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
            <Check className="w-2.5 h-2.5" /> {badge}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="bg-[#008060] text-white font-extrabold text-[9px] px-2 py-0.5 rounded uppercase tracking-wider shadow-2xs">
            {offer}
          </span>
          <span className="text-[10px] text-slate-400 hidden sm:inline">Sponsored</span>
        </div>
      </div>

      {/* 3. Grid content */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        {/* Product thumbnail */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-slate-200 dark:border-zinc-700 shrink-0 bg-slate-100 dark:bg-zinc-800">
          <Image
            src={imageUrl}
            alt={brandName}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="100px"
          />
          <div className="absolute top-1 left-1 bg-[#008060] text-white text-[8px] font-black px-1 rounded shadow-2xs">
            -30%
          </div>
        </div>

        {/* Text & badges */}
        <div className="flex-1 min-w-0 space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">{brandName}</span>
            <span className="inline-flex items-center gap-0.5 text-[10px] font-bold text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/50 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-800">
              <Star className="w-2.5 h-2.5 fill-amber-400 text-amber-400" /> {rating} ({reviews})
            </span>
          </div>

          <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug truncate">
            {headline}
          </h4>
          <p className="text-xs text-slate-600 dark:text-zinc-400 line-clamp-1">
            {description}
          </p>

          <div className="pt-1">
            <span className="font-bold text-xs text-slate-900 dark:text-white bg-slate-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
              {startingPrice}
            </span>
          </div>
        </div>

        {/* 4. Action buttons */}
        <div className="flex sm:flex-col gap-2 w-full sm:w-auto pt-2 sm:pt-0">
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 bg-[#008060] hover:bg-[#006e52] text-white font-bold text-xs py-2 px-3.5 rounded-xl shadow-xs transition-colors whitespace-nowrap"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
              <span>स्टोर देखें</span>
              <ExternalLink className="w-3 h-3 opacity-80" />
            </a>
          )}

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs py-2 px-3 rounded-xl transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          )}

          {phoneCallUrl && (
            <a
              href={phoneCallUrl}
              className="hidden sm:flex items-center justify-center p-2 rounded-xl border border-slate-200 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-700 text-slate-700 dark:text-zinc-200 transition-colors"
              title="Call Sponsor"
            >
              <Phone className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

