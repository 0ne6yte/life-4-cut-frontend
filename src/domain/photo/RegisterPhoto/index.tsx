import { type ReactNode } from 'react';

import { ReactComponent as CameraIcon } from '@/assets/camera.svg';
import { ReactComponent as GalleryIcon } from '@/assets/gallery.svg';
import { ReactComponent as QrIcon } from '@/assets/qr.svg';
import { BottomTab, Tab } from '@/domain/_common/components';

import ScanQRCode from './ScanQRCode';

interface tabArrayProps {
  tabName: string;
  tabIcon: ReactNode;
  tabPage: ReactNode;
}

export default function RegisterPhoto() {
  const tabArray: tabArrayProps[] = [
    { tabName: '카메라', tabIcon: <CameraIcon />, tabPage: <h1>카메라 페이지</h1> },
    { tabName: '갤러리', tabIcon: <GalleryIcon />, tabPage: <h1>갤러리 페이지</h1> },
    { tabName: 'QR', tabIcon: <QrIcon />, tabPage: <ScanQRCode /> },
  ];

  return (
    <div className="h-full flex flex-col">
      RegisterPhoto 페이지
      <div className="p-10 bg-black-80 rounded-tl-[30px] rounded-tr-[30px] flex-1 flex flex-col items-center gap-5 w-screen">
        <h1 className="text-white font-bold text-[24px]">QR 코드를 스캔하세여</h1>
        <Tab.Group initialIndex={1}>
          <Tab.List className="w-full h-full">
            {tabArray.map(({ tabName, tabPage }, index) => (
              <Tab.Pannel key={`${tabName}_${index}`} index={index} className="w-full h-full">
                {tabPage}
              </Tab.Pannel>
            ))}
          </Tab.List>
          <Tab.List>
            {tabArray.map(({ tabName, tabIcon }, index) => (
              <Tab.Item index={index} key={`${tabName}__${index}`} icon={tabIcon} text={`${tabName}`} />
            ))}
          </Tab.List>
        </Tab.Group>
      </div>
      <BottomTab />
    </div>
  );
}
