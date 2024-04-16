/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1.5s ease-in-out infinite',
      },
       fontFamily: {
        signature: ['"Great Vibes"', 'cursive']
      },
      height: {
        '11/12': '91.666667%'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.underline-animation': {
          position: 'relative',
          overflow: 'visible',
          textDecoration: 'none', 
          '&::after': {
            content: '""',
            position: 'absolute',
            left: '0',
            right: '0',
            bottom: '-10px',
            height: '4px', 
            backgroundColor: '#8a2be2', 
            transform: 'scaleX(0)',
            transformOrigin: 'center',
            transition: 'transform .3s ease', 
          },
          '&:hover::after': {
            transform: 'scaleX(1)',
          }
        }
      });
    }),
  ],
}