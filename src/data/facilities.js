import { GYM_FACILITIES } from './gym';
import { TURFS } from './turf';
import { FACILITIES as BADMINTON_FACILITIES } from './badminton';

export const ALL_FACILITIES = [
  ...GYM_FACILITIES.map((f) => ({ ...f, category: 'gym' })),
  ...TURFS.map((f) => ({ ...f, category: 'turf' })),
  ...BADMINTON_FACILITIES.map((f) => ({ ...f, category: 'badminton' })),
];

export { GYM_FACILITIES, TURFS, BADMINTON_FACILITIES };
