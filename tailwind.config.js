/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          light: '#5CAFFC',
          dark: '#3563E9'
        }
      },
      fontFamily: {
        "Jakarta": ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundImage: {
        "ellipse-pattern": "url('/public/assets/ellipseBG.svg')",
      }
    },

    screens: {
      'xs': '520px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '1xl': '1440px',
      // => @media (min-width: 1440px) { ... }

    }
  },
  plugins: [],
}