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
      className={`w-[9.75rem] h-[9.75rem] bg-grey-background rounded-xl bg-cover bg-center p-1 flex flex-col`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className={'flex-1'}>
        <div>{memberNum}</div>
      </div>
      <div className={'flex'}>
        <div className={'flex-1'}>
          <p>{albumName}</p>
        </div>
        <button type={'button'} onClick={handleButtonClick}>
          :
        </button>
      </div>
    </div>
  );
}
