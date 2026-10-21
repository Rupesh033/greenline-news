import { NextResponse } from 'next/server';
import { getAdSettings, saveAdSettings } from '@/lib/ad-settings';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const settings = getAdSettings();
    return NextResponse.json({ success: true, settings });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      showBrightBooksAd,
      showWebsiteDesignerAd,
      showDualAdBanner,
      showStationeryPopup,
      updatedBy
    } = body;

    const updated = saveAdSettings({
      ...(showBrightBooksAd !== undefined && { showBrightBooksAd: Boolean(showBrightBooksAd) }),
      ...(showWebsiteDesignerAd !== undefined && { showWebsiteDesignerAd: Boolean(showWebsiteDesignerAd) }),
      ...(showDualAdBanner !== undefined && { showDualAdBanner: Boolean(showDualAdBanner) }),
      ...(showStationeryPopup !== undefined && { showStationeryPopup: Boolean(showStationeryPopup) }),
    }, updatedBy || 'Greenline Admin');

    return NextResponse.json({
      success: true,
      message: 'Ad settings updated successfully',
      settings: updated
    });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
