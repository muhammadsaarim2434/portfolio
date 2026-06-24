'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function AnimatedHeading({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      const words = ref.current?.querySelectorAll('.word');
      if (!words) return;
      gsap.from(words, {
        yPercent: 120,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 88%',
        },
      });
    },
    { scope: ref }
  );

  return (
    <h2 ref={ref} className={className}>
      {text.split(' ').map((word, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <span className="word inline-block">{word}&nbsp;</span>
        </span>
      ))}
    </h2>
  );
}
