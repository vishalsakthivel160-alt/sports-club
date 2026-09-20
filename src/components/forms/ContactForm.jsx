import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import Field from './Field';
import Button from '../ui/Button';
import useFormSubmit from '../../hooks/useFormSubmit';
import { submitContact } from '../../lib/api';
import { validateContact } from '../../lib/validation';

const EMPTY = { name: '', email: '', phone: '', message: '', website: '' };

/** General "send us a message" form -> POST /api/contact */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [clientErrors, setClientErrors] = useState({});
  const { status, message, serverErrors, submit, reset } = useFormSubmit(submitContact);

  const errors = { ...serverErrors, ...clientErrors };
  const submitting = status === 'submitting';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setClientErrors((c) => ({ ...c, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validateContact(values);
    setClientErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    const ok = await submit({ ...values, name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim() });
    if (ok) setValues(EMPTY);
  };

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `contact-${name}-error` : undefined,
    className: `input ${errors[name] ? 'input-error' : ''}`,
  });

  if (status === 'success') {
    return (
      <div className="py-6 text-center" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-extrabold uppercase tracking-wide text-white">Message sent</h3>
        <p className="mx-auto mt-3 max-w-sm text-fog-300">{message}</p>
        <Button variant="outline" className="mt-7" onClick={reset}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="contact-name" error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('name')} />
      </Field>
      <Field label="Email" htmlFor="contact-email" error={errors.email}>
        <input type="email" autoComplete="email" placeholder="you@example.com" {...inputProps('email')} />
      </Field>
      <Field label="Phone" htmlFor="contact-phone" error={errors.phone} optional className="sm:col-span-2">
        <input type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" {...inputProps('phone')} />
      </Field>
      <Field label="Message" htmlFor="contact-message" error={errors.message} className="sm:col-span-2">
        <textarea rows={5} placeholder="How can we help?" {...inputProps('message')} />
      </Field>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={handleChange} />
        </label>
      </div>

      {status === 'error' && (
        <div role="alert" className="flex gap-3 rounded-md border border-red-400/40 bg-red-500/10 p-4 text-sm text-red-200 sm:col-span-2">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p>{message}</p>
        </div>
      )}

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" disabled={submitting} className="w-full">
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send Message'
          )}
        </Button>
      </div>
    </form>
  );
}
