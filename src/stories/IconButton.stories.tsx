import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down.svg';
import { IconButton } from '@/domain/_common/components';
import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '일정',
    icon: <ArrowDownIcon />,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    text: '일정',
    icon: <ArrowDownIcon />,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button')).toBeDisabled();
  },
};
