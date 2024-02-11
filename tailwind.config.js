/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'clr-primary': '#0071ce',
        'clr-secondary': '#ffc220',
        'clr-dark': '#000000',
        'clr-light': '#ffffff',
        'hover-primary': '#00569c',
        'clr-gray': '#ffffff90'
      }
    },
  },
  plugins: [],
}