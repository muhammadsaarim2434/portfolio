'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import AnimatedHeading from '@/components/AnimatedHeading';

const groups: { title: string; items: string[] }[] = [
  {
    title: 'Frontend',
    items: [
      'Next.js',
      'React.js',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Bootstrap',
      'Material UI',
      'Shadcn UI',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'MongoDB', 'REST APIs'],
  },
  {
    title: 'AI & Data',
    items: ['Prompt Engineering', 'LLM Training', 'Data Annotation'],
  },
  {
    title: 'Tools',
    items: ['GitHub', 'Git Bash', 'WordPress'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative overflow-hidden">
      <span className="pointer-events-none absolute -right-4 top-6 select-none font-display text-[22vw] font-extrabold leading-none text-white/[0.03] md:text-[14vw]">
        STACK
      </span>

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
            Tech Stack
          </p>
        </Reveal>
        <AnimatedHeading
          text="Tools & technologies I use to ship"
          className="max-w-2xl font-display text-3xl font-bold md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2">
          {groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="h-full bg-bg/60 p-6 transition-colors hover:bg-white/[0.03] md:p-8">
                <div className="mb-5 flex items-baseline justify-between">
                  <h3 className="font-display text-xl font-bold md:text-2xl">
                    {group.title}
                  </h3>
                  <span className="font-display text-sm text-white/20">
                    0{gi + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {group.items.map((skill, idx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.03, duration: 0.4 }}
                      whileHover={{ y: -3 }}
                      data-cursor="hover"
                      className="group inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-accent/60 hover:text-white"
                    >
                      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent transition-all group-hover:bg-accent2" />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
