/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'hero':"url('/src/components/ACCUEIL/background/background.jpg')",
      },
      fontFamily: {
        'display': 'Bebas Neue, sans-serif',
    },
  },
  plugins: [],
}
}