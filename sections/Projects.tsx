'use client';

import { useRef } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import Reveal from '@/components/Reveal';
import { projects, type Project } from '@/lib/data';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 15,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 15,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <Reveal delay={index * 0.07}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformPerspective: 900 }}
        className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-7"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />

        <div className="flex items-start justify-between">
          <span className="font-display text-4xl font-bold text-white/10">
            0{index + 1}
          </span>
          <div className="flex gap-2">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub repo"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
              >
                <FiGithub size={16} />
              </a>
            ) : null}
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                aria-label="Live site"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-muted transition-colors hover:border-accent hover:text-white"
              >
                <FiArrowUpRight size={16} />
              </a>
            ) : null}
          </div>
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-white/5 px-3 py-1 text-xs text-muted"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="work" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <Reveal>
              <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
                Selected Work
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display text-3xl font-bold md:text-4xl">
                Projects I&apos;ve built
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="max-w-xs text-sm text-muted">
              A selection of products and websites crafted with the MERN stack and
              modern front-end tooling.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
