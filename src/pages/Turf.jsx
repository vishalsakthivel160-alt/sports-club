import { Phone } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import TurfCard from '../components/cards/TurfCard';
import CtaBand from '../components/sections/CtaBand';
import { PRICING_NOTE, TURFS } from '../data/turf';
import { photo } from '../data/images';
import { SITE } from '../config/site';
import { enquiryLink } from '../lib/enquiry';
import { WA_MESSAGES } from '../lib/whatsapp';

export default function Turf() {
  return (
    <>
      <Seo
        title="Cricket & Football Turf – Smash Masters"
        description="Book the cricket and football turf at Smash Masters for practice sessions, matches, team bookings and tournaments. Contact us for latest pricing and availability."
        path="/turf"
      />

      <PageHero
        tag="Turf"
        title="Cricket & Football Turf"
        subtitle="Professional playing surfaces for practice, matches, team bookings and tournaments."
        image={photo('turf', 1)}
        imageAlt="Smash Masters turf"
      >
        <Button to={enquiryLink({ sport: 'cricket' })}>Book Now</Button>
        <WhatsAppButton message={WA_MESSAGES.general} />
      </PageHero>

      <section className="section-y" aria-labelledby="turf-compare-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle id="turf-compare-title" title="Choose Your Game" subtitle={PRICING_NOTE} />
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2 lg:gap-8">
            {TURFS.map((turf, i) => (
              <Reveal key={turf.id} delay={i * 100}>
                <TurfCard turf={turf} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>


      <section className="section-y bg-night-950" aria-labelledby="turf-booking-title">
        <div className="container-x">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionTitle id="turf-booking-title" title="Booking Information" />
            <p className="mt-6 text-lg text-fog-300">{PRICING_NOTE}</p>
            <p className="mt-2 text-fog-500">Call, message us on WhatsApp or send an enquiry with your preferred date and time.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button to={enquiryLink({ sport: 'cricket' })}>Send Enquiry</Button>
              <Button href={SITE.phoneHref} variant="outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {SITE.phone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Book Your Next Match"
        text="Tell us your sport, group size and preferred slot. We will confirm availability."
        ctaLabel="Book / Enquire"
        ctaTo={enquiryLink({ sport: 'cricket' })}
        whatsappMessage={WA_MESSAGES.general}
      />
    </>
  );
}
