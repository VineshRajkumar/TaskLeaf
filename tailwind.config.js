/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      paper: {
        light: '#f5f5f5', // Light paper color
        DEFAULT: '#ffffff', // Default paper color
        dark: '#e0e0e0', // Dark paper color
      },
    },},
  },
  plugins: [],
}

