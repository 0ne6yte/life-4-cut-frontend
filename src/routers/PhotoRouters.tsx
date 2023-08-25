import { Route } from 'react-router-dom';

import PhotoList from '@/domain/Photo/PhotoList';
import RegisterPhoto from '@/domain/Photo/RegisterPhoto';

function PhotoRouters() {
  return (
    <>
      <Route index element={<PhotoList />} />
      <Route path={'register'} element={<RegisterPhoto />} />
    </>
  );
}

export default PhotoRouters;
