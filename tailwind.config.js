/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'space-navy': '#0B0E2C',
        'moon-gray': '#D9D9D9',
        'topcoder-blue': '#007AFF',
        'nasa-red': '#FC3D21',
      },
      fontFamily: {
        'figtree': ['Figtree', 'sans-serif'],
        'nunito': ['Nunito Sans', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}


