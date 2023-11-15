import type { Meta, StoryObj } from '@storybook/react';

import RegisterPhoto from '@/domain/photo/RegisterPhoto';

const meta = {
  title: 'Pages/AlbumList',
  component: RegisterPhoto,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RegisterPhoto>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div className="bg-gray-400 w-[400px] p-[12px]">
        <main className=" h-screen bg-white">
          <RegisterPhoto />
        </main>
      </div>
    );
  },
};
