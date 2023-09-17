import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from '@/domain/_common/components/Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithImage: Story = {
  args: {
    image: 'https://avatars.githubusercontent.com/u/78866590?v=4',
  },
};
