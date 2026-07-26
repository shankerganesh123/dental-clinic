import Eyebrow from './Eyebrow';
import Reveal from './Reveal';

export default function PhotoHero({ image, imageAlt, eyebrow, title, subtitle }) {
  return (
    <section className="relative flex h-[360px] items-center justify-center overflow-hidden sm:h-[420px]">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/50 to-brand/80" />

      <div className="relative mx-auto max-w-2xl px-5 text-center text-white">
        <Reveal>
          <Eyebrow className="justify-center [&_span]:text-white">{eyebrow}</Eyebrow>
          <h1 className="h1 mt-4 text-white">{title}</h1>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-white/85">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}
