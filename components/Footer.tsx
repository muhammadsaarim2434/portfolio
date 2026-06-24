'use client';

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-lg font-bold">
            {profile.name}
            <span className="text-accent">.</span>
          </p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
          >
            <FiLinkedin />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
          >
            <FiMail />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js,
          React Three Fiber &amp; Tailwind CSS.
        </p>
        <a
          href="#home"
          className="inline-flex items-center gap-2 transition-colors hover:text-white"
        >
          Back to top <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
