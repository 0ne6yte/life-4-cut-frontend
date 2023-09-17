import { type ReactNode } from 'react';
import { ReactComponent as AvatarIcon } from '@/assets/avatar-icon.svg';
import pxToRem from '@/utils/pxToRem';

interface AvatarIconProps {
  image?: ReactNode;
  pxWidth?: number;
  pxHeight?: number;
}

interface AvatarListProps extends AvatarIconProps {
  userName: string;
}

export const Avatar = ({ image, pxWidth = 60, pxHeight = 60 }: AvatarIconProps) => {
  const createRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  return (
    <div className={`block w-24 h-24 bg-primary-default rounded-full`}>
      {image !== undefined ? <img src={image} alt={'profile'} /> : <AvatarIcon />}
    </div>
  );
};

Avatar.listColumn = ({ image, userName }: AvatarListProps) => {
  return (
    <div className={'flex justify-center items-center'}>
      {image !== undefined ? <img className="w-full h-full" src={image} alt={'profile'} /> : <AvatarIcon />}
      <p>{userName}</p>
    </div>
  );
};

Avatar.listRow = ({ image, userName }: AvatarListProps) => {
  return (
    <div className="text-center">
      {image !== undefined ? image : <AvatarIcon />}
      <p>{userName}</p>
    </div>
  );
};
