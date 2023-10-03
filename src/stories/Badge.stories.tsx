import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from '@/domain/_common/components/Badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default', children: '#일상' },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    children: '#일상',
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    children: '3명',
  },
};
