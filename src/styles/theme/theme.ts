const theme = {
  colors: {
    primaryColor: '#ff5500',
    secondaryColor: '#abd375',
    white: '#fff',
    black: '#000',
    gray100: '#f2f3f5',
    gray200: '#9aa3a3',
  },
  spacing: {
    xs: '0.5rem', // 8px
    sm: '0.75rem', // 12px
    base: '1rem', // 16px
    md: '1.25rem', // 20px
    lg: '1.5rem', // 24px
    xl: '2rem', // 32px
  },

  text: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    md: '1.125rem', // 18px
    lg: '1.25rem', // 20px
    xl: '1.5rem', // 24px
  },

  sizes: {
    xs: '16rem', // 256px
    sm: '24rem', // 384px
    md: '40rem', // 640px
    lg: '64rem', // 1024px
    xl: '80rem', // 1280px
    dropdown: '18.75rem', // 300px
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  containerWidth: '64rem', // 1024px
  fonts: {},
  borderRadius: {
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
  },
  buttons: {
    primary: {
      background: '#ff5500',
      color: '#fff',
      hoverBackground: '#ff7700',
    },
    secondary: {
      background: '#abd375',
      color: '#fff',
      hoverBackground: '#b8d88f',
    },
    //... 추가적인 버튼 스타일
  },
  shadows: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.1)',
    base: '0 2px 4px rgba(0, 0, 0, 0.1)',
    md: '0 4px 8px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
    xl: '0 16px 32px rgba(0, 0, 0, 0.1)',
  },
};

export default theme;
