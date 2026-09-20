import { Check } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Program card used for both gym and badminton programs.
 * meta: [{ icon, label, value }]   focus: string[]   fees: optional display string
 */
export default function ProgramCard({ title, badge, description, fees, meta = [], focus = [], ctaTo, ctaLabel = 'Enquire Now' }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-white/10 bg-night-800 p-6 transition duration-300 hover:border-brand/50 hover:shadow-card sm:p-7">
      <header>
        {badge && (
          <span className="inline-block rounded-full border border-brand/50 px-3 py-1 text-xs font-semibold text-brand">{badge}</span>
        )}
        <h3 className={`text-3xl font-extrabold uppercase leading-none tracking-wide text-white ${badge ? 'mt-4' : ''}`}>{title}</h3>
        {description && <p className="mt-3 text-sm leading-relaxed text-fog-500">{description}</p>}
      </header>

      {fees && (
        <div className="mt-5 flex items-baseline gap-2 border-y border-white/10 py-4">
          <span className="font-display text-4xl font-extrabold text-brand">{fees}</span>
          <span className="text-sm text-fog-500">fees</span>
        </div>
      )}

      <dl className="mt-5 space-y-3.5">
        {meta.map(({ icon: Icon, label, value }) => (
          <div key={label} className="flex gap-3">
            <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <div>
              <dt className="text-xs text-fog-700">{label}</dt>
              <dd className="text-sm leading-snug text-fog-100">{value}</dd>
            </div>
          </div>
        ))}
      </dl>

      {focus.length > 0 && (
        <div className="mt-5">
          <h4 className="text-lg font-bold uppercase tracking-wide text-white">Focus</h4>
          <ul className="mt-3 grid gap-2 text-sm text-fog-300">
            {focus.map((item) => (
              <li key={item} className="flex gap-2.5">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-auto pt-7">
        <Button to={ctaTo} className="w-full">
          {ctaLabel}
        </Button>
      </div>
    </article>
  );
}
