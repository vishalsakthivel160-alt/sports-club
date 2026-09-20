import { CheckCircle2 } from 'lucide-react';
import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import WhatsAppButton from '../components/ui/WhatsAppButton';
import FacilityCard from '../components/cards/FacilityCard';
import ProgramCard from '../components/cards/ProgramCard';
import CtaBand from '../components/sections/CtaBand';
import { GYM_FACILITIES, GYM_GOALS, GYM_PROGRAMS } from '../data/gym';
import { photo } from '../data/images';
import { enquiryLink } from '../lib/enquiry';
import { WA_MESSAGES } from '../lib/whatsapp';

// Cards are centred on the last row, so an odd count (7 facilities) still looks balanced.
const CARD_WIDTH = 'w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]';

export default function Gym() {
  return (
    <>
      <Seo
        title="Gym & Fitness Training – Smash Masters"
        description="Modern fitness and professional training at Smash Masters: cardio, strength, free weights, functional training, personal training and programs for every goal."
        path="/gym"
      />

      <PageHero
        tag="Gym"
        title="Power Your Performance"
        subtitle="Modern Fitness. Professional Training. Better Results."
        image={photo('gym', 1)}
        imageAlt="Smash Masters gym"
      >
        <Button to={enquiryLink({ sport: 'gym' })}>Join Gym / Enquire Now</Button>
        <WhatsAppButton message={WA_MESSAGES.gym} />
      </PageHero>

      <section className="section-y" aria-labelledby="gym-overview-title">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTitle id="gym-overview-title" align="left" title="Gym Overview" />
            <p className="mt-6 leading-relaxed text-fog-300">
              Our gym is designed for people who want to train with purpose, from first-time members building a routine to athletes
              conditioning for their sport. Every zone supports a different part of your training, so you can move from warm-up to
              heavy lifts to recovery without leaving the floor.
            </p>
            <p className="mt-4 leading-relaxed text-fog-500">
              Whatever your goal, you can train on your own or with a personal trainer who builds a plan around your fitness level and
              schedule.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <h3 className="text-2xl font-bold uppercase tracking-wide text-white">Designed for</h3>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {GYM_GOALS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 rounded-lg border border-white/10 bg-night-800/60 px-4 py-3.5 text-fog-100">
                  <Icon className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-night-950" aria-labelledby="gym-facilities-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle id="gym-facilities-title" title="Gym Facilities" subtitle="Seven areas built around how people actually train." />
          </Reveal>
          <div className="mt-14 flex flex-wrap justify-center gap-6">
            {GYM_FACILITIES.map((facility, i) => (
              <Reveal key={facility.title} delay={(i % 3) * 80} className={CARD_WIDTH}>
                <FacilityCard {...facility} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="programs" className="section-y bg-night-950" aria-labelledby="gym-programs-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              id="gym-programs-title"
              title="Gym Programs"
              subtitle="Choose a program that matches your goal. Contact us for latest pricing and availability."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GYM_PROGRAMS.map((program, i) => (
              <Reveal key={program.title} delay={(i % 3) * 80}>
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  meta={program.meta}
                  ctaTo={enquiryLink({ sport: 'gym', program: program.title })}
                />
              </Reveal>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-fog-500">
            <CheckCircle2 className="h-4 w-4 text-brand" aria-hidden="true" />
            Not sure which program fits? Ask us and we will point you in the right direction.
          </p>
        </div>
      </section>

      <CtaBand
        title="Ready to Start Training?"
        text="Send us an enquiry and we will get back to you about membership, personal training and timings."
        ctaLabel="Join Gym / Enquire Now"
        ctaTo={enquiryLink({ sport: 'gym' })}
        whatsappMessage={WA_MESSAGES.gym}
      />
    </>
  );
}
