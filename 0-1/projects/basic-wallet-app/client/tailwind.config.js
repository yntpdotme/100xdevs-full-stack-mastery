/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px'],
    },
    extend: {
      fontFamily: {
        palanquin: ['Palanquin', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: 'hsl(263.4 70% 50.4%)',
        'primary-300': 'hsla(252.5, 94.74%, 85.1%, 0.1)',
        'primary-400': 'hsl(255.14, 91.74%, 76.27%)',
        'primary-700': 'hsl(263.39, 69.96%, 50.39%)',
        secondary: 'hsl(215 27.9% 16.9%)',
        accent: 'hsl(215 27.9% 16.9%)',
        background: 'hsl(224 71.4% 4.1%)',
        forground: 'hsl(210 20% 98%)',
        'white-400': 'rgba(255, 255, 255, 0.80)',
        'dark-800': 'rgb(30, 41, 59)',
        popover: 'hsl(224 71.4% 4.1%)',
        muted: 'hsl(215 27.9% 16.9%)',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
