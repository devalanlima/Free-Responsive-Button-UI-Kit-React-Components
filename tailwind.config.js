/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'error-light': 'rgb(var(--error-light))',
      'error-medium': 'rgb(var(--error-medium))',
      'error-dark': 'rgb(var(--error-dark))',
      'warning-light': 'rgb(var(--warning-light))',
      'warning-medium': 'rgb(var(--warning-medium))',
      'warning-dark': 'rgb(var(--warning-dark))',
      'success-light': 'rgb(var(--success-light))',
      'success-medium': 'rgb(var(--success-medium))',
      'success-dark': 'rgb(var(--success-dark))',
      'info-light': 'rgb(var(--info-light))',
      'info-medium': 'rgb(var(--info-medium))',
      'info-dark': 'rgb(var(--info-dark))',
      'primary-light': 'rgb(var(--primary-light))',
      'primary-medium': 'rgb(var(--primary-medium))',
      'primary-dark': 'rgb(var(--primary-dark))',
      'secondary-light': 'rgb(var(--secondary-light))',
      'secondary-medium': 'rgb(var(--secondary-medium))',
      'secondary-dark': 'rgb(var(--secondary-dark))',
      'gray-light': 'rgb(var(--gray-light))',
      'gray-medium': 'rgb(var(--gray-medium))',
      'gray-dark': 'rgb(var(--gray-dark))',
    },
    extend: {
      fontFamily: {
        'Figtree': ['Figtree', 'sans-serif'],
        'Archivo': ['Archivo', 'sans-serif'],
      },
      boxShadow: {
        'default-btn-hover': '0px 0px 20px 0px inset',
        'ghost-btn-hover': '0px 2px 6px 0px',
      }
    },
  },
  plugins: [],
}