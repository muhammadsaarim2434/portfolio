'use client';

import { useState } from 'react';
import { FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import { profile } from '@/lib/data';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/20 blur-[140px]" />
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="mb-3 text-center font-display text-sm uppercase tracking-[0.3em] text-accent">
            Contact
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-center font-display text-3xl font-bold md:text-5xl">
            Let&apos;s build something <span className="gradient-text">great</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* Info */}
          <Reveal>
            <div className="space-y-5">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-accent">
                  <FiMail />
                </span>
                <span>
                  <p className="text-xs text-muted">Email</p>
                  <p className="text-sm font-medium">{profile.email}</p>
                </span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/60"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-accent">
                  <FiPhone />
                </span>
                <span>
                  <p className="text-xs text-muted">Phone</p>
                  <p className="text-sm font-medium">{profile.phone}</p>
                </span>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent/15 text-accent">
                  <FiMapPin />
                </span>
                <span>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm font-medium">{profile.location}</p>
                </span>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                required
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <input
                required
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <textarea
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none transition-colors focus:border-accent"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {status === 'loading' ? 'Sending...' : 'Send Message'}
                <FiSend />
              </button>

              {status === 'success' && (
                <p className="text-sm text-green-400">
                  Thanks! Your message has been received.
                </p>
              )}
              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Email me directly at {profile.email}.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
