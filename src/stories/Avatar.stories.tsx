import { type Meta, type StoryFn } from '@storybook/react';
import React from 'react';

import {
  Avatar,
  type AvatarListProps,
  type AvatarProfilePhotoProps,
  type AvatarRowProps,
} from '@/domain/_common/components';
import { type Component } from '@storybook/blocks';

export default {
  title: 'Components/Avatar',
  component: Avatar.ProfilePhoto as Component,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    imageUrl: { control: 'text' },
  },
} satisfies Meta;

const TemplateProfilePhoto: StoryFn<AvatarProfilePhotoProps> = (args) => <Avatar.ProfilePhoto {...args} />;
export const DefaultProfilePhoto = TemplateProfilePhoto.bind({});
DefaultProfilePhoto.argTypes = {
  imageUrl: { control: 'text' },
  size: { control: 'radio', options: ['large', 'small'] },
};

const TemplateListColumn: StoryFn<AvatarListProps> = (args) => <Avatar.ListColumn {...args} />;
export const DefaultListColumn = TemplateListColumn.bind({});
DefaultListColumn.args = {
  username: 'test',
};

const TemplateListRow: StoryFn<AvatarRowProps> = (args) => <Avatar.ListRow {...args} />;
export const DefaultListRow = TemplateListRow.bind({});
DefaultListRow.args = {
  username: 'test',
  onClickDelete: () => null,
};

export const SmallAvatar = TemplateProfilePhoto.bind({});
SmallAvatar.args = {
  size: 'small',
};

export const ProfileImgAvatar = TemplateProfilePhoto.bind({});
ProfileImgAvatar.args = {
  imageUrl: 'https://cdn.eyesmag.com/content/uploads/posts/2023/06/20/new-ec23e638-7918-4f8a-96cf-f43ce26826e2.jpg',
};

export const SmallProfileImgAvatar = TemplateProfilePhoto.bind({});
SmallProfileImgAvatar.args = {
  size: 'small',
  imageUrl: 'https://cdn.eyesmag.com/content/uploads/posts/2023/06/20/new-ec23e638-7918-4f8a-96cf-f43ce26826e2.jpg',
};

export const AvatarListColumnSet = () => {
  const users = [
    { username: '시운', imageUrl: 'https://avatars.githubusercontent.com/u/78866590?v=4' },
    { username: '도훈', imageUrl: 'https://avatars.githubusercontent.com/u/65100540?v=4' },
    { username: '예윤' },
    { username: '상준' },
  ];

  return (
    <div className={'flex-col space-y-2.5'}>
      {users.map((user, index) => (
        <Avatar.ListColumn key={index} {...user} />
      ))}
    </div>
  );
};

export const AvatarListRowSet = () => {
  const users = [
    { username: '시운', imageUrl: 'https://avatars.githubusercontent.com/u/78866590?v=4' },
    { username: '도훈', imageUrl: 'https://avatars.githubusercontent.com/u/65100540?v=4' },
    { username: '예윤' },
    { username: '상준' },
  ];

  return (
    <div className={'flex gap-2.5'}>
      {users.map((user, index) => (
        <Avatar.ListRow key={index} {...user} onClickDelete={() => null} />
      ))}
    </div>
  );
};
