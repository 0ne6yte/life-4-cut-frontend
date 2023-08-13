import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '../domain/_common/components';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithoutText: Story = {
  args: {
    label: 'Without text',
  },
};

export const WithText: Story = {
  args: {
    label: 'With text',
    value: 'value',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    value: '엥?',
    errorMessage: '삐빅. 이미 존재하는 앨범명 ㅅㄱ',
    isError: true,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    value: 'value',
    checked: true,
  },
};
