import { ReactComponent as AvatarIcon } from '@/assets/avatar-icon.svg';
import { ReactComponent as DeleteButton } from '@/assets/x-button.svg';
import { generateVividColor } from '@/utils';

interface AvatarPhotoProps {
  imageUrl?: string;
  size?: 'small' | 'large';
}

interface AvatarListProps extends AvatarPhotoProps {
  username: string;
}

interface AvatarColumnProps extends AvatarListProps {
  onClickDelete: () => null;
}

function AvatarPhoto({ imageUrl, size = 'large' }: AvatarPhotoProps) {
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

function AvatarRow({ imageUrl, username, onClickDelete }: AvatarColumnProps) {
  return (
    <div>
      <div className={'relative'}>
        <AvatarPhoto imageUrl={imageUrl} />
        <button type={'button'} onClick={onClickDelete} className={'absolute top-[-1px] right-[-1px]'}>
          <DeleteButton />
        </button>
      </div>
      <p className={'text-center text-grey-placeholder text-body8 mt-1'}>{username}</p>
    </div>
  );
}

function AvatarColumn({ imageUrl, username }: AvatarListProps) {
  return (
    <div className="text-center flex items-center text-[14px] font-medium gap-2.5">
      <AvatarPhoto imageUrl={imageUrl} />
      <p>{username}</p>
    </div>
  );
}

export default { AvatarPhoto, AvatarColumn, AvatarRow };
