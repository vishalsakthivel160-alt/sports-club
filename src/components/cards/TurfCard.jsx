import { Check, Clock, Info, Users } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import { PRICING_NOTE } from '../../data/turf';
import { enquiryLink } from '../../lib/enquiry';
import { WA_MESSAGES } from '../../lib/whatsapp';

/** Side-by-side comparison card for a turf (cricket or football). */
export default function TurfCard({ turf }) {
  const { title, tag, tagline, idealFor, image, highlights, timing, sport, waKey } = turf;
  const rows = [
    { icon: Users, label: 'Ideal for', value: idealFor },
    { icon: Clock, label: 'Timing', value: timing },
    { icon: Info, label: 'Booking information', value: PRICING_NOTE },
  ];

  return (
    <article id={turf.id} className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-night-800 transition duration-300 hover:border-brand/50 hover:shadow-card">
      <div className="relative">
        <SmartImage
          src={image}
          alt={`${title} at Smash Masters`}
          aspect="16 / 10"
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded bg-brand px-3 py-1 font-display text-base font-bold uppercase tracking-wider text-night-950">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <h3 className="text-4xl font-extrabold uppercase leading-none tracking-wide text-white">{title}</h3>
        <p className="mt-3 text-fog-500">{tagline}</p>

        <ul className="mt-6 grid gap-2.5 text-sm text-fog-300">
          {highlights.map((item) => (
            <li key={item} className="flex gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <dl className="mt-7 space-y-4 border-t border-white/10 pt-6">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-3">
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              <div>
                <dt className="text-xs text-fog-700">{label}</dt>
                <dd className="text-sm text-fog-100">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="mt-auto flex flex-wrap gap-3 pt-8">
          <Button to={enquiryLink({ sport })}>Enquire Now</Button>
          <WhatsAppButton message={WA_MESSAGES[waKey]} label="WhatsApp" />
        </div>
      </div>
    </article>
  );
}
