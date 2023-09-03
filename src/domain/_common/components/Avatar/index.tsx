import { type ReactNode } from 'react';
import AvatarIcon from '@/assets/avatar-icon.svg';
import pxToRem from '@/utils/pxToRem';

interface AvatarIconProps {
  image?: ReactNode;
  pxWidth?: number;
  pxHeight?: number;
}

interface AvatarListProps extends AvatarIconProps {
  userName: string;
}

export const Avatar = ({ image, pxWidth = 20, pxHeight = 20 }: AvatarIconProps) => {
  const createRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };
  return (
    <div className={`w-[${pxToRem(pxWidth)}] h-[${pxToRem(pxHeight)}] bg-[${createRandomColor()}]`}>
      {image !== undefined ? image : <AvatarIcon />}
    </div>
  );
};

Avatar.listColumn = ({ userName }: AvatarListProps) => {
  return (
    <div className={'flex justify-center items-center'}>
      <AvatarIcon />
      <p>{userName}</p>
    </div>
  );
};

Avatar.listRow = ({ userName }: AvatarListProps) => {
  return (
    <div className="text-center">
      <AvatarIcon />
      <p>{userName}</p>
    </div>
  );
};
