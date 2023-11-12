import { Outlet } from 'react-router-dom';

export default function DefaultMobileLayout() {
  return (
    <main className={'h-screen bg-white'}>
      <Outlet />
    </main>
  );
}
