import { jsx as _jsx } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
export default function DefaultMobileLayout() {
    return (_jsx("main", { className: 'm-auto grid min-h-screen w-full max-w-full grid-rows-header-footer bg-grey-1000 font-pretendard text-grey-300 sm:max-w-lg', children: _jsx(Outlet, {}) }));
}
