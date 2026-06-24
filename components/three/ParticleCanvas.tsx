'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticlePortrait from './ParticlePortrait';

export default function ParticleCanvas({ url }: { url: string }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ alpha: true, antialias: true }}
    >
      <Suspense fallback={null}>
        <ParticlePortrait url={url} />
      </Suspense>
    </Canvas>
  );
}
