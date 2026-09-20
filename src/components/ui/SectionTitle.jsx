/** Heading + short orange divider + optional intro (the divider mirrors the reference template). */
export default function SectionTitle({ title, subtitle, id, align = 'center', as: Tag = 'h2', className = '' }) {
  const center = align === 'center';
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''} ${className}`}>
      <Tag id={id} className="text-4xl font-extrabold uppercase leading-[1.02] tracking-wide text-white sm:text-5xl">{title}</Tag>
      <span className={`mt-5 block h-[3px] w-14 bg-brand ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
      {subtitle && <p className="mt-5 text-base leading-relaxed text-fog-500 sm:text-lg">{subtitle}</p>}
    </div>
  );
}
