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
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'default',
  },
};
export const Grey: Story = {
  render: () => (
    <div className="flex gap-2 w-[800px] flex-wrap">
      <Button variant="text" color="grey">
        text
      </Button>
      <Button variant="text" color="grey" disabled>
        text
      </Button>
      <Button variant="contained" color="grey">
        contained
      </Button>
      <Button variant="contained" color="grey" disabled>
        contained
      </Button>
    </div>
  ),
};

export const Primary: Story = {
  render: () => (
    <div className="flex gap-2 w-[800px] flex-wrap">
      <Button variant="text" color="primary">
        text
      </Button>
      <Button variant="text" color="primary" disabled>
        text
      </Button>
      <Button variant="contained" color="primary">
        contained
      </Button>
      <Button variant="contained" color="primary" disabled>
        contained
      </Button>
    </div>
  ),
};

export const Red: Story = {
  render: () => (
    <div className="flex gap-2 w-[800px] flex-wrap">
      <Button variant="text" color="red">
        text
      </Button>
      <Button variant="text" color="red" disabled>
        text
      </Button>
      <Button variant="contained" color="red">
        contained
      </Button>
      <Button variant="contained" color="red" disabled>
        contained
      </Button>
    </div>
  ),
};
