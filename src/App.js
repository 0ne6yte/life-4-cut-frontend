import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import DefaultMobileLayout from './domain/_common/layouts/DefaultMobileLayout';
import './index.css';
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
    return (_jsx(Routes, { children: _jsxs(Route, { element: _jsx(DefaultMobileLayout, {}), children: [_jsx(Route, { path: '/', element: _jsx(Login, {}) }), _jsx(Route, { path: '/Login', element: _jsx(Login, {}) }), _jsx(Route, { path: '/MyPage', element: _jsx(MyPage, {}) }), _jsxs(Route, { path: '/album', element: _jsx(AlbumRouters, {}), children: [_jsx(Route, { index: true, element: _jsx(AlbumList, {}) }), _jsx(Route, { path: 'edit', element: _jsx(EditAlbum, {}) }), _jsx(Route, { path: 'register', element: _jsx(RegisterAlbum, {}) })] }), _jsxs(Route, { path: '/photo', element: _jsx(PhotoRouters, {}), children: [_jsx(Route, { index: true, element: _jsx(PhotoList, {}) }), _jsx(Route, { path: 'register', element: _jsx(RegisterPhoto, {}) })] })] }) }));
}
export default App;
