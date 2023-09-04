import { Navigate, Route, Routes } from 'react-router-dom';

import AlbumList from '@/domain/album/AlbumList';
import EditAlbum from '@/domain/album/EditAlbum';
import RegisterAlbum from '@/domain/album/RegisterAlbum';

function AlbumRouters() {
  return (
    <Routes>
      <Route index element={<AlbumList />} />
      <Route path={'edit'} element={<EditAlbum />} />
      <Route path={'register'} element={<RegisterAlbum />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AlbumRouters;
