import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

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
  render: () => {
    const [selected, setSelected] = useState(1);

    return (
      <div className="bg-gray-100 p-10">
        <Tab>
          {[1, 2, 3].map((number) => (
            <Tab.Item
              key={number}
              icon={<CameraIcon />}
              text={`${number}해라`}
              onClick={() => {
                setSelected(number);
              }}
              selected={selected === number}
            />
          ))}
        </Tab>
      </div>
    );
  },
};

export const TabItem: Story = {
  render: () => {
    return <Tab.Item key="1" icon={<CameraIcon />} text={'이래라'} selected />;
  },
  args: {
    children: null,
  },
};
