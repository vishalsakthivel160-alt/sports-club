// Single source of truth for business details used across the site.
export const SITE = {
  name: 'Smash Masters',
  fullName: 'Smash Masters Badminton Academy',
  tagline: 'Your Complete Destination for Fitness, Sports & Performance',
  phone: '7094556516',
  phoneHref: 'tel:+917094556516',
  // WhatsApp needs the country code. 91 (India) is assumed for the 10-digit number provided.
  whatsappNumber: '917094556516',
  email: 'rkvishal13@gmail.com',
  address: 'Smash Masters Badminton Academy, 123 Main St, Anytown, India',
  mapsEmbedUrl: import.meta.env.VITE_MAPS_EMBED_URL || '',
  url: (import.meta.env.VITE_SITE_URL || '').replace(/\/$/, ''),
  ogImage: '/images/og-cover.jpg',
};

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/gym', label: 'Gym' },
  { to: '/turf', label: 'Turf' },
  { to: '/badminton', label: 'Badminton' },
  { to: '/about', label: 'About' },
  { to: '/booking', label: 'Booking' },
  { to: '/contact', label: 'Contact' },
];

export const FOOTER_SPORTS = [
  { to: '/gym', label: 'Gym' },
  { to: '/turf#cricket', label: 'Cricket' },
  { to: '/turf#football', label: 'Football' },
  { to: '/badminton', label: 'Badminton' },
];
