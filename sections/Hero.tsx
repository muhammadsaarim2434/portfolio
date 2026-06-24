'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FiArrowDownRight, FiGithub, FiLinkedin } from 'react-icons/fi';
import MagneticButton from '@/components/MagneticButton';
import { profile } from '@/lib/data';

const HeroCanvas = dynamic(() => import('@/components/three/HeroCanvas'), {
  ssr: false,
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden grid-bg"
    >
      {/* gradient blobs */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-accent/30 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-accent2/25 blur-[150px]" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-28 md:grid-cols-2 md:px-10 md:pt-0">
        {/* Text */}
        <div className="order-2 md:order-1">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-muted"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for work
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-7xl"
          >
            {profile.name.split(' ')[0]}
            <br />
            <span className="gradient-text">{profile.name.split(' ')[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-4 font-display text-lg text-muted md:text-xl"
          >
            {profile.title}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-5 max-w-md text-sm leading-relaxed text-muted/90 md:text-base"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="#work"
              className="group rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white"
            >
              <span className="inline-flex items-center gap-2">
                View Work
                <FiArrowDownRight />
              </span>
            </MagneticButton>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Contact Me
            </a>

            <div className="ml-1 flex items-center gap-3">
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
            </div>
          </motion.div>
        </div>

        {/* 3D photo */}
        <div className="relative order-1 h-[52vh] md:order-2 md:h-[82vh]">
          {/* Fallback image (shown if WebGL fails to render) */}
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute left-1/2 top-1/2 -z-10 h-[78%] -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover opacity-40"
          />
          <HeroCanvas url={profile.photo} />
        </div>
      </div>

      {/* scroll hint */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center">
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
