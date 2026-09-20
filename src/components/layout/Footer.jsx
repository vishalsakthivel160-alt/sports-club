import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import { FOOTER_SPORTS, NAV_LINKS, SITE } from '../../config/site';
import { enquiryLink } from '../../lib/enquiry';

const linkClass = 'text-fog-500 transition-colors hover:text-white';

function FooterColumn({ title, children }) {
  return (
    <div>
      <h3 className="font-display text-xl font-bold uppercase tracking-wider text-white">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm">{children}</ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-night-950">
      {/* Closing call to action */}
      <div className="border-b border-white/10 bg-gradient-to-r from-night-800 via-night-900 to-night-800">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 sm:py-14 md:flex-row md:items-center">
          <div>
            <h2 className="text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">Ready to Start Your Game?</h2>
            <p className="mt-3 max-w-xl text-fog-500">Gym, turf or badminton: tell us what you want to play and we will take it from there.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to={enquiryLink()} size="lg">
              Join Us Today
            </Button>
            <WhatsAppButton size="lg" label="WhatsApp Us" />
          </div>
        </div>
      </div>

      <div className="container-x grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-fog-500">
            Gym, cricket and football turf, and a badminton academy in one destination for fitness, sport and performance.
          </p>
        </div>

        <FooterColumn title="Quick Links">
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <Link to={to} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Sports">
          {FOOTER_SPORTS.map(({ to, label }) => (
            <li key={label}>
              <Link to={to} className={linkClass}>
                {label}
              </Link>
            </li>
          ))}
        </FooterColumn>

        <FooterColumn title="Contact">
          <li className="flex gap-3 text-fog-500">
            <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>
              Phone:{' '}
              <a href={SITE.phoneHref} className="text-fog-100 hover:text-brand">
                {SITE.phone}
              </a>
            </span>
          </li>
          <li className="flex gap-3 text-fog-500">
            <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span className="min-w-0 break-words">
              Email:{' '}
              <a href={`mailto:${SITE.email}`} className="text-fog-100 hover:text-brand">
                {SITE.email}
              </a>
            </span>
          </li>
          <li className="flex gap-3 text-fog-500">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            <span>{SITE.address}</span>
          </li>
        </FooterColumn>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 text-center text-xs text-fog-700 sm:text-left">
          © {new Date().getFullYear()} Smash Masters. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
