import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import EnquirySection from '../components/sections/EnquirySection';
import ContactSection from '../components/sections/ContactSection';
import { photo } from '../data/images';

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact & Booking – Smash Masters"
        description="Book a gym, turf or badminton session at Smash Masters. Call 7094556516, message us on WhatsApp or send an enquiry online."
        path="/contact"
      />
      <PageHero
        tag="Contact"
        title="Book or Get in Touch"
        subtitle="Send an enquiry, call us or message us on WhatsApp. We will confirm availability and pricing."
        image={photo('facilities', 2)}
        imageAlt="Smash Masters facility"
      />
      <EnquirySection />
      <ContactSection />
    </>
  );
}
