import { Outlet } from 'react-router-dom';

export default function DefaultMobileLayout() {
  return (
    <main
      className={
        'm-auto grid min-h-screen w-full max-w-full grid-rows-header-footer bg-white text-grey-300 sm:max-w-lg px-[27px] py-6'
      }
    >
      <Outlet />
    </main>
  );
}
