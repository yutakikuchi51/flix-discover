/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: '#f8fafc',   
          100: '#f1f5f9', 
          200: '#e2e8f0', 
          300: '#cbd5e1', 
          400: '#94a3b8',
          500: '#64748b',
          600: '#36546e', 
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a', 
        },

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

    },
  },
  plugins: [],
}

