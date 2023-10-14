import type { Meta, StoryObj } from '@storybook/react';

import Bubble from '@/domain/_common/components/Bubble';

const meta = {
  title: 'Example/Bubble',
  component: Bubble,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Bubble>;

export default meta;
type Story = StoryObj<typeof Bubble>;

export const Default: Story = {
  args: {
    message: '추억을 저장할 공간을 선택해주세요',
  },
};

export const LongMessage: Story = {
  args: {
    message:
      '추억을 저장할 공간을 선택해주세요 추억을 저장할 공간을 선택해주세요 추억을 저장할 공간을 선택해주세요 추억을 저장할 공간을 선택해주세요 추억을 저장할 공간을 선택해주세요',
  },
};
