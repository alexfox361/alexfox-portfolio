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
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}