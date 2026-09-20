import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the top on route change, or to the element matching the URL #hash. */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      return undefined;
    }

    // Lazy-loaded pages may not have rendered yet, so retry briefly.
    const id = decodeURIComponent(hash.slice(1));
    let attempts = 0;
    let timer;
    const tryScroll = () => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else if (attempts++ < 25) timer = setTimeout(tryScroll, 80);
    };
    timer = setTimeout(tryScroll, 80);
    return () => clearTimeout(timer);
  }, [pathname, hash]);

  return null;
}
