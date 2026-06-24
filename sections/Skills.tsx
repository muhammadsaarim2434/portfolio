'use client';

import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import AnimatedHeading from '@/components/AnimatedHeading';
import { skills } from '@/lib/data';

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 font-display text-sm uppercase tracking-[0.3em] text-accent">
            Tech Stack
          </p>
        </Reveal>
        <AnimatedHeading
          text="Tools & technologies I use to ship"
          className="max-w-2xl font-display text-3xl font-bold md:text-4xl"
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.03, duration: 0.4 }}
              whileHover={{ y: -4 }}
              data-cursor="hover"
              className="group rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-medium text-muted transition-colors hover:border-accent/60 hover:text-white"
            >
              <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-accent transition-all group-hover:bg-accent2" />
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
