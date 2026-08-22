'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold font-serif text-gray-900">Create an Account</h2>
          <p className="text-gray-500 mt-2">Join Greenline News to customize your feed and save articles.</p>
        </div>

        {submitted ? (
          <div className="bg-secondary text-primary p-4 rounded text-center border border-green-200">
            Registration simulation successful! (This is a demo)
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input 
                  type="text" 
                  required 
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input 
                  type="text" 
                  required 
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                type="email" 
                required 
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                type="password" 
                required 
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" 
              />
            </div>
            
            <div className="flex items-center">
              <input id="agree-terms" type="checkbox" required className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded" />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-900">
                I agree to the <Link href="/terms" className="text-primary hover:underline">Terms & Conditions</Link>
              </label>
            </div>

            <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors">
              Create Account
            </button>
          </form>
        )}

        <div className="mt-8 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link href="/login" className="font-medium text-primary hover:text-green-700">
            Sign In here
          </Link>
        </div>
      </div>
    </div>
  );
}
