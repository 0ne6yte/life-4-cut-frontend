import { Outlet } from 'react-router-dom';

export default function DefaultMobileLayout() {
  return (
    <main
      className={
        'm-auto grid min-h-screen w-full max-w-full grid-rows-header-footer bg-grey-backgroundfont-pretendard text-grey-300 sm:max-w-lg'
      }
    >
      <Outlet />
    </main>
  );
}
