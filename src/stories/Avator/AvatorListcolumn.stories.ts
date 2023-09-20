import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/domain/_common/components/Avatar';

const meta = {
  title: 'Components/Avatar/AvatarListColumn',
  component: Avatar.listColumn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar.listColumn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'test',
  },
};

export const WithImage: Story = {
  args: {
    userName: 'test',
    imageUrl: 'https://avatars.githubusercontent.com/u/78866590?v=4',
  },
};
