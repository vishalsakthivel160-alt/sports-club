import {
  Award,
  Building2,
  Calendar,
  Dumbbell,
  MapPin,
  Trophy,
  UserCheck,
  Users,
  Wrench,
} from 'lucide-react';
import { photo } from './images';

// Hero slides: the tag changes with the background photo.
export const HERO_SLIDES = [
  { tag: 'Gym', image: photo('gym', 1), alt: 'Training area inside the Smash Masters gym' },
  { tag: 'Cricket Turf', image: photo('cricket', 1), alt: 'Cricket turf at Smash Masters' },
  { tag: 'Football Turf', image: photo('football', 1), alt: 'Football turf at Smash Masters' },
  { tag: 'Badminton', image: photo('badminton', 1), alt: 'Badminton courts at Smash Masters' },
];

// Only facts supplied by the business. Counters animate the numeric ones.
export const STATS = [
  { count: 8, suffix: '+', label: 'Badminton Courts' },
  { word: 'Pro', label: 'Professional Turf' },
  { word: 'Expert', label: 'Coaches' },
  { word: 'Modern', label: 'Gym' },
  { count: 4, label: 'Sports Programs' },
];

export const SPORT_CARDS = [
  {
    title: 'Gym',
    text: 'Strength, cardio and functional training with personal training available.',
    image: photo('gym', 1),
    to: '/gym',
  },
  {
    title: 'Cricket Turf',
    text: 'Practice sessions, matches, team bookings and tournament hosting.',
    image: photo('cricket', 1),
    to: '/turf#cricket',
  },
  {
    title: 'Football Turf',
    text: '5-a-side games, team training, corporate games and tournaments.',
    image: photo('football', 1),
    to: '/turf#football',
  },
  {
    title: 'Badminton',
    text: '8 courts, certified coaches and programs for juniors through advanced players.',
    image: photo('badminton', 1),
    to: '/badminton',
  },
];

export const WHY_CHOOSE_US = [
  { icon: Building2, title: 'Professional Facilities', text: 'Well-maintained courts, turf and gym floor for safe, comfortable play.' },
  { icon: UserCheck, title: 'Experienced Coaches', text: 'Certified badminton coaches with years of hands-on coaching experience.' },
  { icon: Dumbbell, title: 'Multiple Sports', text: 'Gym, cricket, football and badminton at one destination.' },
  { icon: Calendar, title: 'Flexible Training', text: 'Programs for beginners, juniors and advanced players, on weekdays and weekends.' },
  { icon: Users, title: 'Community Environment', text: 'A supportive space with a lounge and spectator area.' },
  { icon: Trophy, title: 'Tournament Opportunities', text: 'Badminton tournament preparation and internal tournaments, plus turf tournament hosting.' },
  { icon: Wrench, title: 'Modern Equipment', text: 'Fitness equipment, shuttle machines and professional training gear.' },
  { icon: MapPin, title: 'Convenient Location', text: 'Easy access with parking facilities.' },
];

export const ABOUT_PILLARS = [
  {
    icon: Award,
    title: 'Vision',
    text: 'A community sports destination where people of every age and ability can train, play and improve in one place.',
  },
  {
    icon: Trophy,
    title: 'Mission',
    text: 'To provide well-maintained facilities, expert coaching and a welcoming environment that makes sport part of everyday life.',
  },
  {
    icon: Dumbbell,
    title: 'Training philosophy',
    text: 'Good training is structured, progressive and personal. We start with fundamentals, then build fitness, technique and match awareness step by step.',
  },
  {
    icon: Building2,
    title: 'Facilities',
    text: 'A gym, cricket and football turf, and eight badminton courts, supported by lounge, spectator and parking facilities.',
  },
  {
    icon: UserCheck,
    title: 'Coaching approach',
    text: 'Coaches meet players at their own level, from first-time beginners to competitive players, with clear goals and honest feedback.',
  },
  {
    icon: Users,
    title: 'Community',
    text: 'Members, teams and families share the same spaces. Our lounge and spectator area make it easy to stay, watch and connect.',
  },
  {
    icon: Calendar,
    title: 'Sports development',
    text: 'Junior through advanced programs, tournament preparation for badminton players and tournament hosting on the turf.',
  },
];
