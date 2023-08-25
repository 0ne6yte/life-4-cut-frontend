import { Route, Routes } from 'react-router-dom';

import AlbumList from '@/domain/Album/AlbumList';
import EditAlbum from '@/domain/Album/EditAlbum';
import RegisterAlbum from '@/domain/Album/RegisterAlbum';

function AlbumRouters() {
  return (
    <Routes>
      <Route index element={<AlbumList />} />
      <Route path={'edit'} element={<EditAlbum />} />
      <Route path={'register'} element={<RegisterAlbum />} />
    </Routes>
  );
}

export default AlbumRouters;
