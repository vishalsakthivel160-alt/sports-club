import Counter from '../ui/Counter';
import { STATS } from '../../data/home';

/** Facts supplied by the business. Numeric ones count up; the rest are short labels. */
export default function StatsBar() {
  return (
    <section aria-label="Smash Masters at a glance" className="border-y border-white/10 bg-night-950">
      <dl className="container-x grid grid-cols-2 md:grid-cols-5">
        {STATS.map(({ count, suffix, word, label }, i) => (
          <div
            key={label}
            className={`flex flex-col-reverse items-center px-4 py-8 text-center sm:py-10 ${
              i === STATS.length - 1 ? 'col-span-2 md:col-span-1' : ''
            } ${i > 0 ? 'md:border-l md:border-white/10' : ''} ${i % 2 === 1 ? 'border-l border-white/10 md:border-l' : ''}`}
          >
            <dt className="mt-2 text-sm text-fog-500">{label}</dt>
            <dd className="font-display text-5xl font-black uppercase leading-none text-white sm:text-6xl">
              {count !== undefined ? <Counter to={count} suffix={suffix} /> : word}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
