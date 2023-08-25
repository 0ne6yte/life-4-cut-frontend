import { Route, Routes } from 'react-router-dom';

import AlbumRouters from './routers/AlbumRouters';
import PhotoRouters from './routers/PhotoRouters';

import Login from './domain/Login';
import MyPage from './domain/MyPage';
import AlbumList from './domain/Album/AlbumList';
import EditAlbum from './domain/Album/EditAlbum';
import RegisterAlbum from './domain/Album/RegisterAlbum';
import PhotoList from './domain/Photo/PhotoList';
import RegisterPhoto from './domain/Photo/RegisterPhoto';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/mypage'} element={<MyPage />} />
      <Route path={'/album'} element={<AlbumRouters />}>
        <Route index element={<AlbumList />} />
        <Route path={'edit'} element={<EditAlbum />} />
        <Route path={'register'} element={<RegisterAlbum />} />
      </Route>
      <Route path={'/photo'} element={<PhotoRouters />}>
        <Route index element={<PhotoList />} />
        <Route path={'register'} element={<RegisterPhoto />} />
      </Route>
    </Routes>
  );
}

export default App;
