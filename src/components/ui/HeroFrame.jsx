/**
 * The outlined frame from the reference template. The orange tag sits on the top border
 * and names the sport or section the visitor is looking at.
 */
export default function HeroFrame({ tag, children, className = '' }) {
  return (
    <div
      className={`frame-draw relative mx-auto max-w-4xl border border-white/60 px-5 pb-10 pt-14 text-center sm:px-12 sm:pb-14 sm:pt-16 ${className}`}
    >
      {tag && (
        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-brand px-5 py-2 font-display text-lg font-bold uppercase tracking-[0.12em] text-night-950 sm:text-xl">
          {tag}
        </span>
      )}
      {children}
    </div>
  );
}
