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
        primary: 'oklch(50.8% 0.118 165.612)',
        secondary: 'oklch(70.4% 0.04 256.788)',
        btnBg:"oklch(90.5% 0.093 164.15)",
        textcolor:"oklch(58.8% 0.158 241.966)"

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
