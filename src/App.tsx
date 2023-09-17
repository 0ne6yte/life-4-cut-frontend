import { Route, Routes } from 'react-router-dom';

import Login from './domain/Login';
import MyPage from './domain/MyPage';
import DefaultMobileLayout from './domain/_common/layouts/DefaultMobileLayout';
import AlbumRouters from './routers/AlbumRouters';
import PhotoRouters from './routers/PhotoRouters';

function App() {
  return (
    <Routes>
      <Route element={<DefaultMobileLayout />}>
        <Route path={'/'} element={<Login />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/my-page'} element={<MyPage />} />
        <Route path={'/album/*'} element={<AlbumRouters />} />
        <Route path={'/photo/*'} element={<PhotoRouters />} />
      </Route>
    </Routes>
  );
}

export default App;
