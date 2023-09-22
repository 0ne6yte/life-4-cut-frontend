import type { Meta, StoryObj } from '@storybook/react';

import { FloatingButton } from '@/domain/_common/components';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

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
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button')).toBeDisabled();
  },
};
