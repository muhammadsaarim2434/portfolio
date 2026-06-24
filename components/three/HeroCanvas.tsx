'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef } from 'react';
import ImageWavePlane from './ImageWavePlane';

export default function HeroCanvas({ url }: { url: string }) {
  const scrollRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const h = window.innerHeight || 1;
      scrollRef.current = Math.min(1, window.scrollY / h);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <ImageWavePlane url={url} scrollRef={scrollRef} />
      </Suspense>
    </Canvas>
  );
}
