/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#F6F8FC',
      textBody: '#5F6368',
      textTitle: '#101218',
      primary: '#224099',
      secondary: '#ACD036',
      ternary: '#ACD036',
      negativeAction: '#D60000',
      neutralGray: '#F5F5F5',
      neutralLight: '#ffffff',
      warning: '#F75B00',
      borderColor: '#224099',
      appBg: '#f6f8fc',
    },
    fontFamily: {
      sans: [],
    },
    extend: {
      borderRadius: {
        4: '4px',
      },
      boxShadow: '80px 100px 20px green',
    },
  },
  plugins: [],
};
