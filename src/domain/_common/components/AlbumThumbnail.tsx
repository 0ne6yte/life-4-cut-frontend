import { ReactComponent as MemberMark } from '@/assets/member-mark.svg';
import { ReactComponent as VerticalEllipsis } from '@/assets/vertical-ellipsis.svg';

interface AlbumThumbnailProps {
  albumName: string;
  memberNum: number;
  imageUrl?: string;
}

export default function AlbumThumbnail({ albumName, memberNum, imageUrl = '' }: AlbumThumbnailProps) {
  const handleButtonClick = () => {
    return '';
  };

  return (
    <div
      className={`w-[9.75rem] h-[9.75rem] bg-grey-background rounded-xl bg-cover bg-center flex flex-col overflow-hidden`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={'flex-1 p-1'}>
        <div className={'flex items-center justify-center w-12 h-5 rounded-[20px] bg-black-40'}>
          <MemberMark />
          <p className={'h-full text-white text-[8px] leading-5 font-bold ml-2'}>{memberNum}명</p>
        </div>
      </div>
      <div className={'relative flex bg-black-40 h-[37px] items-center text-center'}>
        <p className={'flex-1 text-[13px] leading-3 text-white font-bold'}>{albumName}</p>
        <button className={'absolute right-3 stroke-white'} type={'button'} onClick={handleButtonClick}>
          <VerticalEllipsis />
        </button>
      </div>
    </div>
  );
}
