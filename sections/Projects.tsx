'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import { projects, type Project } from '@/lib/data';
import { projectImages } from '@/lib/media';

const accents = [
  'from-[#5b6cff]/30',
  'from-[#8a5bff]/30',
  'from-[#00b4d8]/30',
  'from-[#ff6b6b]/30',
  'from-[#ffb703]/30',
];

function Card({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="panel relative flex h-[62vh] w-[82vw] shrink-0 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-surface p-8 md:w-[46vw] md:p-10"
    >
      <div
        className={`pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gradient-to-br ${accents[index % accents.length]} to-transparent blur-3xl`}
      />

      <div className="relative z-10">
      {/* placeholder project image */}
      <div className="relative mb-6 h-40 w-full shrink-0 overflow-hidden rounded-2xl md:h-52">
        <img
          src={projectImages[index % projectImages.length]}
          alt={project.title}
          loading="lazy"
          className="h-full w-full scale-105 object-cover grayscale transition-all duration-700 hover:scale-110 hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
      </div>

      <div className="flex items-start justify-between">
        <span className="font-display text-6xl font-bold text-white/10">
          0{index + 1}
        </span>
        <div className="flex gap-2">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
            >
              <FiGithub size={16} />
            </a>
          ) : null}
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              aria-label="Live"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
            >
              <FiArrowUpRight size={16} />
            </a>
          ) : null}
        </div>
      </div>
      </div>

      <div className="relative z-10">
        <h3 className="font-display text-3xl font-bold md:text-5xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-muted md:text-base">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const mm = gsap.matchMedia();

      mm.add('(min-width: 768px)', () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const getAmount = () => track.scrollWidth - window.innerWidth + 96;

        gsap.to(track, {
          x: () => -getAmount(),
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: () => `+=${getAmount()}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden py-20 md:py-0">
      <div className="px-6 pt-10 md:absolute md:left-12 md:top-10 md:z-10 md:pt-0">
        <p className="mb-2 font-display text-sm uppercase tracking-[0.3em] text-accent">
          Selected Work
        </p>
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Projects I&apos;ve built
        </h2>
      </div>

      <div className="flex md:h-screen md:items-center">
        <div
          ref={trackRef}
          className="flex w-full flex-col gap-6 px-6 md:w-auto md:flex-row md:gap-8 md:px-12 md:pt-24"
        >
          {projects.map((p, i) => (
            <Card key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
