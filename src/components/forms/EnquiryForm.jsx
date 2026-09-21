import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import Field from './Field';
import Button from '../ui/Button';
import { SPORT_OPTIONS, sportFromKey } from '../../lib/enquiry';
import { todayISO, validateEnquiry } from '../../lib/validation';
import { SITE } from '../../config/site';

const EMPTY = { name: '', phone: '', sport: '', preferredDate: '', preferredTime: '', message: '' };

const programMessage = (program) => (program ? `I'd like to enquire about: ${program}.` : '');

/** Booking / enquiry form. Sends enquiry details directly to WhatsApp. */
export default function EnquiryForm() {
  const [params] = useSearchParams();
  const presetSport = sportFromKey(params.get('sport') || '');
  const presetProgram = params.get('program') || '';

  const [values, setValues] = useState({ ...EMPTY, sport: presetSport, message: programMessage(presetProgram) });
  const [clientErrors, setClientErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [waUrl, setWaUrl] = useState('');

  // Keep the form in sync if the visitor clicks another "Enquire" button while already on this page.
  useEffect(() => {
    if (!presetSport && !presetProgram) return;
    setValues((v) => ({ ...v, sport: presetSport || v.sport, message: presetProgram ? programMessage(presetProgram) : v.message }));
  }, [presetSport, presetProgram]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setClientErrors((c) => ({ ...c, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateEnquiry(values);
    setClientErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`enquiry-${firstInvalid}`)?.focus();
      return;
    }

    const messageText = `🏸 NEW SPORTS ENQUIRY

Name: ${values.name.trim()}
Phone: ${values.phone.trim()}
Sport: ${values.sport}
Preferred Date: ${values.preferredDate || 'Not specified'}
Preferred Time: ${values.preferredTime || 'Not specified'}
Message: ${values.message.trim() || 'None'}

Please contact the customer for availability and booking confirmation.`;

    const cleanNumber = SITE.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;
    
    setWaUrl(url);
    window.open(url, '_blank');
    setStatus('success');
    setValues({ ...EMPTY, sport: presetSport });
  };

  const handleReset = () => {
    setStatus('idle');
    setWaUrl('');
    setClientErrors({});
  };

  const inputProps = (name) => ({
    id: `enquiry-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': clientErrors[name] ? 'true' : undefined,
    'aria-describedby': clientErrors[name] ? `enquiry-${name}-error` : undefined,
    className: `input ${clientErrors[name] ? 'input-error' : ''}`,
  });

  if (status === 'success') {
    return (
      <div className="py-6 text-center" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-extrabold uppercase tracking-wide text-white">Enquiry Ready in WhatsApp</h3>
        <p className="mx-auto mt-3 max-w-sm text-fog-300">
          Enquiry details are ready in WhatsApp. If WhatsApp did not open automatically, click the button below.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {waUrl && (
            <Button href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Open in WhatsApp
            </Button>
          )}
          <Button variant="outline" onClick={handleReset}>
            Send another enquiry
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="enquiry-name" error={clientErrors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('name')} />
      </Field>

      <Field label="Phone number" htmlFor="enquiry-phone" error={clientErrors.phone}>
        <input type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" {...inputProps('phone')} />
      </Field>

      <Field label="Select sport" htmlFor="enquiry-sport" error={clientErrors.sport} className="sm:col-span-2">
        <select {...inputProps('sport')}>
          <option value="">Choose a sport</option>
          {SPORT_OPTIONS.map(({ value }) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Preferred date" htmlFor="enquiry-preferredDate" error={clientErrors.preferredDate} optional>
        <input type="date" min={todayISO()} {...inputProps('preferredDate')} />
      </Field>

      <Field label="Preferred time" htmlFor="enquiry-preferredTime" error={clientErrors.preferredTime} optional>
        <input type="time" {...inputProps('preferredTime')} />
      </Field>

      <Field label="Message" htmlFor="enquiry-message" error={clientErrors.message} optional className="sm:col-span-2">
        <textarea rows={4} placeholder="Tell us what you are looking for" {...inputProps('message')} />
      </Field>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full">
          SEND ENQUIRY
        </Button>
        <p className="mt-3 text-center text-xs text-fog-700">Contact us for latest pricing and availability.</p>
      </div>
    </form>
  );
}

