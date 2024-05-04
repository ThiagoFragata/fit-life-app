import { palette } from '@/styles/palette';

const theme = {
  colors: palette,
  spacing: {
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
  },
};

export type Theme = typeof theme;
export default theme;
