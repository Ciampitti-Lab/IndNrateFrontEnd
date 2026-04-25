import { NextRequest, NextResponse } from 'next/server';

const backendOrigin =
  process.env.BACKEND_URL?.replace(/\/$/, '') ?? 'https://indnratebackend.onrender.com';

export async function GET(request: NextRequest) {
  const date = request.nextUrl.searchParams.get('date')?.trim();
  const source = request.nextUrl.searchParams.get('source')?.trim();
  if (!date || !source) {
    return NextResponse.json({ error: 'date and source are required' }, { status: 400 });
  }
  const params = new URLSearchParams({ date, source });
  const backendUrl = `${backendOrigin}/nitro_prices?${params.toString()}`;
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
