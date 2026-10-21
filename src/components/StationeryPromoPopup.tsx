'use client';

import React, { useState, useEffect } from 'react';
import { useAdSettings } from '@/lib/useAdSettings';
import Image from 'next/image';
import { X, Tag, MessageCircle, ExternalLink, Sparkles, Check, ShoppingCart, Info, Copy } from 'lucide-react';

const BRIGHTBOOKS_URL = 'https://brightbookstore.in';

interface StationeryPromoPopupProps {
  lang?: string;
}

export default function StationeryPromoPopup({ lang = 'hi' }: StationeryPromoPopupProps) {
  const adSettings = useAdSettings();
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [copied, setCopied] = useState(false);
  const isEnglish = lang === 'en';

  const whatsappOfferUrl =
    'https://wa.me/918789320315?text=' +
    encodeURIComponent(
      isEnglish
        ? 'Hello Bright Books! I would like to inquire about the 30% discount on stationery (Coupon: BB30OFF) and place an order.'
        : 'नमस्ते Bright Books! मुझे स्टेशनरी पर 30% छूट (Coupon: BB30OFF) के बारे में जानकारी चाहिए और ऑर्डर करना है।'
    );

  useEffect(() => {
    // Show after 2.5 seconds on page load
    const timer = setTimeout(() => {
      const dismissed = sessionStorage.getItem('bb_promo_dismissed');
      if (!dismissed) {
        setIsVisible(true);
      } else {
        setIsMinimized(true);
      }
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsMinimized(true);
    sessionStorage.setItem('bb_promo_dismissed', 'true');
  };

  const handleReopen = () => {
    setIsMinimized(false);
    setIsVisible(true);
  };

  const handleCopyCode = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText('BB30OFF');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (!adSettings.showStationeryPopup) return null;

  // Minimized Floating Pill Button
  if (isMinimized && !isVisible) {
    return (
      <button
        onClick={handleReopen}
        className="fixed bottom-20 lg:bottom-6 left-4 z-[2900] flex items-center gap-2 bg-[#008060] hover:bg-[#004c3f] text-white text-xs font-bold px-3.5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-white dark:border-zinc-800 group"
        aria-label={isEnglish ? 'View 30% Off Stationery Deal' : 'स्टेशनरी 30% छूट ऑफर देखें'}
      >
        <ShoppingCart className="w-3.5 h-3.5" />
        <span>{isEnglish ? 'Stationery 30% OFF' : 'स्टेशनरी 30% OFF'}</span>
        <span className="bg-white/20 text-[10px] px-1.5 py-0.2 rounded-full uppercase">Deal</span>
      </button>
    );
  }

  if (!isVisible) return null;

  return (
    <div
      className="fixed bottom-20 lg:bottom-6 left-3 sm:left-4 z-[2900] w-[calc(100vw-24px)] sm:w-[360px] bg-white dark:bg-zinc-900 rounded-xl shadow-2xl border border-slate-200 dark:border-zinc-800 overflow-hidden transition-all duration-500 animate-in slide-in-from-bottom-6 fade-in font-sans"
      role="dialog"
      aria-label="Stationery Discount Offer"
    >
      {/* Top Google / Shopify Micro Header */}
      <div className="bg-slate-50 dark:bg-zinc-800/80 px-3 py-1.5 border-b border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="bg-slate-200/90 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1 rounded uppercase tracking-wider">
            Deal
          </span>
          <span className="text-slate-400">•</span>
          <span className="text-[#008060] font-semibold flex items-center gap-1">
            <Check className="w-3 h-3" /> brightbookstore.in
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-slate-400">Sponsored</span>
          <button
            onClick={handleDismiss}
            className="text-slate-400 hover:text-slate-700 dark:hover:text-zinc-200 p-0.5 rounded-md hover:bg-slate-200/60 dark:hover:bg-zinc-700 transition-colors"
            title={isEnglish ? 'Close' : 'बंद करें'}
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Hero Visual */}
      <div className="relative aspect-[16/8] bg-slate-100 dark:bg-zinc-950 overflow-hidden">
        <Image
          src="/ads/brightbooks-promo.png"
          alt="BrightBooks Stationery"
          fill
          className="object-cover"
          sizes="360px"
        />
        <div className="absolute top-2 left-2 bg-[#008060] text-white text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
          FLAT 30% OFF
        </div>
        <div className="absolute bottom-2 right-2 bg-black/75 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded">
          {isEnglish ? 'Garhwa & Palamu Home Delivery' : 'गढ़वा • पलामू होम डिलीवरी'}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-3.5 space-y-2.5">
        <div className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-700 bg-white shrink-0">
            <Image
              src="/ads/brightbooks-logo.jpg"
              alt="BrightBooks Logo"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-[14px] leading-tight flex items-center justify-between">
              <span className="truncate">
                {isEnglish ? 'Bright Books & Stationery' : 'ब्राइट बुक्स एवं स्टेशनरी'}
              </span>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.2 rounded shrink-0">
                {isEnglish ? '30% Off' : '30% छूट'}
              </span>
            </h4>
            <p className="text-[11px] text-slate-500 dark:text-zinc-400 truncate">
              {isEnglish
                ? 'Premium notebooks, art kits, school & office stationery'
                : 'प्रीमियम नोटबुक्स, आर्ट किट, स्कूल व ऑफिस स्टेशनरी'}
            </p>
          </div>
        </div>

        {/* Coupon Code Box */}
        <div className="bg-slate-50 dark:bg-zinc-800/60 border border-dashed border-slate-300 dark:border-zinc-700 rounded-lg p-2 flex items-center justify-between text-[11px]">
          <div>
            <span className="text-slate-500 dark:text-zinc-400 text-[10px] block">
              {isEnglish ? 'Discount Coupon Code:' : 'डिस्काउंट कूपन कोड:'}
            </span>
            <strong className="text-slate-900 dark:text-white font-mono font-bold tracking-wider">
              BB30OFF
            </strong>
          </div>
          <button
            onClick={handleCopyCode}
            className="flex items-center gap-1 text-[10px] font-bold text-[#008060] bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 px-2 py-1 rounded border border-emerald-200 dark:border-emerald-800 transition-colors"
          >
            {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
            <span>{copied ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <a
            href={BRIGHTBOOKS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#008060] hover:bg-[#004c3f] active:bg-[#00382e] text-white font-bold text-xs py-2 px-2.5 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>{isEnglish ? 'Visit Store' : 'स्टोर पर जाएं'}</span>
          </a>
          <a
            href={whatsappOfferUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs py-2 px-2.5 rounded-lg shadow-xs transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{isEnglish ? 'WhatsApp Offer' : 'WhatsApp ऑफर'}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
