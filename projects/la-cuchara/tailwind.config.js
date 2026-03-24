/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#1a1f2e',
          secondary: '#252d3d',
          tertiary: '#0f1419',
        },
        orange: {
          accent: '#E8754F',
          light: '#FFB84D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A8B8',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
