import { Link } from 'react-router-dom';

// Full class names are listed so Tailwind can detect them at build time.
const VARIANTS = {
  primary: 'btn-primary',
  light: 'btn-light',
  outline: 'btn-outline',
  whatsapp: 'btn-whatsapp',
};
const SIZES = { sm: 'btn-sm', md: 'btn-md', lg: 'btn-lg' };

/**
 * Renders a router <Link> (to), an external <a> (href) or a <button>.
 */
export default function Button({ variant = 'primary', size = 'md', to, href, className = '', children, ...rest }) {
  const classes = `btn ${VARIANTS[variant]} ${SIZES[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a href={href} className={classes} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
