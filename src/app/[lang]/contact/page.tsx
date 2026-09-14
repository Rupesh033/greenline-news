import type { Metadata } from 'next';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isHindi = lang === 'hi';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';

  const title = isHindi
    ? 'संपर्क करें (Contact Us) | Greenline News गढ़वा ब्यूरो'
    : 'Contact Us | Greenline News Garhwa Bureau & Newsroom';

  const description = isHindi
    ? 'Greenline News के गढ़वा, झारखंड स्थित मुख्य कार्यालय और न्यूज़ रूम से संपर्क करें। न्यूज़ टिप, विज्ञापन और सुझाव भेजें।'
    : 'Contact Greenline News headquarters and newsroom bureau in Garhwa, Jharkhand. Submit news tips, editorial inquiries, and feedback.';

  return {
    title,
    description,
    keywords: [
      'contact greenline news',
      'greenline news garhwa contact number',
      'news agency in garhwa',
      'greenline news office',
      'गढ़वा न्यूज़ ऑफिस',
    ],
    alternates: {
      canonical: `${baseUrl}/${lang}/contact`,
      languages: {
        hi: `${baseUrl}/hi/contact`,
        en: `${baseUrl}/en/contact`,
      },
    },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
          {isHindi ? 'गढ़वा ब्यूरो कार्यालय' : 'Garhwa Bureau & Newsroom'}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
          {isHindi ? 'हमसे संपर्क करें' : 'Contact Us'}
        </h1>
        <p className="text-lg text-gray-600 font-serif italic">
          {isHindi
            ? 'क्या आपके पास कोई विशेष खबर, समस्या या सूचना है? हमारे न्यूज़ रूम से तुरंत संपर्क करें।'
            : 'Have a breaking story, regional issue, or news tip? Connect directly with our editorial newsroom.'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <ContactForm isHindi={isHindi} />

        {/* Contact Info & Local Bureau */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-xs border border-gray-100">
            <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900">
              {isHindi ? 'हमारा मुख्य कार्यालय' : 'Headquarters & Bureau'}
            </h2>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {isHindi ? 'मुख्यालय (गढ़वा ब्यूरो)' : 'Garhwa Newsroom & Bureau'}
                  </h3>
                  <p className="text-sm mt-1 leading-relaxed">
                    Greenline News Media Network<br />
                    Sonpurwa, Main Market Road<br />
                    Garhwa, Jharkhand - 822114, India
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {isHindi ? 'न्यूज़ डेस्क हेल्पलाइन' : 'News Desk Helpline'}
                  </h3>
                  <p className="text-sm mt-1">+91 94311 XXXXX / WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mt-1 mr-4 shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">
                    {isHindi ? 'ईमेल पता' : 'Email Address'}
                  </h3>
                  <p className="text-sm mt-1">contact@greenlinenews.com</p>
                </div>
              </div>
            </div>

            {/* Social handles */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-3">
                {isHindi ? 'सोशल मीडिया चैनल' : 'Official Channels'}
              </h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://www.youtube.com/c/GreenLineNews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-red-50 text-red-700 hover:bg-red-100 px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube (3.6L+ Subs)</span>
                </a>
                <a
                  href="https://www.facebook.com/greenlinenews/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-2 rounded-lg text-xs font-bold transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook (2.8L+ Followers)</span>
                </a>
              </div>
            </div>
          </div>

          {/* Garhwa Location Badge */}
          <div className="bg-emerald-900 text-white rounded-xl p-8 relative overflow-hidden shadow-md">
            <div className="relative z-10">
              <span className="text-xs uppercase font-bold text-emerald-300 tracking-widest block mb-2">
                {isHindi ? 'लोकल प्रेजेंस' : 'Local Presence'}
              </span>
              <h3 className="text-xl font-bold font-serif mb-2">
                {isHindi ? 'गढ़वा एवं पलामू प्रमंडल का अग्रणी मीडिया' : 'Covering Garhwa & Palamu Division'}
              </h3>
              <p className="text-emerald-100/80 text-sm leading-relaxed">
                {isHindi
                  ? 'सोनपुरवा, मझिआंव, रंका, नगर उंटारी, भवनाथपुर, धुरकी, डंडा और विशुनपुरा से हमारे स्थानीय संवाददाता लगातार सक्रिय हैं।'
                  : 'Active reporters situated across Sonpurwa, Majhiaon, Ranka, Nagar Untari, Bhawanathpur, and rural Jharkhand.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
