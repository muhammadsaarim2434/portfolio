'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { profile } from '@/lib/data';

/**
 * Cinematic full-screen section.
 * Currently uses your photo with a Ken Burns zoom + scroll parallax.
 * To drop in an AI-generated video later, set VIDEO_SRC to e.g. '/videos/showreel.mp4'
 * (place the file in public/videos/) — it will replace the photo automatically.
 */
const VIDEO_SRC = '';

export default function Showreel() {
  const sectionRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      gsap.to(mediaRef.current, {
        yPercent: 18,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });

      gsap.to(textRef.current, {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[90vh] items-center justify-center overflow-hidden"
    >
      {/* Media layer */}
      <div ref={mediaRef} className="absolute inset-0 -z-10 will-change-transform">
        {VIDEO_SRC ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={profile.photo}
          >
            <source src={VIDEO_SRC} type="video/mp4" />
          </video>
        ) : (
          <div
            className="h-full w-full animate-kenburns bg-cover bg-center"
            style={{ backgroundImage: `url(${profile.photo})` }}
          />
        )}
        {/* duotone / darkening overlays for a cinematic look */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/40 to-bg/90" />
        <div className="absolute inset-0 bg-accent/20 mix-blend-color" />
      </div>

      {/* Big kinetic text */}
      <div ref={textRef} className="px-6 text-center will-change-transform">
        <p className="mb-4 font-display text-xs uppercase tracking-[0.4em] text-white/70">
          Designer × Developer × AI
        </p>
        <h2 className="font-display text-[14vw] font-extrabold leading-[0.9] tracking-tighter md:text-[10vw]">
          CRAFTING
          <br />
          <span className="gradient-text">DIGITAL</span> WORLDS
        </h2>

        <a
          href="#work"
          data-cursor="hover"
          className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full border border-white/30 text-sm font-semibold uppercase tracking-widest backdrop-blur-sm transition-colors hover:bg-white hover:text-bg"
        >
          View
          <br />
          Work
        </a>
      </div>
    </section>
  );
}
