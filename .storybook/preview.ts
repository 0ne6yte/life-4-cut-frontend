import { withThemeByDataAttribute } from '@storybook/addon-styling';

import '../src/domain/_common/styles/global.css';

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
