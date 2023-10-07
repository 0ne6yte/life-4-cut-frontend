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
