import type { Meta, StoryObj } from '@storybook/react';

import AlbumList from '@/domain/album/AlbumList';

const meta = {
  title: 'Pages/AlbumList',
  component: AlbumList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlbumList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => {
    return (
      <div className="bg-gray-400 w-[400px] p-[12px]">
        <main className=" h-screen bg-white">
          <AlbumList />
        </main>
      </div>
    );
  },
};
