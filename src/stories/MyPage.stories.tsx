import type { Meta, StoryObj } from '@storybook/react';

import MyPage from '@/domain/myPage';

const meta = {
  title: 'Pages/MyPage',
  component: MyPage,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MyPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div className="bg-gray-400 w-[400px] p-[12px]">
        <main className=" h-screen bg-white">
          <MyPage />
        </main>
      </div>
    );
  },
};
