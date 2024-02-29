// middleware.js
import { NextResponse } from 'next/server'


export function middleware(request) {
  const country = request.geo.country || 'US'; // Default to 'US' if not found
  if (country === 'PK') {
    return new Response('Access Denied', { status: 403 });
  }
  return NextResponse.next();
}
