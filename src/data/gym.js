import {
  Activity,
  Dumbbell,
  Flame,
  Gauge,
  HeartPulse,
  Scale,
  Timer,
  Trophy,
  UserCheck,
  Weight,
  Wind,
  Zap,
  Clock,
  Layers,
  Users,
} from 'lucide-react';
import { photo } from './images';

export const GYM_GOALS = [
  { icon: Dumbbell, label: 'Strength training' },
  { icon: Flame, label: 'Muscle development' },
  { icon: Scale, label: 'Weight management' },
  { icon: Zap, label: 'Athletic conditioning' },
  { icon: Timer, label: 'Endurance' },
  { icon: Activity, label: 'Functional training' },
  { icon: Trophy, label: 'Sports performance' },
];

export const GYM_FACILITIES = [
  { icon: HeartPulse, title: 'Cardio Zone', description: 'Machines for warm-ups, endurance work and heart-health training.', image: photo('gym', 1) },
  { icon: Dumbbell, title: 'Strength Training', description: 'Resistance equipment for building strength with control.', image: photo('gym', 2) },
  { icon: Weight, title: 'Free Weights', description: 'Dumbbells and barbells for muscle development and power.', image: photo('gym', 3) },
  { icon: Activity, title: 'Functional Training', description: 'Open space for movement-based, full-body conditioning.', image: photo('gym', 4) },
  { icon: Gauge, title: 'Fitness Equipment', description: 'Modern equipment to keep your routine varied.', image: photo('gym', 5) },
  { icon: UserCheck, title: 'Personal Training', description: 'One-to-one guidance built around your goals.', image: photo('gym', 6) },
  { icon: Wind, title: 'Stretching / Recovery Area', description: 'A dedicated space to cool down, stretch and recover.', image: photo('gym', 7) },
];

const duration = 'Flexible. Ask us about plan options.';

const meta = (durationValue, trainingType, suitableFor) => [
  { icon: Clock, label: 'Duration', value: durationValue },
  { icon: Layers, label: 'Training type', value: trainingType },
  { icon: Users, label: 'Suitable for', value: suitableFor },
];

export const GYM_PROGRAMS = [
  {
    title: 'General Fitness',
    description: 'A balanced routine of cardio, strength and mobility to build everyday fitness and energy.',
    meta: meta(duration, 'Cardio, strength and mobility', 'Beginners and anyone getting started'),
  },
  {
    title: 'Weight Loss',
    description: 'Structured training that combines cardio and resistance work to support healthy weight management.',
    meta: meta(duration, 'Cardio and resistance training', 'Members focused on weight management'),
  },
  {
    title: 'Muscle Building',
    description: 'Progressive strength work with free weights and machines to develop muscle size and strength.',
    meta: meta(duration, 'Progressive resistance training', 'Members with a muscle-gain goal'),
  },
  {
    title: 'Strength & Conditioning',
    description: 'Compound lifts and conditioning drills to build power, stability and work capacity.',
    meta: meta(duration, 'Strength and conditioning', 'Intermediate lifters and athletes'),
  },
  {
    title: 'Sports Fitness',
    description: 'Sport-specific conditioning for speed, agility, endurance and better movement on the field or court.',
    meta: meta(duration, 'Speed, agility and endurance', 'Players of cricket, football, badminton and other sports'),
  },
  {
    title: 'Personal Training',
    description: 'One-to-one coaching with a plan built around your goals, schedule and fitness level.',
    meta: meta('Session-based, scheduled with your trainer', 'One-to-one, customised', 'Anyone who wants individual attention'),
  },
];
