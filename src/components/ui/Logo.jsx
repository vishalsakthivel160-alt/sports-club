import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export default function Logo({ className = '' }) {
  return (
    <Link to="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Smash Masters home">
      <img src={logo} alt="" width="34" height="34" className="h-8 w-8 sm:h-9 sm:w-9" />
      <span className="font-display text-2xl font-extrabold leading-none tracking-wider text-white sm:text-[1.7rem]">
        SMASH <span className="text-brand">MASTERS</span>
      </span>
    </Link>
  );
}
