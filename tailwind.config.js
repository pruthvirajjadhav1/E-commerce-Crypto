const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        fuchsia: colors.fuchsia
      },
      animation: {
        'pulse-slow': "pulse 5s linear infinite"
      }
    },
  },
  variants: {
    extend: {
      transitionProperty: ['responsive', 'motion-safe', 'motion-reduce']
    },
  },
  plugins: [],
}
