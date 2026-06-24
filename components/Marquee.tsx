'use client';

export default function Marquee({ items }: { items: string[] }) {
  const Row = ({ hidden }: { hidden?: boolean }) => (
    <div
      aria-hidden={hidden}
      className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12 px-6"
    >
      {items.map((t, i) => (
        <span
          key={i}
          className="flex items-center gap-12 whitespace-nowrap font-display text-3xl font-bold uppercase tracking-tight text-white/80 md:text-5xl"
        >
          {t}
          <span className="text-accent">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative flex overflow-hidden border-y border-white/10 bg-white/[0.02] py-7">
      <Row />
      <Row hidden />
    </div>
  );
}
