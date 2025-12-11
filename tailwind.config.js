/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fcfbf5',
          100: '#f7f3e2',
          200: '#efe4c4',
          300: '#e6d4a6',
          400: '#ddc588',
          500: '#d4af37',
          600: '#aa8c2c',
          700: '#806921',
          800: '#554616',
          900: '#2b230b',
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
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};