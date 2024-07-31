/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"'],
        inter: ['"Inter"'],
      },
      colors: {
        'main-bg': 'rgba(var(--main-bg))',
        'theme-base': 'rgba(var(--theme-base))',
        'theme-negative-base': 'rgba(var(--theme-negative-base))',
        'text-dark': 'rgba(var(--text-dark))',
        'light-text': 'rgba(var(--light-text))',
        'lighter-text': 'rgba(var(--lighter-text))',
        'brand-pink': 'rgba(var(--brand-pink))',
        'brand-pink-hover': 'rgba(var(--brand-pink-hover))',
        'light-stroke': 'rgba(var(--light-stroke))',
        'brand-gray': '#7E8AA0',
        'brand-gray-light': '#F3F3F4',
        'brand-lavender': '#CCB4F4',
        'brand-dark-purple': '#635A9C',
        'main-yellow': '#FFE456',
        'dark-yellow': '#E9B500',
        'dark-bg': '#09243F',
        'dark-blue': '#1F1E41',
        'dark-box': '#0C2E4E',
        'light-blue': '#00D4FF',
        'hv-light-blue': '#1B9CB7',
        'lighter-blue': '#C9F4FF',
        'gray-border': '#585858',
      },
    },
  },
  plugins: [],
};
