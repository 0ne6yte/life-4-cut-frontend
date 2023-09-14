import type { Meta, StoryObj } from '@storybook/react';

import { FloatingButton } from '@/domain/_common/components';

const meta = {
  title: 'Components/FloatingButton',
  component: FloatingButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FloatingButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
