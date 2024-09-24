/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'error-light': '#E9B7BA',
      'error-medium': '#BB2932',
      'error-dark': '#70060C',
      'warning-light': '#F9E6B5',
      'warning-medium': '#EFB340',
      'warning-dark': '#745B2C',
      'success-light': '#88D39D',
      'success-medium': '#07BA39',
      'success-dark': '#06511B',
      'info-light': '#B8D3EC',
      'info-medium': '#42729D',
      'info-dark': '#043159',
      'primary-light': '#A481EE',
      'primary-medium': '#5829BB',
      'primary-dark': '#230758',
      'secondary-light': '#A1E3D7',
      'secondary-medium': '#23BA9F',
      'secondary-dark': '#145F51',
      'gray-light': '#E1E1E1',
      'gray-medium': '#888888',
      'gray-dark': '#282828',
    },
    extend: {},
  },
  plugins: [],
}