import { photo } from './images';

// `count` = how many photos to look for in /public/images/<key>/<key>-1 ... <key>-<count>
// Lower a count (or delete a line) if you have fewer photos for a category.
export const GALLERY_CATEGORIES = [
  { key: 'gym', label: 'Gym', count: 8 },
  { key: 'turf', label: 'Turf', count: 3 },
  { key: 'cricket', label: 'Cricket', count: 3 },
  { key: 'football', label: 'Football', count: 3 },
  { key: 'badminton', label: 'Badminton', count: 6 },
  { key: 'coaches', label: 'Coaches', count: 2 },
  { key: 'players', label: 'Players', count: 3 },
  { key: 'training', label: 'Training', count: 3 },
  { key: 'events', label: 'Events', count: 3 },
  { key: 'facilities', label: 'Facilities', count: 3 },
];

// Placeholder shapes only matter while a photo is missing. Real photos keep their own ratio.
const RATIOS = ['4 / 3', '3 / 4', '1 / 1', '4 / 3', '3 / 4', '4 / 3'];

// Round-robin across categories so the "All" view is varied instead of grouped.
export const GALLERY_ITEMS = GALLERY_CATEGORIES.flatMap(({ key, label, count }, order) =>
  Array.from({ length: count }, (_, i) => ({
    id: `${key}-${i + 1}`,
    category: key,
    src: photo(key, i + 1),
    ratio: RATIOS[(i + order) % RATIOS.length],
    alt: `${label} at Smash Masters, photo ${i + 1}`,
    caption: label,
    n: i,
    order,
  }))
).sort((a, b) => a.n - b.n || a.order - b.order);

export const itemsFor = (...keys) => GALLERY_ITEMS.filter((item) => keys.includes(item.category));
