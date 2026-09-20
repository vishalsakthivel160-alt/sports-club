/** Compact icon + text card (badminton services, facility lists). */
export default function ServiceCard({ icon: Icon, title, text }) {
  return (
    <article className="group flex gap-4 rounded-xl border border-white/10 bg-night-800/60 p-6 transition duration-300 hover:border-brand/50 hover:bg-night-800">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-night-950">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-2xl font-bold uppercase tracking-wide text-white">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-fog-500">{text}</p>
      </div>
    </article>
  );
}
