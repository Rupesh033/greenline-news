'use client';
import { useState } from 'react';

export default function ContactForm({ isHindi }: { isHindi: boolean }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-xs border border-gray-100">
      <h2 className="text-2xl font-bold font-serif mb-6 text-gray-900">
        {isHindi ? 'हमें संदेश भेजें' : 'Send Us a Message'}
      </h2>

      {submitted ? (
        <div className="bg-emerald-50 text-emerald-800 p-6 rounded-lg text-center font-medium border border-emerald-200">
          {isHindi
            ? 'धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। हमारी टीम जल्द ही आपसे संपर्क करेगी।'
            : 'Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.'}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isHindi ? 'पहला नाम' : 'First Name'}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {isHindi ? 'अंतिम नाम' : 'Last Name'}
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isHindi ? 'ईमेल पता' : 'Email Address'}
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isHindi ? 'विषय / न्यूज़ टिप' : 'Subject / News Tip'}
            </label>
            <input
              type="text"
              required
              placeholder={isHindi ? 'उदा. गढ़वा समाचार टिप' : 'e.g. Garhwa News Tip'}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isHindi ? 'संदेश का विवरण' : 'Message'}
            </label>
            <textarea
              required
              rows={5}
              placeholder={
                isHindi
                  ? 'अपनी खबर, सूचना या प्रश्न यहाँ लिखें...'
                  : 'Write your news tip, feedback or inquiry here...'
              }
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-sm"
          >
            {isHindi ? 'संदेश भेजें' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
}
