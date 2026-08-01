/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vytal: {
          bg: '#0B0F17',
          card: '#131A26',
          cardHover: '#1B2434',
          border: '#232D40',
          gold: '#C5A059',
          goldLight: '#E6C687',
          goldDark: '#8C6D39',
          clinical: '#0EA5E9',
          emerald: '#10B981',
          slate: '#94A3B8',
          darkMuted: '#1E293B',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Space Grotesk', 'Cinzel', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(197, 160, 89, 0.25)',
        'clinical-glow': '0 0 25px -5px rgba(14, 165, 233, 0.25)',
      }
    },
  },
  plugins: [],
}
