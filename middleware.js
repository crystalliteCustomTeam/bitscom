// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // List of blocked country codes
  const blockedCountries = [
    'IN', // India
    'PK', // Pakistan
    'BD', // Bangladesh
    'IR', // Iran
    'VN', // Vietnam
    'PH', // Philippines
    'IQ', // Iraq
    'AF', // Afghanistan
    'KR', // Korea (South Korea)
    'NP', // Nepal
    'LK', // Sri Lanka
    'RU', // Russia
    'CN', // China
    'BT', // Bhutan
  ];

  // List of allowed IPs for Pakistan
  const allowedPKIPs = [
    '118.103.235.181', '118.103.235.182', '118.103.235.183', '118.103.235.184', '118.103.235.185', '118.103.235.186',
    '125.209.125.202', '125.209.125.203', '125.209.125.204', '125.209.125.205', '125.209.125.206',
    '110.93.217.241', '110.93.217.242', '110.93.217.243', '110.93.217.244', '110.93.217.245',
    '202.141.250.97', '202.141.250.98', '202.141.250.99', '202.141.250.100', '202.141.250.101',
    '175.107.203.132', '175.107.203.134',
    '124.29.228.41', '124.29.228.42',
    '154.57.216.114', '154.57.216.115', '154.57.216.116', '154.57.216.117', '154.57.216.118',
  ];

  const country = request.geo.country || 'US'; // Default to 'US' if not found
  const ip = request.headers.get('x-forwarded-for') || request.ip; // Get the IP address of the request

  if (country === 'PK' && allowedPKIPs.includes(ip)) {
    // If the request is from Pakistan and the IP is allowed, let it through
    return NextResponse.next();
  } else if (blockedCountries.includes(country)) {
    // If the request is from a blocked country, return a 403 response
    return new Response('Access Denied', { status: 403 });
  }

  // Allow the request for non-blocked countries or if none of the conditions above are met
  return NextResponse.next();
}
