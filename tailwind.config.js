/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#0C3F62',
        secondary: '#6A94A5',
        textPrimary: '#0FA1DB'
      },
      boxShadow: {
        header: '0px 2px 5px 0px rgba(104, 104, 104, 0.6)',
      },
    },
  },
  plugins: [],
}

