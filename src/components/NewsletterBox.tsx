'use client'

import { useState } from 'react'
import { Mail } from 'lucide-react'

type NewsletterBoxProps = {
  mini?: boolean
  dict?: any
}

export default function NewsletterBox({ mini = false, dict }: NewsletterBoxProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
    }
  }

  if (!dict) return null;

  if (mini) {
    return (
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        {subscribed ? (
          <div className="bg-primary/20 text-green-400 p-3 rounded text-sm text-center">
            {dict.newsletter.miniSuccess}
          </div>
        ) : (
          <>
            <input 
              type="email" 
              placeholder={dict.newsletter.miniPlaceholder} 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded text-white focus:outline-none focus:border-primary text-sm"
            />
            <button type="submit" className="bg-primary hover:bg-green-700 text-white font-medium py-2 px-4 rounded transition-colors text-sm">
              {dict.newsletter.button}
            </button>
          </>
        )}
      </form>
    )
  }

  return (
    <div className="bg-primary relative overflow-hidden rounded-2xl p-8 md:p-12 my-12 text-white shadow-xl">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-10"></div>
      <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-accent opacity-20"></div>
      
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <Mail className="mx-auto h-12 w-12 mb-4 opacity-80" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">{dict.newsletter.title}</h2>
        <p className="text-green-50 text-lg mb-8">{dict.newsletter.subtitle}</p>
        
        {subscribed ? (
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 text-white p-6 rounded-lg font-medium text-lg">
            {dict.newsletter.success}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder={dict.newsletter.placeholder} 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="bg-accent hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-md transition-colors whitespace-nowrap">
              {dict.newsletter.button}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
