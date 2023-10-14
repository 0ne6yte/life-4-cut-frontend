import type { Meta, StoryObj } from '@storybook/react';

import { Stepper } from '@/domain/_common/components/Stepper';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const First: Story = {
  args: { stepLength: 3, activeStep: 1 },
};

export const Second: Story = {
  args: { stepLength: 3, activeStep: 2 },
};

export const Third: Story = {
  args: { stepLength: 3, activeStep: 3 },
};

export const Long: Story = {
  args: { stepLength: 7, activeStep: 4 },
};
