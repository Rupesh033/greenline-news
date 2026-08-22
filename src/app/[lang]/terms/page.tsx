export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 max-w-3xl py-16">
      <h1 className="text-4xl font-bold font-serif mb-8 text-center">Terms & Conditions</h1>
      
      <div className="prose prose-lg max-w-none text-gray-700">
        <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>

        <p>Welcome to Greenline News. By accessing or using our website, you agree to be bound by these Terms and Conditions.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">1. Use of Content</h2>
        <p>All content on Greenline News, including text, graphics, logos, and images, is the property of Greenline News and protected by copyright laws. You may not reproduce, distribute, or modify our content without explicit written permission.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">2. User Conduct</h2>
        <p>When using our site, you agree not to:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Post any unlawful, defamatory, or obscene content in our comments sections.</li>
          <li>Attempt to gain unauthorized access to our servers or network.</li>
          <li>Use our site for any commercial solicitation purposes.</li>
        </ul>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">3. Disclaimer of Warranties</h2>
        <p>The information provided on Greenline News is for general informational purposes only. While we strive for accuracy, we make no warranties about the completeness, reliability, or accuracy of this information.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">4. Limitation of Liability</h2>
        <p>Greenline News shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of or inability to use our website.</p>

        <h2 className="text-2xl font-bold font-serif text-gray-900 mt-8 mb-4">5. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Your continued use of the site after any changes indicates your acceptance of the new terms.</p>
      </div>
    </div>
  );
}
