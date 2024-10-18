import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#e9e9ea", // or DEFAULT
            foreground: "#252525", // or 50 to 900 DEFAULT
            primary: {
              50: "#D2DFFD",
              100: "#A5BEFC",
              200: "#7899F7",
              300: "#557BF0",
              400: "#557BF0",
              500: "#214CE7",
              600: "#183AC6",
              700: "#102AA6",
              800: "#0A1C85",
              900: "#06136E",
              foreground: "#303131",
              DEFAULT: "#214CE7",
            },
            // ... rest of the colors
          },
        },
        dark: {
          colors: {
            background: "#e9e9ea", // or DEFAULT
            foreground: "#252525", // or 50 to 900 DEFAULT
            primary: {
              50: "#D2DFFD",
              100: "#A5BEFC",
              200: "#7899F7",
              300: "#557BF0",
              400: "#557BF0",
              500: "#214CE7",
              600: "#183AC6",
              700: "#102AA6",
              800: "#0A1C85",
              900: "#06136E",
              foreground: "#303131",
              DEFAULT: "#214CE7",
            },
            // ... rest of the colors
          },
          // ... rest of the colors
        },
      },
    }),
  ],
}