'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Star, 
  ExternalLink, 
  ShieldCheck, 
  Truck, 
  Info, 
  Check, 
  RotateCcw,
  ArrowRight
} from 'lucide-react';

export const AMAZON_AFFILIATE_PRODUCT = {
  asin: 'B0H6649LNG',
  titleHindi: 'Yashika विमेंस ट्रेडिशनल साटन बुट्टी साड़ी (ब्लाउज पीस सहित)',
  titleEnglish: "Yashika Women's Traditional Satin Butti Saree with Blouse Piece",
  subtitleHindi: 'प्रीमियम सॉफ्ट साटन फैब्रिक • जरी वर्क बॉर्डर • शादी, पार्टी व पूजा के लिए बेस्ट',
  subtitleEnglish: 'Premium Soft Satin Fabric • Designer Zari Border • Festive & Wedding Wear',
  brand: 'Yashika',
  categoryHindi: 'महिला साड़ी एवं एथनिक वियर',
  categoryEnglish: "Women's Ethnic Wear",
  color: 'Parrot Green (तोरिया हरा)',
  price: '₹899',
  mrp: '₹1,799',
  discountPercent: '50%',
  discountText: '50% OFF',
  savings: 'बचत ₹900 (50%)',
  savingsEn: 'Save ₹900 (50%)',
  rating: 4.4,
  reviewsCount: '1,240+',
  ratingCount: 1240,
  image: '/ads/yashika-saree.jpg',
  imageFold: '/ads/yashika-saree-fold.jpg',
  affiliateUrl: 'https://www.amazon.in/Yashika-Traditional-AZ-YS-OG2-PRAYA-PARROT-GREEN/dp/B0H6649LNG?th=1&linkCode=ll2&tag=thinkindianew-21&linkId=16f75b71fc5517626a56b4347f0cc064&ref_=as_li_ss_tl',
  tag: 'thinkindianew-21'
};

interface AmazonAffiliateAdProps {
  className?: string;
  variant?: 'horizontal' | 'sidebar' | 'inArticle' | 'card' | 'compact';
  isEnglish?: boolean;
}

export default function AmazonAffiliateAd({
  className = '',
  variant = 'horizontal',
  isEnglish = false,
}: AmazonAffiliateAdProps) {
  const p = AMAZON_AFFILIATE_PRODUCT;
  const [activeImage, setActiveImage] = useState<string>(p.image);
  const [showAdInfo, setShowAdInfo] = useState(false);

  // ─────────────────────────────────────────────────────────────
  // 1. SIDEBAR VARIANT — Google AdSense 300x600 / Shopify Product Ad
  // ─────────────────────────────────────────────────────────────
  if (variant === 'sidebar') {
    return (
      <div className={`bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 relative group font-sans ${className}`}>
        {/* AdSense Standard Top Header */}
        <div className="bg-slate-50 dark:bg-zinc-800/80 px-3 py-1.5 border-b border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-1.5 font-medium">
            <span className="bg-slate-200/90 dark:bg-zinc-700 text-slate-700 dark:text-zinc-300 font-bold text-[9px] px-1 rounded uppercase tracking-wider">
              Ad
            </span>
            <span className="text-slate-400 dark:text-zinc-500">•</span>
            <span className="text-slate-600 dark:text-zinc-300 truncate max-w-[150px]">
              amazon.in/dp/{p.asin}
            </span>
          </div>

          <div className="relative flex items-center gap-1">
            <button
              onClick={() => setShowAdInfo(!showAdInfo)}
              className="text-slate-400 hover:text-slate-600 dark:hover:text-zinc-200 p-0.5 cursor-pointer"
              title="Ad disclosure"
              aria-label="Ad info"
            >
              <Info className="w-3.5 h-3.5" />
            </button>
            {showAdInfo && (
              <div className="absolute right-0 top-6 z-30 w-52 bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 p-2.5 rounded-lg shadow-xl text-[10px] text-slate-600 dark:text-zinc-300 leading-normal">
                {isEnglish
                  ? 'Sponsored Amazon Product. As an Amazon Associate, Greenline News earns from qualifying purchases.'
                  : 'प्रायोजित अमेज़न प्रोडक्ट। अमेज़न एसोसिएट पार्टनर के तहत योग्य खरीदारियों पर कमीशन प्राप्त होता है।'}
              </div>
            )}
          </div>
        </div>

        {/* Amazon Prime & Best Seller Header Banner */}
        <div className="bg-[#232f3e] text-white px-3.5 py-1.5 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[#ff9900] font-black tracking-tight text-sm">amazon</span>
            <span className="text-slate-400 text-xs">|</span>
            <span className="bg-[#ff9900] text-black text-[9px] font-black px-1.5 py-0.5 rounded tracking-wide">
              {isEnglish ? '#1 BEST SELLER' : '#1 बेस्टसेलर'}
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] font-bold text-[#00a8e1]">
            <span className="italic font-black">✓prime</span>
          </div>
        </div>

        {/* Product Visual Area with Gallery Switcher */}
        <div className="relative aspect-[4/5] bg-slate-50 dark:bg-zinc-950 overflow-hidden group">
          <Image
            src={activeImage}
            alt={isEnglish ? p.titleEnglish : p.titleHindi}
            fill
            className="object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
            sizes="(max-width: 768px) 100vw, 360px"
          />

          {/* Deal & Discount Pill */}
          <div className="absolute top-2.5 left-2.5 flex flex-col gap-1.5 z-10">
            <span className="bg-[#cc0c39] text-white text-[11px] font-black px-2.5 py-1 rounded shadow-md uppercase tracking-wider">
              {isEnglish ? 'LIMITED TIME DEAL' : 'सीमित समय डील'}
            </span>
            <span className="bg-amber-400 text-black text-[10px] font-black px-2 py-0.5 rounded shadow-xs w-fit">
              {p.discountText}
            </span>
          </div>

          {/* Image Thumbnail Selector */}
          <div className="absolute bottom-2.5 right-2.5 flex gap-1.5 z-10 bg-black/40 backdrop-blur-md p-1 rounded-lg">
            <button
              onClick={() => setActiveImage(p.image)}
              className={`relative w-8 h-10 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                activeImage === p.image ? 'border-amber-400 scale-105' : 'border-white/60 opacity-80'
              }`}
              title="Full Saree"
            >
              <Image src={p.image} alt="Saree Full" fill className="object-cover" />
            </button>
            <button
              onClick={() => setActiveImage(p.imageFold)}
              className={`relative w-8 h-10 rounded overflow-hidden border-2 transition-all cursor-pointer ${
                activeImage === p.imageFold ? 'border-amber-400 scale-105' : 'border-white/60 opacity-80'
              }`}
              title="Fabric Close-up"
            >
              <Image src={p.imageFold} alt="Fabric Detail" fill className="object-cover" />
            </button>
          </div>

          {/* Star Rating Overlay */}
          <div className="absolute bottom-2.5 left-2.5 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xs text-slate-800 dark:text-zinc-100 text-[11px] font-bold px-2 py-1 rounded-md flex items-center gap-1.5 shadow-xs border border-slate-200 dark:border-zinc-700">
            <div className="flex text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span>{p.rating}</span>
            <span className="text-slate-400 dark:text-zinc-500 text-[10px]">({p.reviewsCount})</span>
          </div>
        </div>

        {/* Product Details & Pricing */}
        <div className="p-3.5 sm:p-4 space-y-3">
          <div>
            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400 mb-1">
              <span className="font-semibold text-slate-600 dark:text-zinc-300 uppercase tracking-wider text-[10px]">
                Brand: <strong className="text-slate-900 dark:text-white">{p.brand}</strong>
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                <Check className="w-3 h-3" /> In Stock
              </span>
            </div>

            <h4 className="font-bold text-slate-900 dark:text-zinc-100 text-[14px] leading-snug line-clamp-2 hover:text-[#007185] transition-colors">
              <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored">
                {isEnglish ? p.titleEnglish : p.titleHindi}
              </a>
            </h4>

            <p className="text-[11px] text-slate-600 dark:text-zinc-400 mt-1 line-clamp-1">
              {isEnglish ? p.subtitleEnglish : p.subtitleHindi}
            </p>
          </div>

          {/* Amazon Pricing Block */}
          <div className="bg-slate-50 dark:bg-zinc-800/60 p-2.5 rounded-lg border border-slate-200/90 dark:border-zinc-700/80">
            <div className="flex items-baseline gap-2">
              <span className="text-[#cc0c39] text-lg font-light leading-none">-{p.discountPercent}</span>
              <span className="text-2xl font-bold text-slate-900 dark:text-white leading-none tracking-tight">
                {p.price}
              </span>
            </div>
            <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500 dark:text-zinc-400">
              <span>M.R.P.: <span className="line-through">{p.mrp}</span></span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800 text-[10px]">
                {isEnglish ? p.savingsEn : p.savings}
              </span>
            </div>
            <p className="text-[9px] text-slate-500 dark:text-zinc-400 mt-1">Inclusive of all taxes</p>
          </div>

          {/* Delivery & Trust Highlights */}
          <div className="space-y-1 text-[11px] text-slate-600 dark:text-zinc-300">
            <div className="flex items-center gap-1.5 text-slate-800 dark:text-zinc-200 font-medium">
              <Truck className="w-3.5 h-3.5 text-[#00a8e1] shrink-0" />
              <span><strong>FREE delivery</strong> by Tomorrow</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-400 text-[10px]">
              <RotateCcw className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>7 days Replacement & Returnable</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 dark:text-zinc-400 text-[10px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Fulfilled by Amazon • 100% Genuine</span>
            </div>
          </div>

          {/* Official Amazon 1-Click Buy Now Button */}
          <div className="space-y-2 pt-1">
            <a
              href={p.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="w-full flex items-center justify-center gap-2 bg-[#ffd814] hover:bg-[#f7ca00] active:bg-[#f0b800] border border-[#fcd200] text-[#0f1111] font-semibold text-[13px] py-2.5 px-4 rounded-full shadow-[0_2px_5px_rgba(213,217,217,.5)] hover:shadow-md transition-all active:scale-[0.98]"
              title={isEnglish ? 'Buy Now on Amazon' : 'अमेज़न पर अभी खरीदें'}
            >
              <ShoppingBag className="w-4 h-4 text-black" />
              <span>{isEnglish ? 'Buy Now on Amazon' : 'Amazon पर अभी खरीदें'}</span>
            </a>

            <a
              href={p.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer nofollow sponsored"
              className="w-full flex items-center justify-center gap-1.5 bg-[#ffa41c] hover:bg-[#fa8900] active:bg-[#e87a00] border border-[#ff8f00] text-black font-semibold text-[12px] py-2 px-4 rounded-full shadow-xs hover:shadow-sm transition-all"
            >
              <span>{isEnglish ? 'See All Colors & Reviews' : 'अन्य रंग व रिव्यू देखें'}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>

          {/* Minimalist Google AdSense Footer */}
          <div className="pt-2 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between text-[9px] text-slate-400 dark:text-zinc-500 font-sans">
            <span>Sponsored by Amazon Associates</span>
            <span className="flex items-center gap-0.5 text-slate-500 hover:text-slate-700">
              Ads by Google <Info className="w-2.5 h-2.5 inline" />
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ─────────────────────────────────────────────────────────────
  // 2. HORIZONTAL VARIANT — Google Responsive Display Ad (728x90 / Leaderboard)
  // ─────────────────────────────────────────────────────────────
  return (
    <div className={`bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-xl p-3 sm:p-4 shadow-xs hover:shadow-md transition-all duration-300 relative overflow-hidden font-sans ${className}`}>
      {/* Top Google AdSense Micro Header */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-zinc-800 text-[10px] text-slate-400 dark:text-zinc-500">
        <div className="flex items-center gap-1.5">
          <span className="bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 font-bold px-1.5 py-0.5 rounded uppercase text-[9px] border border-slate-200 dark:border-zinc-700">
            Ad
          </span>
          <span className="text-slate-600 dark:text-zinc-400 font-medium">
            amazon.in • Festive Collection
          </span>
          <span className="bg-[#cc0c39] text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
            {p.discountText}
          </span>
        </div>
        <div className="flex items-center gap-1 text-[10px] text-slate-400">
          <span>Sponsored</span>
          <Info className="w-3 h-3 text-slate-400" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Product Thumbnail & Core Info */}
        <div className="flex items-center gap-3.5 sm:gap-4 w-full md:w-auto flex-1">
          <div className="relative w-20 h-24 sm:w-24 sm:h-28 rounded-lg overflow-hidden border border-slate-200 dark:border-zinc-700 shrink-0 bg-slate-50 dark:bg-zinc-800 shadow-xs group">
            <Image
              src={activeImage}
              alt={isEnglish ? p.titleEnglish : p.titleHindi}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
              sizes="120px"
            />
            <div className="absolute top-1 left-1 bg-[#cc0c39] text-white text-[8px] font-black px-1 rounded">
              -50%
            </div>
            {/* Quick switcher buttons */}
            <div className="absolute bottom-1 inset-x-1 flex justify-center gap-1">
              <button
                onClick={(e) => { e.preventDefault(); setActiveImage(p.image); }}
                className={`w-2 h-2 rounded-full cursor-pointer ${activeImage === p.image ? 'bg-amber-400 ring-1 ring-black' : 'bg-white/70'}`}
                aria-label="Image 1"
              />
              <button
                onClick={(e) => { e.preventDefault(); setActiveImage(p.imageFold); }}
                className={`w-2 h-2 rounded-full cursor-pointer ${activeImage === p.imageFold ? 'bg-amber-400 ring-1 ring-black' : 'bg-white/70'}`}
                aria-label="Image 2"
              />
            </div>
          </div>

          <div className="space-y-1 flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap text-[11px]">
              <span className="font-bold text-[#007185] hover:underline cursor-pointer">
                {p.brand} Store
              </span>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <div className="flex items-center gap-1 text-slate-700 dark:text-zinc-200 font-bold">
                <div className="flex text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>
                <span>{p.rating}</span>
                <span className="text-slate-400 text-[10px]">({p.reviewsCount})</span>
              </div>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <span className="text-[#00a8e1] font-black italic text-[11px]">✓prime</span>
            </div>

            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-zinc-100 leading-snug line-clamp-2 hover:text-[#007185] transition-colors">
              <a href={p.affiliateUrl} target="_blank" rel="noopener noreferrer nofollow sponsored">
                {isEnglish ? p.titleEnglish : p.titleHindi}
              </a>
            </h3>

            <p className="text-xs text-slate-500 dark:text-zinc-400 line-clamp-1 hidden sm:block">
              {isEnglish ? p.subtitleEnglish : p.subtitleHindi}
            </p>

            <div className="flex items-baseline gap-2.5 pt-0.5">
              <span className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                {p.price}
              </span>
              <span className="text-xs text-slate-400 line-through">
                {p.mrp}
              </span>
              <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-1.5 py-0.5 rounded border border-emerald-200 dark:border-emerald-800">
                {isEnglish ? p.savingsEn : p.savings}
              </span>
              <span className="text-[11px] text-slate-600 dark:text-zinc-300 hidden md:inline font-medium">
                <Truck className="w-3 h-3 inline text-[#00a8e1] mr-1" />
                FREE Delivery Tomorrow
              </span>
            </div>
          </div>
        </div>

        {/* Right: Amazon Buy Buttons */}
        <div className="flex flex-row md:flex-col items-center justify-end gap-2 shrink-0 w-full md:w-auto">
          <a
            href={p.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex-1 md:flex-initial flex items-center justify-center gap-2 bg-[#ffd814] hover:bg-[#f7ca00] active:bg-[#f0b800] border border-[#fcd200] text-[#0f1111] font-semibold text-xs sm:text-sm py-2 px-5 rounded-full shadow-[0_2px_5px_rgba(213,217,217,.5)] hover:shadow-md transition-all whitespace-nowrap"
            title={isEnglish ? 'Buy Now on Amazon' : 'अमेज़न पर अभी खरीदें'}
          >
            <ShoppingBag className="w-3.5 h-3.5 text-black" />
            <span>{isEnglish ? 'Buy Now on Amazon' : 'Amazon पर अभी खरीदें'}</span>
          </a>

          <a
            href={p.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="hidden sm:flex items-center justify-center gap-1 text-[11px] font-bold text-[#007185] hover:text-[#c7511f] hover:underline"
          >
            <span>{isEnglish ? 'Explore Deals' : 'ऑफर व साइज देखें'}</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
