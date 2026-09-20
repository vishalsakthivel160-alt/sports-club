import Seo from '../components/ui/Seo';
import PageHero from '../components/ui/PageHero';
import Gallery from '../components/sections/Gallery';
import { GALLERY_ITEMS } from '../data/gallery';
import { photo } from '../data/images';

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery – Gym, Turf & Badminton Photos | Smash Masters"
        description="Browse photos of the Smash Masters gym, cricket and football turf, badminton courts, coaches, players, training sessions and events."
        path="/gallery"
      />
      <PageHero
        tag="Gallery"
        title="Life at Smash Masters"
        subtitle="Gym, turf, badminton, training and events. Filter by category and tap a photo to view it full screen."
        image={photo('events', 1)}
        imageAlt="Smash Masters event"
      />
      <section className="section-y" aria-label="Photo gallery">
        <div className="container-x">
          <Gallery items={GALLERY_ITEMS} />
        </div>
      </section>
    </>
  );
}
