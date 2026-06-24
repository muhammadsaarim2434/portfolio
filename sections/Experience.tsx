'use client';

import Reveal from '@/components/Reveal';
import { experiences, education, certificates } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
            Career
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Experience &amp; Education
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative border-l border-white/10 pl-8">
              {experiences.map((exp, i) => (
                <Reveal key={exp.role + exp.company} delay={i * 0.05}>
                  <div className="relative mb-10">
                    <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border border-accent bg-bg">
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wider text-accent">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 font-display text-xl font-bold">
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
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Education + certificates */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-4 font-display text-lg font-bold">Education</h3>
              <div className="space-y-4">
                {education.map((ed) => (
                  <Reveal key={ed.degree}>
                    <div className="glass rounded-2xl p-5">
                      <p className="text-xs text-accent">{ed.period}</p>
                      <p className="mt-1 font-semibold">{ed.degree}</p>
                      <p className="text-sm text-muted">{ed.school}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-display text-lg font-bold">Certificates</h3>
              <div className="space-y-4">
                {certificates.map((c) => (
                  <Reveal key={c.name}>
                    <div className="glass rounded-2xl p-5">
                      <p className="text-xs text-accent">{c.year}</p>
                      <p className="mt-1 font-semibold">{c.name}</p>
                      <p className="text-sm text-muted">{c.org}</p>
                    </div>
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
