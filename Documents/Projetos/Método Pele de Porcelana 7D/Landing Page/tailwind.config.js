/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfaf5',
          100: '#f9f3e8',
          200: '#f2e6d3',
          300: '#e8d4b5',
          400: '#d9ba8f',
          500: '#c9a36a',
          600: '#b88b4d',
          700: '#9a7340',
          800: '#7d5e37',
          900: '#664d2f',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 15px 5px rgba(232, 212, 181, 0.5)',
      },
      keyframes: {
        'scale-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      animation: {
        'scale-pulse': 'scale-pulse 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};