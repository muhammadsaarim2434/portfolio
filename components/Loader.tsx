'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '@/lib/data';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    const interval = setInterval(() => {
      value += Math.random() * 18;
      if (value >= 100) {
        value = 100;
        clearInterval(interval);
        setTimeout(() => setDone(true), 450);
      }
      setProgress(Math.floor(value));
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ y: '-100%' }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-bg"
        >
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-2xl font-bold md:text-4xl"
          >
            {profile.name}
          </motion.h1>
          <p className="mt-2 text-sm text-muted">{profile.title}</p>

          <div className="mt-8 h-[3px] w-56 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-accent to-accent2"
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'linear' }}
            />
          </div>
          <span className="mt-3 text-xs tabular-nums text-muted">
            {progress}%
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
