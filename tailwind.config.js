/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bg": "url('/image-assest.jpg')",
      },
      container: {
        center: true,
        padding: 16,
      },
      colors: {
        primary: "#FC9926",
        secondary: {
          first: "#459CED",
          second: "#D377F3",
        },
        fontFamily: {
          'sans': ['"Inter"', ...defaultTheme.fontFamily.sans],
        },
        darkcolor: {
          100: "#FFFFFF",
          200: "#F6F7FA",
          300: "#ECEFF3",
          400: "#D3D5DA", 
          500: "#A3A5AB",
          600: "#6B6E75",
          700: "#A3AD44",
          800: "#1D1F24",
        },
      },
    },
  },
  plugins: [],
}

