/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#204AB0',
        secundary:'#349FE8',
        third:'#A2B2C8',
        yellow: '#FDE63D'
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}

