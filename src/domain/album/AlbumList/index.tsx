import { ReactComponent as VerticalEllipsis } from '@/assets/vertical-ellipsis.svg';
import { Dropdown, Filter } from '@/domain/_common/components';
import AlbumThumbnail from '@/domain/_common/components/AlbumThumbnail';
import MainTemplate from '@/domain/_common/layouts/MainTemplate';

export default function AlbumList() {
  return (
    <MainTemplate
      title="앨범 목록"
      headerTools={
        <Dropdown>
          <Dropdown.Trigger>
            <VerticalEllipsis className="stroke-black" />
          </Dropdown.Trigger>
          <Dropdown.List>
            <Dropdown.Item>수정</Dropdown.Item>
            <Dropdown.Item className="text-red-500">삭제</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      }
      content={
        <>
          <div className="h-full overflow-y-auto">
            <div className="pt-3 pb-20">
              <ul className="flex flex-wrap gap-y-[10px] px-[27px] justify-between">
                {Array.from({ length: 10 }).map((_, i) => (
                  <AlbumThumbnail key={i} albumName={`${i}번`} memberNum={i} />
                ))}
              </ul>
            </div>
          </div>
          <Filter />
        </>
      }
      showFooter
    />
  );
}
