'use client';

import Script from 'next/script';

interface MonetagScriptProps {
  zoneId?: string;
  domain?: string;
  enabled?: boolean;
}

/**
 * Monetag (PropellerAds) MultiTag & In-Page Push integration
 */
export default function MonetagScript({
  zoneId = process.env.NEXT_PUBLIC_MONETAG_ZONE_ID || '11911773',
  domain = '5gvci.com',
  enabled = true,
}: MonetagScriptProps) {
  if (!enabled || !zoneId) return null;

  return (
    <Script
      id="monetag-tag"
      strategy="lazyOnload"
      src={`https://${domain}/act/files/tag.min.js?z=${zoneId}`}
      data-cfasync="false"
    />
  );
}
