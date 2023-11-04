import { ReactComponent as AvatarIcon } from '@/assets/avatar-icon.svg';
import { ReactComponent as DeleteButton } from '@/assets/x-button.svg';
import { generateVividColor } from '@/utils';

export interface AvatarProfilePhotoProps {
  imageUrl?: string;
  size?: 'small' | 'large';
}

export interface AvatarListProps extends AvatarProfilePhotoProps {
  username: string;
}

export interface AvatarRowProps extends AvatarListProps {
  onClickDelete: () => null;
}

function ProfilePhoto({ imageUrl, size = 'large' }: AvatarProfilePhotoProps) {
  const backgroundColor = generateVividColor();

  return (
    <div
      style={{ backgroundColor }}
      className={`flex justify-center items-center ${size === 'small' ? 'h-5' : 'h-[34px]'} ${
        size === 'small' ? 'w-5' : 'w-[34px]'
      }
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

function ListRow({ imageUrl, username, onClickDelete }: AvatarRowProps) {
  return (
    <div>
      <div className={'relative'}>
        <ProfilePhoto imageUrl={imageUrl} />
        <button type={'button'} onClick={onClickDelete} className={'absolute top-[-1px] right-[-1px]'}>
          <DeleteButton />
        </button>
      </div>
      <p className={'text-center text-grey-placeholder text-body8 mt-1'}>{username}</p>
    </div>
  );
}

function ListColumn({ imageUrl, username }: AvatarListProps) {
  return (
    <div className="text-center flex items-center text-[14px] font-medium gap-2.5">
      <ProfilePhoto imageUrl={imageUrl} />
      <p>{username}</p>
    </div>
  );
}

export const Avatar = { ProfilePhoto, ListRow, ListColumn };
