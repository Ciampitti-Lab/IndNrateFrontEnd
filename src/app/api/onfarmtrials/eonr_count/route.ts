import { NextRequest, NextResponse } from 'next/server';

const backendOrigin =
  process.env.BACKEND_URL?.replace(/\/$/, '') ?? 'https://indnratebackend.onrender.com';

export async function GET(request: NextRequest) {
  const forward = new URLSearchParams(request.nextUrl.searchParams);
  const region = forward.get('region')?.trim();
  if (!region) {
    return NextResponse.json({ error: 'region is required' }, { status: 400 });
  }

  /** Backend expects lowercase region codes (e.g. ne, nw). */
  forward.set('region', region.toLowerCase());
  const backendUrl = `${backendOrigin}/onfarmtrials/eonr_count?${forward.toString()}`;

  try {
    const response = await fetch(backendUrl, { cache: 'no-store' });
    const text = await response.text();

    return new NextResponse(text, {
      status: response.status,
      headers: {
        'content-type': response.headers.get('content-type') ?? 'application/json; charset=utf-8',
      },
    });
  } catch {
    return NextResponse.json({ error: 'Backend is not reachable from Next.js server.' }, { status: 502 });
  }
}
