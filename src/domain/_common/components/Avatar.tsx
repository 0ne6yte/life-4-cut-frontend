import { ReactComponent as AvatarIcon } from '@/assets/avatar-icon.svg';
import generateVividColor from '@/utils/generateVividColor';

interface AvatarProfileProps {
  imageUrl?: string;
  size?: 'small' | 'large';
}

interface AvatarProps extends AvatarProfileProps {
  variant: 'icon' | 'column' | 'row';
  username: string;
}

interface AvatarListProps extends AvatarProfileProps {
  username: string;
}

export default function Avatar({ variant, imageUrl, username, size = 'small' }: AvatarProps) {
  switch (variant) {
    case 'icon':
      return <AvatarProfile imageUrl={imageUrl} size={size} />;
    case 'column':
      return <AvatarProfile.listColumn imageUrl={imageUrl} username={username} size={size} />;
    case 'row':
      return <AvatarProfile.listRow imageUrl={imageUrl} username={username} size={size} />;
    default:
      return null;
  }
}

function AvatarProfile({ imageUrl, size = 'small' }: AvatarProfileProps) {
  const backgroundColor = generateVividColor();

  return (
    <div
      style={{ backgroundColor }}
      className={`flex justify-center items-center ${size ? 'h-5' : 'h-[34px]'} ${size ? 'w-5' : 'w-[34px]'}
      rounded-full overflow-hidden`}
    >
      {imageUrl !== undefined ? (
        <div className={'w-full h-full bg-cover bg-center'} style={{ backgroundImage: `url(${imageUrl})` }} />
      ) : (
        <div className={'w-1/2 h-1/2 m-auto'}>
          <AvatarIcon />
        </div>
      )}
    </div>
  );
}

AvatarProfile.listColumn = ({ imageUrl, username }: AvatarListProps) => {
  return (
    <div>
      <AvatarProfile imageUrl={imageUrl} />
      <p className={'text-center text-grey-placeholder text-body8 mt-1'}>{username}</p>
    </div>
  );
};

AvatarProfile.listRow = ({ imageUrl, username }: AvatarListProps) => {
  return (
    <div className="text-center flex items-center text-body13 gap-2.5">
      <AvatarProfile imageUrl={imageUrl} />
      <p>{username}</p>
    </div>
  );
};
