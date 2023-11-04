import React from 'react';

import { withThemeByDataAttribute } from '@storybook/addon-styling';

import { ModalProvider } from '../src/contexts/ModalProvider';
import '../src/global.css';

export const decorators = [
  (Story: React.FC) => (
    <ModalProvider>
      <Story />
    </ModalProvider>
  ),
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];
