import { ReactComponent as VerticalEllipsis } from '@/assets/vertical-ellipsis.svg';
import { BottomTab, Dropdown, Filter } from '@/domain/_common/components';
import AlbumThumbnail from '@/domain/_common/components/AlbumThumbnail';

export default function AlbumList() {
  return (
    <>
      <div className="flex px-[27px] pt-6 pb-3 items-center justify-between">
        <h1 className={`font-bold text-headline1`}>앨범 목록</h1>
        <Dropdown>
          <Dropdown.Trigger>
            <VerticalEllipsis className="stroke-black" />
          </Dropdown.Trigger>
          <Dropdown.List>
            <Dropdown.Item>수정</Dropdown.Item>
            <Dropdown.Item className="text-red-500">삭제</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </div>
      <div className="overflow-y-scroll h-[calc(100%-70px-125px)] pt-3 pb-6">
        <ul className="flex flex-wrap gap-y-[10px] px-[27px] justify-between">
          {Array.from({ length: 10 }).map((_, i) => (
            <AlbumThumbnail key={i} albumName={`${i}번`} memberNum={i} />
          ))}
        </ul>
      </div>
      <Filter />
      <BottomTab />
    </>
  );
}
