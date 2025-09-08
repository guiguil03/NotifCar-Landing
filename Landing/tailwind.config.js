/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
          },
          secondary: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#f97316',
            600: '#ea580c',
            700: '#c2410c',
            800: '#9a3412',
            900: '#7c2d12',
          },
          neutral: {
            50: '#f9fafb',
            100: '#f3f4f6',
            200: '#e5e7eb',
            300: '#d1d5db',
            400: '#9ca3af',
            500: '#6b7280',
            600: '#4b5563',
            700: '#374151',
            800: '#1f2937',
            900: '#111827',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'slide-up': 'slideUp 0.3s ease-out',
          'bounce-gentle': 'bounceGentle 2s infinite',
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'morph': 'morph 8s ease-in-out infinite',
        },
        perspective: {
          '1000': '1000px',
          '2000': '2000px',
        },
        transformStyle: {
          'preserve-3d': 'preserve-3d',
        },
        backfaceVisibility: {
          'hidden': 'hidden',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { transform: 'translateY(10px)', opacity: '0' },
            '100%': { transform: 'translateY(0)', opacity: '1' },
          },
          bounceGentle: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-5px)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '33%': { transform: 'translateY(-20px) rotate(1deg)' },
            '66%': { transform: 'translateY(-10px) rotate(-1deg)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
            '100%': { boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.3)' },
          },
          morph: {
            '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
            '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
      },
    },
    plugins: [],
  }
  