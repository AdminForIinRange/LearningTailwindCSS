/** @type {import('tailwindcss').Config} */


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        Chestnut: '#8B4513',
        DarkSlateGray: '#2F4F4F',
        LightCoral: '#F08080',
      }
    },
  },
  plugins: [],
}

