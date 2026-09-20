import {
  Car,
  CalendarDays,
  Clock,
  Dumbbell,
  Eye,
  Flag,
  LayoutGrid,
  MapPin,
  Medal,
  Presentation,
  Shuffle,
  Sofa,
  Trophy,
  UserCheck,
  Users,
  Wrench,
} from 'lucide-react';

export const ACADEMY = {
  name: 'Smash Masters Badminton Academy',
  mission:
    'To foster a love for badminton while developing skilled players through expert coaching, innovative training methods, and a passion for excellence.',
  story: [
    'Smash Masters Badminton Academy was founded in 2010 by passionate badminton enthusiasts who wanted to create a platform for players to develop their skills and compete at higher levels.',
    'Over the years, the academy has developed players across different skill levels and supported participation in local, national and international competitions.',
  ],
};

export const OFFERINGS = [
  'Expert coaching',
  'Certified coaches',
  'Professional badminton courts',
  'Training equipment',
  'Personalized training',
  'Supportive sports community',
  'Tournament preparation',
];

export const COACHES = [
  {
    name: 'John Doe',
    role: 'Head Coach',
    image: '/images/coaches/coaches-1',
    points: ['10+ years coaching experience', 'Former national player', 'Certified coach'],
  },
  {
    name: 'Jane Smith',
    role: 'Assistant Coach',
    image: '/images/coaches/coaches-2',
    points: ['5+ years coaching experience', 'Certified coach', 'Junior development specialist'],
  },
];

export const FACILITIES = [
  { icon: LayoutGrid, title: '8 Courts', text: '8 well-maintained badminton courts' },
  { icon: Wrench, title: 'Training Equipment', text: 'Professional training equipment' },
  { icon: Shuffle, title: 'Shuttle Machines', text: 'Shuttle machines for repetition practice' },
  { icon: Dumbbell, title: 'Fitness Equipment', text: 'Fitness equipment for conditioning' },
  { icon: Sofa, title: 'Lounge Area', text: 'A comfortable lounge area' },
  { icon: Eye, title: 'Spectator Area', text: 'A spectator area for family and friends' },
  { icon: Car, title: 'Parking', text: 'Parking facilities' },
  { icon: MapPin, title: 'Easy Access', text: 'Easy access to the academy' },
];

const schedule = (value) => ({ icon: CalendarDays, label: 'Schedule', value });
const length = (value) => ({ icon: Clock, label: 'Duration', value });

export const PROGRAMS = [
  {
    title: 'Beginner Program',
    badge: 'Beginner',
    fees: '₹5,000',
    meta: [length('6 weeks'), schedule('Saturdays, 10 AM – 12 PM')],
    focus: ['Basic techniques', 'Footwork', 'Grip', 'Serving', 'Basic rallies', 'Court movement'],
  },
  {
    title: 'Intermediate Program',
    badge: 'Intermediate',
    fees: '₹10,000',
    meta: [length('12 weeks'), schedule('Tuesdays & Thursdays, 6 PM – 8 PM')],
    focus: ['Advanced techniques', 'Strategy', 'Footwork', 'Physical conditioning', 'Match play'],
  },
  {
    title: 'Advanced Program',
    badge: 'Advanced',
    fees: '₹15,000',
    meta: [length('16 weeks'), schedule('Mondays, Wednesdays & Fridays, 7 PM – 9 PM')],
    focus: ['Competitive training', 'Tournament preparation', 'Advanced strategy', 'Performance training', 'Personalized coaching'],
  },
  {
    title: 'Junior Program',
    badge: 'Ages 6–12',
    fees: '₹4,000',
    meta: [
      { icon: Users, label: 'Age', value: '6–12 years' },
      length('8 weeks'),
      schedule('Saturdays, 9 AM – 11 AM'),
    ],
    focus: ['Fun-based learning', 'Fundamentals', 'Coordination', 'Sportsmanship', 'Confidence building'],
  },
];

export const SERVICES = [
  { icon: UserCheck, title: 'Private Coaching', text: 'One-to-one sessions focused on your own game and goals.' },
  { icon: Users, title: 'Group Coaching', text: 'Train alongside other players in structured, coach-led sessions.' },
  { icon: Presentation, title: 'Specialized Clinics', text: 'Focused sessions that target specific skills and techniques.' },
  { icon: Trophy, title: 'Tournament Training', text: 'Match-focused preparation for competitive play.' },
  { icon: Medal, title: 'Internal Tournaments', text: 'Friendly competition among academy players.' },
  { icon: Flag, title: 'External Tournament Preparation', text: 'Get ready for local, national and other outside competitions.' },
];
