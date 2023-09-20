import { ReactComponent as AvatarIcon } from '@/assets/avatar-icon.svg';
import generateRandomColor from '@/utils/generateRandomColor';

interface AvatarIconProps {
  imageUrl?: string;
  isSmall?: boolean;
}

interface AvatarListProps extends AvatarIconProps {
  userName: string;
}

export const Avatar = ({ imageUrl, isSmall = false }: AvatarIconProps) => {
  const backgroundColor = generateRandomColor();

  return (
    <div
      style={{ backgroundColor }}
      className={`flex justify-center items-center ${isSmall ? 'h-5' : 'h-[34px]'} ${isSmall ? 'w-5' : 'w-[34px]'}
      rounded-full overflow-hidden`}
    >
      {imageUrl !== undefined ? (
        <div className={'w-full h-full'}>
          <img src={imageUrl} alt={'profile'} />
        </div>
      ) : (
        <div className={'w-1/2 h-1/2 m-auto'}>
          <AvatarIcon />
        </div>
      )}
    </div>
  );
};

Avatar.listColumn = ({ imageUrl, userName }: AvatarListProps) => {
  return (
    <div>
      <Avatar imageUrl={imageUrl} />
      <p className={'text-center text-grey-placeholder text-body8 mt-1'}>{userName}</p>
    </div>
  );
};

Avatar.listRow = ({ imageUrl, userName }: AvatarListProps) => {
  return (
    <div className="text-center">
      <Avatar imageUrl={imageUrl} />
      <p>{userName}</p>
    </div>
  );
};
