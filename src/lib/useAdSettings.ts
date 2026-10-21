'use client';

import { useState, useEffect } from 'react';

export interface AdSettingsState {
  showBrightBooksAd: boolean;
  showWebsiteDesignerAd: boolean;
  showDualAdBanner: boolean;
  showStationeryPopup: boolean;
  loaded: boolean;
}

let cachedSettings: AdSettingsState = {
  showBrightBooksAd: false,
  showWebsiteDesignerAd: false,
  showDualAdBanner: false,
  showStationeryPopup: false,
  loaded: false
};

const listeners = new Set<(s: AdSettingsState) => void>();

export function useAdSettings() {
  const [settings, setSettings] = useState<AdSettingsState>(cachedSettings);

  useEffect(() => {
    listeners.add(setSettings);

    if (!cachedSettings.loaded) {
      fetch('/api/admin/ads-settings')
        .then(res => res.json())
        .then(data => {
          if (data?.settings) {
            cachedSettings = {
              showBrightBooksAd: Boolean(data.settings.showBrightBooksAd),
              showWebsiteDesignerAd: Boolean(data.settings.showWebsiteDesignerAd),
              showDualAdBanner: Boolean(data.settings.showDualAdBanner),
              showStationeryPopup: Boolean(data.settings.showStationeryPopup),
              loaded: true
            };
            listeners.forEach(fn => fn(cachedSettings));
          }
        })
        .catch(() => {
          cachedSettings.loaded = true;
          listeners.forEach(fn => fn(cachedSettings));
        });
    }

    return () => {
      listeners.delete(setSettings);
    };
  }, []);

  return settings;
}
