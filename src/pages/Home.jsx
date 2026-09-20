import Seo from '../components/ui/Seo';
import SectionTitle from '../components/ui/SectionTitle';
import SmartImage from '../components/ui/SmartImage';
import Reveal from '../components/ui/Reveal';
import Button from '../components/ui/Button';
import Hero from '../components/sections/Hero';
import StatsBar from '../components/sections/StatsBar';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import EnquirySection from '../components/sections/EnquirySection';
import ContactSection from '../components/sections/ContactSection';
import SportCard from '../components/cards/SportCard';
import { SPORT_CARDS } from '../data/home';
import { photo } from '../data/images';

export default function Home() {
  return (
    <>
      <Seo
        title="Smash Masters – Gym, Turf & Badminton Academy"
        description="Train. Play. Perform. Smash Masters offers a modern gym, cricket and football turf, and a badminton academy with 8 courts and certified coaches."
        path="/"
      />
      <Hero />
      <StatsBar />

      <section id="facilities" className="section-y" aria-labelledby="facilities-title">
        <div className="container-x">
          <Reveal>
            <SectionTitle
              id="facilities-title"
              title="Explore Our Facilities"
              subtitle="Four ways to train and play, all in one destination."
            />
          </Reveal>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {SPORT_CARDS.map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <SportCard {...card} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-night-950" aria-labelledby="about-title">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative pb-10 pr-6 sm:pr-10">
            <SmartImage
              src={photo('facilities', 1)}
              alt="Smash Masters sports facility"
              aspect="4 / 5"
              className="rounded-2xl border border-white/10"
            />
            <SmartImage
              src={photo('training', 1)}
              alt="Training session at Smash Masters"
              aspect="1 / 1"
              className="absolute bottom-0 right-0 w-1/2 rounded-2xl border-4 border-night-950"
            />
          </Reveal>

          <Reveal delay={100}>
            <SectionTitle id="about-title" align="left" title="Built for Every Player" />
            <p className="mt-6 leading-relaxed text-fog-300">
              Smash Masters brings gym training, turf sports and badminton coaching together in one place. Whether you are getting fit,
              booking a match with friends or training for competition, our facilities and coaches are here to help you play better.
            </p>
            <p className="mt-4 leading-relaxed text-fog-500">
              Smash Masters Badminton Academy was founded in 2010 by passionate badminton enthusiasts who wanted to give players a platform
              to develop their skills and compete at higher levels.
            </p>
            <Button to="/about" className="mt-8">
              Read More
            </Button>
          </Reveal>
        </div>
      </section>

      <WhyChooseUs />

      <EnquirySection />
      <ContactSection />
    </>
  );
}
