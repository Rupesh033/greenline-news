import React from 'react';
import Image from 'next/image';
import { BookOpen, ShoppingBag, Sparkles, Phone, MessageCircle, CheckCircle2, Bookmark } from 'lucide-react';

interface AdPlaceholderProps {
  width: number;
  height: number;
  className?: string;
  lang?: string;
}

export default function AdPlaceholder({ width, height, className = "", lang = "hi" }: AdPlaceholderProps) {
  const isHindi = lang === 'hi';

  // 300x600 Skyscraper Variant
  if (height >= 500) {
    return (
      <div
        className={`w-full max-w-[320px] rounded-2xl overflow-hidden border-2 border-amber-400 bg-linear-to-b from-amber-500/10 via-white to-amber-50/50 shadow-md flex flex-col justify-between p-4 relative ${className}`}
        style={{ minHeight: `${height}px` }}
      >
        {/* Sponsored Ribbon */}
        <div className="flex justify-between items-center pb-2 border-b border-amber-200">
          <span className="text-[10px] uppercase font-bold tracking-widest bg-amber-500 text-white px-2 py-0.5 rounded">
            SPONSORED / प्रायोजित
          </span>
          <span className="text-[11px] font-semibold text-amber-900 flex items-center gap-1">
            <Sparkles size={12} className="text-amber-600" /> गढ़वा का अग्रणी बुक स्टोर
          </span>
        </div>

        {/* Brand Header */}
        <div className="pt-3 text-center">
          <div className="inline-flex p-2 rounded-xl bg-amber-500 text-white shadow-xs mb-2">
            <BookOpen size={24} />
          </div>
          <h4 className="text-xl font-black text-gray-900 leading-tight">
            Bright Books &amp; Stationery
          </h4>
          <p className="text-xs font-bold text-amber-800 mt-0.5">
            ब्राइट बुक्स एवं स्टेशनरी भंडार
          </p>
          <p className="text-[11px] text-gray-600 mt-1">
            सभी स्कूल, कॉलेज, प्रतियोगिता परीक्षा की किताबें एवं प्रीमियम स्टेशनरी
          </p>
        </div>

        {/* Banner Image */}
        <div className="relative w-full h-32 my-3 rounded-xl overflow-hidden shadow-xs border border-amber-200">
          <Image
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600"
            alt="Bright Books and Stationery Store"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent flex items-end p-2.5">
            <span className="text-xs font-black text-amber-300 bg-black/60 px-2 py-0.5 rounded backdrop-blur-xs">
              🎉 Flat 15% - 25% OFF
            </span>
          </div>
        </div>

        {/* Products Showcase */}
        <div className="space-y-2 text-left my-2 bg-white/80 p-3 rounded-xl border border-amber-100 shadow-xs">
          <div className="text-xs font-bold text-gray-900 flex items-center gap-1 mb-1">
            <Bookmark size={13} className="text-amber-600" /> प्रमुख उपलब्ध प्रोडक्ट्स:
          </div>
          <ul className="text-xs text-gray-700 space-y-1.5">
            <li className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
              <span><strong>NCERT Books:</strong> Class 1 to 12 (Hindi &amp; English)</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
              <span><strong>Competition:</strong> JPSC, JSSC, UPSC, SSC, Railway</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
              <span><strong>Notebooks:</strong> Classmate, Spiral &amp; Registers</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
              <span><strong>Pens &amp; Art:</strong> Parker, Camlin, Doms, Acrylic Kits</span>
            </li>
            <li className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-600 shrink-0" />
              <span><strong>Office:</strong> JK Copier A4 Paper, Files &amp; Calculators</span>
            </li>
          </ul>
        </div>

        {/* Location & CTA */}
        <div className="pt-2">
          <p className="text-[11px] text-center text-gray-600 mb-3">
            📍 मुख्य बाजार, टावर चौक के पास, गढ़वा (झारखंड)
          </p>

          <div className="grid grid-cols-2 gap-2">
            <a
              href="https://wa.me/919999999999?text=Hello%20Bright%20Books,%20I%20want%20to%20order%20books%20and%20stationery"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-2 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-xs"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
            <a
              href="tel:+919999999999"
              className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-xs py-2.5 px-2 rounded-xl flex items-center justify-center gap-1 transition-colors shadow-xs"
            >
              <Phone size={14} /> Call Store
            </a>
          </div>
        </div>
      </div>
    );
  }

  // 300x250 or 300x300 Medium Rectangle Variant
  return (
    <div
      className={`w-full max-w-[320px] rounded-2xl overflow-hidden border-2 border-amber-400 bg-linear-to-br from-amber-50 via-white to-amber-100/60 p-4 shadow-md flex flex-col justify-between relative ${className}`}
      style={{ minHeight: `${height}px` }}
    >
      {/* Header Badge */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-[9px] uppercase font-bold tracking-wider bg-amber-500 text-white px-2 py-0.5 rounded">
          SPONSORED
        </span>
        <span className="text-[11px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
          20% तक की छूट
        </span>
      </div>

      {/* Brand Title */}
      <div className="flex items-center gap-2.5 mb-2">
        <div className="p-2 rounded-xl bg-amber-500 text-white shadow-xs shrink-0">
          <BookOpen size={20} />
        </div>
        <div>
          <h4 className="text-base font-black text-gray-900 leading-tight">
            Bright Books &amp; Stationery
          </h4>
          <p className="text-[11px] font-semibold text-amber-800">
            ब्राइट बुक्स एवं स्टेशनरी, गढ़वा
          </p>
        </div>
      </div>

      {/* Product Highlight Badges */}
      <div className="grid grid-cols-2 gap-1.5 text-[11px] my-2 font-medium text-gray-800">
        <div className="bg-white/90 p-1.5 rounded-lg border border-amber-200 flex items-center gap-1">
          <span>📚</span> NCERT Books (1-12)
        </div>
        <div className="bg-white/90 p-1.5 rounded-lg border border-amber-200 flex items-center gap-1">
          <span>📓</span> Classmate Registers
        </div>
        <div className="bg-white/90 p-1.5 rounded-lg border border-amber-200 flex items-center gap-1">
          <span>🎯</span> Competition Books
        </div>
        <div className="bg-white/90 p-1.5 rounded-lg border border-amber-200 flex items-center gap-1">
          <span>🎨</span> Art &amp; Craft Supplies
        </div>
      </div>

      {/* Address & Actions */}
      <div className="mt-2 pt-2 border-t border-amber-200/80">
        <div className="flex items-center justify-between text-[11px] text-gray-600 mb-2">
          <span>📍 टावर चौक, मुख्य बाजार, गढ़वा</span>
        </div>
        <div className="flex gap-2">
          <a
            href="https://wa.me/919999999999?text=Hello%20Bright%20Books,%20I%20want%20to%20order%20stationery"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2 px-2 rounded-xl flex items-center justify-center gap-1 transition-colors"
          >
            <MessageCircle size={13} /> WhatsApp ऑर्डर
          </a>
          <a
            href="tel:+919999999999"
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold text-xs py-2 px-3 rounded-xl flex items-center justify-center gap-1 transition-colors"
          >
            <Phone size={13} /> कॉल
          </a>
        </div>
      </div>
    </div>
  );
}
