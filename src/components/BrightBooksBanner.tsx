'use client';

import React, { useState } from 'react';
import { useAdSettings } from '@/lib/useAdSettings';
import Image from 'next/image';
import {
  BookOpen,
  Sparkles,
  MessageCircle,
  Phone,
  CheckCircle2,
  ShoppingBag,
  ArrowRight,
  Star,
  ShieldCheck,
  Truck,
  Building,
  Info,
  ExternalLink,
  Flame,
  Award,
  X,
  Plus,
  Minus,
  Copy,
  Check,
  Zap,
  Tag,
  Eye,
  RefreshCw,
  Clock,
  Heart,
  ChevronRight,
  MapPin
} from 'lucide-react';

interface BrightBooksBannerProps {
  lang?: string;
}

type CategoryTab = 'all' | 'school' | 'competition' | 'notebooks' | 'art';

interface ProductItem {
  id: number;
  category: 'school' | 'competition' | 'notebooks' | 'art';
  name: string;
  nameHi: string;
  originalPrice: number;
  price: number;
  discount: string;
  rating: number;
  reviews: number;
  badge: string;
  badgeHi: string;
  desc: string;
  descHi: string;
  variants: string[];
  stockLeft: number;
  ordersToday: number;
  img: string;
}

export default function BrightBooksBanner({ lang = 'hi' }: BrightBooksBannerProps) {
  const settings = useAdSettings();
  if (!settings.showBrightBooksAd) return null;
  const isHindi = lang === 'hi';
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [showAdInfo, setShowAdInfo] = useState(false);
  const [copiedCoupon, setCopiedCoupon] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [modalQty, setModalQty] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [activeVariants, setActiveVariants] = useState<Record<number, string>>({
    1: 'हिंदी माध्यम',
    2: 'Latest 2026 Ed.',
    3: 'Pack of 6 (Long)',
    4: 'Full Combo Set',
    5: '10th Board Set',
    6: 'Physics + Chem + Bio',
    7: 'Executive Black',
    8: 'Classic Blue Set',
  });

  const phoneDisplay = '+91 87893 20315';
  const phoneCall = 'tel:+918789320315';
  const storeUrl = 'https://brightbookstore.in';
  const couponCode = 'GARHWA20';

  const categories = [
    { id: 'all', label: isHindi ? '🔥 टॉप डील्स' : '🔥 All Featured', count: 8 },
    { id: 'school', label: isHindi ? '📚 NCERT व JAC बोर्ड' : '📚 NCERT & JAC Board', count: 2 },
    { id: 'competition', label: isHindi ? '🎯 प्रतियोगिता परीक्षा' : '🎯 Competition Prep', count: 2 },
    { id: 'notebooks', label: isHindi ? '📓 क्लासमेट कॉपियां' : '📓 Classmate & Notebooks', count: 2 },
    { id: 'art', label: isHindi ? '🎨 आर्ट व ऑफिस स्टेशनरी' : '🎨 Art & Stationery', count: 2 },
  ];

  const allProducts: ProductItem[] = [
    {
      id: 1,
      category: 'school',
      name: 'NCERT Complete Book Sets (Class 1-12)',
      nameHi: 'NCERT सम्पूर्ण पाठ्यपुस्तक सेट (कक्षा 1-12)',
      originalPrice: 1250,
      price: 999,
      discount: '20% OFF',
      rating: 4.9,
      reviews: 340,
      badge: 'Bestseller',
      badgeHi: 'बेस्ट सेलर',
      desc: 'CBSE & JAC Board Latest 2026-27 Editions with answer keys and model tests.',
      descHi: 'CBSE एवं JAC बोर्ड दोनों माध्यमों में नवीनतम 2026-27 संस्करण, सम्पूर्ण गाइड सहित।',
      variants: ['हिंदी माध्यम', 'English Medium', 'कक्षा 10 सेट', 'कक्षा 12 सेट'],
      stockLeft: 4,
      ordersToday: 28,
      img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 2,
      category: 'competition',
      name: 'JPSC, JSSC & UPSC Reference Guides',
      nameHi: 'JPSC / JSSC / UPSC सामान्य ज्ञान एवं संदर्भ गाइड',
      originalPrice: 850,
      price: 649,
      discount: '24% OFF',
      rating: 4.8,
      reviews: 215,
      badge: 'Aspirant Choice',
      badgeHi: 'विद्यार्थी पसंद',
      desc: 'Jharkhand GK, Solved Previous 10-Year Papers & 2026 Mock Test Series.',
      descHi: 'झारखंड सामान्य ज्ञान, पिछले 10 वर्षों के हल प्रश्नपत्र व 2026 मॉक टेस्ट सीरीज।',
      variants: ['Latest 2026 Ed.', 'Jharkhand Special', 'Combo Set'],
      stockLeft: 3,
      ordersToday: 19,
      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 3,
      category: 'notebooks',
      name: 'Classmate Long Notebooks & Spiral Pack (Set of 6)',
      nameHi: 'क्लासमेट लॉन्ग रजिस्टर्स व स्पाइरल कॉम्बो (6 का पैक)',
      originalPrice: 480,
      price: 360,
      discount: 'Buy 5 Get 1 Free',
      rating: 5.0,
      reviews: 580,
      badge: 'Mega Combo',
      badgeHi: 'ऑफर कॉम्बो',
      desc: 'Ultra-smooth bleed-proof white pages, tough binding for school & college.',
      descHi: 'स्मूथ अल्ट्रा-व्हाइट पेपर, टियर-रेसिस्टेंट बाइंडिंग, कॉलेज व स्कूल हेतु उपयुक्त।',
      variants: ['Pack of 6 (Long)', 'Pack of 12 (Bulk)', 'Spiral Notebooks'],
      stockLeft: 8,
      ordersToday: 42,
      img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 4,
      category: 'art',
      name: 'Camlin & Doms Fine Art Professional Kit',
      nameHi: 'कैमलिन एवं डोम्स आर्टिस्ट ड्राइंग व पेंटिंग किट',
      originalPrice: 650,
      price: 499,
      discount: '23% OFF',
      rating: 4.9,
      reviews: 190,
      badge: 'Artist Special',
      badgeHi: 'प्रीमियम किट',
      desc: 'Acrylics, water colors, fine tipped brushes, oil pastels & A3 drawing pad.',
      descHi: 'ऐक्रेलिक, वॉटरकलर, प्रोफेशनल ब्रशेस, ऑयल पेस्टल्स और A3 स्केचबुक।',
      variants: ['Full Combo Set', 'Beginner Kit', 'Pro Artist Edition'],
      stockLeft: 5,
      ordersToday: 14,
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 5,
      category: 'school',
      name: 'JAC Board 10th & 12th Question Bank & Model Papers',
      nameHi: 'JAC बोर्ड 10वीं व 12वीं क्वेश्चन बैंक व मॉडल पेपर्स',
      originalPrice: 420,
      price: 330,
      discount: '21% OFF',
      rating: 4.9,
      reviews: 290,
      badge: 'Board Special',
      badgeHi: 'परीक्षा स्पेशल',
      desc: 'Chapter-wise solved questions with latest blue-print for high scores.',
      descHi: 'नवीनतम परीक्षा पैटर्न आधारित चैप्टर-वाइज हल सहित प्रश्न और अभ्यास सेट।',
      variants: ['10th Board Set', '12th Science', '12th Arts/Commerce'],
      stockLeft: 6,
      ordersToday: 31,
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 6,
      category: 'competition',
      name: 'NEET / JEE Physics, Chem & Biology Prep Set',
      nameHi: 'NEET / JEE भौतिकी, रसायन व जीवविज्ञान सेट',
      originalPrice: 1950,
      price: 1499,
      discount: '23% OFF',
      rating: 4.9,
      reviews: 180,
      badge: 'Top Rated',
      badgeHi: 'टॉप रेटिंग',
      desc: 'NCERT at your fingertips + 35 years solved papers with formula handbook.',
      descHi: 'NCERT फिंगरटिप्स व स्टैंडर्ड रेफरेंस बुक्स का सम्पूर्ण पैकेज।',
      variants: ['Physics + Chem + Bio', 'Physics + Chem + Math', 'Complete Medical'],
      stockLeft: 2,
      ordersToday: 11,
      img: 'https://images.unsplash.com/photo-1532012164546-f432f2e3edd4?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 7,
      category: 'notebooks',
      name: 'Executive Luxury Leatherette Journal & Planner',
      nameHi: 'एग्जीक्यूटिव लेदर-फील डायरी व जर्नल',
      originalPrice: 599,
      price: 449,
      discount: '25% OFF',
      rating: 4.8,
      reviews: 120,
      badge: 'Luxury Edit',
      badgeHi: 'लग्जरी फील',
      desc: '100 GSM bleed-resistant paper with ribbon bookmark and pen loop.',
      descHi: '100 GSM इंक-प्रूफ पेपर, पेन होल्डर व मैग्नेटिक लॉक सहित प्रीमियम फिनिश।',
      variants: ['Executive Black', 'Tan Brown', 'Midnight Blue'],
      stockLeft: 7,
      ordersToday: 16,
      img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=600',
    },
    {
      id: 8,
      category: 'art',
      name: 'Parker Vector Metallic Fountain & Roller Pen Gift Set',
      nameHi: 'पार्कर वेक्टर मेटैलिक फाउंटेन व रोलर पेन सेट',
      originalPrice: 850,
      price: 680,
      discount: '20% OFF',
      rating: 5.0,
      reviews: 410,
      badge: 'Executive Gift',
      badgeHi: 'गिफ्ट पैक',
      desc: 'Stainless steel body, signature arrow clip in luxury gift box.',
      descHi: 'प्रीमियम मेटल बॉडी, स्मूथ फ्लो निब, गिफ्ट बॉक्स सहित स्पेशल एडिशन।',
      variants: ['Classic Blue Set', 'Matte Black Set', 'Metallic Silver'],
      stockLeft: 4,
      ordersToday: 25,
      img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&q=80&w=600',
    },
  ];

  const displayedProducts =
    activeTab === 'all'
      ? allProducts
      : allProducts.filter((p) => p.category === activeTab);

  const handleCopyCoupon = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(couponCode);
      setCopiedCoupon(true);
      setTimeout(() => setCopiedCoupon(false), 2500);
    }
  };

  const openQuickView = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedVariant(activeVariants[product.id] || product.variants[0]);
    setModalQty(1);
  };

  const getWhatsAppLink = (productTitle: string, variant?: string, qty = 1, price?: number) => {
    const vText = variant ? ` (वेरिएंट: ${variant})` : '';
    const qText = qty > 1 ? ` | मात्रा: ${qty} पीस` : '';
    const pText = price ? ` | कुल मूल्य: ₹${price * qty}` : '';

    const text = isHindi
      ? `नमस्ते Bright Books! मैंने Greenline News स्टोरफ्रंट पर "${productTitle}"${vText}${qText}${pText} का ऑफर देखा है। मुझे इसे तत्काल ऑर्डर करना है। कृपया गढ़वा होम डिलीवरी एवं पेमेंट डिटेल्स साझा करें।`
      : `Hello Bright Books! I saw "${productTitle}"${vText}${qText}${pText} on Greenline News storefront. I want to place an order. Please share Garhwa delivery & payment details.`;
    return `https://wa.me/918789320315?text=${encodeURIComponent(text)}`;
  };

  const getGeneralWhatsAppLink = () => {
    const text = isHindi
      ? `नमस्ते Bright Books & Stationery! मैंने Greenline News पर आपका स्टोरफ्रंट देखा है। मुझे किताबों और स्टेशनरी के लिए पूछताछ/ऑर्डर करना है।`
      : `Hello Bright Books & Stationery! I saw your storefront on Greenline News. I would like to inquire/order books and stationery.`;
    return `https://wa.me/918789320315?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="container mx-auto px-4 max-w-7xl my-14" aria-label="Official Sponsor Storefront" suppressHydrationWarning>
      {/* Outer Shell with Premium Deep Forest & Emerald Glow */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#0a1914] via-[#091511] to-[#060e0c] border border-emerald-500/25 text-white shadow-2xl transition-all duration-300">
        
        {/* Soft Ambient Radial Accents */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none" />

        {/* 1. Top Announcement & Coupon Ribbon */}
        <div className="bg-[#05110d]/90 border-b border-emerald-500/15 px-4 sm:px-6 py-2.5 text-xs text-slate-200 backdrop-blur-md">
          <div className="flex flex-wrap items-center justify-between gap-3 max-w-7xl mx-auto">
            {/* Promo Live Alert */}
            <div className="flex items-center gap-2.5">
              <span className="flex h-2 w-2 relative shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="text-emerald-400 font-extrabold uppercase tracking-widest text-[10px]">
                {isHindi ? 'सीमित समय ऑफर' : 'Limited Time Offer'}:
              </span>
              <span className="text-slate-300 font-medium text-xs">
                {isHindi
                  ? 'गढ़वा में ₹499+ के ऑर्डर्स पर फ्री सेम-डे होम डिलीवरी!'
                  : 'Free Same-Day Delivery in Garhwa on orders ₹499+'}
              </span>
            </div>

            {/* Coupon Code Badge */}
            <div className="flex items-center gap-2.5 ml-auto">
              <div className="flex items-center bg-emerald-950/80 border border-emerald-500/30 rounded-full px-3 py-1 gap-2 shadow-xs">
                <Tag size={12} className="text-emerald-400" />
                <span className="text-[11px] text-slate-300 font-medium">
                  {isHindi ? 'कूपन:' : 'Use Code:'}
                </span>
                <span className="font-mono font-black text-emerald-300 tracking-wider text-xs">
                  {couponCode}
                </span>
                <button
                  onClick={handleCopyCoupon}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer ml-0.5"
                  title="Copy coupon code"
                >
                  {copiedCoupon ? (
                    <span className="text-emerald-400 flex items-center gap-1 text-[10px] font-bold">
                      <Check size={11} /> {isHindi ? 'कॉपी हुआ' : 'Copied!'}
                    </span>
                  ) : (
                    <Copy size={11} />
                  )}
                </button>
              </div>

              {/* Info Button */}
              <button
                onClick={() => setShowAdInfo(!showAdInfo)}
                className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
                title="Sponsorship Info"
              >
                <Info size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Ad Transparency Dropdown */}
        {showAdInfo && (
          <div className="bg-[#040e0a]/95 border-b border-emerald-900/40 px-6 py-3 text-xs text-slate-300 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <p>
              ℹ️ <strong>Shopify Verified Storefront:</strong> Powered by <strong>Bright Books &amp; Stationery (Main Road, Garhwa)</strong> in official media collaboration with Greenline News. Genuine books, fast local dispatch, and direct WhatsApp invoice checkout.
            </p>
            <a
              href={storeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:underline flex items-center gap-1 font-semibold whitespace-nowrap"
            >
              Visit Web Catalog <ExternalLink size={12} />
            </a>
          </div>
        )}

        {/* 2. Main Brand Showcase Header */}
        <div className="p-6 md:p-8 lg:p-10 border-b border-emerald-500/15">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Left: Brand Identity & Trust Badges */}
            <div className="flex items-start gap-4 sm:gap-5 max-w-3xl">
              {/* Store Avatar Logo */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shrink-0 bg-white shadow-xl shadow-emerald-950/40">
                <Image
                  src="/ads/brightbooks-logo.jpg"
                  alt="Bright Books Logo"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px] font-black uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/35 px-2.5 py-0.5 rounded-full shadow-xs">
                    <ShieldCheck size={13} className="text-emerald-400" />
                    <span>SHOPIFY VERIFIED MERCHANT</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-2.5 py-0.5 rounded-full">
                    <Star size={12} fill="currentColor" className="text-amber-400" />
                    <span>4.9 / 5.0 (1,480+ Reviews)</span>
                  </span>

                  <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold text-teal-300 bg-teal-500/10 border border-teal-500/30 px-2.5 py-0.5 rounded-full">
                    <Clock size={12} />
                    <span>{isHindi ? '2 घंटे में डिलीवरी' : '2-Hr Garhwa Delivery'}</span>
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                  Bright Books &amp; Stationery
                </h2>

                <p className="mt-1.5 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
                  {isHindi
                    ? 'गढ़वा का सबसे प्रतिष्ठित पुस्तक एवं स्टेशनरी स्टोर। NCERT सम्पूर्ण पाठ्यपुस्तकें, JPSC/UPSC गाइड, क्लासमेट कॉपियां एवं ड्राइंग किट पर विशेष छूट व तुरंत होम डिलीवरी।'
                    : 'Garhwa’s premier bookstore & student hub. Genuine NCERT textbooks, JPSC/SSC/UPSC exam resources, Classmate bulk packs & fine stationery with instant doorstep dispatch.'}
                </p>

                {/* Meta details */}
                <div className="mt-3 flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <MapPin size={13} className="text-emerald-400 shrink-0" />
                    <span>मेन रोड, टावर चौक, गढ़वा (झारखंड) - 822114</span>
                  </span>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
                    <Truck size={13} className="shrink-0" />
                    <span>{isHindi ? 'गढ़वा व पलामू प्रमंडल में सुपरफास्ट डिलीवरी' : 'Fast Delivery across Garhwa'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right: High-Converting Premium Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 shrink-0 lg:min-w-[260px]">
              <a
                href={getGeneralWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 via-emerald-400 to-teal-400 hover:from-emerald-400 hover:to-teal-300 active:scale-98 text-slate-950 font-black px-5 py-3 rounded-2xl shadow-xl shadow-emerald-500/20 flex items-center justify-between gap-3 transition-all duration-300"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-950/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={20} className="fill-slate-950 stroke-emerald-500" />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase font-extrabold tracking-widest text-emerald-950">
                      {isHindi ? '1-क्लिक व्हाट्सएप एक्सप्रेस' : '1-Click WhatsApp Express'}
                    </span>
                    <span className="text-sm font-black text-slate-950 tracking-wide font-mono">
                      {phoneDisplay}
                    </span>
                  </div>
                </div>
                <ArrowRight size={16} className="text-slate-950 group-hover:translate-x-1 transition-transform shrink-0" />
              </a>

              <div className="flex gap-2">
                <a
                  href={phoneCall}
                  className="flex-1 bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-xs py-2 px-3 rounded-xl border border-slate-700/80 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone size={13} className="text-amber-400" />
                  <span>{isHindi ? 'कॉल करें' : 'Call Store'}</span>
                </a>

                <a
                  href={storeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-white/10 hover:bg-white/15 text-white font-bold text-xs py-2 px-3 rounded-xl border border-white/15 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <ShoppingBag size={13} className="text-emerald-400" />
                  <span>{isHindi ? 'कैटलॉग' : 'Online Store'}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="p-6 md:p-8 lg:p-10 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id as CategoryTab)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/25 scale-[1.02]'
                      : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      activeTab === cat.id
                        ? 'bg-emerald-950 text-emerald-300'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Live Orders Counter */}
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 bg-amber-500/10 border border-amber-500/25 px-3 py-1.5 rounded-full">
              <Flame size={14} className="text-amber-400 animate-pulse" />
              <span>{isHindi ? 'आज 120+ छात्र व अभिभावक ऑर्डर कर चुके हैं' : '120+ Orders Dispatched Today'}</span>
            </div>
          </div>

          {/* 4. Product Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedProducts.map((prod) => {
              const currentVariant = activeVariants[prod.id] || prod.variants[0];
              return (
                <div
                  key={prod.id}
                  className="group bg-slate-900/70 hover:bg-slate-900/95 rounded-2xl p-4 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/60 flex flex-col justify-between relative"
                >
                  <div>
                    {/* Product Image Stage */}
                    <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden mb-3.5 bg-slate-950 border border-slate-800">
                      <Image
                        src={prod.img}
                        alt={prod.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-60" />

                      {/* Top Left: Discount Tag */}
                      <span className="absolute top-2.5 left-2.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md">
                        {prod.discount}
                      </span>

                      {/* Top Right: Bestseller / Badge */}
                      <span className="absolute top-2.5 right-2.5 bg-slate-950/80 backdrop-blur-md text-amber-300 text-[10px] font-bold px-2 py-0.5 rounded-md border border-slate-700/80">
                        {isHindi ? prod.badgeHi : prod.badge}
                      </span>

                      {/* Bottom Quick View Overlay Button */}
                      <button
                        onClick={() => openQuickView(prod)}
                        className="absolute bottom-2.5 right-2.5 bg-slate-950/90 hover:bg-emerald-500 hover:text-slate-950 text-white text-[11px] font-bold py-1.5 px-2.5 rounded-lg border border-slate-700 hover:border-emerald-500 flex items-center gap-1 transition-all opacity-0 group-hover:opacity-100 backdrop-blur-xs cursor-pointer"
                      >
                        <Eye size={12} />
                        <span>{isHindi ? 'त्वरित दृश्य' : 'Quick View'}</span>
                      </button>

                      {/* Star Rating Badge */}
                      <div className="absolute bottom-2.5 left-2.5 flex items-center gap-1 bg-slate-950/80 backdrop-blur-md px-2 py-0.5 rounded-md text-[10px] font-bold text-amber-300">
                        <Star size={11} fill="currentColor" />
                        <span>{prod.rating}</span>
                        <span className="text-slate-400 font-normal">({prod.reviews})</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors line-clamp-2 leading-snug">
                      {isHindi ? prod.nameHi : prod.name}
                    </h3>

                    {/* Product Short Description */}
                    <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {isHindi ? prod.descHi : prod.desc}
                    </p>

                    {/* Variant Selector Pills */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {prod.variants.slice(0, 3).map((v) => (
                        <button
                          key={v}
                          onClick={() =>
                            setActiveVariants((prev) => ({
                              ...prev,
                              [prod.id]: v,
                            }))
                          }
                          className={`text-[10px] px-2 py-0.5 rounded-md font-medium transition-colors cursor-pointer ${
                            currentVariant === v
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50'
                              : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white border border-slate-700/60'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>

                    {/* Stock Urgency Bar */}
                    <div className="mt-3 bg-slate-950/80 rounded-lg p-2 border border-slate-800/80">
                      <div className="flex items-center justify-between text-[10px] font-medium text-slate-300 mb-1">
                        <span className="flex items-center gap-1 text-amber-300 font-bold">
                          <Zap size={10} className="fill-amber-400 text-amber-400" />
                          <span>
                            {isHindi
                              ? `मात्र ${prod.stockLeft} सेट शेष!`
                              : `Only ${prod.stockLeft} sets left!`}
                          </span>
                        </span>
                        <span className="text-slate-400">
                          {isHindi
                            ? `${prod.ordersToday} आज खरीदे गए`
                            : `${prod.ordersToday} sold today`}
                        </span>
                      </div>
                      <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-amber-500 to-emerald-400 h-full rounded-full"
                          style={{ width: `${Math.max(25, 100 - prod.stockLeft * 12)}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Checkout Block */}
                  <div className="mt-4 pt-3 border-t border-slate-800/80">
                    <div className="flex items-baseline justify-between mb-3">
                      <div>
                        <span className="text-xl font-black text-white">₹{prod.price}</span>
                        <span className="text-xs text-slate-500 line-through ml-2 font-medium">
                          ₹{prod.originalPrice}
                        </span>
                      </div>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                        {isHindi ? 'बचत' : 'Save'} ₹{prod.originalPrice - prod.price}
                      </span>
                    </div>

                    <a
                      href={getWhatsAppLink(isHindi ? prod.nameHi : prod.name, currentVariant, 1, prod.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 active:scale-98 text-slate-950 font-bold text-xs py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all shadow-md group/btn"
                    >
                      <MessageCircle size={15} className="fill-slate-950 stroke-emerald-500" />
                      <span>{isHindi ? 'व्हाट्सएप पर ऑर्डर करें' : 'Buy Now (WhatsApp)'}</span>
                      <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 5. Verified Reviews Strip */}
          <div className="mt-10 bg-slate-900/50 rounded-2xl border border-slate-800/80 p-5">
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-amber-400" />
              <h4 className="text-xs sm:text-sm font-bold text-slate-200">
                {isHindi
                  ? 'गढ़वा व पलामू के विद्यार्थियों व अभिभावकों के अनुभव'
                  : 'Verified Student & Parent Feedback (Garhwa)'}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 italic">
                  &ldquo;गढ़वा में NCERT 10वीं का सेट ऑर्डर किया, 2 घंटे में घर पर डिलीवरी मिल गई। रेट भी बाजार से कम है!&rdquo;
                </p>
                <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={11} /> <span>मनोज कुमार (सहिजना, गढ़वा)</span>
                </div>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 italic">
                  &ldquo;JPSC के लेटेस्ट 2026 एडिशन की गाइड कहीं नहीं मिल रही थी। ब्राइट बुक्स ने तुरंत अरेंज करा दी।&rdquo;
                </p>
                <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={11} /> <span>प्रिया शर्मा (रंका मोड़, गढ़वा)</span>
                </div>
              </div>

              <div className="bg-slate-950/70 p-3 rounded-xl border border-slate-800/80">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-300 italic">
                  &ldquo;क्लासमेट कॉपियों का 6 का पैक बहुत किफायती पड़ा। पेपर क्वालिटी बहुत अच्छी है।&rdquo;
                </p>
                <div className="mt-2 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 size={11} /> <span>अमित सिंह (रेहला)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Guarantee & Trust Strip */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-xs">{isHindi ? '2 घंटे में एक्सप्रेस डिलीवरी' : '2-Hr Doorstep Delivery'}</p>
                <p className="text-slate-400 text-[11px]">{isHindi ? 'गढ़वा नगर व आसपास' : 'Tower Chowk & Garhwa'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-xs">{isHindi ? '100% असली व प्रमाणित' : '100% Genuine Books'}</p>
                <p className="text-slate-400 text-[11px]">{isHindi ? 'पब्लिशर सील सहित' : 'NCERT, JAC, Classmate'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
                <RefreshCw size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-xs">{isHindi ? '7-दिवसीय आसान रिप्लेसमेंट' : '7-Day Easy Exchange'}</p>
                <p className="text-slate-400 text-[11px]">{isHindi ? 'बिना किसी परेशानी के' : 'No questions asked'}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                <Building size={20} />
              </div>
              <div>
                <p className="font-bold text-white text-xs">{isHindi ? 'स्कूल व संस्थान सप्लायर' : 'Bulk & Institutional'}</p>
                <p className="text-slate-400 text-[11px]">{isHindi ? 'थोक दर पर सप्लाई' : 'Special school pricing'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 7. Interactive Quick View Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-emerald-500/40 rounded-3xl p-6 shadow-2xl text-white overflow-hidden max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded">
                  QUICK ORDER
                </span>
                <span className="text-xs text-slate-400">
                  Bright Books &amp; Stationery
                </span>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-slate-400 hover:text-white p-1 rounded-lg bg-slate-800/60 hover:bg-slate-800 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Product Visual */}
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800">
                <Image
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-3 left-3 bg-emerald-500 text-slate-950 text-xs font-black uppercase px-2.5 py-1 rounded-md">
                  {selectedProduct.discount}
                </span>
              </div>

              {/* Product Details & Purchase Form */}
              <div className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-amber-400 text-xs mb-1.5 font-bold">
                    <Star size={13} fill="currentColor" />
                    <span>{selectedProduct.rating}</span>
                    <span className="text-slate-400">({selectedProduct.reviews} reviews)</span>
                  </div>

                  <h3 className="text-xl font-black text-white leading-snug">
                    {isHindi ? selectedProduct.nameHi : selectedProduct.name}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    {isHindi ? selectedProduct.descHi : selectedProduct.desc}
                  </p>

                  {/* Price */}
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-2xl font-black text-emerald-400">
                      ₹{selectedProduct.price * modalQty}
                    </span>
                    <span className="text-sm text-slate-500 line-through">
                      ₹{selectedProduct.originalPrice * modalQty}
                    </span>
                    <span className="text-xs text-emerald-300 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">
                      Save ₹{(selectedProduct.originalPrice - selectedProduct.price) * modalQty}
                    </span>
                  </div>

                  {/* Variant Selection */}
                  <div className="mt-4">
                    <label className="block text-xs font-bold text-slate-300 mb-2">
                      {isHindi ? 'संस्करण / माध्यम चुनें:' : 'Select Variant / Edition:'}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.variants.map((v) => (
                        <button
                          key={v}
                          onClick={() => setSelectedVariant(v)}
                          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                            selectedVariant === v
                              ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                              : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quantity Counter */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-300">
                      {isHindi ? 'मात्रा (Quantity):' : 'Quantity:'}
                    </span>
                    <div className="flex items-center bg-slate-950 border border-slate-800 rounded-xl p-1 gap-3">
                      <button
                        onClick={() => setModalQty(Math.max(1, modalQty - 1))}
                        className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold text-white px-2 font-mono">
                        {modalQty}
                      </span>
                      <button
                        onClick={() => setModalQty(modalQty + 1)}
                        className="p-1 hover:bg-slate-800 rounded text-slate-300 hover:text-white transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Direct Action Button */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                  <a
                    href={getWhatsAppLink(
                      isHindi ? selectedProduct.nameHi : selectedProduct.name,
                      selectedVariant,
                      modalQty,
                      selectedProduct.price
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-emerald-500/20"
                  >
                    <MessageCircle size={18} className="fill-slate-950 stroke-emerald-500" />
                    <span>{isHindi ? 'व्हाट्सएप पर तत्काल बुक करें' : 'Confirm Order on WhatsApp'}</span>
                  </a>

                  <p className="text-[10px] text-center text-slate-400">
                    🚚 Garhwa Doorstep Delivery • Cash on Delivery / UPI Available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
