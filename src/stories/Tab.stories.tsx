import type { Meta, StoryObj } from '@storybook/react';

import { ReactComponent as CameraIcon } from '@/assets/camera.svg';
import { Tab } from '@/domain/_common/components';

const meta = {
  title: 'Components/Tab',
  component: Tab,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: null,
  },
  render: () => {
    const tabArray = [1, 2, 3];

    return (
      <div className="bg-gray-100 p-10">
        <Tab.Group initialIndex={1}>
          <Tab.List className="mb-5">
            {tabArray.map((number, index) => (
              <Tab.Pannel key={number} index={index}>
                {number} 에 대한 내용
              </Tab.Pannel>
            ))}
          </Tab.List>
          <Tab.List>
            {tabArray.map((number, index) => (
              <Tab.Item index={index} key={number} icon={<CameraIcon />} text={`${number}해라`} />
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
    );
  },
};
