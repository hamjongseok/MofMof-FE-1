import theme from './theme';

type Breakpoints = 'mobile' | 'tablet' | 'desktop';

export const media = (breakpoint: Breakpoints) => {
  return `@media (max-width: ${theme.breakpoints[breakpoint]})`;
};
