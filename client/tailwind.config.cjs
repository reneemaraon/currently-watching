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
        'text-dark': '#242C39',
        'brand-tq': '#00ABD0',
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
