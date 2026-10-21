'use client';

import React, { useEffect, useState } from 'react';
import { 
  Megaphone, 
  CheckCircle, 
  XCircle, 
  RefreshCw, 
  ExternalLink, 
  ShoppingBag, 
  Code, 
  Layers, 
  Sparkles,
  ShieldCheck,
  Power
} from 'lucide-react';

interface AdSettings {
  showBrightBooksAd: boolean;
  showWebsiteDesignerAd: boolean;
  showDualAdBanner: boolean;
  showStationeryPopup: boolean;
  lastUpdated?: string;
  updatedBy?: string;
}

export default function AdminAdsPage() {
  const [settings, setSettings] = useState<AdSettings>({
    showBrightBooksAd: false,
    showWebsiteDesignerAd: false,
    showDualAdBanner: false,
    showStationeryPopup: false
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    fetchSettings();
  }, []);

  async function fetchSettings() {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/ads-settings');
      const data = await res.json();
      if (data?.settings) {
        setSettings(data.settings);
      }
    } catch (e: any) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function toggleSetting(key: keyof AdSettings) {
    const updated = { ...settings, [key]: !settings[key] };
    setSettings(updated);
    setSaving(true);
    try {
      const res = await fetch('/api/admin/ads-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      const data = await res.json();
      if (data.success) {
        setMsg(`✅ ${key} स्थिति सफलतापूर्वक अपडेट हुई!`);
        setTimeout(() => setMsg(''), 3000);
      }
    } catch (err: any) {
      alert('Error updating setting: ' + err.message);
      fetchSettings();
    } finally {
      setSaving(false);
    }
  }

  async function setAll(value: boolean) {
    const updated = {
      showBrightBooksAd: value,
      showWebsiteDesignerAd: value,
      showDualAdBanner: value,
      showStationeryPopup: value
    };
    setSettings(s => ({ ...s, ...updated }));
    setSaving(true);
    try {
      const res = await fetch('/api/admin/ads-settings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updated)
      });
      const data = await res.json();
      if (data.success) {
        setMsg(value ? '✅ सभी विज्ञापन चालू (SHOW) कर दिए गए हैं!' : '✅ सभी विज्ञापन हटा (HIDE / REMOVED) दिए गए हैं!');
        setTimeout(() => setMsg(''), 3000);
      }
    } catch (err: any) {
      alert('Error: ' + err.message);
      fetchSettings();
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-gray-200">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Megaphone className="w-7 h-7 text-emerald-600" />
            <span>विज्ञापन एवं प्रायोजक प्रबंधन (Ads & Banners Manager)</span>
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            रूपेश विश्वकर्मा और ब्राइट बुक्स के विज्ञापनों को लाइव साइट पर चालू या बंद करें
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setAll(false)}
            disabled={saving}
            className="bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
          >
            🚫 सभी विज्ञापन छुपाएं (Hide All)
          </button>
          <button
            onClick={() => setAll(true)}
            disabled={saving}
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors disabled:opacity-50"
          >
            ✅ सभी विज्ञापन चालू करें (Show All)
          </button>
        </div>
      </div>

      {msg && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{msg}</span>
        </div>
      )}

      {/* Info Notice */}
      <div className="bg-slate-50 border border-slate-200 p-4 rounded-xl flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
        <div className="text-sm text-slate-700 leading-relaxed">
          <p className="font-semibold text-slate-900">
            विज्ञापनों की वर्तमान स्थिति: {settings.showBrightBooksAd || settings.showWebsiteDesignerAd || settings.showDualAdBanner || settings.showStationeryPopup ? 'कुछ विज्ञापन सक्रिय हैं' : 'सभी विज्ञापन सफलतापूर्वक हटा दिए गए हैं (Hidden)'}
          </p>
          <p className="text-slate-500 text-xs mt-0.5">
            जब भी आपको विज्ञापनों को पुनः वेबसाइट पर दिखाना हो, नीचे दिए गए स्विच बटन पर क्लिक करें। बदलाव तुरंत लागू होते हैं।
          </p>
        </div>
      </div>

      {/* Grid of 4 Control Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* CARD 1: Bright Books Ad */}
        <div className={`bg-white rounded-xl border p-5 shadow-xs flex flex-col justify-between transition-all ${settings.showBrightBooksAd ? 'border-emerald-500 ring-1 ring-emerald-500' : 'border-gray-200'}`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <ShoppingBag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">ब्राइट बुक्स एवं स्टेशनरी</h3>
                  <p className="text-xs text-gray-500">brightbookstore.in • 30% छूट ऑफर</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${settings.showBrightBooksAd ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                {settings.showBrightBooksAd ? '🟢 LIVE' : '🔴 HIDDEN'}
              </span>
            </div>

            <p className="text-xs text-gray-600 my-4 leading-relaxed">
              होमपेज, साइडबार, कैटेगरी और आर्टिकल्स में ब्राइट बुक्स की कॉपियों, लग्जरी पेन व आर्ट किट्स का ई-कॉमर्स बैनर।
            </p>
          </div>

          <button
            onClick={() => toggleSetting('showBrightBooksAd')}
            disabled={saving}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${settings.showBrightBooksAd ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200' : 'bg-[#008060] text-white hover:bg-[#006e52]'}`}
          >
            {settings.showBrightBooksAd ? '🚫 विज्ञापन बंद करें (Hide Ad)' : '✅ विज्ञापन चालू करें (Show Ad)'}
          </button>
        </div>

        {/* CARD 2: Rupesh Vishwakarma Ad */}
        <div className={`bg-white rounded-xl border p-5 shadow-xs flex flex-col justify-between transition-all ${settings.showWebsiteDesignerAd ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-200'}`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700">
                  <Code className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">रूपेश विश्वकर्मा (Developer)</h3>
                  <p className="text-xs text-gray-500">rupeshvish.com • 3 Days Delivery</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${settings.showWebsiteDesignerAd ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                {settings.showWebsiteDesignerAd ? '🟢 LIVE' : '🔴 HIDDEN'}
              </span>
            </div>

            <p className="text-xs text-gray-600 my-4 leading-relaxed">
              वेबसाइट, ई-कॉमर्स स्टोर, बिलिंग सॉफ्टवेयर एक्सपर्ट रूपेश विश्वकर्मा का पोर्टफोलियो व WhatsApp परामर्श विज्ञापन।
            </p>
          </div>

          <button
            onClick={() => toggleSetting('showWebsiteDesignerAd')}
            disabled={saving}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${settings.showWebsiteDesignerAd ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200' : 'bg-[#1a73e8] text-white hover:bg-[#1557b0]'}`}
          >
            {settings.showWebsiteDesignerAd ? '🚫 विज्ञापन बंद करें (Hide Ad)' : '✅ विज्ञापन चालू करें (Show Ad)'}
          </button>
        </div>

        {/* CARD 3: Dual Showcase Banner */}
        <div className={`bg-white rounded-xl border p-5 shadow-xs flex flex-col justify-between transition-all ${settings.showDualAdBanner ? 'border-purple-500 ring-1 ring-purple-500' : 'border-gray-200'}`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-700">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">डुअल प्रायोजक शोकेस ग्रिड</h3>
                  <p className="text-xs text-gray-500">50-50 Partner Showcase</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${settings.showDualAdBanner ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                {settings.showDualAdBanner ? '🟢 LIVE' : '🔴 HIDDEN'}
              </span>
            </div>

            <p className="text-xs text-gray-600 my-4 leading-relaxed">
              होमपेज पर हीरो सेक्शन के नीचे और आर्टिकल्स के बीच दोनों प्रायोजकों का संयुक्त बड़ा 50/50 शोकेस ग्रिड।
            </p>
          </div>

          <button
            onClick={() => toggleSetting('showDualAdBanner')}
            disabled={saving}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${settings.showDualAdBanner ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200' : 'bg-purple-600 text-white hover:bg-purple-700]'}`}
          >
            {settings.showDualAdBanner ? '🚫 शोकेस बंद करें (Hide Banner)' : '✅ शोकेस चालू करें (Show Banner)'}
          </button>
        </div>

        {/* CARD 4: Stationery Promo Deal Popup */}
        <div className={`bg-white rounded-xl border p-5 shadow-xs flex flex-col justify-between transition-all ${settings.showStationeryPopup ? 'border-amber-500 ring-1 ring-amber-500' : 'border-gray-200'}`}>
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-base">स्टेशनरी 30% छूट पॉपअप</h3>
                  <p className="text-xs text-gray-500">Floating Deal Dialog & Pill</p>
                </div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${settings.showStationeryPopup ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                {settings.showStationeryPopup ? '🟢 LIVE' : '🔴 HIDDEN'}
              </span>
            </div>

            <p className="text-xs text-gray-600 my-4 leading-relaxed">
              साइट विज़िटर्स के लिए नीचे आने वाला इंटरेक्टिव 'BB30OFF' कूपन कोड, फ्री होम डिलीवरी और फ्लोटिंग डील पिल।
            </p>
          </div>

          <button
            onClick={() => toggleSetting('showStationeryPopup')}
            disabled={saving}
            className={`w-full py-2.5 px-4 rounded-lg font-bold text-xs sm:text-sm transition-all ${settings.showStationeryPopup ? 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
          >
            {settings.showStationeryPopup ? '🚫 पॉपअप बंद करें (Hide Popup)' : '✅ पॉपअप चालू करें (Show Popup)'}
          </button>
        </div>
      </div>
    </div>
  );
}
