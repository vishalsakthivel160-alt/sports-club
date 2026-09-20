import { Link } from 'react-router-dom';
import SmartImage from '../ui/SmartImage';

/** Tall image card that links to a sport page (home page "Explore Facilities"). */
export default function SportCard({ title, text, image, to }) {
  return (
    <Link
      to={to}
      className="group relative block aspect-[4/5] overflow-hidden rounded-xl border border-white/10 transition duration-300 hover:border-brand/60 hover:shadow-card"
    >
      <SmartImage
        src={image}
        alt={`${title} at Smash Masters`}
        className="absolute inset-0"
        imgClassName="transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-night-950 via-night-950/40 to-transparent" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <h3 className="text-4xl font-extrabold uppercase leading-none tracking-wide text-white">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-fog-300">{text}</p>
        <span className="mt-4 inline-block border-b-2 border-brand pb-0.5 text-sm font-semibold text-white transition-all group-hover:pr-3">
          Explore
        </span>
      </div>
    </Link>
  );
}
