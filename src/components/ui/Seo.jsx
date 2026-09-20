import { useEffect } from 'react';
import { SITE } from '../../config/site';

function setMeta(attr, key, value) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/** Per-page <title>, meta description, Open Graph and canonical tags. */
export default function Seo({ title, description, path = '/', image = SITE.ogImage }) {
  useEffect(() => {
    const origin = SITE.url || window.location.origin;
    const url = `${origin}${path}`;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:site_name', SITE.name);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', `${origin}${image}`);
    setMeta('name', 'twitter:card', 'summary_large_image');
    setCanonical(url);
  }, [title, description, path, image]);

  return null;
}
