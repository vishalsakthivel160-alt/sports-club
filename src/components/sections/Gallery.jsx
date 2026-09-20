import { useCallback, useMemo, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import SmartImage from '../ui/SmartImage';
import Lightbox from './Lightbox';
import { GALLERY_CATEGORIES } from '../../data/gallery';

/**
 * Masonry gallery with category filters and a full-screen lightbox.
 * Photos keep their natural aspect ratio (CSS columns, no cropping).
 */
export default function Gallery({ items, showFilters = true }) {
  const [active, setActive] = useState('all');
  const [openIndex, setOpenIndex] = useState(null);
  const [resolved, setResolved] = useState({});

  const categories = useMemo(() => GALLERY_CATEGORIES.filter((c) => items.some((i) => i.category === c.key)), [items]);
  const visible = useMemo(() => (active === 'all' ? items : items.filter((i) => i.category === active)), [items, active]);

  // Remember which file extension actually loaded so the lightbox can skip failed guesses.
  const remember = useCallback((id, src) => setResolved((prev) => (prev[id] === src ? prev : { ...prev, [id]: src })), []);
  const closeViewer = useCallback(() => setOpenIndex(null), []);

  const chip = (isActive) =>
    `rounded-full border px-4 py-2 text-sm font-semibold transition ${
      isActive ? 'border-brand bg-brand text-night-950' : 'border-white/20 text-fog-300 hover:border-white/60 hover:text-white'
    }`;

  return (
    <div>
      {showFilters && categories.length > 1 && (
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter photos by category">
          <button type="button" className={chip(active === 'all')} aria-pressed={active === 'all'} onClick={() => setActive('all')}>
            All
          </button>
          {categories.map(({ key, label }) => (
            <button key={key} type="button" className={chip(active === key)} aria-pressed={active === key} onClick={() => setActive(key)}>
              {label}
            </button>
          ))}
        </div>
      )}

      <ul className="columns-1 gap-4 sm:columns-2 lg:columns-3">
        {visible.map((item, index) => (
          <li key={item.id} className="mb-4 break-inside-avoid">
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              aria-label={`View ${item.alt} full screen`}
              className="group relative block w-full overflow-hidden rounded-xl border border-white/10 text-left"
            >
              <SmartImage
                src={item.src}
                alt={item.alt}
                fit="natural"
                aspect={item.ratio}
                imgClassName="transition-transform duration-700 group-hover:scale-105"
                onResolve={(src) => remember(item.id, src)}
              />
              <span className="pointer-events-none absolute inset-0 flex items-end justify-between bg-gradient-to-t from-night-950/85 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="font-display text-xl font-bold uppercase tracking-wide text-white">{item.caption}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-night-950">
                  <ZoomIn className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox items={visible} index={openIndex} resolved={resolved} onClose={closeViewer} onIndexChange={setOpenIndex} />
      )}
    </div>
  );
}
