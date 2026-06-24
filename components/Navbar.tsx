'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'glass py-3' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="font-display text-lg font-bold tracking-tight">
          MS<span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 md:inline-block"
        >
          Let&apos;s talk
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {open && (
        <motion.ul
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          className="glass mx-4 mt-3 overflow-hidden rounded-2xl md:hidden"
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-muted hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.header>
  );
}
