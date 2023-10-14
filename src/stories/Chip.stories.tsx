import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as UserIcon } from '@/assets/user.svg';
import { Chip } from '@/domain/_common/components/Chip';

const meta = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'text',
  },
};
export const WithIcon: Story = {
  args: {
    icon: <UserIcon />,
    text: '3명',
  },
};
