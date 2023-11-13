import { Outlet } from 'react-router-dom';

export default function DefaultMobileLayout() {
  return (
    <main className={'bg-white relative'}>
      <Outlet />
    </main>
  );
}
