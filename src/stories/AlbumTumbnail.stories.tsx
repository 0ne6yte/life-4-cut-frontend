import type { Meta, StoryObj } from '@storybook/react';

import AlbumThumbnail from '@/domain/_common/components/AlbumThumbnail/AlbumThumnail';

const meta = {
  title: 'Components/AlbumThumbnail',
  component: AlbumThumbnail,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlbumThumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { albumName: 'test', memberNum: 1 },
};

export const DefaultAlbum: Story = { args: { albumName: 'default', memberNum: 1 } };

export const AlbumWithImage: Story = {
  args: {
    albumName: 'hasImageUrl',
    memberNum: 1,
    imageUrl:
      'https://cdn.eyesmag.com/content/uploads/posts/2023/07/06/everland-panda-birthday-party-6128130b-e93a-44b2-8625-459271c39056.jpg',
  },
};
