import { Route, Routes } from 'react-router-dom';
import LoginPage from '../src/domain/login';
import DefaultMobileLayout from './domain/_common/layouts/DefaultMobileLayout';
import './index.css';

function App() {
  return (
    <Routes>
      <Route element={<DefaultMobileLayout />}>
        <Route path={'/'} element={<LoginPage />} />
        <Route path={'/login'} element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default App;
