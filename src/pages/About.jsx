import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import SectionTitle from '../components/ui/SectionTitle';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import IconCell from '../components/cards/IconCell';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import CtaBand from '../components/sections/CtaBand';
import { ABOUT_PILLARS } from '../data/home';
import { ACADEMY } from '../data/badminton';
import { photo } from '../data/images';
import { enquiryLink } from '../lib/enquiry';
import { WA_MESSAGES } from '../lib/whatsapp';

const [vision, mission, ...pillars] = ABOUT_PILLARS;

export default function About() {
  return (
    <>
      <Seo
        title="About Smash Masters – Vision, Mission & Coaching Approach"
        description="Learn about Smash Masters: our vision, mission, training philosophy, facilities, coaching approach and commitment to community sports development."
        path="/about"
      />

      <PageHero
        tag="About Us"
        title="About Smash Masters"
        subtitle="A complete destination for fitness, sport and performance."
        image={photo('facilities', 1)}
        imageAlt="Smash Masters facility"
      />

      <section className="section-y" aria-labelledby="vision-title">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
          {[vision, mission].map((item, i) => (
            <Reveal key={item.title} delay={i * 100}>
              <item.icon className="h-10 w-10 text-brand" aria-hidden="true" />
              <h2 id={i === 0 ? 'vision-title' : undefined} className="mt-5 text-5xl font-extrabold uppercase leading-none tracking-wide text-white">
                {item.title}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-fog-300">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-night-950" aria-labelledby="approach-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle id="approach-title" title="How We Work" subtitle="What guides our training, our coaching and our community." />
          </Reveal>
          <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 80}>
                <IconCell {...pillar} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y" aria-labelledby="about-story-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="lg:order-2">
            <SmartImage
              src={photo('players', 1)}
              alt="Players training at Smash Masters"
              aspect="4 / 3"
              className="rounded-2xl border border-white/10"
            />
          </Reveal>
          <Reveal delay={100}>
            <SectionTitle id="about-story-title" align="left" title="Our Story" />
            {ACADEMY.story.map((paragraph) => (
              <p key={paragraph} className="mt-5 leading-relaxed text-fog-300">
                {paragraph}
              </p>
            ))}
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />

      <CtaBand
        title="Come and See for Yourself"
        text="Ask about our gym, turf and badminton programs, or plan a visit."
        ctaLabel="Book Now"
        ctaTo={enquiryLink()}
        whatsappMessage={WA_MESSAGES.general}
      />
    </>
  );
}
