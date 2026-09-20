import { Check } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import ProgramCard from '../components/cards/ProgramCard';
import ServiceCard from '../components/cards/ServiceCard';
import IconCell from '../components/cards/IconCell';
import CtaBand from '../components/sections/CtaBand';
import { ACADEMY, FACILITIES, OFFERINGS, PROGRAMS, SERVICES } from '../data/badminton';
import { photo } from '../data/images';
import { enquiryLink } from '../lib/enquiry';
import { WA_MESSAGES } from '../lib/whatsapp';

export default function Badminton() {
  return (
    <>
      <Seo
        title="Smash Masters Badminton Academy – Coaching & Programs"
        description="Smash Masters Badminton Academy: certified coaches, 8 professional courts and programs for beginners, intermediate, advanced and junior players (ages 6–12)."
        path="/badminton"
      />

      <PageHero
        tag="Badminton"
        title="Welcome to Smash Masters Badminton Academy"
        subtitle="Your premier destination for badminton training and excellence."
        image={photo('badminton', 1)}
        imageAlt="Badminton courts at Smash Masters"
      >
        <Button to="/badminton#programs" variant="light">
          View Programs
        </Button>
        <Button to={enquiryLink({ sport: 'badminton' })}>Enquire Now</Button>
        <WhatsAppButton message={WA_MESSAGES.badminton} />
      </PageHero>

      <section className="section-y" aria-labelledby="mission-title">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTitle id="mission-title" align="left" title="Our Mission" />
            <p className="mt-6 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">{ACADEMY.mission}</p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="text-3xl font-extrabold uppercase tracking-wide text-white">What We Offer</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {OFFERINGS.map((item) => (
                <li key={item} className="flex gap-3 text-fog-300">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-night-950" aria-labelledby="story-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative">
            <SmartImage
              src={photo('badminton', 2)}
              alt="Players at Smash Masters Badminton Academy"
              aspect="4 / 3"
              className="rounded-2xl border border-white/10"
            />
            <span className="absolute -bottom-5 left-5 bg-brand px-5 py-3 font-display text-2xl font-extrabold uppercase tracking-wider text-night-950">
              Founded 2010
            </span>
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle id="story-title" align="left" title="Our Story" />
            {ACADEMY.story.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-relaxed text-fog-300">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-night-950" aria-labelledby="facilities-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle id="facilities-title" title="Academy Facilities" subtitle="Everything you need for a full session, before and after you play." />
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {FACILITIES.map(({ icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 4) * 70}>
                <IconCell icon={icon} title={title} text={text} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section-y" aria-labelledby="programs-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle id="programs-title" title="Badminton Programs" subtitle="Pick the level that fits you. Fees shown are per program." />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PROGRAMS.map((program, i) => (
              <Reveal key={program.title} delay={(i % 4) * 80}>
                <ProgramCard
                  title={program.title}
                  badge={program.badge}
                  fees={program.fees}
                  meta={program.meta}
                  focus={program.focus}
                  ctaTo={enquiryLink({ sport: 'badminton', program: program.title })}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-night-950" aria-labelledby="services-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle id="services-title" title="Badminton Services" />
          </Reveal>
          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 80}>
                <ServiceCard {...service} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Start Your Badminton Journey"
        text="Tell us your level and we will help you choose the right program."
        ctaLabel="Enquire Now"
        ctaTo={enquiryLink({ sport: 'badminton' })}
        whatsappMessage={WA_MESSAGES.badminton}
      />
    </>
  );
}
