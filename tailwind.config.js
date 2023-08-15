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
      highlight: {
        light: 'gradient-to-r from-blue-500 to-purple-600',
        dark: 'gradient-to-r from-blue-900 to-purple-800',
      },
      grey: {
        white: '#F6F6F6',
        background: '#ECECEC',
        placeholder: '#c9c9c9',
        buttontext: '#696969',
      },
    },
  },
  plugins: [],
};
