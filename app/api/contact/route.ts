import { NextResponse } from 'next/server';

/**
 * Contact endpoint.
 *
 * This is a frontend-friendly stub: it validates the payload and returns success.
 * To actually receive emails, set CONTACT_WEBHOOK to a Formspree (or similar)
 * endpoint in your environment variables — the message will be forwarded there.
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body ?? {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing fields' },
        { status: 400 }
      );
    }

    const webhook = process.env.CONTACT_WEBHOOK;
    if (webhook) {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
    } else {
      // No webhook configured — log on the server for now.
      console.log('New contact message:', { name, email, message });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}
