import { useCallback, useState } from 'react';
import { ApiError } from '../lib/api';

/**
 * Wraps a submit function with status handling.
 * status: 'idle' | 'submitting' | 'success' | 'error'
 */
export default function useFormSubmit(submitFn) {
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');
  const [serverErrors, setServerErrors] = useState({});

  const submit = useCallback(
    async (payload) => {
      setStatus('submitting');
      setMessage('');
      setServerErrors({});
      try {
        const data = await submitFn(payload);
        setMessage(data.message);
        setStatus('success');
        return true;
      } catch (err) {
        const fieldErrors = {};
        if (err instanceof ApiError) err.fieldErrors.forEach((e) => (fieldErrors[e.field] = e.message));
        setServerErrors(fieldErrors);
        setMessage(err.message || 'Something went wrong. Please try again.');
        setStatus('error');
        return false;
      }
    },
    [submitFn]
  );

  const reset = useCallback(() => {
    setStatus('idle');
    setMessage('');
    setServerErrors({});
  }, []);

  return { status, message, serverErrors, submit, reset };
}
