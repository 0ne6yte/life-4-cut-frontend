import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from '@/domain/_common/components';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: [],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThinVertical: Story = {
  args: {
    type: 'thinVertical',
    isSelected: false,
  },
};

export const ThinVerticalSelected: Story = {
  args: {
    type: 'thinVertical',
    isSelected: true,
  },
};

export const FatVertical: Story = {
  args: {
    type: 'fatVertical',
    isSelected: false,
  },
};

export const FatVerticalSelected: Story = {
  args: {
    type: 'fatVertical',
    isSelected: true,
  },
};

export const FatHorizontal: Story = {
  args: {
    type: 'fatHorizontal',
    isSelected: false,
  },
};

export const FatHorizontalSelected: Story = {
  args: {
    type: 'fatHorizontal',
    isSelected: true,
  },
};
