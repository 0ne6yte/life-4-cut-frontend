import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '@/domain/_common/components/Avatar';

const meta = {
  title: 'Components/Avatar/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { type: 'icon' },
};

export const SmallIcon: Story = { args: { type: 'icon', isSmall: true } };

export const IconWithImage: Story = {
  args: {
    type: 'icon',
    imageUrl: 'https://avatars.githubusercontent.com/u/78866590?v=4',
  },
};

export const ColumnProfile: Story = { args: { type: 'column' } };

export const ColumnProfileWithImage: Story = {
  args: {
    type: 'column',
    imageUrl: 'https://avatars.githubusercontent.com/u/78866590?v=4',
    userName: 'test',
  },
};

export const RowProfile: Story = { args: { type: 'row' } };

export const RowProfileWithImage: Story = {
  args: {
    type: 'row',
    imageUrl: 'https://avatars.githubusercontent.com/u/78866590?v=4',
    userName: 'test',
  },
};
