import type { Meta, StoryObj } from '@storybook/react';

import { Input } from '@/domain/_common/components';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/KHvd0JBcID35sOdr61Iief/Main?type=design&node-id=216-7319&mode=design&t=jq3LIMBJupzd6oGf-4',
    },
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
    defaultValue: 'value',
  },
};

export const Error: Story = {
  args: {
    label: 'Error',
    defaultValue: '엥?',
    errorMessage: '삐빅. 이미 존재하는 앨범명 ㅅㄱ',
    isError: true,
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultValue: 'value',
    isChecked: true,
  },
};
