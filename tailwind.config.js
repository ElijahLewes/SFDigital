/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css,svg}",
    "./node_modules/flowbite/**/*.js"
  ],
  
  theme: {
    extend: {
      height: {
        '1/4': '25%',
        '1/3': '33.3333%',
        '1/2': '50%',
        '2/3': '66.6667%',
        '3/4': '75%',
        'full': '100%',
      },
      // Add custom fonts here
      fontFamily: {
        'mona-sans': ['Mona Sans', 'sans-serif'],
        // you can add more custom fonts if needed
        'career': ['Career', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],

  
}
