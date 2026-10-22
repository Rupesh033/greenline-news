'use client';

import React, { useEffect, useRef } from 'react';

interface AdSenseBannerProps {
  client?: string;
  slot?: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  responsive?: boolean;
  layoutKey?: string;
  style?: React.CSSProperties;
  className?: string;
  fallback?: React.ReactNode;
}

export default function AdSenseBanner({
  client = 'ca-pub-7121887751803927',
  slot,
  format = 'auto',
  responsive = true,
  layoutKey,
  style = { display: 'block' },
  className = '',
  fallback,
}: AdSenseBannerProps) {
  const adRef = useRef<HTMLModElement>(null);
  const isPushed = useRef(false);

  useEffect(() => {
    // Prevent double execution in React Strict Mode
    if (isPushed.current) return;
    if (!adRef.current) return;

    // Check if Google already populated this ins element
    const isAlreadyFilled =
      adRef.current.getAttribute('data-adsbygoogle-status') === 'done' ||
      adRef.current.children.length > 0;
    if (isAlreadyFilled) return;

    try {
      if (typeof window !== 'undefined') {
        const adsbygoogle = (window as unknown as { adsbygoogle: unknown[] }).adsbygoogle || [];
        adsbygoogle.push({});
        isPushed.current = true;
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      // Ignore known AdSense tag already pushed warnings in SPA navigation
      if (!errorMsg.includes("All 'ins' elements")) {
        console.warn('[AdSense] Push warning:', errorMsg);
      }
    }
  }, []);

  return (
    <div className={`adsense-container text-center overflow-hidden my-4 sm:my-6 ${className}`}>
      <span className="block text-[9px] uppercase tracking-widest text-gray-400 font-sans mb-1 text-center select-none">
        Advertisement
      </span>
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={style}
        data-ad-client={client}
        {...(slot ? { 'data-ad-slot': slot } : {})}
        data-ad-format={format}
        data-full-width-responsive={responsive ? 'true' : 'false'}
        {...(layoutKey ? { 'data-ad-layout-key': layoutKey } : {})}
      />
      {fallback}
    </div>
  );
}
