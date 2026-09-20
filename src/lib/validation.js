// Client-side checks mirror the backend rules so people get instant feedback.
// The backend remains the source of truth.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^\+?\d{10,13}$/;

const cleanPhone = (value) => value.replace(/[\s\-()]/g, '');

function validateCommon(values, errors) {
  if (!values.name.trim()) errors.name = 'Name is required';
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters';

  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!EMAIL.test(values.email.trim())) errors.email = 'Enter a valid email address';
}

export function validateEnquiry(values) {
  const errors = {};
  validateCommon(values, errors);

  if (!values.phone.trim()) errors.phone = 'Phone number is required';
  else if (!PHONE.test(cleanPhone(values.phone))) errors.phone = 'Enter a valid phone number (10 to 13 digits)';

  if (!values.sport) errors.sport = 'Please select a sport';
  if (values.message.length > 1000) errors.message = 'Message can be up to 1000 characters';
  return errors;
}

export function validateContact(values) {
  const errors = {};
  validateCommon(values, errors);

  if (values.phone.trim() && !PHONE.test(cleanPhone(values.phone))) {
    errors.phone = 'Enter a valid phone number (10 to 13 digits)';
  }
  const length = values.message.trim().length;
  if (!length) errors.message = 'Message is required';
  else if (length < 10) errors.message = 'Message must be at least 10 characters';
  else if (length > 1000) errors.message = 'Message can be up to 1000 characters';
  return errors;
}

export const todayISO = () => {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
};
