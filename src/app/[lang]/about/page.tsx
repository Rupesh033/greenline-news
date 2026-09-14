import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, CheckCircle2 } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isHindi = lang === 'hi';
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://greenlinenews.com';

  const title = isHindi
    ? 'हमारे बारे में (About Us) - Greenline News | गढ़वा की प्रमुख न्यूज़ एजेंसी'
    : 'About Us - Greenline News | Premier News Agency in Garhwa, Jharkhand';

  const description = isHindi
    ? 'Greenline News (ग्रीनलाइन न्यूज़) गढ़वा, झारखंड की अग्रणी डिजिटल न्यूज़ एजेंसी है। 3.6 लाख+ यूट्यूब सब्सक्राइबर्स के साथ हम ज़मीनी रिपोर्टिंग, गढ़वा समाचार और निष्पक्ष पत्रकारिता करते हैं।'
    : 'Learn about Greenline News, the premier digital news agency and media network in Garhwa, Jharkhand. 3.6L+ YouTube community, ground journalism, and unbiased news.';

  return {
    title,
    description,
    keywords: [
      'about greenline news',
      'news agency in garhwa',
      'greenline news garhwa',
      'green line news',
      'garhwa news',
      'गढ़वा न्यूज़ एजेंसी',
      'ग्रीनलाइन न्यूज',
    ],
    alternates: {
      canonical: `${baseUrl}/${lang}/about`,
      languages: {
        hi: `${baseUrl}/hi/about`,
        en: `${baseUrl}/en/about`,
      },
    },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isHindi = lang === 'hi';

  return (
    <div className="container mx-auto px-4 max-w-4xl py-14">
      <div className="text-center mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-primary bg-emerald-50 px-3 py-1 rounded-full inline-block mb-3">
          {isHindi ? 'विश्वसनीय न्यूज़ एजेंसी' : 'Leading News Agency'}
        </span>
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4 text-gray-900">
          {isHindi ? 'Greenline News के बारे में' : 'About Greenline News'}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif italic">
          &ldquo;{isHindi ? 'हर पंक्ति में सच्चाई | हर खबर सबसे पहले' : 'Truth in Every Line | Credible, Ground-Level Journalism'}&rdquo;
        </p>
      </div>

      {/* Authority Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-emerald-800 font-serif">3.6L+</div>
          <div className="text-xs text-emerald-900 font-semibold mt-1">
            {isHindi ? 'यूट्यूब सब्सक्राइबर्स' : 'YouTube Subscribers'}
          </div>
        </div>
        <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-emerald-800 font-serif">2.8L+</div>
          <div className="text-xs text-emerald-900 font-semibold mt-1">
            {isHindi ? 'फेसबुक फॉलोअर्स' : 'Facebook Community'}
          </div>
        </div>
        <div className="col-span-2 md:col-span-1 bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-center">
          <div className="text-3xl font-black text-emerald-800 font-serif">Garhwa</div>
          <div className="text-xs text-emerald-900 font-semibold mt-1">
            {isHindi ? 'मुख्यालय (झारखंड)' : 'Headquarters (Jharkhand)'}
          </div>
        </div>
      </div>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
        <p className="text-lg leading-relaxed">
          {isHindi
            ? 'Greenline News (ग्रीनलाइन न्यूज़) झारखंड के गढ़वा जिले से संचालित होने वाली एक प्रमुख और विश्वसनीय डिजिटल न्यूज़ एजेंसी है। हमारी स्थापना आम जनता की आवाज़ को प्रमुखता से उठाने, प्रशासनिक जवाबदेही तय करने और ज़मीनी हकीकत को बिना किसी पक्षपात के सामने लाने के उद्देश्य से की गई थी।'
            : 'Greenline News is a prominent independent digital news agency headquartered in Garhwa, Jharkhand. Established with the mission of amplifying grassroots voices, fostering administrative accountability, and delivering accurate information without sensationalism, we have grown into one of Jharkhand’s most trusted news networks.'}
        </p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-10 mb-4 flex items-center gap-2">
          <Award className="text-primary" />
          {isHindi ? 'हमारा मिशन और विज़न' : 'Our Mission & Editorial Integrity'}
        </h2>
        <p>
          {isHindi
            ? 'हमारा मुख्य ध्येय गढ़वा, पलामू, राँची सहित पूरे झारखंड और देश-विदेश की महत्वपूर्ण घटनाओं को सीधे आप तक पहुंचाना है। हम स्थानीय मुद्दों, विकास परियोजनाओं, जनसमस्याओं, ग्रामीण विकास और पर्यावरण संरक्षण को अपनी रिपोर्टिंग के केंद्र में रखते हैं।'
            : 'Our core focus spans Garhwa, Palamu, Ranchi, and the entire state of Jharkhand. We bring unadulterated ground reports on civic infrastructure, governance, rural development, legal transparency, and environmental protection.'}
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-6 my-8 shadow-xs">
          <h3 className="text-xl font-bold font-serif mb-4 text-gray-900">
            {isHindi ? 'हमारी मुख्य विशेषताएं' : 'Why Readers Trust Greenline News'}
          </h3>
          <ul className="space-y-3 text-base">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={18} />
              <span>
                <strong>{isHindi ? 'ज़मीनी रिपोर्टिंग' : 'Grassroots Ground Reporting'}:</strong>{' '}
                {isHindi
                  ? 'सोनपुरवा, मझिआंव, रंका, नगर उंटारी और सुदूर ग्रामीण क्षेत्रों से सीधी कवरेज।'
                  : 'Direct, on-location reporting from Garhwa, Sonpurwa, Majhiaon, Ranka, and rural Jharkhand.'}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={18} />
              <span>
                <strong>{isHindi ? 'सत्यापित और निष्पक्ष तथ्य' : 'Verified Facts'}:</strong>{' '}
                {isHindi
                  ? 'बिना किसी राजनीतिक या व्यावसायिक दबाव के निष्पक्ष समाचार।'
                  : 'Independent news verified before publishing, free from political pressure.'}
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="text-emerald-600 shrink-0 mt-1" size={18} />
              <span>
                <strong>{isHindi ? 'विशाल डिजिटल समुदाय' : 'Massive Digital Reach'}:</strong>{' '}
                {isHindi
                  ? 'लाखों दर्शकों का भरोसा और सोशल मीडिया पर त्वरित ब्रेकिंग अपडेट्स।'
                  : 'Over 6 Lakh combined followers across YouTube and Facebook seeking timely updates.'}
              </span>
            </li>
          </ul>
        </div>

        {/* Social Connection */}
        <div className="bg-gray-900 text-white p-8 rounded-xl my-8">
          <h3 className="text-2xl font-bold font-serif mb-2 text-white">
            {isHindi ? 'हमारे आधिकारिक चैनलों से जुड़ें' : 'Connect With Our Newsroom'}
          </h3>
          <p className="text-gray-300 text-sm mb-6">
            {isHindi
              ? 'ताज़ा वीडियो बुलेटिन और ग्राउंड रिपोर्ट देखने के लिए हमारे यूट्यूब और फेसबुक चैनलों को सब्सक्राइब करें।'
              : 'Stay up to date with live video broadcasts and field reporting by subscribing to our verified channels.'}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.youtube.com/c/GreenLineNews"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              <span>YouTube Channel (3.6L+ Subs)</span>
            </a>
            <a
              href="https://www.facebook.com/greenlinenews/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 px-5 rounded-lg flex items-center gap-2 transition-colors text-sm"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <span>Facebook Page (2.8L+ Followers)</span>
            </a>
          </div>
        </div>

        <div className="bg-secondary p-8 rounded-xl mt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold font-serif text-gray-900 mb-1">
              {isHindi ? 'कोई न्यूज़ टिप या सूचना साझा करना चाहते हैं?' : 'Have a News Tip or Story?'}
            </h3>
            <p className="text-sm text-gray-600">
              {isHindi
                ? 'हमारे गढ़वा ब्यूरो से संपर्क करें और जनहित के मुद्दे उठाएं।'
                : 'Reach out to our Garhwa newsroom desk directly.'}
            </p>
          </div>
          <Link
            href={`/${lang}/contact`}
            className="bg-primary hover:bg-green-700 text-white font-bold py-2.5 px-6 rounded-lg transition-colors shrink-0 text-sm"
          >
            {isHindi ? 'संपर्क करें' : 'Contact Newsroom'}
          </Link>
        </div>
      </div>
    </div>
  );
}
