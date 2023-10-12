import type { Meta, StoryObj } from '@storybook/react';

import { VariantButton } from '@/domain/_common/components';

const meta = {
  title: 'Contents/VariantButton',
  component: VariantButton,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KHvd0JBcID35sOdr61Iief/Main?type=design&node-id=558-293&mode=design&t=lrfbeqjL6cPdTJqE-4',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof VariantButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultText: Story = {
  args: {
    children: '뒤로 가기',
    isDisabled: false,
    style: 'text',
  },
};

export const DisabledText: Story = {
  args: {
    children: '뒤로 가기',
    isDisabled: true,
    style: 'text',
  },
};
