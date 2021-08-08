module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    safelist: [
      'green-500',
      'yellow-400',
      'yellow-600',
      'red-700',
      'purple-900',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: 'Lato, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
};
