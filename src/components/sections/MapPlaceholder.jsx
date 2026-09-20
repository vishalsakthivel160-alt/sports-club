import { MapPin } from 'lucide-react';
import { SITE } from '../../config/site';

/**
 * Shows a Google Maps embed when VITE_MAPS_EMBED_URL is set, otherwise a clean placeholder.
 * (No location is invented; the address is the one supplied by the business.)
 */
export default function MapPlaceholder() {
  if (SITE.mapsEmbedUrl) {
    return (
      <iframe
        title="Smash Masters location on Google Maps"
        src={SITE.mapsEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="h-80 w-full rounded-xl border border-white/10 sm:h-96"
        allowFullScreen
      />
    );
  }
  return (
    <div className="court-lines flex h-72 flex-col items-center justify-center rounded-xl border border-white/10 px-6 text-center sm:h-80">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand text-night-950">
        <MapPin className="h-7 w-7" aria-hidden="true" />
      </span>
      <p className="mt-4 font-display text-2xl font-bold uppercase tracking-wide text-white">Map coming soon</p>
      <p className="mt-2 max-w-md text-sm text-fog-500">{SITE.address}</p>
    </div>
  );
}
