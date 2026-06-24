'use client';

import { useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uScroll;
  varying vec2 vUv;
  varying float vWave;

  void main() {
    vUv = uv;
    vec3 pos = position;
    float dist = distance(uv, uMouse);
    float ripple = sin(dist * 18.0 - uTime * 2.5) * 0.06 * smoothstep(0.55, 0.0, dist);
    float scrollWave = sin(uv.y * 6.0 + uTime) * uScroll * 0.22;
    pos.z += ripple + scrollWave;
    vWave = ripple;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform sampler2D uTexture;
  uniform vec2 uMouse;
  uniform float uScroll;
  uniform float uTime;
  uniform float uImageAspect;
  uniform float uPlaneAspect;
  varying vec2 vUv;
  varying float vWave;

  float rand(vec2 n) {
    return fract(sin(dot(n, vec2(12.9898, 78.233))) * 43758.5453);
  }

  void main() {
    // cover-fit the texture to the plane
    vec2 uv = vUv;
    float ratio = uImageAspect / uPlaneAspect;
    if (ratio > 1.0) {
      uv.x = (uv.x - 0.5) / ratio + 0.5;
    } else {
      uv.y = (uv.y - 0.5) * ratio + 0.5;
    }

    // RGB shift driven by the ripple wave and scroll
    float shift = (0.004 + abs(vWave) * 0.6) * (0.6 + uScroll);
    float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
    float g = texture2D(uTexture, uv).g;
    float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
    vec3 color = vec3(r, g, b);
    color = mix(color, color * vec3(0.78, 0.84, 1.25), 0.18);

    // particle-style dissolve as the user scrolls away
    float noise = rand(floor(vUv * 130.0));
    float edge = smoothstep(uScroll * 1.25 - 0.12, uScroll * 1.25, noise + (1.0 - vUv.y) * 0.18);
    float alpha = mix(1.0, edge, clamp(uScroll, 0.0, 1.0));

    if (uv.x < 0.0 || uv.x > 1.0 || uv.y < 0.0 || uv.y > 1.0) discard;
    gl_FragColor = vec4(color, alpha);
  }
`;

export default function ImageWavePlane({
  url,
  scrollRef,
}: {
  url: string;
  scrollRef: React.MutableRefObject<number>;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const texture = useTexture(url);

  const planeW = 3.6;
  const planeH = 4.8;

  const imageAspect = useMemo(() => {
    const img = texture.image as HTMLImageElement | undefined;
    return img && img.width ? img.width / img.height : 0.66;
  }, [texture]);

  const uniforms = useMemo(
    () => ({
      uTexture: { value: texture },
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uScroll: { value: 0 },
      uImageAspect: { value: imageAspect },
      uPlaneAspect: { value: planeW / planeH },
    }),
    [texture, imageAspect]
  );

  const material = useMemo(
    () =>
      new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms,
        transparent: true,
      }),
    [uniforms]
  );

  const { pointer } = useThree();

  useFrame((_, delta) => {
    uniforms.uTime.value += delta;
    uniforms.uMouse.value.x +=
      (pointer.x * 0.5 + 0.5 - uniforms.uMouse.value.x) * 0.08;
    uniforms.uMouse.value.y +=
      (pointer.y * 0.5 + 0.5 - uniforms.uMouse.value.y) * 0.08;
    uniforms.uScroll.value += (scrollRef.current - uniforms.uScroll.value) * 0.08;

    if (mesh.current) {
      mesh.current.rotation.y += (pointer.x * 0.2 - mesh.current.rotation.y) * 0.05;
      mesh.current.rotation.x += (-pointer.y * 0.14 - mesh.current.rotation.x) * 0.05;
    }
  });

  return (
    <mesh ref={mesh} material={material}>
      <planeGeometry args={[planeW, planeH, 64, 64]} />
    </mesh>
  );
}
