'use client';

import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    if (!finePointer) return;
    setEnabled(true);
    document.documentElement.classList.add('custom-cursor-active');

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="hover"]');
      ring.style.scale = interactive ? '2.2' : '1';
      ring.style.borderColor = interactive
        ? 'rgba(138,91,255,0.9)'
        : 'rgba(91,108,255,0.6)';
    };

    let rafId = 0;
    const loop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove('custom-cursor-active');
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent2"
        style={{ marginLeft: -4, marginTop: -4 }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-8 w-8 rounded-full border border-accent/60 transition-[scale,border-color] duration-200"
        style={{ marginLeft: -16, marginTop: -16 }}
      />
    </>
  );
}
