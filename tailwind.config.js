/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Inter', 'Arial', 'sans-serif'],
      'serif': ['Aleo', 'Times New Roman', 'serif']
    },
    colors: {
      'primary': '#EAE6D8',
      'secondary': '#C2E2CA',
      'dark': '#233735'
    },
    extend: {
      dropShadow: ({ theme }) => ({
        'flat': `0px 4px 0px ${theme('colors.dark')}`
      })
    },
  },
  plugins: [],
}
