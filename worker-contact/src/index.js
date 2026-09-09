import { EmailMessage } from 'cloudflare:email';

const ALLOWED_ORIGINS = [
  'https://salundauthor.com',
  'https://salundauthor.pages.dev',
  'http://localhost:4321',
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function redirectBase(request) {
  const referer = request.headers.get('Referer') || '';
  try {
    const origin = new URL(referer).origin;
    if (ALLOWED_ORIGINS.includes(origin)) {
      return `${origin}/contact`;
    }
  } catch {
    // fall through to default
  }
  return 'https://salundauthor.com/contact';
}

function buildRawEmail({ name, email, message }) {
  return [
    'From: Salundauthor Contact Form <contact@salundauthor.com>',
    'To: salundauthor@gmail.com',
    `Reply-To: ${name} <${email}>`,
    'Subject: New message from salundauthor.com contact form',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset="UTF-8"',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\r\n');
}

export default {
  async fetch(request, env) {
    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405 });
    }

    const base = redirectBase(request);

    let form;
    try {
      form = await request.formData();
    } catch {
      return Response.redirect(`${base}?error=invalid`, 302);
    }

    const name = (form.get('name') || '').toString().trim();
    const email = (form.get('email') || '').toString().trim();
    const message = (form.get('message') || '').toString().trim();
    const turnstileToken = (form.get('cf-turnstile-response') || '').toString();

    if (!name || !email || !message || !turnstileToken) {
      return Response.redirect(`${base}?error=missing`, 302);
    }
    if (/[\r\n]/.test(name) || /[\r\n]/.test(email) || !EMAIL_PATTERN.test(email)) {
      return Response.redirect(`${base}?error=invalid`, 302);
    }

    const verifyResp = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET_KEY,
        response: turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    });
    const verifyData = await verifyResp.json();

    if (!verifyData.success) {
      return Response.redirect(`${base}?error=spam`, 302);
    }

    try {
      const msg = new EmailMessage(
        'contact@salundauthor.com',
        'salundauthor@gmail.com',
        buildRawEmail({ name, email, message })
      );
      await env.SEND_EMAIL.send(msg);
    } catch {
      return Response.redirect(`${base}?error=send`, 302);
    }

    return Response.redirect(`${base}?sent=1`, 302);
  },
};
