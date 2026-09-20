import SmartImage from './SmartImage';
import HeroFrame from './HeroFrame';

/** Hero used by every inner page: photo background, dark overlay, framed title. */
export default function PageHero({ tag, title, subtitle, image, imageAlt = '', children }) {
  return (
    <section className="relative isolate flex min-h-[72svh] items-center overflow-hidden bg-night-900 pb-16 pt-32 sm:pb-20">
      <SmartImage src={image} alt={imageAlt} priority className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-950/85 via-night-900/70 to-night-900" aria-hidden="true" />

      <div className="container-x">
        <HeroFrame tag={tag}>
          <h1 className="hero-rise text-[2.6rem] font-black uppercase leading-[0.98] tracking-wide text-white sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.25s' }}>
            {title}
          </h1>
          {subtitle && (
            <p className="hero-rise mx-auto mt-5 max-w-2xl text-base leading-relaxed text-fog-300 sm:text-lg" style={{ animationDelay: '0.4s' }}>
              {subtitle}
            </p>
          )}
          {children && (
            <div className="hero-rise mt-8 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '0.55s' }}>
              {children}
            </div>
          )}
        </HeroFrame>
      </div>
    </section>
  );
}
