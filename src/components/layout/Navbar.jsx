import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../ui/Logo';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import { NAV_LINKS } from '../../config/site';
import { enquiryLink } from '../../lib/enquiry';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu after navigating, or when Escape is pressed.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? 'border-b border-white/10 bg-night-950/90 backdrop-blur-md'
          : 'bg-gradient-to-b from-night-950/85 to-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between sm:h-[4.5rem]">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `relative py-3 text-[12px] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive ? 'text-white' : 'text-fog-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-[2px] origin-center bg-brand transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button to={enquiryLink()} size="sm" className="hidden sm:inline-flex">
            Book Now
          </Button>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white transition hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-white/10 lg:hidden">
          <nav aria-label="Mobile" className="container-x py-4">
            <ul>
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `flex items-center justify-between border-b border-white/10 py-3.5 font-display text-2xl font-bold uppercase tracking-wide ${
                        isActive ? 'text-brand' : 'text-white'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid gap-3 pb-4">
              <Button to={enquiryLink()} size="lg">
                Book Now
              </Button>
              <WhatsAppButton size="lg" />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
