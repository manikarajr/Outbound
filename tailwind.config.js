/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        pista: {
          DEFAULT: '#7AAD5C',
          light:   '#93C572',
          dark:    '#5C8A3E',
          50:      '#f0f7ea',
          100:     '#d8efc9',
          200:     '#b8e08a',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        'pista':   '0 8px 32px rgba(122,173,92,0.3)',
        'pista-sm':'0 4px 16px rgba(122,173,92,0.2)',
        'card':    '0 4px 24px rgba(0,0,0,0.08)',
        'card-hover':'0 16px 48px rgba(0,0,0,0.14)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      animation: {
        'fade-in-down':   'fadeInDown 0.3s ease forwards',
        'fade-in-up':     'fadeInUp 0.5s ease forwards',
        'slide-in':       'slideIn 0.4s ease forwards',
        'float':          'float 6s ease-in-out infinite',
        'pulse-slow':     'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeInDown: {
          '0%':   { opacity: '0', transform: 'translateY(-8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%':     { transform: 'translateY(-8px)' },
        },
      }
    },
  },
  plugins: [],
};