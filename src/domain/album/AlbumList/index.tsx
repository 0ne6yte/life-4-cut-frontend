import { ReactComponent as VerticalEllipsis } from '@/assets/vertical-ellipsis.svg';
import { BottomTab, Dropdown, Filter, Header } from '@/domain/_common/components';
import AlbumThumbnail from '@/domain/_common/components/AlbumThumbnail';
import { SafeArea } from '@/domain/_common/layouts';

export default function AlbumList() {
  return (
    <>
      <SafeArea className={'pb-0'}>
        <Header title="앨범 목록">
          <Dropdown className={'relative'}>
            <Dropdown.Trigger>
              <VerticalEllipsis className="stroke-black" />
            </Dropdown.Trigger>
            <Dropdown.List>
              <Dropdown.Item>수정</Dropdown.Item>
              <Dropdown.Item className="text-red-500">삭제</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </Header>
        <div className="overflow-y-scroll h-[calc(100vh-70px-125px-12px)] pt-3 pb-6">
          <ul className="flex flex-wrap gap-y-[10px] justify-between">
            {Array.from({ length: 10 }).map((_, i) => (
              <AlbumThumbnail key={i} albumName={`${i}번`} memberNum={i} />
            ))}
          </ul>
        </div>
      </SafeArea>
      <Filter />
      <BottomTab />
    </>
  );
}
