import { type ReactNode } from 'react';
import AvatarIcon from '@/assets/avatar-icon.svg';
import pxToRem from '@/utils/pxToRem';

interface AvatarIconProps {
  image?: ReactNode;
  pxWidth?: number;
ㅂ  pxHeight?: number;
}

interface AvatarListProps extends AvatarIconProps {
  userName: string;
}

export const Avatar = ({ image, pxWidth = 20, pxHeight = 20 }: AvatarIconProps) => {
  return (
    <div className={`w-[${pxToRem(pxWidth)}] h-[${pxToRem(pxHeight)}]`}>
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
