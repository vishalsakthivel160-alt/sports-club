import { SITE } from '../config/site';

export const WA_MESSAGES = {
  general: 'Hi, I would like to know more about your sports facilities and booking options.',
  gym: 'Hi, I would like to know more about the gym and membership options.',
  cricket: 'Hi, I would like to enquire about cricket turf availability and booking.',
  football: 'Hi, I would like to enquire about football turf availability and booking.',
  badminton: 'Hi, I would like to know more about the badminton academy programs.',
  program: (name) => `Hi, I would like to know more about the ${name}.`,
};

export const whatsappLink = (message = WA_MESSAGES.general) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
