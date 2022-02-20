// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Encode Sans', 'sans-serif'],
      },
      colors: {
        primary: 'var(--color-primary)',
      },
    },
  },
  plugins: [],
};
