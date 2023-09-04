import { Route, Routes } from 'react-router-dom';

import PhotoList from '@/domain/photo/PhotoList';
import RegisterPhoto from '@/domain/photo/RegisterPhoto';

function PhotoRouters() {
  return (
    <Routes>
      <Route index element={<PhotoList />} />
      <Route path={'register'} element={<RegisterPhoto />} />
    </Routes>
  );
}

export default PhotoRouters;
