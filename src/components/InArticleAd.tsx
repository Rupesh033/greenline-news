'use client';

import React from 'react';
import AdSenseBanner from './AdSenseBanner';
import AmazonAffiliateAd from './AmazonAffiliateAd';
import { BrightBooksAd } from './NativeAdBanners';

interface InArticleAdProps {
  slot?: string;
  className?: string;
  isEnglish?: boolean;
}

/**
 * High-performing In-Article Ad Unit
 * Positioned in the middle/end of news articles where user engagement and CTR is at peak.
 * Loads Google AdSense with seamless native fallback (Amazon Affiliate or BrightBooks)
 * so there's zero layout shift and zero empty ad space.
 */
export default function InArticleAd({
  slot,
  className = '',
  isEnglish = false,
}: InArticleAdProps) {
  return (
    <div className={`my-6 sm:my-8 ${className}`}>
      <AdSenseBanner
        slot={slot}
        format="auto"
        responsive={true}
        className="my-1"
        fallback={
          <div className="mt-2 space-y-4">
            <AmazonAffiliateAd variant="horizontal" isEnglish={isEnglish} />
          </div>
        }
      />
    </div>
  );
}
