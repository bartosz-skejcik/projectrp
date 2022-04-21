const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#252829',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      purple: colors.purple,
      yellow: colors.yellow,
      pink: colors.pink,
      red: colors.red,
      blue: colors.blue,
      indigo: colors.indigo,
      teal: colors.teal,
      orange: colors.orange,
      fushia: colors.fushia,
      amber: colors.amber,
      emerald: colors.emerald,
      zinc: colors.zinc,
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}
