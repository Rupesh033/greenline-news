'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AdSenseBanner from './AdSenseBanner';
import { BrightBooksAd, WebsiteDesignerAd, DualAdBanner } from './NativeAdBanners';
import AmazonAffiliateAd from './AmazonAffiliateAd';

interface AdBannerProps {
  slot?: string;
  imageUrl?: string;
  link?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  style?: React.CSSProperties;
  hidePlaceholder?: boolean;
  children?: React.ReactNode;
  isEnglish?: boolean;
  adSenseSlot?: string;
}

export default function AdBanner({
  slot = 'default',
  imageUrl,
  link,
  alt = 'Advertisement',
  width = 728,
  height = 90,
  className = '',
  style = {},
  hidePlaceholder = false,
  children,
  isEnglish = false,
  adSenseSlot,
}: AdBannerProps) {
  // If direct image URL provided
  if (imageUrl) {
    const imgElement = (
      <Image
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        className="rounded-2xl shadow-md border border-gray-100 object-cover w-full h-auto"
        unoptimized
      />
    );

    return (
      <div
        className={`my-6 text-center ${className}`}
        style={{ maxWidth: width, margin: '1.5rem auto', ...style }}
      >
        <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mb-1">
          Advertisement
        </span>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer nofollow" className="block">
            {imgElement}
          </a>
        ) : (
          imgElement
        )}
      </div>
    );
  }

  const slotLower = slot.toLowerCase();
  const isSidebar = slotLower.includes('sidebar') || slotLower.includes('square') || width <= 360;
  const isLeaderboard = slotLower.includes('leaderboard') || width >= 800;
  const prefersAmazon =
    slotLower.includes('amazon') ||
    slotLower.includes('deal') ||
    slotLower.includes('shop') ||
    slotLower.includes('affiliate');
  const prefersWebDesigner =
    slotLower.includes('designer') ||
    slotLower.includes('web') ||
    slotLower.includes('tech') ||
    slotLower.includes('dev');

  // AdSense with fallback if slot provided
  if (adSenseSlot) {
    return (
      <AdSenseBanner
        slot={adSenseSlot}
        format={isSidebar ? 'rectangle' : isLeaderboard ? 'horizontal' : 'auto'}
        className={className}
        fallback={
          prefersAmazon ? (
            <AmazonAffiliateAd variant={isSidebar ? 'sidebar' : 'horizontal'} isEnglish={isEnglish} />
          ) : prefersWebDesigner ? (
            <WebsiteDesignerAd variant={isSidebar ? 'sidebar' : 'horizontal'} isEnglish={isEnglish} />
          ) : (
            <BrightBooksAd variant={isSidebar ? 'sidebar' : 'horizontal'} isEnglish={isEnglish} />
          )
        }
      />
    );
  }

  // Native Ads based on slot context
  if (prefersAmazon) {
    return (
      <AmazonAffiliateAd
        variant={isSidebar ? 'sidebar' : 'horizontal'}
        className={className}
        isEnglish={isEnglish}
      />
    );
  }

  if (isLeaderboard) {
    return <DualAdBanner variant="leaderboard" className={className} isEnglish={isEnglish} />;
  }

  if (isSidebar) {
    if (prefersWebDesigner) {
      return <WebsiteDesignerAd variant="sidebar" className={className} isEnglish={isEnglish} />;
    }
    return <BrightBooksAd variant="sidebar" className={className} isEnglish={isEnglish} />;
  }

  if (prefersWebDesigner) {
    return <WebsiteDesignerAd variant="horizontal" className={className} isEnglish={isEnglish} />;
  }

  return <BrightBooksAd variant="horizontal" className={className} isEnglish={isEnglish} />;
}
