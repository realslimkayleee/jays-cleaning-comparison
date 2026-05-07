import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('preview_auth')?.value;
  const expectedPassword = process.env.PREVIEW_PASSWORD || 'coffeenutz2026';

  const isAuthPage = request.nextUrl.pathname.startsWith('/login');
  const isApiAuth = request.nextUrl.pathname.startsWith('/api/auth');

  if (isAuthPage || isApiAuth) {
    return NextResponse.next();
  }

  if (authCookie !== expectedPassword) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - images (static images)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|images|favicon.ico).*)',
  ],
};
