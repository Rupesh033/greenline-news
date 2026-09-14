import React from 'react';
import Image from 'next/image';
import { BookOpen, Sparkles, MessageCircle, Phone, Check, ShoppingBag, ArrowRight } from 'lucide-react';

export default function BrightBooksBanner({ lang = 'hi' }: { lang?: string }) {
  const isHindi = lang === 'hi';

  const products = [
    {
      name: isHindi ? 'NCERT व बोर्ड बुक्स (कक्षा 1-12)' : 'NCERT & Board Textbooks',
      offer: '15-20% OFF',
      desc: isHindi ? 'CBSE एवं JAC बोर्ड की सभी पुस्तकें' : 'CBSE & State Board Curricula',
      img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: isHindi ? 'प्रतियोगिता परीक्षा पुस्तकें' : 'Competition Exam Books',
      offer: 'Best Price',
      desc: isHindi ? 'JPSC, JSSC, UPSC, SSC, Railway, NEET' : 'Competitive Exam Reference Guides',
      img: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: isHindi ? 'क्लासमेट कॉपियां व रजिस्टर्स' : 'Classmate Notebooks & Registers',
      offer: 'Buy 5 Get 1',
      desc: isHindi ? 'प्रीमियम क्वालिटी पेज, स्पाइरल पैड्स' : 'Long Registers, Practical Notebooks',
      img: 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?auto=format&fit=crop&q=80&w=400',
    },
    {
      name: isHindi ? 'आर्ट, पेंटिंग व स्टेशनरी किट्स' : 'Art, Craft & Drawing Kits',
      offer: 'Flat 20% OFF',
      desc: isHindi ? 'Camlin, Doms, Faber-Castell कलर्स' : 'Paints, Brushes & Architecture Kits',
      img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=400',
    },
  ];

  return (
    <div className="container mx-auto px-4 max-w-7xl my-8">
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400 bg-linear-to-r from-amber-500 via-amber-600 to-amber-700 text-white shadow-xl p-6 md:p-8">
        {/* Decorative background glow */}
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none"></div>
        <div className="absolute -left-16 -bottom-16 w-64 h-64 rounded-full bg-black/10 blur-2xl pointer-events-none"></div>

        {/* Top Header Banner */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-amber-400/40 relative z-10">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white text-amber-600 rounded-2xl shadow-md">
              <BookOpen size={28} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-widest bg-black/30 px-2.5 py-0.5 rounded-full border border-white/20">
                  FEATURED SPONSOR / विशेष प्रायोजक
                </span>
                <span className="text-xs font-bold text-amber-200 flex items-center gap-1">
                  <Sparkles size={13} /> {isHindi ? 'गढ़वा का सबसे बड़ा पुस्तक भंडार' : 'Premier Bookstore in Garhwa'}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight mt-1">
                Bright Books &amp; Stationery
              </h3>
              <p className="text-sm font-semibold text-amber-100">
                ब्राइट बुक्स एवं स्टेशनरी — मेन रोड, टावर चौक के पास, गढ़वा (झारखंड)
              </p>
            </div>
          </div>

          {/* Quick CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://wa.me/919999999999?text=Hello%20Bright%20Books,%20I%20want%20to%20enquire%20about%20books%20and%20stationery%20from%20Greenline%20News"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2 transition-transform hover:scale-105"
            >
              <MessageCircle size={16} />
              <span>{isHindi ? 'WhatsApp पर ऑर्डर करें' : 'Order on WhatsApp'}</span>
            </a>
            <a
              href="tel:+919999999999"
              className="bg-white hover:bg-amber-50 text-gray-900 font-bold text-sm px-5 py-2.5 rounded-xl shadow-md flex items-center gap-2 transition-transform hover:scale-105"
            >
              <Phone size={16} className="text-amber-600" />
              <span>{isHindi ? 'स्टोर पर कॉल करें' : 'Call Store'}</span>
            </a>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-lg font-bold text-amber-100 flex items-center gap-2">
              <ShoppingBag size={18} />
              <span>{isHindi ? 'लोकप्रिय प्रोडक्ट्स एवं विशेष छूट:' : 'Featured Products & Exclusive Offers:'}</span>
            </h4>
            <span className="text-xs bg-amber-400 text-gray-950 font-black px-3 py-1 rounded-full shadow-xs">
              🔥 Flat 15% - 25% छूट उपलब्ध
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {products.map((prod, idx) => (
              <div
                key={idx}
                className="bg-white/95 text-gray-900 rounded-2xl p-3.5 shadow-md border border-amber-200/60 flex flex-col justify-between hover:shadow-lg transition-shadow group"
              >
                <div className="relative h-28 w-full rounded-xl overflow-hidden mb-3 border border-gray-100">
                  <Image
                    src={prod.img}
                    alt={prod.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2 bg-amber-500 text-white text-[10px] font-black px-2 py-0.5 rounded-md shadow-xs">
                    {prod.offer}
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-sm text-gray-900 leading-snug line-clamp-1">
                    {prod.name}
                  </h5>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-1">
                    {prod.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 flex items-center gap-1">
                    <Check size={13} /> {isHindi ? 'स्टॉक उपलब्ध' : 'In Stock'}
                  </span>
                  <a
                    href={`https://wa.me/919999999999?text=Hello%20Bright%20Books,%20I%20want%20to%20buy%20${encodeURIComponent(prod.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-0.5"
                  >
                    <span>पूछताछ</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer info note */}
        <div className="mt-6 pt-4 border-t border-amber-400/30 flex flex-col sm:flex-row justify-between items-center text-xs text-amber-100 gap-2 relative z-10">
          <p>
            🎒 <strong>अतिरिक्त सुविधाएं:</strong> स्कूल बैग, ज्योमेट्री बॉक्स, वाटर बॉटल, JK A4 ज़ेरॉक्स पेपर और संपूर्ण ऑफिस स्टेशनरी एक ही छत के नीचे!
          </p>
          <p className="font-semibold text-white bg-black/20 px-3 py-1 rounded-full whitespace-nowrap">
            📞 होम डिलीवरी एवं बल्क ऑर्डर हेतु संपर्क करें
          </p>
        </div>
      </div>
    </div>
  );
}
