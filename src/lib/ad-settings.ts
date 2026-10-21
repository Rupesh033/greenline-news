import fs from 'fs';
import path from 'path';

export interface AdSettings {
  showBrightBooksAd: boolean;
  showWebsiteDesignerAd: boolean;
  showDualAdBanner: boolean;
  showStationeryPopup: boolean;
  lastUpdated?: string;
  updatedBy?: string;
}

export const defaultAdSettings: AdSettings = {
  showBrightBooksAd: false,
  showWebsiteDesignerAd: false,
  showDualAdBanner: false,
  showStationeryPopup: false,
  lastUpdated: new Date().toISOString(),
  updatedBy: 'System'
};

const settingsFilePath = path.join(process.cwd(), 'src', 'data', 'ad-settings.json');

export function getAdSettings(): AdSettings {
  try {
    if (fs.existsSync(settingsFilePath)) {
      const raw = fs.readFileSync(settingsFilePath, 'utf8');
      const parsed = JSON.parse(raw);
      return {
        showBrightBooksAd: Boolean(parsed.showBrightBooksAd),
        showWebsiteDesignerAd: Boolean(parsed.showWebsiteDesignerAd),
        showDualAdBanner: Boolean(parsed.showDualAdBanner),
        showStationeryPopup: Boolean(parsed.showStationeryPopup),
        lastUpdated: parsed.lastUpdated || defaultAdSettings.lastUpdated,
        updatedBy: parsed.updatedBy || defaultAdSettings.updatedBy,
      };
    }
  } catch (err) {
    console.error('[ad-settings] Failed to read greenline ad-settings.json:', err);
  }
  return defaultAdSettings;
}

export function saveAdSettings(newSettings: Partial<AdSettings>, updatedBy = 'Admin'): AdSettings {
  const current = getAdSettings();
  const merged: AdSettings = {
    ...current,
    ...newSettings,
    lastUpdated: new Date().toISOString(),
    updatedBy
  };

  try {
    const dir = path.dirname(settingsFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(settingsFilePath, JSON.stringify(merged, null, 2), 'utf8');
  } catch (err) {
    console.error('[ad-settings] Failed to save greenline ad-settings.json:', err);
    throw err;
  }

  return merged;
}
