import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui({
    themes: {
      light: {
        colors: {
          background: "#EEEEEE",
          primary: {
            DEFAULT: "#8E1616",
            // DEFAULT: "#EAD196",
            foreground: "#EEEEEE"
          }
        }
      },
      dark: {
        colors: {
          background: "#212121",
          primary: {
            DEFAULT: "#1E3E62",
            foreground: "#F6F6F6"
          },
          secondary: {
            DEFAULT: "#E14434",
            foreground: "#F6F6F6"
          }
        }
      }
    },
  })],
}

module.exports = config;