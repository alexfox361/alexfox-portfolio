module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#007fb1',
      'secondary': '#00638a'
    }),
    textColor: theme => ({
      ...theme('colors'),
      'primary': '#007fb1',
      'secondary': '#00638a'
    }),
    focusColor: theme => ({
      ...theme('colors'),
      'primary': '#ancdee',
      'secondary': '#00638a'
    }),
    extend: {
      boxShadow: {
        '3xl': '0 0 60px rgba(192,132,252, 0.3)',
      },
      colors: {
        'unlv-grey': '#808080',
        'unlv-red': '#e31936',
        'fia-green': '#244e30',
        'fia-yellow': '#f6e664',
      },
      padding: {
        '47rem': '47rem',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}