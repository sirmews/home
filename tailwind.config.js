module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: (theme) => ({
      padding: {
        DEFAULT: theme('spacing.4'),
        sm: theme('spacing.0'),
      }
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
