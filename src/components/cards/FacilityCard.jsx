import SmartImage from '../ui/SmartImage';

/** Photo card for gym facilities and other spaces. Falls back to an icon placeholder without a photo. */
export default function FacilityCard({ icon: Icon, title, description, image }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-white/10 bg-night-800 transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-card">
      <div className="relative">
        <SmartImage
          src={image}
          alt={`${title} at Smash Masters`}
          aspect="4 / 3"
          icon={Icon}
          imgClassName="transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-md bg-brand text-night-950">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>
      <div className="p-5 sm:p-6">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-white">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-fog-500">{description}</p>
      </div>
    </article>
  );
}
