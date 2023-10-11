import { ReactComponent as AvatarIcon } from '@/assets/avatar-icon.svg';
import generateRandomColor from '@/utils/generateRandomColor';

interface AvatarProfileProps {
  imageUrl?: string;
  isSmall?: boolean;
  userName?: string;
}

interface AvatarProps extends AvatarProfileProps {
  type: 'icon' | 'column' | 'row';
}

interface AvatarListProps extends AvatarProfileProps {
  userName: string;
}

export default function Avatar({ type, imageUrl, userName = '', isSmall = false }: AvatarProps) {
  switch (type) {
    case 'icon':
      return <AvatarProfile imageUrl={imageUrl} isSmall={isSmall} />;
    case 'column':
      return <AvatarProfile.listColumn imageUrl={imageUrl} userName={userName} isSmall={isSmall} />;
    case 'row':
      return <AvatarProfile.listRow imageUrl={imageUrl} userName={userName} isSmall={isSmall} />;
    default:
      return null;
  }
}

export function AvatarProfile({ imageUrl, isSmall = false }: AvatarProfileProps) {
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
}

AvatarProfile.listColumn = ({ imageUrl, userName }: AvatarListProps) => {
  return (
    <div>
      <AvatarProfile imageUrl={imageUrl} />
      <p className={'text-center text-grey-placeholder text-body8 mt-1'}>{userName}</p>
    </div>
  );
};

AvatarProfile.listRow = ({ imageUrl, userName }: AvatarListProps) => {
  return (
    <div className="text-center flex items-center text-body13">
      <div className={'mr-2.5'}>
        <AvatarProfile imageUrl={imageUrl} />
      </div>
      <p>{userName}</p>
    </div>
  );
};
