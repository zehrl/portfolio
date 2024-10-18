/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Arial', 'sans-serif'],
      'serif': ['Aleo', 'Times New Roman', 'serif'],
      'handwriting': ['Rock Salt', 'Brush Script MT', 'cursive']
    },
    colors: {
      'primary': '#EAE6D8',
      'secondary': '#C2E2CA',
      'tertiary': '#D0705F',
      'tertiary-light': '#e68a7a',
      'dark': '#233735',
      'light-dark': '#435957'
    },
    extend: {
      dropShadow: ({ theme }) => ({
        'flat': `0px 4px 0px ${theme('colors.dark')}`
      })
    },
  },
  plugins: [],
}
