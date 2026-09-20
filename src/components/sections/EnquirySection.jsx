import { Phone } from 'lucide-react';
import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import EnquiryForm from '../forms/EnquiryForm';
import { SITE } from '../../config/site';

// A true sequence, so numbering is meaningful here.
const STEPS = [
  { title: 'Send your enquiry', text: 'Choose your sport and share a preferred date and time.' },
  { title: 'We confirm availability', text: 'Our team contacts you with availability and current pricing.' },
  { title: 'Show up and play', text: 'Arrive ready to train, play or compete.' },
];

/** Booking / enquiry block. id="booking" is the target of every "Book Now" button. */
export default function EnquirySection() {
  return (
    <section id="booking" className="section-y border-y border-white/10 bg-night-800/40" aria-labelledby="booking-title">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <Reveal>
          <SectionTitle id="booking-title" align="left" title="Book Your Session" subtitle="Tell us what you would like to play or train for. We will get back to you with availability and pricing." />

          <ol className="mt-10 space-y-6">
            {STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-brand font-display text-lg font-bold text-brand">
                  {i + 1}
                </span>
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-wide text-white">{step.title}</h3>
                  <p className="mt-1 text-sm text-fog-500">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppButton />
            <Button href={SITE.phoneHref} variant="outline">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call {SITE.phone}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120} className="rounded-2xl border border-white/10 bg-night-800/80 p-6 shadow-card sm:p-9">
          <EnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}
