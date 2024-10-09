/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBrown: '#896043c2',
        customWhite: '#FFFCEC',
        customGreen: '#2eb885'
      },
      backgroundImage: {
        'marqueeBanner': "url('https://raw.githubusercontent.com/AlanKha/Portfolio/dea42443b698850d73d6ac59eaedff96d9b226c3/src/assets/marquee_border.svg')",
        'noiseLight': "url(https://arc.net/noise-light.png)",
      },
    },
  },
  plugins: [],
}