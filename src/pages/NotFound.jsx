import Seo from '../components/ui/Seo';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <section className="court-lines flex min-h-[80svh] items-center pt-24">
      <Seo title="Page not found – Smash Masters" description="The page you are looking for does not exist." path="/404" />
      <div className="container-x text-center">
        <p className="font-display text-8xl font-black text-brand sm:text-9xl">404</p>
        <h1 className="mt-2 text-4xl font-extrabold uppercase tracking-wide text-white sm:text-5xl">Out of bounds</h1>
        <p className="mx-auto mt-4 max-w-md text-fog-300">That page does not exist. Head back to the court and pick another page.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button to="/">Back to Home</Button>
          <Button to="/contact" variant="outline">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
