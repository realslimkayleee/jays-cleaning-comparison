import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { password } = body;
    const expectedPassword = process.env.PREVIEW_PASSWORD || 'coffeenutz2026';

    if (password === expectedPassword) {
      // Set the cookie for 7 days
      const expires = new Date();
      expires.setDate(expires.getDate() + 7);

      cookies().set({
        name: 'preview_auth',
        value: password,
        httpOnly: true,
        expires: expires,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
      });

      return NextResponse.json({ success: true }, { status: 200 });
    }

    return NextResponse.json({ error: 'Incorrect password' }, { status: 401 });
  } catch {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
