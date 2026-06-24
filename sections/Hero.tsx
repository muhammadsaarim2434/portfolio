'use client';

import { motion } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import VideoBackground from '@/components/VideoBackground';
import MagneticButton from '@/components/MagneticButton';
import { profile } from '@/lib/data';
import { videos } from '@/lib/media';

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
    >
      <VideoBackground src={videos.hero} dark={0.74} />

      <div className="relative z-10 w-full max-w-6xl px-6">
        <motion.span
          {...fade(0.2)}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-white/70 backdrop-blur-sm"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          Available for work
        </motion.span>

        <motion.p
          {...fade(0.3)}
          className="mt-8 font-display text-xs uppercase tracking-[0.4em] text-white/60 md:text-sm"
        >
          {profile.title}
        </motion.p>

        <motion.h1
          {...fade(0.4)}
          className="mt-4 font-display text-[15vw] font-extrabold uppercase leading-[0.82] tracking-tighter md:text-[11vw]"
        >
          Muhammad
          <br />
          <span className="gradient-text">Saarim</span>
        </motion.h1>

        <motion.p
          {...fade(0.6)}
          className="mx-auto mt-7 max-w-xl text-sm leading-relaxed text-white/75 md:text-base"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          {...fade(0.75)}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton
            href="#work"
            className="group rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-bg"
          >
            <span className="inline-flex items-center gap-2">
              View Work
              <FiArrowDownRight />
            </span>
          </MagneticButton>
          <a
            href="#contact"
            data-cursor="hover"
            className="rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
          >
            Let&apos;s Talk
          </a>

          <div className="ml-1 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor="hover"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor="hover"
              className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/80 backdrop-blur-sm transition-colors hover:border-white hover:text-white"
            >
              <FiLinkedin />
            </a>
          </div>
        </motion.div>
      </div>

      {/* scroll hint */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-white/20 p-1.5"
        >
          <span className="h-2 w-1 rounded-full bg-white/60" />
        </motion.div>
      </div>
    </section>
  );
}
