import { ReactComponent as ShareIcon } from '@/assets/share.svg';
import { ReactComponent as VerticalEllipsis } from '@/assets/vertical-ellipsis.svg';
import { Avatar, Dropdown } from '@/domain/_common/components';
import MainTemplate from '@/domain/_common/layouts/MainTemplate';
import { AlbumPages } from '@/domain/photo/PhotoList/components/AlbumInsidePages';

export default function PhotoList() {
  return (
    <MainTemplate
      title="사진목록"
      headerTools={
        <div className="flex gap-1.5">
          <Avatar.ProfilePhoto size="small" />
          <Avatar.ProfilePhoto size="small" />
          <Avatar.ProfilePhoto size="small" />
          <ShareIcon className=" fill-grey-placeholder" />
          <Dropdown>
            <Dropdown.Trigger>
              <VerticalEllipsis className="stroke-grey-placeholder fill-grey-placeholder" />
            </Dropdown.Trigger>
            <Dropdown.List>
              <Dropdown.Item>수정하기</Dropdown.Item>
              <Dropdown.Item className="text-red-500">삭제하기</Dropdown.Item>
            </Dropdown.List>
          </Dropdown>
        </div>
      }
      content={
        <AlbumPages>
          <AlbumPages.ThinVertical />
        </AlbumPages>
      }
      showFooter
    />
  );
}
