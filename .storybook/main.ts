import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: { postCss: { implementation: require.resolve('postcss') } },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-viewport',
  ],
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['../public'],
};

export default config;
