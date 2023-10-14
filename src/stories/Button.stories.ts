import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@/domain/_common/components';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KHvd0JBcID35sOdr61Iief/Main?type=design&node-id=558-293&mode=design&t=lrfbeqjL6cPdTJqE-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    children: '뒤로 가기',
    variant: 'text',
  },
};

export const DisabledText: Story = {
  args: {
    children: '뒤로 가기',
    disabled: true,
    variant: 'text',
  },
};
