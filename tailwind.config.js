const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: {
        DEFAULT: colors.gray['800'],
      },
      blue: {
        DEFAULT: colors.lightBlue['500'],
        medium: colors.lightBlue['300'],
        dark: colors.lightBlue['700'],
      },
      purple: {
        DEFAULT: colors.indigo['900'],
        medium: colors.indigo['600'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        xl: '4rem',
      },
    },
    fontFamily: { sans: ['Open Sans', 'sans-serif'] },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
