/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0f1a21',
        sand: '#f6f4ef',
        line: '#e2ddd2',
        teal: { 50: '#e3f0ec', 400: '#4fbfa8', 600: '#0f6b5c', 700: '#0b5247' },
      },
      fontFamily: {
        display: ['"Readex Pro"', '"IBM Plex Sans Arabic"', 'Tahoma', 'sans-serif'],
        body: ['"IBM Plex Sans Arabic"', '"Segoe UI"', 'Tahoma', 'sans-serif'],
      },
      keyframes: {
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        float: { '0%,100%': { transform: 'translate(0,0) scale(1)' }, '50%': { transform: 'translate(-30px,20px) scale(1.08)' } },
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        float: 'float 14s ease-in-out infinite',
        'float-slow': 'float 20s ease-in-out infinite reverse',
      },
    },
  },
  plugins: [],
}
