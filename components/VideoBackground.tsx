'use client';

/**
 * Full-bleed autoplaying, muted, looping cinematic video background.
 * Sits behind content (-z-10) with a dark gradient + accent overlay so text
 * stays readable. Falls back to the dark page background until the video loads.
 */
export default function VideoBackground({
  src,
  dark = 0.7,
  tint = true,
}: {
  src: string;
  dark?: number;
  tint?: boolean;
}) {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-bg">
      <video
        className="h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>

      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, rgba(5,6,11,${Math.max(
            0,
            dark - 0.15
          )}) 0%, rgba(5,6,11,${dark}) 55%, rgba(5,6,11,${Math.min(
            1,
            dark + 0.25
          )}) 100%)`,
        }}
      />
      {tint && <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />}
    </div>
  );
}
