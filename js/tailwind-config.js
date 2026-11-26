tailwind.config = {
  theme: {
    extend: {
      colors: {
        carbon: '#090B10',
        obsidian: '#111520',
        cobalt: '#1D4ED8',
        sapphire: '#2563EB',
        electric: '#3B82F6',
        iceblue: '#93C5FD',
        alabaster: '#F8FAFC',
        hairline: '#E2E8F0'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', '"Inter"', '"IBM Plex Sans Thai"', 'sans-serif'],
        thai: ['"IBM Plex Sans Thai"', '"Plus Jakarta Sans"', '"Inter"', 'sans-serif'],
        art: ['"Fraunces"', '"IBM Plex Sans Thai"', 'Georgia', 'serif']
      },
      boxShadow: {
        cobaltGlow: '0 16px 38px -12px rgba(37, 99, 235, 0.34)',
        galleryCard: '0 12px 32px -14px rgba(9, 11, 16, 0.065)',
        galleryHover: '0 26px 52px -16px rgba(29, 78, 216, 0.16), 0 8px 20px -12px rgba(9, 11, 16, 0.08)',
        softFloat: '0 20px 44px -16px rgba(9, 11, 16, 0.28)'
      },
      transitionTimingFunction: {
        springy: 'cubic-bezier(0.22, 1, 0.36, 1)',
        tactile: 'cubic-bezier(0.34, 1.36, 0.64, 1)'
      }
    }
  }
};
