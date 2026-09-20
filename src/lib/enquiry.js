// Values must match SPORTS in backend/models/Enquiry.js
export const SPORT_OPTIONS = [
  { key: 'gym', value: 'Gym' },
  { key: 'cricket', value: 'Cricket Turf' },
  { key: 'football', value: 'Football Turf' },
  { key: 'badminton', value: 'Badminton' },
];

export const sportFromKey = (key) => SPORT_OPTIONS.find((option) => option.key === key)?.value || '';

/** Link to the booking form, optionally preselecting a sport and program. */
export function enquiryLink({ sport, program } = {}) {
  const params = new URLSearchParams();
  if (sport) params.set('sport', sport);
  if (program) params.set('program', program);
  const query = params.toString();
  return `/contact${query ? `?${query}` : ''}#booking`;
}
