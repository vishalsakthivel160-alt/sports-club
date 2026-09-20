import { useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import SmartImage from '../ui/SmartImage';

const arrowClass =
  'absolute top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/40 bg-night-950/60 text-white transition hover:border-brand hover:bg-brand hover:text-night-950 sm:h-12 sm:w-12';

/** Full-screen viewer with keyboard (Esc, arrows), swipe and focus handling. */
export default function Lightbox({ items, index, resolved, onClose, onIndexChange }) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const item = items[index];

  const go = useCallback((step) => onIndexChange((index + step + items.length) % items.length), [index, items.length, onIndexChange]);

  // Lock page scroll and restore focus when the viewer closes.
  useEffect(() => {
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'Tab') {
        // Keep keyboard focus inside the dialog.
        const focusable = dialogRef.current?.querySelectorAll('button');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [go, onClose]);

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(dx) > 50) go(dx > 0 ? -1 : 1);
  };

  return createPortal(
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-[70] flex flex-col bg-night-950/95 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="font-display text-xl font-bold uppercase tracking-wide text-white">
          {item.caption} <span className="ml-2 font-sans text-sm font-normal text-fog-500">{index + 1} / {items.length}</span>
        </p>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close photo viewer"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white/10"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-14 pb-8 sm:px-20"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        {items.length > 1 && (
          <button type="button" aria-label="Previous photo" className={`${arrowClass} left-2 sm:left-5`} onClick={() => go(-1)}>
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <SmartImage key={item.id} src={resolved[item.id] || item.src} alt={item.alt} fit="contain" aspect={item.ratio} priority className="max-w-full !bg-transparent" />

        {items.length > 1 && (
          <button type="button" aria-label="Next photo" className={`${arrowClass} right-2 sm:right-5`} onClick={() => go(1)}>
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>,
    document.body
  );
}
