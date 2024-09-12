/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'blue': '#260B93',
        'darkblue':'#04016C',
        'purple': '#8450FA',
        'skyblue':'#739FE8',
        'pink':'#DC3FFF',
        'lightblue':'#0E38CD',
        'lightwhite':'#DBEDFF'
    },
    fontFamily: {
      cfont1:['SUSE', 'sans-serif'],
      cfont2:['Saira','sans-serif']
    },
    
  },
  plugins: [],
}
}
