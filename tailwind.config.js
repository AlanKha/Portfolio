/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#896043c2', // Replace with your specific color
        customWhite: '#FFFCEC', // Replace with your specific white color
      },
      backgroundImage: {
        'marqueeBanner': "url('src/assets/marquee_border.svg')",
      },
    },
  },
  plugins: [],
}