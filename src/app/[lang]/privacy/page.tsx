export default function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-16">
      <h1 className="text-4xl font-bold font-serif mb-8 text-center">Privacy Policy</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <p>At Greenline News, we take your privacy seriously. This Privacy Policy outlines how we collect, use, and protect your personal information.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
        <p>We may collect personal information such as your name, email address, and demographic data when you subscribe to our newsletter, register for an account, or contact us. We also collect non-personal data automatically via cookies, such as your IP address, browser type, and browsing behavior on our site.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
        <p>Your information is used to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Provide, operate, and maintain our website.</li>
          <li>Send you newsletters, updates, and promotional materials (with your consent).</li>
          <li>Improve our website content and user experience.</li>
          <li>Respond to your comments or inquiries.</li>
        </ul>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">3. Data Security</h2>
        <p>We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet or method of electronic storage is 100% secure.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">4. Third-Party Links</h2>
        <p>Our website may contain links to third-party sites. We are not responsible for the privacy practices or content of these third-party websites.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at privacy@greenlinenews.com.</p>
      </div>
    </div>
  );
}
