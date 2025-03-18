import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "move-right": "moveRight 1s linear infinite alternate",
      },
      keyframes: {
        moveRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(20px)" },
        },
      },
      colors: {
        primary: '#1C5CBB',
        secondary: '#39B5A4',
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "dark"], 
  },
}
