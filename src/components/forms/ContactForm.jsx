import { useState } from 'react';
import { CheckCircle2, MessageSquare } from 'lucide-react';
import Field from './Field';
import Button from '../ui/Button';
import { validateContact } from '../../lib/validation';
import { SITE } from '../../config/site';

const EMPTY = { name: '', phone: '', message: '' };

/** General "send us a message" form -> sends details to WhatsApp */
export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [clientErrors, setClientErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [waUrl, setWaUrl] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    setClientErrors((c) => ({ ...c, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validateContact(values);
    setClientErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    const messageText = `💬 NEW CONTACT MESSAGE

Name: ${values.name.trim()}
Phone: ${values.phone.trim()}
Message: ${values.message.trim()}

Please contact the customer as soon as possible.`;

    const cleanNumber = SITE.whatsappNumber.replace(/\D/g, '');
    const url = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(messageText)}`;

    setWaUrl(url);
    window.open(url, '_blank');
    setStatus('success');
    setValues(EMPTY);
  };

  const handleReset = () => {
    setStatus('idle');
    setWaUrl('');
    setClientErrors({});
  };

  const inputProps = (name) => ({
    id: `contact-${name}`,
    name,
    value: values[name],
    onChange: handleChange,
    'aria-invalid': clientErrors[name] ? 'true' : undefined,
    'aria-describedby': clientErrors[name] ? `contact-${name}-error` : undefined,
    className: `input ${clientErrors[name] ? 'input-error' : ''}`,
  });

  if (status === 'success') {
    return (
      <div className="py-6 text-center" role="status">
        <CheckCircle2 className="mx-auto h-14 w-14 text-brand" aria-hidden="true" />
        <h3 className="mt-5 text-3xl font-extrabold uppercase tracking-wide text-white">Message Ready in WhatsApp</h3>
        <p className="mx-auto mt-3 max-w-sm text-fog-300">
          Message details are ready in WhatsApp. If WhatsApp did not open automatically, click the button below.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {waUrl && (
            <Button href={waUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              Open in WhatsApp
            </Button>
          )}
          <Button variant="outline" onClick={handleReset}>
            Send another message
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="relative grid gap-5 sm:grid-cols-2">
      <Field label="Name" htmlFor="contact-name" error={clientErrors.name}>
        <input type="text" autoComplete="name" placeholder="Your full name" {...inputProps('name')} />
      </Field>

      <Field label="Phone" htmlFor="contact-phone" error={clientErrors.phone}>
        <input type="tel" autoComplete="tel" inputMode="tel" placeholder="10-digit mobile number" {...inputProps('phone')} />
      </Field>

      <Field label="Message" htmlFor="contact-message" error={clientErrors.message} className="sm:col-span-2">
        <textarea rows={5} placeholder="How can we help?" {...inputProps('message')} />
      </Field>

      <div className="sm:col-span-2">
        <Button type="submit" size="lg" className="w-full">
          SEND MESSAGE
        </Button>
      </div>
    </form>
  );
}

