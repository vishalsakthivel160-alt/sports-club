/**
 * Image path helper. Photos live in frontend/public/images/<category>/<category>-<n>.<ext>
 * e.g. photo('gym', 2) -> /images/gym/gym-2   (the extension is detected automatically)
 */
export const photo = (category, n = 1) => `/images/${category}/${category}-${n}`;
