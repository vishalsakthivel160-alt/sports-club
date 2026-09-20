import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import HeroFrame from '../ui/HeroFrame';
import Button from '../ui/Button';
import { HERO_SLIDES } from '../../data/home';
import { enquiryLink } from '../../lib/enquiry';

const INTERVAL_MS = 6500;

function ArrowButton({ direction, onClick, className = '' }) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous slide' : 'Next slide'}
      className={`h-11 w-11 items-center justify-center rounded-full border border-white/50 text-white transition hover:border-brand hover:bg-brand hover:text-night-950 ${className}`}
    >
      <Icon className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}

/**
 * Home hero. The background cross-fades between sport photos and the orange tag names the sport shown.
 * Layout follows the reference template: outlined frame, tag on the border, circular arrows.
 */
export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = HERO_SLIDES.length;

  const go = useCallback((step) => setIndex((i) => (i + step + count) % count), [count]);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const timer = setInterval(() => go(1), INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, go, index]); // `index` restarts the timer after a manual change

  return (
    <section
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-28 pt-28"
      aria-label="Welcome to Smash Masters"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {HERO_SLIDES.map((slide, i) => (
        <div
          key={slide.tag}
          className={`absolute inset-0 -z-20 transition-opacity duration-1000 ${i === index ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== index}
        >
          <SmartImage
            src={slide.image}
            alt={slide.alt}
            priority={i === 0}
            className="absolute inset-0"
            imgClassName={`transition-transform duration-[9000ms] ease-out ${i === index ? 'scale-110' : 'scale-100'}`}
          />
        </div>
      ))}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-night-950/80 via-night-900/60 to-night-900" aria-hidden="true" />

      <div className="container-x">
        <HeroFrame tag={HERO_SLIDES[index].tag}>
          <h1
            className="hero-rise text-[3.1rem] font-black uppercase leading-[0.95] tracking-wide text-white sm:text-7xl lg:text-[6.5rem]"
            style={{ animationDelay: '0.3s' }}
          >
            Train. <span className="text-brand">Play.</span> Perform.
          </h1>
          <p className="hero-rise mx-auto mt-6 max-w-xl text-base leading-relaxed text-fog-300 sm:text-lg" style={{ animationDelay: '0.45s' }}>
            Your Complete Destination for Fitness, Sports &amp; Performance
          </p>
          <div className="hero-rise mt-9 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: '0.6s' }}>
            <Button to="/#facilities" variant="light">
              Explore Facilities
            </Button>
            <Button to={enquiryLink()}>Book Now</Button>
            <Button to="/contact" variant="outline">
              Contact Us
            </Button>
          </div>
        </HeroFrame>
      </div>

      {/* Side arrows on larger screens, like the reference template */}
      <ArrowButton direction="prev" onClick={() => go(-1)} className="absolute left-4 top-1/2 hidden -translate-y-1/2 md:flex lg:left-8" />
      <ArrowButton direction="next" onClick={() => go(1)} className="absolute right-4 top-1/2 hidden -translate-y-1/2 md:flex lg:right-8" />

      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-4">
        <ArrowButton direction="prev" onClick={() => go(-1)} className="flex md:hidden" />
        <div className="flex items-center gap-2.5" role="group" aria-label="Choose slide">
          {HERO_SLIDES.map((slide, i) => (
            <button
              key={slide.tag}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${slide.tag}`}
              aria-current={i === index}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-10 bg-brand' : 'w-4 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
        <ArrowButton direction="next" onClick={() => go(1)} className="flex md:hidden" />
      </div>
    </section>
  );
}
