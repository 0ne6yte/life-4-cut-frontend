import type { Meta, StoryObj } from '@storybook/react';

import { Button, Dropdown } from '@/domain/_common/components';

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: null },
  render: () => {
    return (
      <div className="relative">
        <Dropdown>
          <Dropdown.Trigger>
            <Button variant="text">버튼</Button>
          </Dropdown.Trigger>
          <Dropdown.List>
            <Dropdown.Item>1번</Dropdown.Item>
            <Dropdown.Item>2번</Dropdown.Item>
            <Dropdown.Item className="text-red-500">커스텀</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </div>
    );
  },
};
