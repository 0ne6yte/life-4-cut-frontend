import { Route, Routes } from 'react-router-dom';

import AlbumRouters from './routers/AlbumRouters';
import PhotoRouters from './routers/PhotoRouters';

import Login from './domain/Login';
import MyPage from './domain/MyPage';

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<Login />} />
      <Route path={'/login'} element={<Login />} />
      <Route path={'/mypage'} element={<MyPage />} />
      <Route path={'/album'} element={<AlbumRouters />} />
      <Route path={'/photo'} element={<PhotoRouters />} />
    </Routes>
  );
}

export default App;
