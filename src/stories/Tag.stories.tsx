import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from '@/domain/_common/components/Tag';

const meta = {
  title: 'Components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { variant: 'default', text: '#일상' },
};

export const Gradient: Story = {
  args: {
    variant: 'gradient',
    text: '#일상',
  },
};
