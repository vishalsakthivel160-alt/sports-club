import { Briefcase, CalendarDays, Footprints, Layers, Medal, Repeat, Target, Trophy, Users } from 'lucide-react';
import { photo } from './images';

export const PRICING_NOTE = 'Contact us for latest pricing and availability.';

export const TURFS = [
  {
    id: 'cricket',
    waKey: 'cricket',
    sport: 'cricket',
    tag: 'Cricket',
    title: 'Cricket Turf',
    heading: 'CRICKET TURF',
    tagline: 'A professional playing surface for practice, matches and tournaments.',
    idealFor: 'Teams, clubs and cricket enthusiasts',
    image: photo('cricket', 1),
    detailImage: photo('cricket', 2),
    features: [
      { icon: Layers, label: 'Professional playing surface' },
      { icon: Repeat, label: 'Practice sessions' },
      { icon: Trophy, label: 'Cricket matches' },
      { icon: Users, label: 'Team bookings' },
      { icon: Target, label: 'Training sessions' },
      { icon: CalendarDays, label: 'Weekend games' },
      { icon: Medal, label: 'Tournament hosting' },
    ],
    highlights: ['Professional playing surface', 'Practice sessions and matches', 'Team bookings', 'Tournament hosting'],
    timing: 'Slots on request. Contact us for current timings.',
  },
  {
    id: 'football',
    waKey: 'football',
    sport: 'football',
    tag: 'Football',
    title: 'Football Turf',
    heading: 'FOOTBALL TURF',
    tagline: 'Space for matches, team training and small-sided games.',
    idealFor: 'Teams, friends, corporate groups and football lovers',
    image: photo('football', 1),
    detailImage: photo('football', 2),
    features: [
      { icon: Trophy, label: 'Football matches' },
      { icon: Users, label: 'Team training' },
      { icon: Repeat, label: 'Practice sessions' },
      { icon: Footprints, label: '5-a-side / small-sided games' },
      { icon: Briefcase, label: 'Corporate games' },
      { icon: Medal, label: 'Tournament events' },
    ],
    highlights: ['Football matches', '5-a-side / small-sided games', 'Team training and practice', 'Corporate games and tournaments'],
    timing: 'Slots on request. Contact us for current timings.',
  },
];
