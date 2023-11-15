import { Route, Routes } from 'react-router-dom';

import PhotoList from '@/domain/photo/PhotoList';
import RegisterPhoto from '@/domain/photo/RegisterPhoto';
import UploadPhoto from '@/domain/photo/UploadPhoto';

function PhotoRouters() {
  return (
    <Routes>
      <Route index element={<PhotoList />} />
      <Route path={'register'} element={<RegisterPhoto />} />
      <Route path={'register/upload'} element={<UploadPhoto />} />
    </Routes>
  );
}

export default PhotoRouters;
