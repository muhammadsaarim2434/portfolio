'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import AnimatedHeading from '@/components/AnimatedHeading';
import { profile, interests } from '@/lib/data';

const ParticleCanvas = dynamic(
  () => import('@/components/three/ParticleCanvas'),
  { ssr: false }
);

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '5+', label: 'Projects Shipped' },
  { value: '4', label: 'Companies' },
  { value: '∞', label: 'Cups of Coffee' },
];

export default function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      {/* giant ghost word */}
      <span className="pointer-events-none absolute -left-4 top-6 select-none font-display text-[22vw] font-extrabold leading-none text-white/[0.03] md:text-[14vw]">
        ABOUT
      </span>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Particle portrait */}
        <Reveal className="relative h-[52vh] min-h-[380px] w-full">
          <div className="pointer-events-none absolute inset-6 rounded-3xl border border-white/10" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute left-1/2 top-1/2 -z-10 h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover opacity-20 grayscale"
          />
          <ParticleCanvas url={profile.photo} />
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[11px] uppercase tracking-[0.25em] text-muted">
            move your cursor over the portrait
          </p>
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
            <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 sm:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-bg/60 p-4 text-center transition-colors hover:bg-white/[0.04]"
                >
                  <p className="font-display text-3xl font-extrabold gradient-text">
                    {s.value}
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
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
