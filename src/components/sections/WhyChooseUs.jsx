import SectionTitle from '../ui/SectionTitle';
import Reveal from '../ui/Reveal';
import IconCell from '../cards/IconCell';
import { WHY_CHOOSE_US } from '../../data/home';

export default function WhyChooseUs() {
  return (
    <section className="section-y" aria-labelledby="why-title">
      <div className="container-x">
        <Reveal>
          <SectionTitle id="why-title" title="Why Choose Us" subtitle="Everything you need to train, play and improve, in one place." />
        </Reveal>
        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CHOOSE_US.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 70}>
              <IconCell {...item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
