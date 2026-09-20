// In dev the Vite proxy forwards /api to the backend. In production set VITE_API_URL.
const BASE = (import.meta.env.VITE_API_URL || '/api').replace(/\/$/, '');

export class ApiError extends Error {
  constructor(message, status = 0, fieldErrors = []) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

async function post(path, payload) {
  let response;
  try {
    response = await fetch(`${BASE}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiError('We could not reach the server. Check your connection or message us on WhatsApp.');
  }

  let data = null;
  try {
    data = await response.json();
  } catch {
    /* non-JSON response */
  }

  if (!response.ok || !data?.success) {
    throw new ApiError(data?.message || 'Something went wrong. Please try again.', response.status, data?.errors || []);
  }
  return data;
}

export const submitEnquiry = (payload) => post('/enquiry', payload);
export const submitContact = (payload) => post('/contact', payload);
