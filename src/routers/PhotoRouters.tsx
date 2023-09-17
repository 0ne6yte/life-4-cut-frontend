import { Route, Routes } from 'react-router-dom';

import PhotoList from '@/domain/Photo/PhotoList';
import RegisterPhoto from '@/domain/Photo/RegisterPhoto';

function PhotoRouters() {
  return (
    <Routes>
      <Route index element={<PhotoList />} />
      <Route path={'register'} element={<RegisterPhoto />} />
    </Routes>
  );
}

export default PhotoRouters;
