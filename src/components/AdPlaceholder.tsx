'use client';

import React from 'react';
import AdSenseBanner from './AdSenseBanner';
import { BrightBooksAd, WebsiteDesignerAd, DualAdBanner } from './NativeAdBanners';
import AmazonAffiliateAd from './AmazonAffiliateAd';

interface AdPlaceholderProps {
  width: number;
  height: number;
  className?: string;
  lang?: string;
  slot?: string;
  adSenseSlot?: string;
}

/**
 * Multi-Tier High Revenue Ad Unit (Zero Empty Space System)
 * 1. Tries Google AdSense (Programmatic)
 * 2. If blocked or unfilled, seamlessly displays Native Sponsor Ads
 *    (Bright Books, Website Designer, or Amazon Affiliate Product Showcase)
 * 3. Never shows an ugly blank white box or broken iframe.
 */
export default function AdPlaceholder({
  width,
  height,
  className = '',
  lang = 'hi',
  slot,
  adSenseSlot,
}: AdPlaceholderProps) {
  const isEnglish = lang === 'en';

  // Format 1: Horizontal Leaderboard / In-Article Banner (728x90, 728x120, 970x90, 970x250)
  if (width >= 600 || height <= 160) {
    return (
      <div className={`w-full overflow-hidden my-4 sm:my-6 ${className}`}>
        <AdSenseBanner
          slot={adSenseSlot}
          format="horizontal"
          responsive={true}
          fallback={
            slot?.includes('amazon') ? (
              <AmazonAffiliateAd variant="horizontal" isEnglish={isEnglish} />
            ) : slot?.includes('designer') ? (
              <WebsiteDesignerAd variant="horizontal" isEnglish={isEnglish} />
            ) : width >= 900 ? (
              <DualAdBanner variant="leaderboard" isEnglish={isEnglish} />
            ) : (
              <BrightBooksAd variant="horizontal" isEnglish={isEnglish} />
            )
          }
        />
      </div>
    );
  }

  // Format 2: Half-Page / Skyscraper Sidebar (300x600)
  if (height >= 500) {
    return (
      <div className={`w-full max-w-[360px] mx-auto overflow-hidden my-4 sm:my-6 ${className}`}>
        <AdSenseBanner
          slot={adSenseSlot}
          format="vertical"
          responsive={true}
          fallback={
            slot?.includes('books') ? (
              <BrightBooksAd variant="sidebar" isEnglish={isEnglish} />
            ) : (
              <AmazonAffiliateAd variant="sidebar" isEnglish={isEnglish} />
            )
          }
        />
      </div>
    );
  }

  // Format 3: Medium Rectangle / Square Sidebar (300x250, 300x300, 336x280)
  return (
    <div className={`w-full max-w-[360px] mx-auto overflow-hidden my-4 sm:my-6 ${className}`}>
      <AdSenseBanner
        slot={adSenseSlot}
        format="rectangle"
        responsive={true}
        fallback={
          slot?.includes('books') ? (
            <BrightBooksAd variant="sidebar" isEnglish={isEnglish} />
          ) : slot?.includes('amazon') ? (
            <AmazonAffiliateAd variant="sidebar" isEnglish={isEnglish} />
          ) : (
            <WebsiteDesignerAd variant="sidebar" isEnglish={isEnglish} />
          )
        }
      />
    </div>
  );
}
