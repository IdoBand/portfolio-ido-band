/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['Montserrat', 'sans-serif']
      },
      backgroundImage: {
        bgGradient: 'linear-gradient( #333, #b7b7b7, #dedddd)'
      },
      colors: {
        dark: '#1b1b1b',
        light: '#f5f5f5',
        primary: '#B63E96',
        secondary: '#5f9ea0',
        lightGray: '#d1d5dc',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
    // keep screens outside extend
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      xs: { max: "479px" },
    },
  },
  plugins: [],
}