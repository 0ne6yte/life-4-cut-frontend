import { ReactComponent as ArrowDownIcon } from '@/assets/arrow-down.svg';
import { IconButton } from '@/domain/_common/components';
import { Dropdown } from '@/domain/_common/components/Dropdown';
import Bubble from '@/domain/_common/components/NoticeBubble';

const sampleAlbumInfo = { id: '이건 내 엘범이야', link: 'https://ifh.cc/g/ySOj5R.jpg' };

export default function AddPhotoIntoAlbum() {
  return (
    <>
      <div className="flex flex-col gap-1 items-start justify-center relative pb-2">
        <Bubble message="추억을 저장할 공간을 선택해주세요" className="z-30 fixed" />
        <div className="flex flex-row justify-start gap-3 items-center">
          <Dropdown className="relative">
            <Dropdown.Trigger>
              <IconButton text="일상" icon={<ArrowDownIcon />} className="py-1 text-lg" />
            </Dropdown.Trigger>
            <Dropdown.List className="z-20 absolute">
              <Dropdown.Item>앨범이름 1</Dropdown.Item>
              <Dropdown.Item>앨범이름 2</Dropdown.Item>
              <Dropdown.Item>앨범이름 3</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
          <h2 className="font-bold text-[18px]">앨범에 사진 추가</h2>
        </div>
      </div>
      <div className="flex flex-col items-center justify-start h-full w-full py-5">
        <img src={sampleAlbumInfo.link} alt="샘플 사진" className="rounded-2xl h-4/5" />
      </div>
    </>
  );
}
