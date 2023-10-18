import type { Meta, StoryObj } from '@storybook/react';

import Avatar from '@/domain/_common/components/Avatar';
import { type Component } from '@storybook/blocks';

const meta = {
  title: 'Components/Avatar',
  component: Avatar as Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default = () => <Avatar.ProfilePhoto />;
export const SmallAvatar = () => <Avatar.ProfilePhoto size={'small'} />;
export const ProfileImgAvatar = () => (
  <Avatar.ProfilePhoto
    imageUrl={'https://cdn.eyesmag.com/content/uploads/posts/2023/06/20/new-ec23e638-7918-4f8a-96cf-f43ce26826e2.jpg'}
  />
);
export const SmallProfileImgAvatar = () => (
  <Avatar.ProfilePhoto
    size={'small'}
    imageUrl={'https://cdn.eyesmag.com/content/uploads/posts/2023/06/20/new-ec23e638-7918-4f8a-96cf-f43ce26826e2.jpg'}
  />
);
export const AvatarListColumn = () => <Avatar.ListColumn username={'test'} />;
export const AvatarListColumnSet = () => {
  return (
    <div className={'flex-col space-y-2.5'}>
      <Avatar.ListColumn username={'시운'} imageUrl={'https://avatars.githubusercontent.com/u/78866590?v=4'} />
      <Avatar.ListColumn username={'도훈'} imageUrl={'https://avatars.githubusercontent.com/u/65100540?v=4'} />
      <Avatar.ListColumn username={'예윤'} />
      <Avatar.ListColumn username={'상준'} />
    </div>
  );
};
export const AvatarListRow = () => <Avatar.ListRow username={'test'} onClickDelete={() => null} />;

export const AvatarListRowSet = () => {
  return (
    <div className={'flex gap-2.5'}>
      <Avatar.ListRow
        username={'시운'}
        imageUrl={'https://avatars.githubusercontent.com/u/78866590?v=4'}
        onClickDelete={() => null}
      />
      <Avatar.ListRow
        username={'도훈'}
        imageUrl={'https://avatars.githubusercontent.com/u/65100540?v=4'}
        onClickDelete={() => null}
      />
      <Avatar.ListRow username={'예윤'} onClickDelete={() => null} />
      <Avatar.ListRow username={'상준'} onClickDelete={() => null} />
    </div>
  );
};
