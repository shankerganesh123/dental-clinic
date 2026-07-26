/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: {
      sm: '560px',
      md: '860px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ink: '#0F1B2D',
        brand: {
          DEFAULT: '#1D5FE0',
          dark: '#123F9E',
        },
        sky: '#EAF2FF',
        teal: '#0EA5A0',
        mist: '#F6F9FF',
        line: '#DCE6F7',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
