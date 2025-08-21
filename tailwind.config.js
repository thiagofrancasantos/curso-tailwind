/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    screens: {
      'tablet': '640px',
      'cel': {
        'max': '400px'
      }
    },
    extend: {
      colors: {
        'new-blue': '#243C5A'
      },
      spacing: {
        '30': '20rem'
      },
      fontFamily: {
        'arial': 'Arial'
      }
    },
  },
  plugins: [],
}

