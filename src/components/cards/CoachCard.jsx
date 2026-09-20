import { Check, User } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

export default function CoachCard({ name, role, image, points = [] }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-night-800 transition duration-300 hover:border-brand/50 hover:shadow-card">
      <SmartImage
        src={image}
        alt={`${role} ${name}`}
        aspect="4 / 3"
        icon={User}
        imgClassName="object-top transition-transform duration-700 group-hover:scale-105"
      />
      <div className="p-6 sm:p-7">
        <p className="text-sm font-semibold text-brand">{role}</p>
        <h3 className="mt-1 text-3xl font-extrabold uppercase tracking-wide text-white">{name}</h3>
        <ul className="mt-4 space-y-2 text-sm text-fog-300">
          {points.map((point) => (
            <li key={point} className="flex gap-2.5">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
