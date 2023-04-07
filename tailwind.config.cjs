/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontSize: {
        smaller: '0.825rem',
      },
      colors: {
        darkColor: '#262626',
        heading: '#78A9FF',
        liteColor: '#F4F4F4',
        tertiary: '#151030',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
    },
  },
  plugins: [],
}
