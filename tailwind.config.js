/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#F72585',
          purple: '#9D4EDD',
          darkPurple: '#7209B7',
          deepBlue: '#3A0CA3',
          blue: '#4361EE',
          lightBlue: '#4CC9F0',
          black: '#0F0F0F',
          lime: '#B5FF7D',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { textShadow: '0 0 5px #fff, 0 0 10px #fff, 0 0 15px #F72585, 0 0 20px #F72585' },
          '100%': { textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 30px #4CC9F0, 0 0 40px #4CC9F0' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg')",
        'venue-image': "url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg')",
      },
    },
  },
  plugins: [],
};