import { Route, Routes } from 'react-router-dom';
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
      <Route path={'/album'} element={<AlbumList />} />
      <Route path={'/album/edit'} element={<EditAlbum />} />
      <Route path={'/album/register'} element={<RegisterAlbum />} />
      <Route path={'/photo'} element={<PhotoList />} />
      <Route path={'/photo/register'} element={<RegisterPhoto />} />
    </Routes>
  );
}

export default App;
