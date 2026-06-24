'use client';

import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import AnimatedHeading from '@/components/AnimatedHeading';
import { profile, interests } from '@/lib/data';

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '4', label: 'Companies' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-[0.85fr_1fr] md:gap-16">
        {/* Photo */}
        <Reveal className="relative mx-auto w-full max-w-sm">
          {/* glow */}
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/30 via-accent2/20 to-transparent blur-3xl" />
          {/* offset frame */}
          <div className="pointer-events-none absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] border border-white/10" />

          <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-surface">
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-[4/5] w-full object-cover object-top grayscale transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
            />
            {/* duotone tint + bottom fade */}
            <div className="absolute inset-0 bg-accent/20 mix-blend-color transition-opacity duration-700 group-hover:opacity-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/10 to-transparent" />

            {/* name plate */}
            <div className="absolute inset-x-0 bottom-0 p-6">
              <p className="font-display text-xl font-bold">{profile.name}</p>
              <p className="text-sm text-accent">{profile.title}</p>
            </div>

            {/* available pill */}
            <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-bg/60 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              Available
            </div>
          </div>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
              Who I Am
            </p>
          </Reveal>
          <AnimatedHeading
            text="Turning ideas into fast, elegant products"
            className="font-display text-3xl font-bold leading-[1.1] md:text-5xl"
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl leading-relaxed text-muted">
              {profile.about}
            </p>
          </Reveal>

          {/* Stats */}
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-display text-4xl font-extrabold gradient-text">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
                >
                  {i}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <motion.a
              href={profile.resume}
              download
              data-cursor="hover"
              whileHover={{ scale: 1.03 }}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-bg"
            >
              <FiDownload /> Download Resume
            </motion.a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
