// Client-side checks for forms.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidIndianPhone = (phone) => {
  const digits = (phone || '').replace(/[\s\-()]/g, '');
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(digits);
};

export function validateEnquiry(values) {
  const errors = {};

  if (!values.name || !values.name.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (!values.phone || !values.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!isValidIndianPhone(values.phone.trim())) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  }

  if (!values.sport) {
    errors.sport = 'Please select a sport';
  }

  if (values.message && values.message.length > 1000) {
    errors.message = 'Message can be up to 1000 characters';
  }

  return errors;
}

export function validateContact(values) {
  const errors = {};

  if (!values.name || !values.name.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  if (values.email && values.email.trim() && !EMAIL.test(values.email.trim())) {
    errors.email = 'Enter a valid email address';
  }

  if (!values.phone || !values.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!isValidIndianPhone(values.phone.trim())) {
    errors.phone = 'Enter a valid 10-digit Indian mobile number';
  }

  const length = (values.message || '').trim().length;
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

