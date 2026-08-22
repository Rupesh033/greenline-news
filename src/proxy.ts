import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {
  // Check if there is any cookie
  if (request.cookies.has('NEXT_LOCALE')) {
    return request.cookies.get('NEXT_LOCALE')?.value
  }
  
  // Default to Hindi since user wanted Hindi version as primary or we can default to 'hi' or 'en'
  const acceptLanguage = request.headers.get('accept-language')
  if (acceptLanguage && acceptLanguage.includes('hi')) {
    return 'hi'
  }
  return 'en'
}

export function proxy(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = ['/en', '/hi'].every(
    (locale) => !pathname.startsWith(locale + '/') && pathname !== locale
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /about
    // The new URL is now /en/about
    return NextResponse.redirect(
      new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url)
    )
  }
}

export const config = {
  // Matcher ignoring `/_next/`, `/api/`, and `/admin`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|admin).*)'],
}
