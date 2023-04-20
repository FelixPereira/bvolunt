/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      white: '#F6F8FC',
      textBody: '#494B51',
      textTitle: '#101218',
      primary: '#EC2024',
      secondary: '#224099',
      ternary: '#ACD036',
      negativeAction: '#D60000',
      neutralGray: '#F5F5F5',
      neutralLight: '#ffffff',
      warning: '#F75B00',
    },
    fontFamily: {
      sans: [],
    },
    extend: {
      borderRadius: {
        4: '4px',
      },
      'boxShadow': '80px green',
    },
  },
  plugins: [],
};
