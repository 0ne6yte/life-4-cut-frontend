import { ReactComponent as CameraIcon } from '@/assets/camera.svg';
import { ReactComponent as GalleryIcon } from '@/assets/gallery.svg';
import { ReactComponent as QrIcon } from '@/assets/qr.svg';
import { Tab } from '@/domain/_common/components';

export default function TabList() {
  const tabArray = [
    { tabName: '카메라', tabIcon: <CameraIcon /> },
    { tabName: '갤러리', tabIcon: <GalleryIcon /> },
    { tabName: 'QR', tabIcon: <QrIcon /> },
  ];

  return (
    <div className="bg-gray-100 p-10">
      <Tab.Group initialIndex={1}>
        <Tab.List className="mb-5">
          {tabArray.map(({ tabName, tabIcon }, index) => (
            <Tab.Pannel key={`${tabName}_${index}`} index={index}>
              {tabName} 에 대한 내용
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
  );
}
