'use client';
import { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-12 md:py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-6">Contact Us</h1>
        <p className="text-xl text-gray-600">We'd love to hear from you. Whether you have a news tip, a question about our reporting, or a partnership inquiry, reach out using the form below.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold font-serif mb-6">Send us a message</h2>
          
          {submitted ? (
            <div className="bg-secondary text-primary p-6 rounded-lg text-center font-medium border border-green-200">
              Thank you for reaching out! Your message has been sent successfully. We will get back to you shortly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input type="text" required className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Info & Map */}
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold font-serif mb-6">Our Office</h2>
            <div className="space-y-6 text-gray-600">
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Headquarters</h3>
                  <p>123 Greenline Avenue<br />Media District, NY 10001<br />United States</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Phone</h3>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900">Email</h3>
                  <p>contact@greenlinenews.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl overflow-hidden h-64 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800')" }}></div>
            <div className="relative z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded font-bold text-gray-700 shadow-md">
              Google Maps Placeholder
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
