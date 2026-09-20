import { Mail, MapPin, Phone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import ContactForm from '../forms/ContactForm';
import MapPlaceholder from './MapPlaceholder';
import { SITE } from '../../config/site';

function ContactItem({ icon: Icon, label, children, action }) {
  return (
    <li className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 py-5 first:pt-0">
      <div className="flex min-w-0 items-start gap-4">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-sm text-fog-700">{label}</p>
          <div className="break-words text-lg font-semibold text-white">{children}</div>
        </div>
      </div>
      {action}
    </li>
  );
}

/** Detailed contact block placed at the bottom of the site (home + contact page). */
export default function ContactSection() {
  return (
    <section id="contact" className="section-y" aria-labelledby="contact-heading">
      <div className="container-x">
        <Reveal>
          <SectionTitle id="contact-heading" title="Get in Touch" subtitle="Call, email, message us on WhatsApp or send a note below." />
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul>
              <ContactItem
                icon={Phone}
                label="Phone"
                action={
                  <Button href={SITE.phoneHref} size="sm" variant="outline">
                    Call now
                  </Button>
                }
              >
                <a href={SITE.phoneHref} className="hover:text-brand">
                  {SITE.phone}
                </a>
              </ContactItem>
              <ContactItem
                icon={Mail}
                label="Email"
                action={
                  <Button href={`mailto:${SITE.email}`} size="sm" variant="outline">
                    Send email
                  </Button>
                }
              >
                <a href={`mailto:${SITE.email}`} className="hover:text-brand">
                  {SITE.email}
                </a>
              </ContactItem>
              <ContactItem icon={MapPin} label="Address">
                {SITE.address}
              </ContactItem>
            </ul>
            <div className="mt-8">
              <WhatsAppButton size="lg" className="w-full sm:w-auto" />
            </div>
          </Reveal>

          <Reveal delay={120} className="rounded-2xl border border-white/10 bg-night-800/80 p-6 shadow-card sm:p-9">
            <h3 className="mb-6 text-3xl font-extrabold uppercase tracking-wide text-white">Send us a message</h3>
            <ContactForm />
          </Reveal>
        </div>

        <Reveal className="mt-14">
          <h3 className="mb-5 text-3xl font-extrabold uppercase tracking-wide text-white">Find us</h3>
          <MapPlaceholder />
        </Reveal>
      </div>
    </section>
  );
}
