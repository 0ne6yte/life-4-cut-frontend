/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      primary: {
        disabled: '#00A3FF',
        default: '#00A3FF',
        touch: '#0085CF',
      },
      red: {
        disabled: '#FF8585',
        default: '#FF6F6F',
        touch: '#E13838',
      },
      gradient: {
        lightblue: '#516DFE',
        purple: '#8A20BC',
        darkblue: '#0300A4',
      },
      grey: {
        whitegray: '#F6F6F6',
        background: '#ECECEC',
        placeholder: '#c9c9c9',
        buttontext: '#696969',
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
        '24px',
        {
          lineHeight: '33.6px',
          fontWeight: '700',
        },
      ],
      headline2: [
        '20px',
        {
          lineHeight: '28px',
          fontWeight: '700',
        },
      ],
      headline3: [
        '18px',
        {
          lineHeight: '25.2px',
          fontWeight: '700',
        },
      ],
      body13: [
        '13px',
        {
          lineHeight: '18.2px',
          fontWeight: '700',
        },
      ],
      body8: [
        '8px',
        {
          lineHeight: '11.2px',
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
