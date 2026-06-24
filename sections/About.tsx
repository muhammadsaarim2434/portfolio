'use client';

import dynamic from 'next/dynamic';
import { FiDownload } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import { profile, interests } from '@/lib/data';

const ParticleCanvas = dynamic(
  () => import('@/components/three/ParticleCanvas'),
  { ssr: false }
);

export default function About() {
  return (
    <section id="about" className="section-pad relative">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Particle portrait */}
        <Reveal className="relative h-[50vh] min-h-[360px] w-full">
          <img
            src={profile.photo}
            alt={profile.name}
            className="absolute left-1/2 top-1/2 -z-10 h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-3xl object-cover opacity-20"
          />
          <ParticleCanvas url={profile.photo} />
          <p className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-muted">
            move your cursor over the portrait
          </p>
        </Reveal>

        {/* Text */}
        <div>
          <Reveal>
            <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
              About
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Turning ideas into{' '}
              <span className="gradient-text">fast, elegant</span> products
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 leading-relaxed text-muted">{profile.about}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-6 flex flex-wrap gap-2">
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

          <Reveal delay={0.2}>
            <a
              href={profile.resume}
              download
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/15"
            >
              <FiDownload /> Download Resume
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
