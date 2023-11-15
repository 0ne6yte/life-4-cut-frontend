import { Route, Routes } from 'react-router-dom';

import DefaultMobileLayout from './domain/_common/layouts/DefaultMobileLayout';
import FullWidthMobileLayout from './domain/_common/layouts/FullWidthMobileLayout';
import Login from './domain/login';
import MyPage from './domain/myPage';
import AlbumRouters from './routers/AlbumRouters';
import PhotoRouters from './routers/PhotoRouters';

function App() {
  return (
    <Routes>
      <Route element={<FullWidthMobileLayout />}>
        <Route path={'/photo/*'} element={<PhotoRouters />} />
      </Route>
      <Route element={<DefaultMobileLayout />}>
        <Route path={'/'} element={<Login />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/my-page'} element={<MyPage />} />
        <Route path={'/album/*'} element={<AlbumRouters />} />
      </Route>
    </Routes>
  );
}

export default App;
