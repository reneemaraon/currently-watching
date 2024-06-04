/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"'],
        inter: ['"Inter"'],
      },
      colors: {
        'main-bg': '#F6F6F6',
        'theme-base': '#FFFFFF',
        'theme-negative-base': '#000000',
        'text-dark': '#000000',
        'light-text': '#676573',
        'lighter-text': '#B6BCC6',
        'brand-pink': '#AF1381',
        'brand-pink-hover': '#C91795',
        'brand-gray': '#7E8AA0',
        'brand-gray-light': '#F3F3F4',
        'brand-lavender': '#CCB4F4',
        'brand-dark-purple': '#635A9C',
        'main-yellow': '#FFE456',
        'dark-yellow': '#E9B500',
        'light-stroke': '#E2ECEC',
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
