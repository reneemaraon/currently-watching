/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"'],
        inter: ['"Inter"']
      },
      colors: {
        'main-bg': '#F1F1F5',
        'theme-base': '#FFFFFF',
        'text-dark': '#242C39',
        'light-text': '#676573',
        'brand-tq': '#00ABD0',
        'brand-tq-hover': '#0188A5',
        'brand-gray': '#7E8AA0',
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
