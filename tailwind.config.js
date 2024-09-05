/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {  boxShadow: {
      'custom': '5.67px 5.67px 0px 20px #00000066',
    },
      fontFamily: {
        'poppin': ['Poppins', 'sans-serif'],
        'Plus': ['Plus Jakarta Sans', 'sans-serif']
      },
      fontSize:{
        '12':'12px',
        '18':'18px',
        '20':'20px'
      },
      lineHeight:{
        '6.29':'6.29px',
        '16.12':'16.12px',
        '25.2':'25.2px',
        '30':'30px'
      }
    },
  },
  plugins: [],
}