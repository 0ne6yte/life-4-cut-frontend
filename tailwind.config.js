/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: '#00A3FF',
      red: '#FF6F6F',
      gradient: {
        lightblue: '#516DFE',
        purple: '#8A20BC',
        darkblue: '#0300A4',
      },
      grey: {
        white: '#F6F6F6',
        background: '#ECECEC',
        placeholder: '#c9c9c9',
        buttontext: '#696969',
      },
    },
    gradientColorStops: (theme) => ({
      ...theme('colors'),
    }),
  },
  plugins: [],
};
