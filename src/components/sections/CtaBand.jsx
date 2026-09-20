import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import Reveal from '../ui/Reveal';

/** Closing call to action for sport pages. */
export default function CtaBand({ title, text, ctaLabel, ctaTo, whatsappMessage }) {
  return (
    <section className="pb-20 sm:pb-28">
      <div className="container-x">
        <Reveal className="rounded-2xl border border-brand/30 bg-gradient-to-r from-brand/15 via-night-800 to-night-800 p-8 sm:p-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold uppercase leading-none tracking-wide text-white sm:text-5xl">{title}</h2>
              <p className="mt-4 text-fog-300">{text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button to={ctaTo} size="lg">
                {ctaLabel}
              </Button>
              <WhatsAppButton size="lg" message={whatsappMessage} />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
