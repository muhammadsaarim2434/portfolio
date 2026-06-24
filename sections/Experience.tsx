'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import AnimatedHeading from '@/components/AnimatedHeading';
import { experiences, education, certificates } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
            Career
          </p>
        </Reveal>
        <AnimatedHeading
          text="Experience & Education"
          className="font-display text-3xl font-bold md:text-5xl"
        />

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative space-y-4 border-l border-white/10 pl-8">
              <span className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accent via-accent2/50 to-transparent" />
              {experiences.map((exp, i) => (
                <Reveal key={exp.role + exp.company} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-colors hover:border-accent/40 hover:bg-white/[0.04] md:p-6"
                  >
                    <span className="absolute -left-[41px] top-7 grid h-5 w-5 place-items-center rounded-full border border-accent bg-bg">
                      <span className="h-2 w-2 rounded-full bg-accent transition-transform group-hover:scale-125" />
                    </span>

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-xs font-medium uppercase tracking-wider text-accent">
                        {exp.period}
                      </span>
                      <span className="font-display text-4xl font-extrabold text-white/[0.06]">
                        0{experiences.length - i}
                      </span>
                    </div>

                    <h3 className="mt-1 font-display text-xl font-bold md:text-2xl">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted">
                      {exp.company} • {exp.location}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {exp.points.map((pt, idx) => (
                        <li
                          key={idx}
                          className="flex gap-2 text-sm leading-relaxed text-muted"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent2" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education + certificates */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-wider text-white/80">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((ed) => (
                  <Reveal key={ed.degree}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass rounded-2xl border border-white/5 p-5 transition-colors hover:border-accent/40"
                    >
                      <p className="text-xs text-accent">{ed.period}</p>
                      <p className="mt-1 font-semibold">{ed.degree}</p>
                      <p className="text-sm text-muted">{ed.school}</p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-lg font-bold uppercase tracking-wider text-white/80">
                Certificates
              </h3>
              <div className="space-y-4">
                {certificates.map((c) => (
                  <Reveal key={c.name}>
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="glass rounded-2xl border border-white/5 p-5 transition-colors hover:border-accent/40"
                    >
                      <p className="text-xs text-accent">{c.year}</p>
                      <p className="mt-1 font-semibold">{c.name}</p>
                      <p className="text-sm text-muted">{c.org}</p>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
