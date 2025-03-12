import daisyui from 'daisyui'
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1C5CBB',
        secondary: '#39B5A4',
    },
    },
  },
  plugins: [
  daisyui
  ],
}

