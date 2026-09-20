/** Label + control + inline error. Pass the same `htmlFor` as the input id. */
export default function Field({ label, htmlFor, error, optional = false, className = '', children }) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-fog-100">
        {label}
        {optional && <span className="ml-1.5 font-normal text-fog-700">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}
