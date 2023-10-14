import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '@/domain/_common/components/Avatar';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { variant: 'icon' },
};

export const SmallIcon: Story = { args: { variant: 'icon', size: 'small' } };

export const IconWithImage: Story = {
  args: {
    variant: 'icon',
    imageUrl: 'https://img.seoul.co.kr//img/upload/2023/08/27/SSC_20230827144801.jpg',
  },
};

export const ColumnProfile: Story = {
  args: { variant: 'column', username: 'test' },
};

export const ColumnProfileWithImage: Story = {
  args: {
    variant: 'column',
    imageUrl: 'https://img.seoul.co.kr//img/upload/2023/08/27/SSC_20230827144801.jpg',
    username: 'test',
  },
};

export const RowProfile: Story = { args: { variant: 'row', username: 'test' } };

export const RowProfileWithImage: Story = {
  args: {
    variant: 'row',
    imageUrl: 'https://img.seoul.co.kr//img/upload/2023/08/27/SSC_20230827144801.jpg',
    username: 'test',
  },
};
