/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep "court night" blues: the dark base of the site
        night: {
          950: '#060B14',
          900: '#0A1220',
          800: '#0F1A2C',
          700: '#152238',
          600: '#1D2D47',
        },
        // Orange accent taken from the reference template
        brand: {
          DEFAULT: '#F26B21',
          400: '#FF8A4D',
          600: '#D9561A',
        },
        fog: {
          DEFAULT: '#93A1B5',
          100: '#E8EEF6',
          300: '#B7C2D2',
          500: '#93A1B5',
          700: '#5E6C80',
        },
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', '"Arial Narrow"', 'Impact', 'sans-serif'],
        sans: ['Figtree', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 60px -20px rgba(242, 107, 33, 0.45)',
        card: '0 18px 40px -22px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
};
