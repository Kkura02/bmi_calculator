/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#CDFFEB',
        secondary: '#009F9D',
        tertiary: '#07456F',
        fourthiary: '#0F0A3C'
      }
    },
  },
  plugins: [],
}

