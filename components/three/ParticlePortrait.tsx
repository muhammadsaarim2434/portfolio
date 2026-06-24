'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

type SampledData = {
  positions: Float32Array;
  colors: Float32Array;
  original: Float32Array;
};

export default function ParticlePortrait({ url }: { url: string }) {
  const pointsRef = useRef<THREE.Points>(null);
  const [data, setData] = useState<SampledData | null>(null);

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = url;
    img.onload = () => {
      const sampleW = 110;
      const aspect = img.height / img.width;
      const sampleH = Math.max(1, Math.floor(sampleW * aspect));

      const canvas = document.createElement('canvas');
      canvas.width = sampleW;
      canvas.height = sampleH;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, sampleW, sampleH);
      const pix = ctx.getImageData(0, 0, sampleW, sampleH).data;

      const positions: number[] = [];
      const colors: number[] = [];
      const scale = 5 / sampleH; // fit roughly 5 world units tall

      for (let y = 0; y < sampleH; y++) {
        for (let x = 0; x < sampleW; x++) {
          const i = (y * sampleW + x) * 4;
          const a = pix[i + 3] / 255;
          const r = pix[i] / 255;
          const g = pix[i + 1] / 255;
          const b = pix[i + 2] / 255;
          const bright = (r + g + b) / 3;
          if (a < 0.5 || bright < 0.05) continue;
          const px = (x - sampleW / 2) * scale;
          const py = -(y - sampleH / 2) * scale;
          positions.push(px, py, (Math.random() - 0.5) * 0.06);
          colors.push(r, g, b);
        }
      }

      const pos = new Float32Array(positions);
      setData({
        positions: pos,
        colors: new Float32Array(colors),
        original: pos.slice(),
      });
    };
  }, [url]);

  const geometry = useMemo(() => {
    if (!data) return null;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(data.positions, 3));
    g.setAttribute('color', new THREE.BufferAttribute(data.colors, 3));
    return g;
  }, [data]);

  const { pointer } = useThree();

  useFrame((state) => {
    if (!pointsRef.current || !data) return;
    const posAttr = pointsRef.current.geometry.getAttribute(
      'position'
    ) as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const orig = data.original;
    const mx = pointer.x * 3;
    const my = pointer.y * 3;
    const t = state.clock.elapsedTime;

    for (let i = 0; i < arr.length; i += 3) {
      const ox = orig[i];
      const oy = orig[i + 1];
      const dx = ox - mx;
      const dy = oy - my;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.0001;
      const force = Math.min(0.7, 0.28 / dist);
      const targetX = ox + (dx / dist) * force;
      const targetY = oy + (dy / dist) * force;
      arr[i] += (targetX - arr[i]) * 0.12;
      arr[i + 1] += (targetY - arr[i + 1]) * 0.12;
      arr[i + 2] = Math.sin(t * 1.5 + ox * 4.0) * 0.06;
    }
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = Math.sin(t * 0.2) * 0.06;
  });

  if (!geometry) return null;

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.036}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </points>
  );
}
