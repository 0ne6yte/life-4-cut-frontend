/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: {
        DEFAULT: '#000000',
        80: 'rgba(0, 0, 0, 0.80)',
        40: 'rgba(0, 0, 0, 0.40)',
        20: 'rgba(0, 0, 0, 0.20)',
      },
      white: '#FFFFFF',
      primary: {
        disabled: 'rgba(0, 163, 255, 0.40)',
        default: '#00A3FF',
        touch: '#0085CF',
      },
      red: {
        disabled: 'rgba(255, 133, 133, 0.40)',
        default: '#FF6F6F',
        touch: '#E13838',
      },
      gradient: {
        lightblue: '#516DFE',
        purple: '#8A20BC',
        darkblue: '#0300A4',
      },
      grey: {
        lightgrey: '#F6F6F6',
        background: '#ECECEC',
        placeholder: '#c9c9c9',
        button_text: '#696969',
      },
      yellow: {
        default: '#F5D76F',
        touch: '#E7C447',
      },
      pink: {
        default: '#FED0FF',
        touch: '#F1A8F2',
      },
      skyblue: {
        default: '#D0F1FF',
        touch: '#ADCBE7',
      },
      green: {
        default: '#E0F5CA',
        touch: '#C1E29F',
      },
    },
    fontSize: {
      headline1: [
        '1.5rem',
        {
          lineHeight: '2.1rem',
          fontWeight: '700',
        },
      ],
      headline2: [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          fontWeight: '700',
        },
      ],
      headline3: [
        '1.125rem',
        {
          lineHeight: '1.575rem',
          fontWeight: '700',
        },
      ],
      body13: [
        '0.813rem',
        {
          lineHeight: '1.138rem',
          fontWeight: '700',
        },
      ],
      body8: [
        '0.5rem',
        {
          lineHeight: '0.7rem',
          fontWeight: '500',
        },
      ],
    },
    fontFamily: {
      pretendard: ['var(--font-pretendard)'],
    },
    backgroundImage: {
      'highlight-gradient': 'var(--highlight, linear-gradient(77deg, #1914FF 0%, #A336F9 100%))',
      'highlight-gradient-dark': 'var(--highlight-touch, linear-gradient(77deg, #0300A4 0%, #8C32D2 100%))',
    },
  },
  plugins: [],
};
