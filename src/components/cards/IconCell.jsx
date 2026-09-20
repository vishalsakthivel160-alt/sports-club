/** Ruled (borderless) grid cell. Used where a wall of identical boxed cards would feel heavy. */
export default function IconCell({ icon: Icon, title, text }) {
  return (
    <div className="group relative border-t border-white/15 pt-6">
      <span className="absolute -top-px left-0 h-[2px] w-0 bg-brand transition-all duration-500 group-hover:w-full" aria-hidden="true" />
      <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
      <h3 className="mt-4 text-2xl font-bold uppercase tracking-wide text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-fog-500">{text}</p>
    </div>
  );
}
