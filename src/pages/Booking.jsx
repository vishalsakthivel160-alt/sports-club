import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Reveal from '../components/ui/Reveal';
import BookingForm from '../components/BookingForm';
import WhatsAppButton from '../components/WhatsAppButton';
import { SITE } from '../config/site';

export default function Booking() {
  return (
    <>
      <Seo
        title="Book a Session / Enquiry – Smash Masters"
        description="Book a session for gym, cricket turf, football turf or badminton at Smash Masters. Contact us for slot availability and membership pricing."
        path="/booking"
      />

      <PageHero
        tag="Booking & Enquiry"
        title="Reserve Your Spot"
        subtitle="Select your sport, preferred date and time, or send us an enquiry for memberships and court bookings."
      >
        <WhatsAppButton message="Hi, I would like to book a slot at Smash Masters." />
      </PageHero>

      <section className="section-y" aria-labelledby="booking-form-title">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionTitle id="booking-form-title" title="Online Booking & Enquiry" subtitle="Fill out the form below and our team will get back to you shortly." />
          </Reveal>
          <div className="mt-12 rounded-2xl border border-white/10 bg-night-800 p-6 sm:p-10">
            <BookingForm />
          </div>

          <div className="mt-12 rounded-xl border border-white/10 bg-night-950 p-6 text-center">
            <h3 className="text-xl font-bold uppercase tracking-wide text-white">Prefer Direct Contact?</h3>
            <p className="mt-2 text-fog-300">
              Call us directly at <a href={SITE.phoneHref} className="font-semibold text-brand hover:underline">{SITE.phone}</a> or send us a message on WhatsApp for instant booking assistance.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <WhatsAppButton message="Hi, I would like to book a slot directly." size="lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
