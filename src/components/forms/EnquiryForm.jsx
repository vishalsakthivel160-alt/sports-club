import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import Field from './Field';
import Button from '../ui/Button';
import WhatsAppButton from '../ui/WhatsAppButton';
import useFormSubmit from '../../hooks/useFormSubmit';
import { submitEnquiry } from '../../lib/api';
import { SPORT_OPTIONS, sportFromKey } from '../../lib/enquiry';
import { todayISO, validateEnquiry } from '../../lib/validation';

const EMPTY = { name: '', phone: '', email: '', sport: '', preferredDate: '', preferredTime: '', message: '', website: '' };

const programMessage = (program) => (program ? `I'd like to enquire about: ${program}.` : '');

/** Booking / enquiry form. Reads ?sport=gym&program=... from the URL to pre-fill itself. */
export default function EnquiryForm() {
  const [params] = useSearchParams();
  const presetSport = sportFromKey(params.get('sport') || '');
  const presetProgram = params.get('program') || '';

  const [values, setValues] = useState({ ...EMPTY, sport: presetSport, message: programMessage(presetProgram) });
  const [clientErrors, setClientErrors] = useState({});
  const { status, message, serverErrors, submit, reset } = useFormSubmit(submitEnquiry);

  // Keep the form in sync if the visitor clicks another "Enquire" button while already on this page.
  useEffect(() => {
    if (!presetSport && !presetProgram) return;
    setValues((v) => ({ ...v, sport: presetSport || v.sport, message: presetProgram ? programMessage(presetProgram) : v.message }));
  }, [presetSport, presetProgram]);

  const errors = { ...serverErrors, ...clientErrors };
  const submitting = status === 'submitting';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setClientErrors((c) => ({ ...c, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validateEnquiry(values);
    setClientErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return;
    }
    const ok = await submit({ ...values, name: values.name.trim(), email: values.email.trim(), phone: values.phone.trim() });
    if (ok) setValues({ ...EMPTY });
  };

  const inputProps = (name) => ({
    id: `enquiry-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': errors[name] ? 'true' : undefined,
    'aria-describedby': errors[name] ? `enquiry-${name}-error` : undefined,
    className: `input ${errors[name] ? 'input-error' : ''}`,
  });

  if (status === 'success') {
    return (
      <div className="py-6 text-center" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-extrabold uppercase tracking-wide text-white">Enquiry sent</h3>
        <p className="mx-auto mt-3 max-w-sm text-fog-300">{message}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button variant="outline" onClick={reset}>
            Send another enquiry
          </Button>
          <WhatsAppButton label="Continue on WhatsApp" />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="enquiry-name" error={errors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('name')} />
      </Field>
      <Field label="Phone number" htmlFor="enquiry-phone" error={errors.phone}>
        <input type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" {...inputProps('phone')} />
      </Field>
      <Field label="Email" htmlFor="enquiry-email" error={errors.email}>
        <input type="email" autoComplete="email" placeholder="you@example.com" {...inputProps('email')} />
      </Field>
      <Field label="Select sport" htmlFor="enquiry-sport" error={errors.sport}>
        <select {...inputProps('sport')}>
          <option value="">Choose a sport</option>
          {SPORT_OPTIONS.map(({ value }) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Preferred date" htmlFor="enquiry-preferredDate" error={errors.preferredDate} optional>
        <input type="date" min={todayISO()} {...inputProps('preferredDate')} />
      </Field>
      <Field label="Preferred time" htmlFor="enquiry-preferredTime" error={errors.preferredTime} optional>
        <input type="time" {...inputProps('preferredTime')} />
      </Field>
      <Field label="Message" htmlFor="enquiry-message" error={errors.message} optional className="sm:col-span-2">
        <textarea rows={4} placeholder="Tell us what you are looking for" {...inputProps('message')} />
      </Field>

      {/* Honeypot: hidden from people, tempting for bots. */}
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
            'Send Enquiry'
          )}
        </Button>
        <p className="mt-3 text-center text-xs text-fog-700">Contact us for latest pricing and availability.</p>
      </div>
    </form>
  );
}
