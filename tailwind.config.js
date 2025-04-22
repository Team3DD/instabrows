/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#db2777', // pink-600 equivalent
        'primary-dark': '#be185d', // pink-700 equivalent
        'primary-light': '#ec4899', // pink-500 equivalent
      },
    },
  },
  plugins: [],
}