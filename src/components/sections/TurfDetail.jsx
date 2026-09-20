import SectionTitle from '../ui/SectionTitle';
import SmartImage from '../ui/SmartImage';
import Reveal from '../ui/Reveal';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import { enquiryLink } from '../../lib/enquiry';
import { WA_MESSAGES } from '../../lib/whatsapp';

/** Full-width feature section for one turf. `id` matches footer links like /turf#cricket. */
export default function TurfDetail({ turf, reverse = false, tinted = false }) {
  return (
    <section id={turf.id} className={`section-y ${tinted ? 'bg-night-950' : ''}`} aria-labelledby={`${turf.id}-title`}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={reverse ? 'lg:order-2' : ''}>
          <SmartImage
            src={turf.detailImage}
            alt={`${turf.title} in use at Smash Masters`}
            aspect="4 / 3"
            className="rounded-2xl border border-white/10"
          />
        </Reveal>

        <Reveal delay={100}>
          <SectionTitle id={`${turf.id}-title`} align="left" title={turf.heading} subtitle={turf.tagline} />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {turf.features.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-night-800/60 px-4 py-3 text-sm text-fog-100">
                <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button to={enquiryLink({ sport: turf.sport })}>Book / Enquire</Button>
            <WhatsAppButton message={WA_MESSAGES[turf.waKey]} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
