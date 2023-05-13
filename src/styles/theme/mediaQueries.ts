import theme from './theme';

export type Breakpoints = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const media = (breakpoint: Breakpoints) => {
  return `@media (max-width: ${theme.breakpoints[breakpoint]})`;
};
